# PoC For k6 loading test for AG Fleets and Partners Management projects. [Good article](https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3)


## Getting started
- `npm i`
- `npm run build:stage` or `npm run build:dev` or `npm run build:prod`
- Create `.env_stage` (or `.env_dev` or `.env_prod`) from `.env_stage.example` file and specify all needed env variables
- Configure k6 by adding required options to `options.ts`. 
- Up monitors
  - [Prometheus](http://localhost:9090)
  - [Grafana](http://localhost:3000)

## Writing own tests
- The test code is located in `src` folder
- The entry points for the tests need to have "test" word in the name to distinguish them from auxiliary files.
- According to k6 rules, there must be `default` export in all test functions to be run throw the k6 framework

