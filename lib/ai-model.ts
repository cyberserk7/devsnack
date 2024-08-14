

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Lighthearted",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate 5 random junk food snack recommendations for a developer who is burnt out while writing backend logic. For each recommendation, include the snack name, a detailed reason that connects the developer's mood and the task the coder is doing, a complementary item that pairs well with the snack, and relevant tags. Return the output in JSON format. The results should be a mix of heavy and light snacks with non-vegetarian and vegan options "},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[{\"snack\": \"Spicy Sriracha Ramen Noodles\", \"reason\": \"A spicy kick to wake you up and keep you focused on that complicated backend code. The noodles provide a comforting texture that helps to calm any frustration.\", \"complementary_item\": \"Hard-boiled egg for extra protein\", \"tags\": [\"spicy\", \"savory\", \"non-vegetarian\", \"ramen\", \"noodles\"]}, {\"snack\": \"Chocolate-Covered Pretzels\", \"reason\": \"The sweet and salty combination offers a satisfying reward for tackling those tricky logic puzzles. The crunch helps release stress and the chocolate provides a moment of indulgence.\", \"complementary_item\": \"A cup of hot tea\", \"tags\": [\"sweet\", \"salty\", \"chocolate\", \"pretzels\", \"vegan\"]}, {\"snack\": \"Cheesy Quesadillas\", \"reason\": \"The cheesy goodness is a perfect comfort food when you're feeling overwhelmed. The warm tortilla is soothing and the melted cheese provides a sense of satisfaction.\", \"complementary_item\": \"Salsa and guacamole for a bit of spice and freshness\", \"tags\": [\"savory\", \"cheese\", \"comfort food\", \"non-vegetarian\", \"quesadilla\"]}, {\"snack\": \"Trail Mix with Dried Fruit and Nuts\", \"reason\": \"Provides a sustained energy boost with a healthy mix of carbs, protein, and healthy fats to keep you going. It's also a great option for a quick snack without having to leave your desk.\", \"complementary_item\": \"A glass of water\", \"tags\": [\"healthy\", \"energy boost\", \"trail mix\", \"nuts\", \"vegan\"]}, {\"snack\": \"Peanut Butter and Jelly Sandwich\", \"reason\": \"A classic for a reason. The sweet and salty combination is a surefire way to brighten up your day and provide a quick energy boost. The simplicity of the sandwich is perfect for a moment of calm amidst the complex code.\", \"complementary_item\": \"A cold glass of milk\", \"tags\": [\"comfort food\", \"peanut butter\", \"jelly\", \"sandwich\", \"vegan\"]}]\n\n```"},
        ],
      },
    ],
  });



  



  
    
  
  
 