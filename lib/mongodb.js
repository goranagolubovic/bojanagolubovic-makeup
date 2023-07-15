import { MongoClient } from "mongodb";

// const uri = "mongodb://localhost:27017";

// let cachedClient = null;

// export default async function getDb() {
//   if (cachedClient) {
//     return cachedClient;
//   }

//   const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//   const db = client.db("bojanamakeup");

//   cachedClient = client;

//   return db;
// }
const uri =
  "mongodb+srv://goranagolubovic:rCzY8wVDD3ARVDEt@cluster0.iyhv3jz.mongodb.net/";
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
