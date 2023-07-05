import PersonalInfos from "@/components/personalInfos";
import React from "react";
import Image from "next/image";
import CertificatesList from "../../features/certificates/certificates-list";
import Carousel from "@/components/carousel";
import myPic from "../../public/bojana.svg";
import { URL } from "@/constants/constants";

const getData = async () => {
  const dataPromise = await fetch(URL + "/api/certificate");
  const dataJson = await dataPromise.json();
  return dataJson.images;
};

const AboutMe = async () => {
  const data = await getData();
  const certificates = data.map(({ image }) => image);

  return (
    <div className="mx-10 sm:mx-5 lg:mx-20">
      <div className="flex  flex-col  sm:flex-col lg:flex-row justify-center items-center  gap-4">
        <div className=" flex justify-center  py-5 sm:py-5 lg:py-20  w-1/2  items-center ">
          <Image
            src={myPic}
            alt="bojanagolubovic"
            priority
            sizes="100vw"
            style={{ width: "65%", height: "auto" }}
          />
        </div>
        <div className="w-full ">
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
