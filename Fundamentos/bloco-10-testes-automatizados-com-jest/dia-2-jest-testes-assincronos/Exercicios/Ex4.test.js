const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('verifica se', () => {
  it('sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram', () => {
    const repo = 'https://api.github.com/orgs/tryber/repos'
    return getRepos(repo).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list')
      expect(result).toContain('sd-01-week4-5-project-meme-generator')
    })
  })
})