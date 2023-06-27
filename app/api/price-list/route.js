import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import getDb from "../../../lib/mongodb";

export async function GET(request) {
  try {
    const db = await getDb();
    const data = await db.collection("prices").find().toArray();
    const object = {
      prices: data,
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
