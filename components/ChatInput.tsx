"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  return (
    <div className="text-sm text-gray-300 rounded-lg bg-gray-700/50 ">
      <form className="flex p-5 space-x-5">
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
