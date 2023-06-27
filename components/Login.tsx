"use client";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

const Login = () => {
  return (
    <div className="bg-[#11A37F] text-center h-screen flex flex-col items-center justify-center">
      <Image
        src={"https://links.papareact.com/2i6"}
        width={300}
        height={300}
        alt="Logo"
      />
      <button
        onClick={() => signIn()}
        className="text-2xl font-semibold text-white animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
