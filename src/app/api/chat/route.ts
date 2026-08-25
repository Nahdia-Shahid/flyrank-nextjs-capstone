import { streamText, convertToModelMessages } from "ai";
import { chatModel, systemPrompt } from "@/lib/ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: chatModel,
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}