import React, { useEffect } from "react";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import Button from "./button";

const SignInButton = ({ setSession, icon }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      setSession(session);
    }
  }, [session, setSession]);

  const handleSignIn = async () => {
    const session = await signIn("google");
    if (session && session.user) {
      setSession(session);
    }
  };

  return (
    <>
      {session && session.user ? (
        <Button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          text="Odjavi se"
          icon={icon}
        />
      ) : (
        <Button onClick={handleSignIn} text="Prijavi se" icon={icon} />
      )}
    </>
  );
};

export default SignInButton;
