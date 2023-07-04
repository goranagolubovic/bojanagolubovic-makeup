import PersonalInfos from "@/components/personalInfos";
import React from "react";
import Image from "next/image";
import CertificatesList from "../../features/certificates/certificates-list";
import Carousel from "@/components/carousel";
import myPic from "../../public/bojana.svg";
import { URL } from "@/constants/constants";

const getData = async () => {
  const dataPromise = await fetch(URL + "/api/certificate", {
    cache: "no-store",
  });
  const dataJson = await dataPromise.json();
  return dataJson.images;
};

const AboutMe = async () => {
  const data = await getData();
  const certificates = data.map(({ image }) => image);

  return (
    <div className="mx-10 sm:mx-5 lg:mx-20">
      <div className="flex flex-col sm:flex-row justify-center  items-center sm:justify-start sm:items-start gap-0 sm:gap-0 lg:gap-10">
        <div className="py-5 sm:py-2 lg:py-10 w-1/2 sm:w-full lg:w-1/2 my-5 sm:my-2 lg:my-10 lg:h-[920px] ">
          <Image src={myPic} alt="bojanagolubovic" priority />
        </div>
        <div className="w-full h-[100%]">
          <PersonalInfos />
        </div>
      </div>
      <CertificatesList title="Moji sertifikati">
        <Carousel items={certificates} type="certificatesCarousel" />
      </CertificatesList>
    </div>
  );
};

export default AboutMe;
