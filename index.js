const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const settings = require('./settings.json');

client.on('ready', () => {
  console.log("I'm up and ready for action!");
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "chat").sendMessage(member.toString() + "Welcome to <@223479761316478976>'s server");
  memeber.create.role("Guests!")
  member.addRole(member.guild.roles.find("name", "Guests!"));
});

require('String.prototype.startsWith');

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      return this.substr(position || 0, searchString.length) === searchString;
  };
}

let prefix = '!'
client.on('message', msg => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;

  var interval = setInterval (function () {
    msg.delete()
   }, 1200 * 1000);

  if(msg.content.startsWith(''))
    var interval = setInterval (function () {
      msg.channel.send('All messages have been deleted due to 20 minutes of inactivity');
    }, 1205 * 1000);

  if(msg.content === prefix + 'ping') {
    msg.reply('pong');
  }

  if(msg.content === prefix + 'poll') {
    msg.reply('To create a poll just go on to the link provided below then get the link of the poll and paste it into a discord chat!');
    msg.reply('https://www.poll-maker.com');
  }

  if(msg.content === prefix + 'the creator') {
    msg.reply('I was created by <@223479761316478976>');
  }

  if(msg.content === prefix + 'help') {
    msg.reply("!ping = bot reply's with pong.");
    msg.reply('!poll = click the link to create a poll and then paste the poll vote link into chat so people can vote!');
    msg.reply('!the creator = tells you who made me!');
    msg.reply('!8ball = ask any yes or no question to get a randomly generated answer!');
    msg.reply('!coinflip = Flip a coin to see if you get heads or tails!');
    msg.reply('!rps rock/paper/scissors = play rock paper scissors with the me!');
    msg.reply('!meme beta = get a randomly generated meme!');
    msg.reply('!no gen = get a randomly generated number between 1-100');
}

function rock() {
    var rand = ['rock, oh we tied :/', 'paper, yay i won! :)', 'scissors, oh I lost :('];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
  if(msg.content === prefix + "rps rock") 
{
    msg.reply(rock());
}

  function paper() {
    var rand = ['rock, oh I lost :(', 'paper, oh we tied :/', 'scissors, yay i won! :)'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
  if(msg.content === prefix + "rps paper")
{
    msg.reply(paper());
  }

  function scissors() {
    var rand = ['rock, yay i won! :)', 'paper, oh I lost :(', 'scissors, oh we tied :/'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
  if(msg.content === prefix + "rps scissors")
{
    msg.reply(scissors());
  }

  function flip() {
    var rand = ['It landed on heads!', 'It landed on tails!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
  if(msg.content === prefix + "coinflip")
{
    msg.reply(flip());
  }

  function Magicball() {
    var rand = ['Yes', 'No', 'Maybe', 'Probably', 'Do you even english???', 'Are you insane?!', 'Who asks that type of question???', 'What do you think?', 'Definitely', 'Absoulutely', '99.9% chance of happening', 'Hmm...', 'Let me think...', "I'm sorry but that will NEVER HAPPEN!!!", 'Error 341780000000643734167067176767543265467546785781657678617671467456546756656567536545357645434482438346643786457845647436457643764367643643634643763748748373276474367865568765451566356164364636436436643546354354364567346353575463543656735651625365654354365643564567345365463546354635674536546354635465673546735436546354635463546532643652765364256356745365462546356189545465463564539445213950326537467613471634317674671364745376176476734673676471647326436746376471647364716781637836716471632716473126743167423637642174082316708643178246370634763708647123647821346378046781676475676613576194'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
if(msg.content.startsWith('!8ball'))
{
  msg.reply(Magicball());
}

function memebeta() {
  var rand = ['https://media1.giphy.com/media/ehc19YLR4Ptbq/200_s.gif', 'https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/eb/7f/e8/eb7fe8d158e12f465553acc62966c435--funny-trump-memes-hilarious-donald-oconnor.jpg', 'https://static.superdeluxe.com/dankland/generators/is-this-meme-racist-full.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/64/6b/5d/646b5d938ecede17451063bcca8a97bb.jpg', 'https://i.redd.it/53h1l3kyti8y.png', 'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-hilarious.jpg', 'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-pics.jpg', 'http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-famous.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/1e/87/4e/1e874e55e9185e30fb1dedfc01cab0f8.jpg', 'http://quotesnhumor.com/wp-content/uploads/2016/04/30-Funniest-Memes-23-Funny-Memes.jpg'];

  return rand[Math.floor(Math.random()*rand.length)];
}

//Later in the code:
  if(msg.content === prefix +('meme beta'))
  {
    msg.reply(memebeta());
  }

  function NumberGenerator() {
    var rand = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83' , '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
  if(msg.content === prefix + "no gen")
{
    msg.reply(NumberGenerator());
  }
});

client.login(settings.token);

