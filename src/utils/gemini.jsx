import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_GEMINI_API_KEY
);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default genAI;
