import PersonalInfos from "@/components/personalInfos";
import PersonalPhoto from "@/components/personalphoto";
import React from "react";
import Image from "next/image";
import CertificatesList from "../features/certificates/certificates-list";
import Carousel from "@/components/carousel";

const AboutMe = () => {
  const certificates = [
    "/Rectangle5.svg",
    "/Rectangle6.svg",
    "/Rectangle7.svg",
    "/ines_jarak_certificate.jpg",
    "/tamara_stojanovic_certificate.jpg",
  ];
  return (
    <div className="mx-10 sm:mx-5 lg:mx-20">
      <div className="flex flex-col sm:flex-row justify-center  items-center sm:justify-start sm:items-start gap-0 sm:gap-0 lg:gap-10">
        {/* <PersonalPhoto className="py-10 mx-20 sm:py-5 sm:mx-10 lg:py-10 lg:mx-20" /> */}
        <div className="py-5 sm:py-2 lg:py-10 w-1/2 sm:w-full lg:w-1/2 my-5 sm:my-2 lg:my-10 ">
          <Image src="/bojana.svg" width={390} height={800} />
        </div>
        <PersonalInfos
          containerStyle="flex rounded rounded-[10px] bg-white p-8 sm:p-4 lg:p-40 my-10 sm:my-4 lg:my-20 w-full text-center"
          textStyle="text-purple text-0.5xl sm:text-1xl lg:text-3xl font-bold"
        />
      </div>{" "}
      <CertificatesList
        title="Moji sertifikati"
        certificatesContainerStle="bg-white mb-10  rounded rounded-[10px]  text-purple font-qwigley text-6xl py-10 justify-center items-center flex-col gap-10 w-full text-center "
        titleStyle="mb-20"
      >
        <Carousel items={certificates} />
      </CertificatesList>
    </div>
  );
};

export default AboutMe;
