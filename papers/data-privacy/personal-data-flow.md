# Personal Data Flow
The only personal information provided to the system is the Student ID (A#) which is used to track student labor.

The Student IDs are hashed and salted before being stored, and are encrypted both in transit and at rest.

The process follows this pattern:

1. Student ID barcode is scanned by a wireless scanner.
2. The A# is sent over an encrypted bluetooth connection to the local server.
3. The server hashes and salts the ID before storing it in an encrypted database.
4. The database is replicated over a secure connection to a server in the cloud.
5. The hashed ID is stored in an encrypted database where it can be accessed by the admin panel.

![Diagram of Data Flow](personal-data-diagram.png)

![Diagram of Hashing Process](security-diagram.png)
