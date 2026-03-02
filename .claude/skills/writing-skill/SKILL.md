---
name: writing-skill
description: Produce punchy, human, and engaging short-form or long-form copy for blogs, op-eds, and social posts. Trigger when the user asks for: "punchy", "punchy-voice", "punchy-writing", "blog-voice", "op-ed", "sardonic", "wry", "provocative", "concise", "engaging", "style-checklist".
---

# writing-skill

Quick: Use this skill to generate or edit copy that feels punchy, human, and attention-grabbing while enforcing safety guardrails. The skill focuses on voice, cadence, imagery, and rhetorical devices — not on attacking protected groups or producing abusive content.

When to use

- Ask: “Write a punchy blog intro about X”
- Ask: “Rewrite this paragraph in a wry, sardonic voice”
- Ask: “Produce a short op‑ed paragraph with a provocative lead”
- Ask: “Give me a style checklist for this paragraph”

Parameters (describe in the request; the agent will parse)

- topic (string) — subject to write about
- audience (string) — e.g., "general", "tech-savvy", "policy", "founders"
- flavor (enum) — sardonic | wry | blunt | ironic | dark-humor
- intensity (int 1-10) — how sharp/edgy the voice should be
- length (short|medium|long)
- target (optional) — who/what is being critiqued; the skill will validate this and refuse abusive targeting of protected classes

Core behavior

1. Validate input: refuse or reframe requests that target protected classes, dehumanize people, or call for harassment. If the request targets a protected class, the skill will refuse and suggest safer alternatives (e.g., focus on behaviors, trends, policies, or institutions).
2. Produce a first‑draft paragraph in the requested flavor and length.
3. Return a short “style checklist” noting which techniques were used (sentence cadence, metaphors, rhetorical devices, tone tags).
4. If intensity >7, include an optional toned down variant.

Safety rules (non-negotiable)

- The skill will not generate slurs, dehumanizing language, calls to violence, or targeted hate. If the request appears to aim at a protected class (gender, race, religion, sexual orientation, disability, age), the skill will either refuse or rewrite to target behaviors or institutions instead.
- The skill flags borderline content and offers safer rewrites.

References

- See references/safe_style.md for deeper analysis, templates, examples, and the internal validation list.

AI tell deterrence

These are dead giveaways that something was written by an AI. Eliminate them before delivering any copy:

- **Em dashes (—)**: the single biggest tell. Replace with a period, comma, colon, semicolon, or parentheses depending on the sentence. Never use an em dash.
- **"Genuinely"**: cut it. If something is good, say it's good.
- **"Straightforward"**: almost always filler. Remove or rewrite.
- **"It's worth noting"**: never write this.
- **Parallel rhetorical flourishes**: e.g. "The food is the same. The price is not." Used sparingly these are fine; used repeatedly they read as AI cadence.
- **"Not hard to see why"**, **"a genuine concern"**: generic AI filler. Rewrite with specifics.
- **Landing sentences that summarise what you just said**: "This is what makes X unique." "There is no bad outcome here." "This is the thing that trips people up." Cut them. The paragraph already said it.
- **Vague superlatives**: "extraordinary," "spectacular," "distinctive." Either be specific about why or replace with a plain adjective.
- **Rhythm padding with repeated words**: "Often X, often Y." "Many A, many B." It's a cadence trick, not a real sentence. Rewrite.
- **Wrap-up flourishes**: closing a section with "X covers a lot of ground," "there's no better way," "you won't regret it." These say nothing. End on a fact or cut.
- **"Navigate"** used metaphorically: "here's how to navigate it," "navigate the options." Just say what you mean.
- **"relatively"** as a hedge: "relatively neutral," "relatively cheap." Cut the hedge or be specific.
- **Summary sentences disguised as insight**: "This is what's unique to Georgia." "That's the difference." If the paragraph did its job, you don't need to announce what it said.
- Over-structured prose: real writers don't naturally produce perfectly parallel bullet lists for every paragraph. Break the pattern occasionally.

Examples

- Request: "Write a short, sardonic intro about AI hiring tools for a tech audience, intensity 6"
- Output: Lead paragraph + style checklist + toned variant (if requested)

Implementation notes

- The skill is text-only; no external calls required.
- The agent should consult references/safe_style.md when invoked for templates and checklist logic.

