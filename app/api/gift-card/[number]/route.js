import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../../constants/messages/error-messages";
import getDb from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, context) {
  try {
    const db = await getDb();
    const data = await db.collection("gift-card").find().toArray();
    const filteredData = data.filter((elem) =>
      elem._id.equals(new ObjectId(context.params.number))
    );
    const object = {
      giftcard: filteredData,
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
