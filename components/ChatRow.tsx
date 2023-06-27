"use client";

import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type ScriptProps = {
  id: string;
};

const ChatRow = ({ id }: ScriptProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = useSession();

  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
      <ChatBubbleLeftIcon className="w-5 h-5" />
      <p className="flex-1 hidden truncate md:inline-flex">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New chat"}
      </p>
      <TrashIcon className="w-5 h-5 text-gray-700 hover:text-red-500" />
    </Link>
  );
};

export default ChatRow;
