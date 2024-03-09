"use client";

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface ChatBotInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatBotInput: FC<ChatBotInputProps> = ({ className, ...props }) => {
  const [inputMessage, setInputMessage] = useState<string>("");

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className="relative mt-4 mx-2 flex-1 overflow-hidden rounded-md border-none outline-none">
        <TextareaAutosize
          rows={2}
          cols={6}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          autoFocus
          placeholder="Send a message"
          className="peer disabled:opacity-50 p-2 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900
          focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatBotInput;
