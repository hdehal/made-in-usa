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
const credential = new UserApiKeyCredential(process.env.REACT_APP_STITCH_API_KEY)

// Define db and collection -- READ
var isAuthed = false;
var collection = null;
export const item = () => { 
  return new Promise((resolve, reject) => { 
    if(isAuthed) { resolve(collection); } 
    else { 
      Stitch.defaultAppClient.auth.loginWithCredential(credential)
      .then(authedId => { isAuthed = true; collection = mongoClient.db("vendor").collection("vendor-item"); resolve(collection); })
      .catch(err => reject(err));
    }
  });
};

// Define db and collection -- WRITE and DELETE
export const itemModify = mongoClient.db("vendor").collection("vendor-item");
