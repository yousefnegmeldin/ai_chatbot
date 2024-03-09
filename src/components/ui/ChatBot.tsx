import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotInput from "./ChatBotInput";

const ChatBot: FC = ({}) => {
  return (
    <Accordion type="single" collapsible className="relative z-40 shadow-2xl">
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-400 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-8 border-b border-blue-600">
              <ChatBotHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-96">
                Messages
                <ChatBotInput />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ChatBot;
