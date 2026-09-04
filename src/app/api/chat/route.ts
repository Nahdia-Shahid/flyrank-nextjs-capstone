import { convertToModelMessages, streamText } from "ai";

import { chatModel, systemPrompt } from "@/lib/ai";
import { scoreLead } from "@/lib/ai/tools";

export const maxDuration = 30;

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_TOTAL_LENGTH = 12000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body?.messages;

    // Prevent oversized or malformed requests.
    if (!Array.isArray(messages)) {
      return Response.json(
        { error: "Invalid messages payload." },
        { status: 400 }
      );
    }

    if (messages.length === 0) {
      return Response.json(
        { error: "At least one message is required." },
        { status: 400 }
      );
    }

    if (messages.length > MAX_MESSAGES) {
      return Response.json(
        { error: "Conversation is too long." },
        { status: 400 }
      );
    }

    let totalLength = 0;

    for (const message of messages) {
      const text =
        typeof message?.content === "string"
          ? message.content
          : Array.isArray(message?.parts)
            ? message.parts
                .filter((part: unknown) => {
                  return (
                    typeof part === "object" &&
                    part !== null &&
                    "type" in part &&
                    "text" in part &&
                    (part as { type?: unknown }).type === "text"
                  );
                })
                .map((part: unknown) => {
                  return String(
                    (part as { text?: unknown }).text ?? ""
                  );
                })
                .join("")
            : "";

      if (text.length > MAX_MESSAGE_LENGTH) {
        return Response.json(
          { error: "Message is too long." },
          { status: 400 }
        );
      }

      totalLength += text.length;
    }

    if (totalLength > MAX_TOTAL_LENGTH) {
      return Response.json(
        { error: "Conversation payload is too large." },
        { status: 400 }
      );
    }

    const result = streamText({
      model: chatModel,
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
      tools: {
        scoreLead,
      },
    });

    return result.toUIMessageStreamResponse();
  } catch {
    return Response.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}