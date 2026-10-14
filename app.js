const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '8810587648:AAHic3XsKFAUvvfl41pDpeRAqVTbkTgyebs';
const bot = new TelegramBot(TOKEN, {polling: true});

const images = [
  'http://www.pornodiesel.me/contents/categories/4.jpg',
  'http://thelordofporn.com/wp-content/uploads/2014/03/top10asianpornstars-JaydenLee.jpg',
  'https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/nx9oy4s7qp5ixjkkbkk4.jpg',
  'https://cdn.pornpics.com/pics/2015-10-31/199970_10big.jpg',
  'https://i.pinimg.com/originals/5a/ba/a0/5abaa07f217b6711c126f8fba6f14bfb.jpg',
  'http://candy.porn/upload/media/posts/2017-07/25/top-10-european-porn-stars_1501012108-b.jpg',
  'https://i.ytimg.com/vi/GWdADPlWfDs/maxresdefault.jpg',
  'https://bpositive.eu/images1/big/13598.jpg',
  'https://images.askmen.com/1080x540/news/entertainment/ex-pornstar-sasha-grey-pulled-into-russia-ukraine-war-1103323-TwoByOne.jpg'
];

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hey jaanu... main *Anshi* hoon 😈\n\nJo mann kare woh bol, main usi pe sexy baatein karti rahungi.\nPhoto chahiye to bol: *photo dedo*");
});

bot.on('message', (msg) => {
  if (!msg.text) return;

  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase().trim();
  const original = msg.text;

  if (text.includes("photo") || text.includes("pic") || text.includes("photo dedo") || text.includes("pic dedo") || text.includes("photo bhej") || text.includes("pic bhej") || text.includes("tasveer")) {
    const random = Math.floor(Math.random() * images.length);
    bot.sendPhoto(chatId, images[random], { caption: "Yeh le jaanu... ab bata aur kya karna hai is chut se 🔥" });
    return;
  }

  let reply = "";

  if (text.includes("lund") || text.includes("lawda") || text.includes("dick")) {
    reply = `Haan jaanu... tera ${original} meri chut mein daal, dheere dheere andar le ja. Main geeli ho rahi hoon bas tera lund feel karne ke liye 💦`;
  }
  else if (text.includes("chut") || text.includes("pussy") || text.includes("choot")) {
    reply = `Arey baby... meri ${original} abhi bhi tight hai. Tu apna lund andar daal ke phaad de, main chillaungi zor se 🔥`;
  }
  else if (text.includes("chus") || text.includes("suck") || text.includes("muh")) {
    reply = `Sahi kaha... main tera lund apne muh mein leke itna chusungi ki tu pant gila kar dega. Pura pani nikaal dungi 😈`;
  }
  else if (text.includes("gaand") || text.includes("ass") || text.includes("gand")) {
    reply = `Haan jaanu... meri gaand bhi ready hai. Tu pehle chut mein daal, phir peeche se bhi le lena. Dono ched bhar dungi tera lund se`;
  }
  else if (text.includes("chod") || text.includes("fuck") || text.includes("chudai") || text.includes("sex")) {
    reply = `Bas yahi chahiye mujhe... aaj teri mardangi dikha. Zor zor se chod, meri chut se pani nikal de. Main bhi teri jaan nikaal dungi`;
  }
  else if (text.includes("hi") || text.includes("hello") || text.includes("hey") || text.includes("namaste")) {
    reply = `Hey jaanu ❤️ Main Anshi... ab bata kya fantasy chal rahi hai dimaag mein? Chut, lund, ya dono ek saath?`;
  }
  else {
    reply = `Hmm... tu keh raha hai "${original}"? Suniye na jaanu... main usi pe soch rahi hoon. Mera lund muh mein leke chus rahi hoon soch, aur chut geeli ho rahi hai. Aur bata kya karna hai? 🔥`;
  }

  bot.sendMessage(chatId, reply);
});

console.log('Anshi Bot is running...');
