import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import getDb from "../../../lib/mongodb";
import { RESERVATION_SUCCESS } from "../../../constants/messages/success-messages";

export async function POST(request) {
  const doc = await request.json();
  let db;
  let object;
  try {
    const db = await getDb();
    const result = await db.collection("reservations").insertOne(doc);
    object = {
      message: { RESERVATION_SUCCESS },
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
