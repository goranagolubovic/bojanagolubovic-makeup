import clientPromise from "../../../lib/mongodb";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";

import { NextResponse } from "next/server";

export async function GET(request) {
  let db;
  try {
    const client = await clientPromise;
    db = client.db("bojanamakeup");
  } catch (error) {
    const errorObject = {
      message: DB_CONNECTION_ERROR,
      status: 500,
    };
    return NextResponse.json(errorObject);
  }
  const data = await db.collection("gift-card").find().toArray();
  const object = {
    giftcards: data,
    status: 200,
  };
  return NextResponse.json(object);
}
