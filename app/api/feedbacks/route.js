import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import getDb from "../../../lib/mongodb";
import { POST_SUCCESS } from "@/constants/messages/success-messages";

export async function GET(request) {
  try {
    const db = await getDb();
    const data = await db.collection("feedbacks").find().toArray();
    const object = {
      feedbacks: data,
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
  const session = await getServerSession(request, authOptions);
  if (session) {
    const doc = await request.json();
    let db;
    let object;
    try {
      const db = await getDb();
      const result = await db.collection("feedbacks").insertOne(doc);
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
  } else {
    object = {
      message: { NOT_SIGNED_IN },
      status: 500,
    };
  }
  return NextResponse.json(object);
}
