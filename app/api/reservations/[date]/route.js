import { NextResponse } from "next/server";
import { DB_CONNECTION_ERROR } from "../../../../constants/messages/error-messages";
import getDb from "../../../../lib/mongodb";

export async function GET(request, context) {
  let db;
  try {
    db = await getDb();
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
