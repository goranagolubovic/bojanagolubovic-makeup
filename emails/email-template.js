import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Link } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { RESERVATION_EMAIL } from "../constants/messages/success-messages";
import { GOOGLE_MAPS_URL, myLocation } from "@/constants/constants";

const EmailTemplate = ({ date, time }) => {
  return (
    <Html>
      <Tailwind>
        <Section className="bg-[#ac97a5]">
          <Container className="mx-auto px-0 py-20 pb-48 w-580">
            <Text className="text-2xl leading-5 font-bold text-gray-700">
              Zdravo! Rezervisali ste termin {date} u {time}
            </Text>
            <Text className="text-base leading-6 text-gray-700">
              {RESERVATION_EMAIL}
            </Text>
            <Link href={`${GOOGLE_MAPS_URL}${myLocation}`}>
              Kliknite ovdje za tačnu lokaciju na google mapi
            </Link>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
