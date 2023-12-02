# TrailBlaze API

## Introduction
The TrailBlaze API is the server-side component of the TrailBlaze app, handling data storage and retrieval for user's location tracks. It is built to work with MongoDB and facilitates the creation, update, and deletion of travel records.

## System Requirements
To set up and run the TrailBlaze API, you need the following:
- Node.js version 14 or later.
- MongoDB version 4.0 or later.
- ngrok for creating a secure tunnel to localhost.

## Installation and Setup

### Clone the API Repository
Clone the TrailBlaze API repository to your local machine:
```bash
git clone https://github.com/hoxhaava/trailblaze-server.git
```

### Install Dependencies
Navigate to the API directory and install the necessary npm packages.

### Start MongoDB
Ensure that MongoDB is running on your system.

### Start ngrok
Use ngrok to expose your local server to the internet:
```bash
ngrok http 3000
```

### Start the API Server
Run the development server with the following command:
```bash
npm run dev
```
Note the HTTPS URL provided by ngrok, as it will be used to configure the React Native app's connection to this API.

---

The TrailBlaze API is now set up and ready to handle requests from the mobile app.
