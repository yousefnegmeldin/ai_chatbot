import { FC } from "react";

const ChatBotHeader: FC = ({}) => {
  return (
    <div className="w-full flex gap-3 justify-start items-center">
      <div className="flex items-center text-md">
        <p>Chat With The Bot</p>
        <div>
          <p className="bg-green-600 rounded-full h-2 w-2 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default ChatBotHeader;
