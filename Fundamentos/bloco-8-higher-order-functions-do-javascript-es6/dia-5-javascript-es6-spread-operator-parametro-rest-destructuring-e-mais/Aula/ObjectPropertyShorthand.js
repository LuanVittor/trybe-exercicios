// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

const getPositionShort = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPositionShort(-19.8157, -43.9542));

