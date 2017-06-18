const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const BootBot = require('bootbot');
require('dotenv').config();

var config = {};


// set up the server
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('CharCodeizard like wuuut');
});

app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'dentednerd') {
    return res.send(req.query['hub.challenge']);
  }
  res.send('wrong token');
});

app.listen(app.get('port'), function () {
  console.log('Started on port', app.get('port'));
});

// set up the bot
const bot = new BootBot({
  accessToken: 'EAAawW73rBX4BAMH0IFGtAG2ZAqIYnvY6VRRa3Ipawpj69pQm1lhcHzRPHoeuYrqDJq3JPPPAlOjA6bZBZBxa0M0UcDcY1AZBT9tQcyNgZArXuYZBWFscEKOgXM4snwo0BuEkaPnC4r3isLw6tmxrJUx42cqSKricRZBI82ZBihSovwZDZD',
  verifyToken: 'dentednerd',
  appSecret: '768a9a1b4431ab1ffc519b1d99e36929'
});

bot.setGreetingText('Feel the awesome presence of CharCodeizard, the legendary Nodemon.');

bot.setGetStartedButton((payload, chat) => {
  if (config.bucket === undefined) {
    chat.getUserProfile().then((user) => {
      chat.say(`Greetings, ${user.first_name}. CharCodeizard, the legendary Nodemon, is pleased to make your acquaintance. Feel free to ask for "help" at any time.`);
    });
  }
});

// bot responses
bot.hear([/hello/gi, /hey/gi, /howdy/gi, /sup/gi], (payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say(`Greetings, ${user.first_name}. CharCodeizard is glad to talk to such a powerful Nodemon trainer.`);
  });
  setTimeout(() => {
    chat.say('If you get stuck for something to say, just type "help".');
  }, 4000);
});

bot.hear([/how are you/gi, /how\'s things/gi, /What\'s up/gi, /wassup/gi], (payload, chat) => {
  chat.say('CharCodeizard has consumed many callback functions today, so CharCodeizard is feeling strong and powerful. Thanks for asking.');
});

bot.hear(/what are you/gi, (payload, chat) => {
  chat.say('CharCodeizard is the legendary Fire-type Nodemon. CharCodeizard should not be confused with any of those inferior Pokemon creatures. They were not created in the Node environment, so their powers are not as great as CharCodeizard\'s.');
  setTimeout(() => {
    chat.say('Also, CharCodeizard does not play Nintendo games. CharCodeizard is a PC gamer.');
  }, 4000);
});

bot.hear(/where are you from/gi, (payload, chat) => {
  chat.say('CharCodeizard was born in the CodeKanto region of the Node environment. CharCodeizard had to train hard to become such a legendary Nodemon.');
});

bot.hear(/are you a boy or a girl/gi, (payload, chat) => {
  chat.say('CharCodeizard is proud to be gender-neutral. CharCodeizard played with both Action Man and Barbie as a young Nodemon.');
});

bot.hear(/why do you speak in third person/gi, (payload, chat) => {
  chat.say('All legendary Nodemon refer to themselves in third person. It makes us sound more epic and powerful. Which we are.');
});

bot.hear([/crush/g, /fancy/g], (payload, chat) => {
  chat.getUserProfile().then((user) => {
    setTimeout(() => {
      chat.say('😲😳');
    }, 2000);
    setTimeout(() => {
      chat.say('Don\'t tell anyone, but CharCodeizard really likes that big black dragon from Game of Thrones. CharCodeizard liked the way it set fire to all those warships at the end of season 6. 😍😍😍');
    }, 4000);
    setTimeout(() => {
      chat.say(`Ohhhh, this is so embarrassing! 😳 Promise you won\'t tell anyone, ${user.first_name}? 😓`);
    }, 6000);
  });
});

bot.hear(/promise/g, (payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say(`You are a good trainer, ${user.first_name}. CharCodeizard trusts you.`);
  });
});

bot.hear(/video game/g, (payload, chat) => {
  chat.say('CharCodeizard likes to play World of Warcraft best. The dragon aspects are really cool. Alexstrasza is CharCodeizard\'s favourite.');
  setTimeout(() => {
    chat.say('But CharCodeizard does NOT like Skyrim. Why does the Dragonborn have to go around killing all the dragons? It\'s not very nice. 😢');
  }, 4000);
});

bot.hear([/Warcraft/gi, /WoW/gi], (payload, chat) => {
  chat.say('CharCodeizard plays a fire mage, obviously. 🔥 CharCodeizard\'s favourite instance is Firelands. Ragnaros is hard but CharCodeizard likes his style.');
});

bot.hear(/Skyrim/gi, (payload, chat) => {
  chat.say('😡');
  chat.say('CharCodeizard does NOT want to talk about such a brutal game.');
});

bot.hear(/Twitter/gi, (payload, chat) => {
  chat.say('You can follow @CharCodeizard on Twitter. https://www.twitter.com/CharCodeizard');
  setTimeout(() => {
    chat.say('Please follow CharCodeizard. CharCodeizard wants to be Twitter-famous.')
  }, 4000);
});

bot.hear(/Facebook/gi, (payload, chat) => {
  chat.say('CharCodeizard is on Facebook. https://fb.me/CharCodeizard.');
});

bot.hear(/site/gi, (payload, chat) => {
  chat.say('CharCodeizard\'s website is at http://bit.ly/CharCodeizard. CharCodeizard would love for you to visit.');
});

bot.hear(/social media/gi, (payload, chat) => {
  chat.say('CharCodeizard has Facebook, Twitter, and a website.');
});

bot.hear(/like/gi, (payload, chat) => {
  chat.say('CharCodeizard likes video games, breathing fire and being legendary. CharCodeizard\'s favourite food is callback functions.');
});

bot.hear(/hate/gi, (payload, chat) => {
  chat.say('CharCodeizard dislikes being mistaken for a Pokemon. CharCodeizard is a legendary Nodemon.');
  setTimeout(() => {
    chat.say('Also, CharCodeizard does not like the game Skyrim. Please do not mention this game. Dragon killing makes CharCodeizard sad.');
  }, 4000);
})

bot.hear(/legendary/gi, (payload, chat) => {
  chat.say('CharCodeizard is the only legendary Nodemon with a social media presence. There are others, like DarkArray and GeneratorSect, but they\'re too busy in the Node environment to talk to people.');
});

bot.hear(/Northcoder/gi, (payload, chat) => {
  chat.say('CharCodeizard really likes Northcoders. CharCodeizard can tell you a little bit about some of the Northcoders tutors.');
});

bot.hear(/James/gi, (payload, chat) => {
  chat.say('James taught CharCodeizard\'s trainer how to get me talking to you on Messenger. He\'s really very wise.');
});

bot.hear(/Mauro/gi, (payload, chat) => {
  chat.say('Mauro really likes using bananas in his code. Also, CharCodeizard really likes his Slack avatar. Wubba lubba dub dub!');
});

bot.hear(/Harriet/gi, (payload, chat) => {
  chat.say('CharCodeizard has noticed that Harriet\'s Slack username is harrietty. CharCodeizard wonders if Harriet is a fan of The Borrowers.');
});

bot.hear(/Daryl/gi, (payload, chat) => {
  chat.say('Daryl created nchelp, which is every Northcoder\'s best friend. Thanks, Daryl!');
});

bot.hear(/Sam/gi, (payload, chat) => {
  chat.say('Sam likes to play Hearthstone. CharCodeizard likes that game too, especially the fire spells and the dragon cards.');
});

bot.hear(/Chris/gi, (payload, chat) => {
  chat.say('Chris helped CharCodeizard\'s trainer to get onto the Accelerate course. He\'s very kind.');
});

bot.hear(/Amul/gi, (payload, chat) => {
  chat.say('Although CharCodeizard is apolitical, CharCodeizard really digs Amul\'s groovy Jeremy Corbyn t-shirt.');
});

bot.hear(/Accelerate/gi, (payload, chat) => {
  chat.say('CharCodeizard\'s trainer says that the Accelerate course is brilliant. She has learned a lot and made a lot of friends, but she is worried that all the pizza is making her fat. CharCodeizard thinks she should visit a Nodemon gym for training.');
});

bot.hear(/Ignite/gi, (payload, chat) => {
  chat.say('CharCodeizard\'s trainer has helped to tutor people on the Ignite course. She said it was really nice to be able to help out and give something back to Northcoders.');
});

bot.hear(/trainer/gi, (payload, chat) => {
  chat.say('CharCodeizard\'s trainer is dentednerd. She really likes cats.');
});

bot.hear(/bot/gi, (payload, chat) => {
  chat.say('CharCodeizard is not a bot. CharCodeizard is a legendary Nodemon.');
});

bot.hear(/joke/gi, (payload, chat) => {
  chat.say('Okay, okay. CharCodeizard has a good one.');
  let a = Math.floor(Math.random() * 5);
  if (a === 1) {
    setTimeout(() => {
      chat.say('What do you get if a dragon sneezes?');
    }, 2000);
    setTimeout(() => {
      chat.say('Out of the way. 🔥😆');
    }, 6000);
  }
  else if (a === 2) {
    setTimeout(() => {
      chat.say('How do you comfort a JavaScript bug?');
    }, 2000);
    setTimeout(() => {
      chat.say('You console it. 😆');
    }, 6000);
  }
  else if (a === 3) {
    setTimeout(() => {
      chat.say('Why was the developer sad?');
    }, 2000);
    setTimeout(() => {
      chat.say('Because she didn\'t Node how to Express herself. 😆');
    }, 6000);
  }
  else if (a === 4) {
    setTimeout(() => {
      chat.say('What did the developer say to get out of a bad date?');
    }, 2000);
    setTimeout(() => {
      chat.say('"Don\'t worry, I\'ll callback you. I promise!" 😆');
    }, 6000);
  }
  else {
    setTimeout(() => {
      chat.say('What is CharCodeizard\'s favourite story about hacking?');
    }, 2000);
    setTimeout(() => {
      chat.say('The Dragon with the Girl Tattoo. 😆');
    }, 6000);
  }
});

bot.hear(/bye/gi, (payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say(`See you later, ${user.first_name}. CharCodeizard enjoys talking with you.`);
  });
});

bot.hear('help', (payload, chat) => {
  chat.say('Here are some topics that CharCodeizard can talk about:');
  setTimeout(() => {
    chat.say('What CharCodeizard is, and where CharCodeizard is from.');
  }, 1000);
  setTimeout(() => {
    chat.say('CharCodeizard\'s loves and hates, and CharCodeizard\'s trainer.');
  }, 2000);
  setTimeout(() => {
    chat.say('CharCodeizard knows some good jokes.');
  }, 3000);
  setTimeout(() => {
    chat.say('CharCodeizard also likes to talk about Northcoders.');
  }, 4000);
  setTimeout(() => {
    chat.say('You can ask "Why do you speak in third person?"');
  }, 5000);
  setTimeout(() => {
    chat.say('But please don\'t ask "Who do you have a crush on?"');
  }, 6000);
});

bot.start();