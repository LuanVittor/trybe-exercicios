import { IVehicle } from "./interfaces";

export default class AirPlane implements IVehicle {
  drive(): void {
    throw new Error("I don't drive");
  }

  fly(): void {
    console.log("Fly a airplane");
  }
}