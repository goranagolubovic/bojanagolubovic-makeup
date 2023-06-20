import clientPromise from "../../../../lib/mongodb";
import { DB_CONNECTION_ERROR } from "../../../../constants/messages/error-messages";

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
  console.log(context.params.date);
  const data = await db.collection("reservations").find().toArray();
  const filteredData = data.filter(
    (item) =>
      item.hasOwnProperty(context.params.date) && item.isReserved === true
  );

  const object = {
    reservations: filteredData,
    status: 200,
  };

  return NextResponse.json(object);
}
