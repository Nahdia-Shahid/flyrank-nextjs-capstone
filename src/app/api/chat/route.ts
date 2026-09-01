import { convertToModelMessages, streamText } from "ai";

import { chatModel, systemPrompt } from "@/lib/ai";
import { scoreLead } from "@/lib/ai/tools";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: chatModel,
    system: systemPrompt,
    messages: await convertToModelMessages(messages),

    tools: {
      scoreLead,
    },
  });

  return result.toUIMessageStreamResponse();
}