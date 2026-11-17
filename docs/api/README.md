# System API
API stands for Application Program Interface; it's the beating heart that circulates all the data to where it's supposed to be. This API is written in the Go programming language and almost exclusively communicates in HTTP messages composed in JSON.

## Project Overview
The code for the API is primarily split into four different modules:

- [**Harvest**](harvest): Stores and handles data regarding the planting and harvesting of crops.
- [**Labor**](labor): Tracks time spent on different projects and handles related requests.
- [**Sales**](sales): Integrates with POS systems and future E-Commerce storefronts.
- [**Util**](util): Stores utility functions used by the other modules, including database connections and authentication processes.

### Execution Modes
The API has two execution modes: production and development. There are several differences between them:

- **Production Mode**: 
    - Uses `configs/config.yaml` for settings
    - Requires SOPS to set secret variables
    - Only accepts requests from localhost
    - Conservative logging
- **Development Mode**:
    - Uses `configs/config-dev.yaml` for settings
    - Accepts all requests
    - Liberal CORS policy
    - Verbose logs for debugging

Development is the default mode. To run in production mode the `PRODUCTION` environmental variable must have a positive value, e.g. `true`
