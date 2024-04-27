const axios = require('axios');

const Prefixes = [
  '/ai',
  'Heaven',
  'romeo',
  '+ai',
  'baby',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝗸𝗼𝘂𝗮𝗱𝗶𝗼 𝗴𝗿𝗲𝗽\n\n je t'ecoute péri");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `☃️𝗽𝗮𝘀 𝗺𝗼𝗻 𝗽𝗿𝗼𝗵𝗲𝗺𝗲⛄ 
______________________________  
${answer}
ℰ⋆‿⋆ℰ 🍫ℒᎾUℐЅℰ🍫`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
