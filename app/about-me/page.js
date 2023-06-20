import PersonalInfos from "@/components/personalInfos";
import React from "react";
import Image from "next/image";
import CertificatesList from "../../features/certificates/certificates-list";
import Carousel from "@/components/carousel";

const AboutMe = () => {
  const certificates = [
    "/Rectangle5.svg",
    "/ines_jarak_certificate.jpg",
    "/tamara_stojanovic_certificate.jpg",
    "/ines_jarak_certificate.jpg",
    "/ines_jarak_certificate.jpg",
  ];
  return (
    <div className="mx-10 sm:mx-5 lg:mx-20">
      <div className="flex flex-col sm:flex-row justify-center  items-center sm:justify-start sm:items-start gap-0 sm:gap-0 lg:gap-10">
        {/* <PersonalPhoto className="py-10 mx-20 sm:py-5 sm:mx-10 lg:py-10 lg:mx-20" /> */}
        <div className="py-5 sm:py-2 lg:py-10 w-1/2 sm:w-full lg:w-1/2 my-5 sm:my-2 lg:my-10 ">
          <Image
            src="/bojana.svg"
            width={390}
            height={800}
            alt="bojanagolubovic"
          />
        </div>
        <PersonalInfos />
      </div>
      <CertificatesList title="Moji sertifikati">
        <Carousel items={certificates} />
      </CertificatesList>
    </div>
  );
};

export default AboutMe;
