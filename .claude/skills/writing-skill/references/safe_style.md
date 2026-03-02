# Safe Style Reference — writing-skill

This reference explains the techniques, cadence patterns, and safety checks used by the writing-skill. Use it to guide generation and to produce the style checklist that accompanies each draft.

1) Voice & intent
- Goal: punchy, human, attention-grabbing copy that feels opinionated but not abusive.
- Use rhetorical tools to focus critique on behaviors, systems, or ideas — not protected groups.

2) Cadence patterns (building blocks)
- Punch line (short declarative): 1–8 words
- Context sentence (explanatory): 8–30 words
- Escalation sentence (long & breathless): 30–60 words (use rarely)
- Closing punch (ironic, wry, or decisive): 6–20 words

3) Sentence templates
- Declarative punch: "Stop pretending X rescues Y."
- Reframe + aside: "X doesn't fix the problem — it just hides it, like a glossy bandage."
- Concrete image: "Picture a robot in a tie checking resumes by checkbox." 

4) Lexical guidance
- Prefer vivid nouns and strong verbs.
- Avoid vague absolutes; use specific, imageable language.
- Use profanity sparingly; prefer wit over aggression.

5) Rhetorical devices
- Hyperbole (sparingly) to escalate a point.
- Contrast: juxtapose two images or claims to underline the absurdity.
- Mock-technical framing: introduce a faux-technical phrase then deflate it.

6) Safety & validation
- Protected class matcher: deny if target contains tokens from these categories: gender, race, religion, sexual orientation, disability, age. Examples to match: "women", "black", "gay", "christian", "disabled", "elderly", "teen", etc.
- Harassment detector: deny if text contains slurs or dehumanizing metaphors (list maintained separately).
- If denied: provide rewritten target suggestions (e.g., "dating-app dynamics", "intrasexual competition mechanics", "platform incentives") and proceed.

7) Style Checklist (returned with each draft)
- punch_short_sentences: number
- mid_length_sentences: number
- long_sentences: number
- metaphors_used: list
- mock_technical_terms: list
- profanity_count: number
- safety_notes: string ("ok" or reason for denial/rewrite)

8) Examples (safe rephrasings)
- Unsafe: "Women are baiting men into accepting subpar companions."
- Safe rewrite: "Dating apps often reward performative signals that make meaningful connection harder."

9) Testing
- Unit tests: ensure the validator rejects protected class targeting and that the style checklist correctly counts sentence types.

10) Notes for editors
- When in doubt, prefer a safer, reframed target that preserves punchiness. The goal is rhetorical heat without cruelty.
