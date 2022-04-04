class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  connectedTo: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    console.log(`Buying TV ${brand}`);
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(`ligando a tv da marca ${this.brand}`)
  }
}

const tv1 = new Tv('LG', 85, 2160, ['hdmi', 'vga'])
console.log(tv1.connections);
tv1.turnOn()

