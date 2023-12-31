import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import getDb from "../../../lib/mongodb";
import { POST_SUCCESS } from "@/constants/messages/success-messages";

export async function GET(request) {
  try {
    const req = await request.json();

    const collection = req.admin === true ? "buyed-gift-cards" : "gift-card";
    const db = await getDb();
    const data = await db.collection(collection).find().toArray();
    const object = {
      giftcards: data,
      status: 200,
    };
    return NextResponse.json(object);
  } catch (error) {
    const errorObject = {
      message: DB_CONNECTION_ERROR,
      status: 500,
    };
    return NextResponse.json(errorObject);
  }
}

export async function POST(request) {
  const doc = await request.json();
  console.log(JSON.stringify(doc));
  let db;
  let object;
  try {
    db = await getDb();
    const result = await db.collection("buyed-gift-cards").insertOne(doc);
    object = {
      message: { POST_SUCCESS },
      status: 200,
    };
  } catch (error) {
    object = {
      message: { DB_CONNECTION_ERROR },
      status: 500,
    };
  }

  return NextResponse.json(object);
}
