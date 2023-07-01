import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../components/button";

const SignInButton = ({ setSession }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      setSession(session);
    }
  }, [session, setSession]);

  return (
    <>
      {session && session.user ? (
        <Button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          text="Odjavi se"
        />
      ) : (
        <Button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          text="Prijavi se"
        />
      )}
    </>
  );
};

export default SignInButton;
