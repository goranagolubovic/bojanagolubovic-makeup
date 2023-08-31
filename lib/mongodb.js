import { MongoClient } from "mongodb";
import { DB_CONNECTION_ERROR } from "@/constants/messages/error-messages";

const uri = "mongodb://admin:adminpass@localhost:27017";
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
