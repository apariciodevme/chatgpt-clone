"use client";
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();


  // use SWR to get model
  const model = "text-davinci-model";







  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    )
    
    
    // Toast notif loading
    const notification = toast.loading('ChatGPT is thinking...')

    
    
    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        prompt: input, chatId, model, session
      }),

    }).then(
      () => {
        //toast notif to say succesfull
        toast.success('ChatGPT response', {
          id: notification,
        })
      }
    )
  };

  return (
    <div className="text-sm text-gray-300 rounded-lg bg-gray-700/50 ">
      <form onSubmit={sendMessage} className="flex p-5 space-x-5">
        <input
          className="flex-1 bg-transparent outline-none disabled:cursor-not-allowed disabled:text-gray-300 focus:outline-none "
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="type yout pwtompt here"
        />

        <button
          className="bg-[#11A37FF2] rounded disabled:cursor-not-allowed px-4 py-2 text-white disabled:bg-gray-400 font-bold hover:opacity-50"
          disabled={!prompt || !session}
          type="submit"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
        </button>
      </form>

      <div>{/*Model Selection*/}</div>
    </div>
  );
};

export default ChatInput;
