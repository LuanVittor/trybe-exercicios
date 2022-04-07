import fs from 'fs/promises';
import { randomUUID } from 'crypto';
import path from 'path';

interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

enum FileType {
  plants,
  opsInfo
}

// callbacks
const plantsNeedsSunCb = (id: string) => (plant: IPlant) => {
  const needsSunById = (plant.needsSun === true) && plant.id === id;
  const specialCare = plant.specialCare === undefined || plant.specialCare.waterFrequency > 2;

  if (needsSunById && specialCare) return true;
  return false;
};

// Plants Class
class Plants {
  private PLANTS_PATH = path.join(__dirname, 'plants.json');

  private OPS_INFO_PATH = path.join(__dirname, 'opsInfo.json');

  private async updateOpsInfo(incrementAmount: number = 1) {
    const opsInfoRaw = await fs.readFile(this.OPS_INFO_PATH, { encoding: 'utf8' });
    const opsInfo: IOpsInfo = JSON.parse(opsInfoRaw);
    opsInfo.createdPlants += incrementAmount;
    this.saveFile(FileType.opsInfo, opsInfo);
  }

  private async saveFile(type: FileType, data: IPlant[] | IOpsInfo) {
    let filePath: string;
    if (type === FileType.plants) filePath = this.PLANTS_PATH;
    else if (type === FileType.opsInfo) filePath = this.OPS_INFO_PATH;
    else return null;

    await fs.writeFile(filePath, JSON.stringify(data));
  }

  private initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  public async getPlants() {
    const plantsRaw = await fs.readFile(this.PLANTS_PATH, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  public async getPlantById(id: string) {
    const plants = await this.getPlants();

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(id: string) {
    const plants = await this.getPlants();

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    this.saveFile(FileType.plants, newPlants);

    await this.updateOpsInfo(-1);

    return removedPlant;
  }

  public async getPlantsThatNeedsSunWithId(id: string) {
    const plants = await this.getPlants();

    const filteredPlants = plants.filter(plantsNeedsSunCb(id));
    return filteredPlants;
  }

  public async editPlant(plantId: string, newPlant: IPlant) {
    const plants = await this.getPlants();

    const updatedPlants = plants.map((plant) => (
      (plant.id === plantId) ? { ...newPlant, id: plant.id } : plant));

    this.saveFile(FileType.plants, updatedPlants);
    return newPlant;
  }

  public async savePlant(plant: IPlant) {
    const plants = await this.getPlants();

    const newPlant = this.initPlant({ ...plant, id: randomUUID() });
    plants.push(newPlant);
    this.saveFile(FileType.plants, plants);

    await this.updateOpsInfo(1);

    return newPlant;
  }
}

export default Plants;