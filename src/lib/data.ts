import { grammarTopics1 } from "@/data/grammar1";
import { grammarTopics2 } from "@/data/grammar2";
import type { GrammarTopic } from "@/data/types";

export { words } from "@/data/words";
export { readingPassages } from "@/data/reading";
export { listeningTracks } from "@/data/listening";
export { clozePassages } from "@/data/cloze";
export { writingPrompts } from "@/data/writing";

export const grammarTopics: GrammarTopic[] = [...grammarTopics1, ...grammarTopics2];

export function topicById(id: string): GrammarTopic | undefined {
  return grammarTopics.find((t) => t.id === id);
}
