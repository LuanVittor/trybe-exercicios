const Cep = require('../models/Cep');
const  api  = require('../models/reqApi');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (cepBuscado) => {
  if (!CEP_REGEX.test(cepBuscado)) {
    return {
      status: 400,
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
  const cep = await Cep.findAddressByCep(cepBuscado);

  if (cep) {
    return cep;
  }

  const ApiCep = await api.lookupCep(cepBuscado)

  if (!ApiCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await Cep.findAddressByCep(cep);
  if (existingCep && existingCep !== null) {
    return {
      status: 409,
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};


module.exports = {
  findAddressByCep,
  create,
};