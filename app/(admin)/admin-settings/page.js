"use client";
import GallerySettings from "@/features/gallery-settings/gallery-settings";
import GiftCardSettings from "@/features/gift-card-settings/gift-card-settings";
import ScheduleSettings from "@/features/schedule-settings/schedule-settings";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Error from "@/features/error/error";

const AdminSettings = () => {
  const [galleryReady, setGalleryReady] = useState(false);
  const [giftCardsReady, setGiftCardsReady] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-center items-center">
      {/* {session && session.user.email === "bojanagolubovic.makeup@gmail.com" && ( */}
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">
          <div className="w-[90%] sm:w-[90%] md:[w-50%] lg:w-[50%] h-[50%]">
            <GiftCardSettings
              title="Kupljeni poklon bonovi"
              giftCardsReady={giftCardsReady}
              setGiftCardsReady={setGiftCardsReady}
            />
          </div>
          <div className="w-[90%] sm:w-[90%] md:[w-50%]  lg:w-[48%] h-[40%] lg:h-[50%]">
            <GallerySettings
              title="Galerija"
              galleryReady={galleryReady}
              setGalleryReady={setGalleryReady}
            />
          </div>
        </div>
        <ScheduleSettings title="Rezervisani termini" />
      </div>
      {/* // ) : (
      //   <div>
      //     <Error message="Nemate pravo pristupa ovoj stranici" />
      //   </div>
      //)} */}
    </div>
  );
};

export default AdminSettings;
