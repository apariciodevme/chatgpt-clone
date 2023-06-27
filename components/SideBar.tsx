"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import ChatRow from "./ChatRow";

export const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session?.user?.email!, "chats")
  );

  return (
    <div className="flex flex-col min-h-screen p-2">
      <div className="flex-1">
        <div>
          {/*New chat button */}
          <NewChat />

          <div>{/*Model selection component*/}</div>

          {/*map chat rows*/}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id}/>
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          className="w-12 h-12 mx-auto mb-4 rounded-full cursor-pointer hover:opacity-50"
          alt="user image"
        />
      )}
    </div>
  );
};
