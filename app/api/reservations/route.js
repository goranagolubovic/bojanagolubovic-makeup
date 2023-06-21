import clientPromise from "../../../lib/mongodb";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import { NextResponse } from "next/server";
import { RESERVATION_SUCCESS } from "@/constants/messages/success-messages";

export async function POST(request) {
  const doc = await request.json();
  let db;
  let object;
  try {
    const client = await clientPromise;
    db = client.db("bojanamakeup");
  } catch (error) {
    object = {
      message: DB_CONNECTION_ERROR,
      status: 500,
    };
  }
  const result = await db.collection("reservations").insertOne(doc);
  object = {
    message: { RESERVATION_SUCCESS },
    status: 200,
  };
  return NextResponse.json(object);
}
