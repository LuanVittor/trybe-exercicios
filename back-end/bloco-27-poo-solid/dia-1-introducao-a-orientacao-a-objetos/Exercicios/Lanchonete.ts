
class Client {
    private _name: string = String();

    constructor(name: string) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }

        this._name = value;
    }
}

class OrderItem {
    private _name: string = String();
    private _price: number = Number();

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }

        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) throw new Error('O preço deve ser positivo.');

        this._price = value;
    }
}

class Order {
    private _client: Client;
    private _items: OrderItem[] = [];
    private _paymentMethod: string;
    private _discount: number = 0;

    constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
        this._client = client;
        this.items = items;
        this._paymentMethod = paymentMethod;
        this.discount = discount;
    }

    get client(): Client {
        return this._client;
    }

    set client(value: Client) {
        this._client = value;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    set items(value: OrderItem[]) {
        if (value.length === 0) {
            throw new Error('O pedido deve ter pelo meno um item.');
        }

        this._items = value;
    }

    get paymentMethod(): string {
        return this._paymentMethod;
    }

    set paymentMethod(value: string) {
        this._paymentMethod = value;
    }

    get discount(): number {
        return this._discount;
    }

    set discount(value: number) {
        if (value < 0) {
            throw new Error('O disconto não pode ser um valor negatívo.');
        }
        this._discount = value;
    }
}

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);