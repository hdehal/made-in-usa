import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

// Define MongoDB Stitch App ID
export const APP_ID = "miusa-gxhmx";

// Initialize MongoDB Stitch
export const app = Stitch.hasAppClient(APP_ID)
    ? Stitch.getAppClient(APP_ID)
    : Stitch.initializeAppClient(APP_ID);

// Define client/factory
export const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );  

// Define db and collection
export const item = mongoClient.db("vendor").collection("vendor-item");