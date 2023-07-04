const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder().setName("embed").setDescription("show an embed"),
    async execute(client, interaction) {
        const embed = new EmbedBuilder()
            .setTitle("I'm an Embed")
            .addFields({ name: '123', value: '456', inline: true})
            .setThumbnail('https://camp.csie.cool/static/media/Logo.8475c9701c39dbbc3e52.png')
            .setImage('https://camp.csie.cool/static/media/Logo.8475c9701c39dbbc3e52.png')
            .setTimestamp();
            
        interaction.reply({ embeds: [embed] });
    },
};
/*
.setURL('放URL')
.setAuthor({ name: '', iconURL: '放URL', url: '放URL' })
.setDescription('')
.setThumbnail('放URL')
.addFields({ name: '', value: '', inline: true or false })
.setImage('放URL')
.setTimestamp()
.setFooter({ text: '', iconURL: '放URL' });
*/
