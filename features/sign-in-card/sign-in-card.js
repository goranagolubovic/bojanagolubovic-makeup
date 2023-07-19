"use client";
import SignInButton from "@/components/sign-in-button";
import { signIn } from "next-auth/react";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignInCard = () => {
  const [session, setSession] = useState();
  const router = useRouter();

  useEffect(() => {
    // if (session) router.push("/about-me");
  }, [session]);

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="  text-brown font-roboto  flex flex-col justify-center items-center">
        <p className="text-2xl sm:text-2xl lg:text-2xl pt-10 pb-10 sm:pb-10 lg:pb-20 text-white">
          *Napomena: Neke akcije su dostupne samo prijavljenim korisnicima.
          Prijavite se putem svog Google računa.
        </p>
        <SignInButton icon="/google.png" setSession={setSession} />
      </div>
    </div>
  );
};

export default SignInCard;
