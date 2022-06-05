export const TextService = {
  limitText(text: string, lenghtMax: number): string {
    if (text.length < lenghtMax) {
      return text;
    }
    return text.slice(0, lenghtMax) + "...";
  },
};
