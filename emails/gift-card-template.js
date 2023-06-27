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
  FROM,
  TO,
} from "@/constants/messages/success-messages";

const GiftCardTemplate = ({ imagePath, serialNumber, from, to }) => {
  return (
    <Html>
      <Tailwind>
        <Section className="w-full flex flex-col justify-center items-center bg-gray-100 gap-[10px] text-center m-8 p-8">
          <Text className="font-bold text-[#ac97a5]">
            {FROM}: {from}
          </Text>
          <Text className="font-bold pb-8 text-[#ac97a5]">
            {TO}: {to}
          </Text>
          <Text className="text-[#ac97a5]">{GIFT_CARD_EMAIL}</Text>
          <Text className="text-[#ac97a5]">{GIFT_CARD_IMPORTANT_NOTE}</Text>
          <Text className="font-bold text-[#ac97a5]">
            {SERIAL_NUMBER} {serialNumber}
          </Text>
          <Container className="w-full flex flex-col justify-center items-center">
            <Img src={imagePath} alt={serialNumber} width={480} height={250} />
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
};

export default GiftCardTemplate;
