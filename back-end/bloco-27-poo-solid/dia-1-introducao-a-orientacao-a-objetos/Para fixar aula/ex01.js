var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        console.log("Buying TV ".concat(brand));
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("ligando a tv da marca ".concat(this._brand));
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (this._connections.includes(value)) {
                this._connectedTo = value;
                console.log(this._connectedTo);
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var tv1 = new Tv('LG', 85, 2160, ['hdmi', 'vga']);
// console.log(tv1.connections);
tv1.turnOn();
tv1.connectedTo = 'hdmi';
console.log('Connected to: ', tv1.connectedTo);
