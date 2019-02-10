export const environment = {
  production: true,
  version: require('../../package.json').version,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '9000',
    endpoints: {
      people: '/api/people',
      person: '/api/person/:id',
      randomPerson: '/api/people/random'
    }
  }
};
