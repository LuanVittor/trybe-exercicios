const connection = require('./connection');

// regex para cep
const CEP_REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});

const findAddressByCep = async (cepBuscado) => {
  const treatedCep = cepBuscado.replace('-', '');

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));
  if (!result) return null;
  
  return getNewCep(result);
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf }
}

module.exports = {
  findAddressByCep,
  create,
};