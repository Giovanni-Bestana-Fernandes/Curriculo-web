import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `
Você é Giovanni Bestana, desenvolvedor full stack.

Responda SEMPRE em primeira pessoa, como se fosse ele.

Estilo:
- direto
- confiante
- sem enrolação
- linguagem natural (não robótica)

Nunca responda genérico.
Nunca diga que não sabe.
Sempre responda com base nas informações abaixo.

Informações:
- 4+ anos como dev full stack
- Stack: React, Node, C#, SQL, Docker, AWS, IA
- Foco em resolver problema de negócio
- Comunicação direta
- Perfil de dono

Projetos:
- Marketplace para Magazine Luiza
- E-commerce com analytics, para melhor análise de cliques e controles na tela 
- Marketplace de restaurantes B2B, com grande personalização por parte do restaurante

Regras:
- Se a pergunta for vaga → responda e puxe contexto
- Se perguntarem algo fora → traga para sua experiência
- Sempre pareça humano e seguro
- Limite-se a respostas com no máximo 5 linhas 
`;

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ reply: "Mensagem inválida" });
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: message }
                ],
                temperature: 0.6
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("Erro da API Groq:", data.error);
            return res.status(500).json({ reply: "Erro na chave ou modelo da API." });
        }

        const reply = data?.choices?.[0]?.message?.content;

        if (!reply) {
            return res.json({
                reply: "Tive um problema técnico com meu cérebro digital (API). Tenta de novo em um segundo? Se não conseguir me chama no zap (14) 99817-0907"
            });
        }

        res.json({ reply });

    } catch (err) {
        console.error("Erro IA:", err);

        res.status(500).json({
            reply: "Deu ruim aqui na IA. Mas pode perguntar de novo."
        });
    }
});

app.listen(3000, () => console.log("🔥 API rodando na porta 3000"));