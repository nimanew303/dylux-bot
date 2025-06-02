import tools from '@takanashi-soft/tools'

let handler = async (m, { conn, text }) => {
if (!text) throw `✳️ ${mssg.notext}`
m.react('💬')
let syst = `Eres Senna Bot, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
try {
let res = await tools.ai.mylogic(text, syst);
await m.reply(res.answer, null, fwc)
} catch {
m.reply(`❎ Error: intenta más tarde`)
 }
}
handler.help = ['ai <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']

export default handler;