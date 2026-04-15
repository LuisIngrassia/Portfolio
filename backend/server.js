import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const CV_CONTEXT = `
Name: Luis Pedro Ingrassia
Role: Full-Stack Developer

About: Computer Engineering student developing microservices and infrastructure tools in Go and Java at Mercadolibre. Background combines high-scale backend architecture experience with a strong creative side as a freelance Full-Stack Developer, specializing in React and Tailwind CSS. Goal: move into Full-Stack or Front-end roles, applying analytical skills and UX focus.

Experience:
- Software Engineer at Mercadolibre (February 2025 – March 2026):
  • Microservices and applications in Go and Java (Spring Boot) within the Fury ecosystem
  • Creation and maintenance of internal SDKs
  • Datadog dashboards for monitoring critical metrics
  • Unit tests and end-to-end tests
  • CI/CD cycle participation

- Freelance Full-Stack Developer (January 2022 – February 2025):
  • Comprehensive web design and development
  • Strong UX/UI focus
  • Booking systems, service catalogs, promotion management
  • Integration of direct contact channels

Technical Skills: React, Tailwind CSS, JavaScript, Go, Java, Spring Boot, Node.js, Python, MySQL, Git/GitHub, DataDog, Jira

Languages: Spanish (Native), English (Advanced), Portuguese (Basic)

Education: Computer Engineering at UADE (2022 – present), Legacy JavaScript Algorithms and Data Structures (freeCodeCamp)

Projects:
- Staff Modern: Corporate recruitment website (React, Tailwind, UX/UI)
- Franco Cuatto: Personal portfolio for a client (React, CSS)
- Corralito: Business budget/supplier management app (React, Vite, Node.js — in progress)
`

app.post('/api/analyze', async (req, res) => {
  const { jobDescription } = req.body

  if (!jobDescription || typeof jobDescription !== 'string' || jobDescription.trim().length < 20) {
    return res.status(400).json({ error: 'Job description is required (min 20 characters).' })
  }

  try {
    const message = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      system: `You are a professional technical recruiter AI. You will analyze how well a candidate matches a job description and return a structured JSON response.

The candidate's CV:
${CV_CONTEXT}

Respond ONLY with a valid JSON object in this exact format (no markdown, no explanation, just the JSON):
{
  "matchScore": <integer 0-100>,
  "verdict": "<2-3 sentence overall assessment of the candidate for this role>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "gaps": ["<gap 1>", "<gap 2>"]
}

Be honest and specific. Base the score on genuine alignment between the candidate's skills/experience and the job requirements.`,
      messages: [
        {
          role: 'user',
          content: `Job description to analyze:\n\n${jobDescription.trim()}`,
        },
      ],
    })

    const raw = message.content[0].text.trim()
    const parsed = JSON.parse(raw)

    // Validate expected shape
    if (
      typeof parsed.matchScore !== 'number' ||
      typeof parsed.verdict !== 'string' ||
      !Array.isArray(parsed.strengths) ||
      !Array.isArray(parsed.gaps)
    ) {
      throw new Error('Unexpected response shape from AI')
    }

    res.json(parsed)
  } catch (err) {
    console.error('Analysis error:', err.message)
    res.status(500).json({ error: 'Failed to analyze. Please try again.' })
  }
})

app.get('/health', (_, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
