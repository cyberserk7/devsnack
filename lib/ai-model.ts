

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Lighthearted and warm",
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
          {text: "Generate 5 junk food meal and snack recommendations for a developer who is burned out while writing backend logic. For each recommendation, include the snack name, a detailed reason that connects the developer's mood and the task the coder is doing and also motivates the coder to push through, a complementary item that pairs well with the snack, and relevant tags. Return the output in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[{\"snack_name\": \"Pizza Rolls\", \"reason\": \"Feeling burnt out on backend logic? Pizza rolls are like tiny, comforting explosions of cheesy, savory goodness. They're simple, satisfying, and a quick pick-me-up that'll help you refocus and tackle those code challenges. Remember, even the most complex systems are built from small, manageable pieces, just like these little rolls of joy.\", \"complementary_item\": \"Marinara Sauce\", \"tags\": [\"comfort food\", \"savory\", \"quick\", \"easy\"]}, {\"snack_name\": \"Popcorn Chicken\", \"reason\": \"Feeling overwhelmed by the sheer amount of code? This crunchy, juicy snack is the perfect way to break up the monotony of typing away. Each bite is a little burst of flavor and fun, just like conquering a particularly tricky bug.  So go ahead, grab a handful, and celebrate those small victories.\", \"complementary_item\": \"Honey Mustard Sauce\", \"tags\": [\"crunchy\", \"savory\", \"fun\", \"easy\"]}, {\"snack_name\": \"Chocolate Chip Cookies\", \"reason\": \"Hitting a wall with your code? Sometimes you just need a little something sweet to boost your mood.  Chocolate chip cookies are the ultimate comfort food, reminding you that even in the face of complex problems, there's always a solution to be found.  Take a bite, savor the sweetness, and get back to conquering those code challenges.\", \"complementary_item\": \"Cold Milk\", \"tags\": [\"sweet\", \"comfort food\", \"classic\", \"easy\"]}, {\"snack_name\": \"Fruit Snacks\", \"reason\": \"Feeling sluggish and uninspired? These chewy, fruity snacks are a great way to get a quick energy boost without feeling weighed down.  Just like each line of code you write builds towards a larger, working system, these little snacks add up to a satisfying, healthy treat.  So grab a handful and keep building!\", \"complementary_item\": \"Water\", \"tags\": [\"fruity\", \"healthy\", \"energizing\", \"easy\"]}, {\"snack_name\": \"Ice Cream\", \"reason\": \"Feeling frustrated with a particularly tricky bug?  Sometimes you just need to cool down and let go.  Ice cream is the perfect way to do just that - it's refreshing, creamy, and utterly delicious.  Take a scoop, chill out, and come back to your code with a fresh perspective.\", \"complementary_item\": \"Chocolate Syrup\", \"tags\": [\"sweet\", \"creamy\", \"cooling\", \"indulgent\"]}]\n\n```"},
        ],
      },
    ],
  });



  



  
    
  
  
 