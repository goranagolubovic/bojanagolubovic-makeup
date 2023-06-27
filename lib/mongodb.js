import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://goranagolubovic:gIXiccqpA9TpGYyG@cluster0.iyhv3jz.mongodb.net/";
const options = {};

let client;
let clientPromise;
client = new MongoClient(uri, options);
clientPromise = client.connect();

export default async function getDb() {
  try {
    await clientPromise;
    return client.db("bojanamakeup");
  } catch (error) {
    throw new Error(DB_CONNECTION_ERROR);
  }
}
