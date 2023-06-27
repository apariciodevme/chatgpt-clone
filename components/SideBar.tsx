"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

export const SideBar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen p-2">
      <div className="flex-1">
        <div>
          {/*New chat button */}
          <NewChat />

          <div>{/*Model selection component*/}</div>

          {/*map chat rows*/}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
          alt="user image"
        />
      )}
    </div>
  );
};
