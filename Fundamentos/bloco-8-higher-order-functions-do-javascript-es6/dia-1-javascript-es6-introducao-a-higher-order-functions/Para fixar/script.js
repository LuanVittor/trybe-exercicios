const wakeUp = () => 'Acordando!!';
const coffe = () => 'Bora tomar cafe!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffe);
doingThings(sleep);
