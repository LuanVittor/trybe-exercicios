var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        console.log("Buying TV ".concat(brand));
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("ligando a tv da marca ".concat(this.brand));
    };
    return Tv;
}());
var tv1 = new Tv('LG', 85, 2160, ['hdmi', 'vga']);
console.log(tv1.connections);
tv1.turnOn();
