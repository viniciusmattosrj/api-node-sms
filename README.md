[![pipeline status](https://github.com/viniciusmattosrj/api-node-sms/badges/releaseCandidate/pipeline.svg)](https://github.com/viniciusmattosrj/api-node-sms/commits/releaseCandidate)

## Requerimentos

- Docker e docker-compose ou NVM
- Node &ge; 12.13.*
- Npm ou Yarn
- Totalvoice

### Tecnologias Utilizadas

* Axios
* Code style: ESLint
* Jest
* Mongo
* Rest

### Sobre

Esse projeto ? base de estudo para melhor compreens?o na pr?tica dos conceitos de consumo de APIs rest e disparo do SMS.

Veja `.env.example` as [instru??es](docs/installation.md) sobre as vari?veis de ambiente.

? poss?vel importar as `.collections` atrav?s do [collections](docs/collections.json).

Mais informa??es da API da [Total Voice(zenvia)](https://totalvoice.github.io/totalvoice-docs/#codigos-http) 


### Instala??o

Para instala??o verifique **[installation documentation](docs/installation.md)**.

### D?bitos T?cnicos / Pr?ximos Desafios

- [ ] Conectar ao mongo para persiste os envios realizados
- [ ] Incluir um docker-compose.example.yml
- [ ] Implementar testes unit?rios Jest
- [ ] Refatorar o c?digo