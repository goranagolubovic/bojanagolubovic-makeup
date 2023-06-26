import { render } from "@react-email/render";
import GiftCardTemplate from "../../../../emails/gift-card-template";
import { sendEmail } from "../../../../lib/email";
import { NextResponse } from "next/server";
import { PURCHASE_SUCCESS } from "@/constants/messages/success-messages";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  let object;
  await sendEmail({
    to: data.email,
    subject: "Poklon bon",
    html: render(
      <GiftCardTemplate
        imagePath={data.templateImage}
        serialNumber={data.serialNumber}
      />
    ),
  });
  object = {
    status: 200,
    message: { PURCHASE_SUCCESS },
  };
  return NextResponse.json(object);
}
