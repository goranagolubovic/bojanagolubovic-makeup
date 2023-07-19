import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../constants/messages/error-messages";
import getDb from "../../../lib/mongodb";
import { RESERVATION_SUCCESS } from "../../../constants/messages/success-messages";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const data = await db.collection("reservations").find().toArray();
    const object = {
      reservations: data,
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

export async function PUT(request) {
  let doc = await request.json();
  console.log(doc);
  let db;
  let object;
  try {
    db = await getDb();

    const data = await db.collection("reservations").find().toArray();
    var filteredData = data.filter((elem) => {
      return elem._id.equals(doc._id);
    });

    filteredData[0].isReserved = false;
    const result = await db
      .collection("reservations")
      .updateOne(
        { _id: new ObjectId(filteredData[0]._id) },
        { $set: filteredData[0] }
      );

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
