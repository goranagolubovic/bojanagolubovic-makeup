"use client";
import WelcomeQuote from "../features/welcome-quote/welcome-quote";
import Intro from "../features/intro/intro";
import SignInButton from "@/components/sign-in-button";

export default async function Home() {
  return (
    <div>
      <WelcomeQuote />
      {/* <SignInButton /> */}
      <Intro />
    </div>
  );
}
