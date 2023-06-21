import { render } from "@react-email/render";
import EmailTemplate from "../../../emails/email-template";
import { sendEmail } from "../../../lib/email";
import { NextResponse } from "next/server";
import { EMAIL_SEND } from "@/constants/messages/success-messages";

export async function POST(request) {
  const data = await request.json();
  let object;
  await sendEmail({
    to: data.email,
    subject: "Rezervacija termina",
    html: render(<EmailTemplate date={data.datum} time={data.vrijeme} />),
  });
  object = {
    status: 200,
    message: { EMAIL_SEND },
  };
  return NextResponse.json(object);
}
