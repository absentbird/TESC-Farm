# Data Flow
Data is sent from sensors, scanners, and scales to the Raspberry Pi server in the wash station. As data is collected the records are replicated to the cloud, where requests are handled.

Records recorded in this way follow a basic flow:

1. Data sent to Pi (e.g. a student scans their student ID)
2. The API processes the data and updates the database
3. A request is sent to the cloud server to mirror the changes

As data is processed it moves through layers of network infrastructure:

1. Local Intranet: data is collected and processed in an isolated intranet network on the farm. This network is hosted and administered by the Raspberry Pi server.
2. Wireless Bridge: requests to the cloud travel up the wireless bridge to the internet. The wireless bridge uses a VLAN on the campus network to reach the cloud.
3. Cloud Server: requests from users are routed to the cloud server where a copy of the data is maintained.


