# PoC For k6 loading test for AG Fleets and Partners Management projects. [Good article](https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3)


## Getting started
- `git clone https://gitlab.uklon.com.ua/uklon/web/test/uklon.web.loadtestingtool.git`
- `npm i`
- `npm run build:stage` or `npm run build:dev` or `npm run build:prod`
- Create `.env_stage` (or `.env_dev` or `.env_prod`) from `.env_stage.example` file and specify all needed env variables
- Configure k6 by adding required options to `options.ts`. 
- Up monitors locally (Prometheus+Grafana) `npm run monitors`
  - [Prometheus](http://localhost:9090)
  - [Grafana](http://localhost:3000)
- Run a test:
  - local `npm run test-drivers:local`
  - locally with monitors `npm run test-drivers:docker`

## Writing own tests
- The test code is located in `src` folder
- The entry points for the tests need to have "test" word in the name to distinguish them from auxiliary files.
- According to k6 rules, there must be `default` export in all test functions to be run throw the k6 framework

## Grafana and Prometheus (docker)
- `npm run monitors`
- Staging [Grafana DashBoard](https://monitoring.staging.uklon.net/d/RhaFRt97z/loading-tests?orgId=1&refresh=10s) 

## Be aware of using Uklon VPN with docker
- Get VPN DNS with using `scutil --dns | grep 'nameserver\[[0-9]*\]')`
- Set it to DNS to service k6 docker-compose file

## Argocd
 - AD Group: `AWS-Argocd-STG-Develop-Loadtesting`

## TODO
- [x] Migrate to Prometheus 
- [x] Puck to Docker (local docker-compose)
- [x] Move GitRepo to new: Create task to devops https://gitlab.uklon.com.ua/uklon/web/test/uklon.web.loadtestingtool/-/pipelines
- [x] Integrate with gitlab-ci
- [x] Prometheus | influx credentials
- [x] Grafana Create Dashboard
- [x] Error handling
- [x] Type annotations
- [x] Get rid of conditions to check valid data (like `if (driversCollection.items?.length > 0)`)
- [ ] Setup test citi and fill in data
- [ ] Implement Smoke Tests
- [ ] Separate Load and Smoke Tests
