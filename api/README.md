# farmapi Project
API stands for Application Program Interface; it's the beating heart that circulates all the data to where it's supposed to be. This API is written in the Go programming language and almost exclusively communicates in HTTP messages composed in JSON.

## Project Overview
The code for the API is primarily split into four different modules:

- **Harvest**: Stores and handles data regarding the planting and harvesting of crops.
- **Labor**: Tracks time spent on different projects and handles related requests.
- **Sales**: Integrates with POS systems and future E-Commerce storefronts.
- **Util**: Stores utility functions used by the other modules, including database connections and authentication processes.

## Directory Structure
The project is structured in accordance with best practices outlined in the [Go Standards: Project Layout document](https://github.com/golang-standards/project-layout)

- `assets`: stores static files referenced by the application, e.g. sqlite database files.
- `cmd`: stores code that can be executed, anything with a `main()` function.
- `configs`: stores text files used in the configuration of the application as well as connected services (e.g. nginx), configs used for testing and development will have `dev` in their filename.
- `init`: service and initiation scripts used to call and maintain the application in production.
- `internal`: container directory for modules: harvest, labor, sales, util. Most code is in here.
- `tools`: extra helper scripts and scraps.

## Compiling
To recreate the binary `farmapi` file from source code run `make`. You must have the Go programming language installed.

## Execution
Simply run the `farmapi` executable to start the API. It will use settings from the `configs` directory.

To execute the source code directly, e.g. during testing and development, you can use: `go run cmd/farmapi.go`

### Execution Modes
The API has two execution modes: production and development. There are several differences between them:

- **Production Mode**: 
    - Uses `configs/config.yml` for settings
    - Only accepts requests from localhost
    - Conservative logging
- **Development Mode**:
    - Uses `configs/config-dev.yml` for settings
    - Accepts all requests
    - Liberal CORS policy
    - Verbose logs for debugging

Development is the default mode. To run in production mode the `PRODUCTION` environmental variable must have a positive value, e.g. `true`
