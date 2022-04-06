class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    console.log(`comprando TV ${brand}`);
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`ligando a tv da marca ${this._brand}`)
  }
  
  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('conexao nao exite');
    }
  }
}

const tv1 = new Tv('LG', 85, 2160, ['hdmi', 'vga'])
// console.log(tv1.connections);
tv1.turnOn()
tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);

