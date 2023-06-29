import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  return (
    <div>
      <div className="flex max-w-2xl p-4 mx-auto space-x-5">
        <img src={message.user.avatar} alt="user profile picture" className="w-8 h-8 rounded-lg" />
        <p className="pt-2 text-sm font-medium text-gray-400">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
