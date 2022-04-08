// import CepService from './CepService';

// async function main() {
//   const cepSvc = new CepService();

//   console.log('get address by cep', '->', await cepSvc.addressByCep('xx.xxx-xx', 10));
//   console.log('get cep by address', '->', await cepSvc.cepByAdress('street foo, between bar and baz', 10));
// }

// main();

import CepService from "./CepService";
import FooCepAPI from "./FooCepAPI";

async function main() {
  const cepSvc = new CepService(new FooCepAPI());

  console.log(
    "get address by cep",
    "->",
    await cepSvc.addressByCep("xx.xxx-xx", 10)
  );
  console.log(
    "get cep by address",
    "->",
    await cepSvc.cepByAdress("street foo, between bar and baz", 10)
  );
}

main();