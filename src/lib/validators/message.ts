import { z } from "zod";

export const messageSchema = z.object({
  id: z.string(),
  isInputFromUser: z.boolean(),
  text: z.string(),
});

//array validation , passing array to the backend to chatgpt so it has context

export const MessageArraySchema = z.array(messageSchema);

export type Message = z.infer<typeof messageSchema>;
