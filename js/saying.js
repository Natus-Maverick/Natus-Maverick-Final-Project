var dictaColor = ''; //
function dowritedicta(num){
 var randid = Math.round(Math.random()*num);
 randid = randid >= num ? num-1 : randid;
 
 document.write('<font color="' + dictaColor + '">' + dictumin[randid] + '<br/>' + '[click to hide]' + '</font>');
}
var dictumin = new Array(
 "Words are like swords. If you use them the wrong way, they can turn into ugly weapons.！！(Detective Conan)",
 "Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.！！(Naruto)",
 "In this world, there are very few people who actually trust each other.！！(Death Note)",
 "A faint clap of thunder, clouded skies; perhaps rain comes. If so, will you stay here with me?！！(The Garden of Words)",
 "Kindness can sometime translate to hostility. ！！(Bakemonogatari)",
 "There's no meaningful difference between a real and a virtual world. It's pointless to ask anyone who they really are. All you can do is accept and believe in them, because whoever they are in your mind, is their true identity. ！！(Sword Art Online)",
 "In our society, letting others find out that you're a nice person is a very risky move. It's extremely likely that someone would take advantage of that. ！！(Bakemonogatari)",
 "It's difficult to change the world on your own, but twisting it a little might not be all that hard. ！！(Bakemonogatari)",
 "People have to save themselves. One person saving another is impossible. ！！(Bakemonogatari)",
 "I am not a friend of justice. I am an enemy of evil. ！！(Bakemonogatari)",
 "The worst part about being strong is that no one ever asks if you're ok.！！(To Aru Majutsu No Index)",
 "Just because I've gotten weaker, it doesn't mean that you've gotten stronger, right? ！！(To Aru Majutsu No Index)",
 "I was wrong, kindness is pointless. ！！(Guilty Crown)",
 "There's something wrong with people who seek reality in fiction.！！(The Melancholy of Haruhi Suzumiya)",
 "We believe that God exists. And he exists because we exist. ！！(The Melancholy of Haruhi Suzumiya)",
 "That's classified information.！！(The Melancholy of Haruhi Suzumiya)",
 "If you forced someone to do something they didn¨t want to do, they¨d just end up hating life.！！(Sakurasou no Pet na Kanojo)",
 "It's more interesting when the future's uncertain.！！(Sakurasou no Pet na Kanojo)",
 "As long as there is at least one person who understands me, I'll be okay.！！(Toradora!)"
); 