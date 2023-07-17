import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import getDb from "../../../lib/mongodb";
import {
  IMAGE_SUCCESS,
  DELETE_SUCCESS,
} from "@/constants/messages/success-messages";
import { ObjectId } from "mongodb";

export async function GET(request) {
  try {
    const db = await getDb();
    const data = await db.collection("gallery").find().toArray();
    const object = {
      pictures: data,
      status: 200,
    };
    return NextResponse.json(object);
  } catch (error) {
    console.log(error);
    const errorObject = {
      message: DB_CONNECTION_ERROR,
      status: 500,
    };
    return NextResponse.json(errorObject);
  }
}

export async function POST(request) {
  const doc = await request.json();
  let object;
  try {
    const db = await getDb();
    const result = await db.collection("gallery").insertOne(doc);
    object = {
      message: { IMAGE_SUCCESS },
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

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  let object;
  try {
    const db = await getDb();
    const result = await db
      .collection("gallery")
      .deleteOne({ _id: new ObjectId(id) });
    object = {
      message: { DELETE_SUCCESS },
      status: 200,
    };
  } catch (error) {
    object = {
      message: { DB_CONNECTION_ERROR },
      status: 500,
    };
  }
  console.log(JSON.stringify(object));
  return NextResponse.json(object);
}
