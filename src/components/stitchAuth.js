import { Stitch, RemoteMongoClient, UserApiKeyCredential } from 'mongodb-stitch-browser-sdk';

// Define MongoDB Stitch App ID
export const APP_ID = "miusa-gxhmx";

// Initialize MongoDB Stitch
export const app = Stitch.hasAppClient(APP_ID)
    ? Stitch.getAppClient(APP_ID)
    : Stitch.initializeDefaultAppClient(APP_ID);
    // OR for anonymous login use:
    // Stitch.initializeAppClient(APP_ID); 

// Define client/factory
export const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );

// API authentication
// https://stitch.mongodb.com > (your app) > Users > Providers > API Key (On) && Users > Add
// This API key has DB read-write access only, DB delete functionality is disabled, all entries will be queued to be approved by the admin
const credential = new UserApiKeyCredential('V6LG4GfuM1tHrCA9XCHprjF2TqBzcEgZbXdr6TRPwwz3NYLzlR5Y6sGZ55vIyDmf')

// Define db and collection
var isAuthed = false;
var collection = null;
export const item = async () => { 
  await new Promise((resolve, reject) => { 
    if(isAuthed) { resolve(collection); } 
    else { 
      Stitch.defaultAppClient.auth.loginWithCredential(credential)
      .then(authedId => { isAuthed = true; collection = mongoClient.db("vendor").collection("vendor-item"); resolve(collection); })
      .catch(err => reject(err));
    }
  });
};
