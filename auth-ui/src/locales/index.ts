import tr from "@/locales/tr/messages.json";
import en from "@/locales/en/messages.json";
import { UiText } from "@ory/client";
  export function translateMessage(
    uiText: UiText | undefined
  ): string {
    if (!uiText) {
        return "Bilinmeyen!";
    }
    
    const messages = tr[uiText.id as unknown as keyof typeof tr] ?? "Bilinmeyen!";
    const response = messages.replace(/{(\w+)}/g, (_, k) => String(uiText.context?.[k as keyof typeof uiText.context] ?? `{${k}}`));
    return response;
  }