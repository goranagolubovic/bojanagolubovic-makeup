import React from "react";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";
import {
  GIFT_CARD_EMAIL,
  GIFT_CARD_IMPORTANT_NOTE,
  SERIAL_NUMBER,
} from "@/constants/messages/success-messages";

const GiftCardTemplate = ({ imagePath, serialNumber }) => {
  return (
    <Html>
      <Tailwind>
        <Section className="w-full flex justify-center items-center bg-gray-100 mx-[50px] my-[20px]">
          <Container className="w-[100%] flex flex-col justify-center items-center gap-[10px] text-center">
            <Text>{GIFT_CARD_EMAIL}</Text>
            <Text>{GIFT_CARD_IMPORTANT_NOTE}</Text>
            <Text className="font-bold">
              {SERIAL_NUMBER} {serialNumber}
            </Text>
            <Img src={imagePath} alt={serialNumber} width={400} height={250} />
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
};

export default GiftCardTemplate;
