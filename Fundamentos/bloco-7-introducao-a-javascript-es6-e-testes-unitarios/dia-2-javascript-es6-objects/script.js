const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const deliveryPerson = order.order.delivery.deliveryPerson;
const cliente = order.name
const tel = order.phoneNumber
const rua = order.address.street
const numero = order.address.number
const ap = order.address.apartment


const customerInfo = (order) => {
  console.log(`Olá ${deliveryPerson}, entrega para: ${cliente}, Telefone: ${tel}, R. ${rua}, N: ${numero}, AP: ${ap}`)
}

customerInfo(order);

const orderModifier = (order) => {
  const newperson = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza)
  const bebida = order.order.drinks.coke.type
  const total = order.payment.total = '50,00'
  console.log(`Olá ${newperson}, o total do seu pedido de ${pizza} e ${bebida} eh R$${total}`)
}

orderModifier(order);