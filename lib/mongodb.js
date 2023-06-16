import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://goranagolubovic:gIXiccqpA9TpGYyG@cluster0.iyhv3jz.mongodb.net/";
const options = {};

let client;
let clientPromise;
client = new MongoClient(uri, options);
clientPromise = client.connect();
export default clientPromise;
