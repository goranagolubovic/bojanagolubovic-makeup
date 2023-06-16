import { MongoClient } from "mongodb";
import { DB_CONNECTION_ERROR } from "./contants/messages/error-messages";

const connectionError = {
  status: 500,
  message: DB_CONNECTION_ERROR,
};

export const connectToDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://goranagolubovic:gIXiccqpA9TpGYyG@cluster0.iyhv3jz.mongodb.net/"
  );

  const db = client.db("bojanamakeup");
  return db;
};

export const getDataFromCollection = async (collection) => {
  let db;
  try {
    db = await connectToDB();
  } catch (error) {
    return connectionError;
  }
  const data = await db.collection(collection).find().toArray();
  return data;
};
