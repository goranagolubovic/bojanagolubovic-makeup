"use client";
import WelcomeQuote from "./features/welcome-quote/welcome-quote";
import Intro from "./features/intro/intro";

export default async function Home() {
  return (
    <div>
      <WelcomeQuote />
      <Intro />
    </div>
  );
}
