import clientPromise from "../../../../lib/mongodb";
import { DB_CONNECTION_ERROR } from "@/app/contants/messages/error-messages";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";

export async function GET(request, context) {
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
  const filteredData = data.filter((elem) =>
    elem._id.equals(new ObjectId(context.params.id))
  );
  const object = {
    giftcard: filteredData,
    status: 200,
  };
  return NextResponse.json(object);
}
