import { useState, useRef, useEffect } from "react";const KNOWLEDGE_BASE = `
=== $100M OFFERS - CORE FRAMEWORKS ===

GRAND SLAM OFFER: Make it so good people feel stupid saying no.
Formula: Dream Outcome x Perceived Likelihood / Time Delay x Effort = Value

VALUE EQUATION (4 factors):
1. Dream Outcome - what they really want (not features, results)
2. Perceived Likelihood - will it actually work for them?
3. Time Delay - how fast do they get results?
4. Effort & Sacrifice - how hard is it?
Increase top, decrease bottom = higher perceived value.

PRICING: Charge based on VALUE, not time/cost. If you solve a $1M problem, charge $100K.
Never compete on price - compete on value.

GRAND SLAM OFFER CREATION:
Step 1: Identify dream outcome (not 'lose weight' but 'fit into wedding dress')
Step 2: List all problems/obstacles between them and outcome
Step 3: Turn each problem into a solution
Step 4: Trim to highest value, lowest cost solutions
Step 5: Stack into irresistible bundle

GUARANTEES: Unconditional / Conditional / Anti-guarantee. Remove all risk from buyer.
SCARCITY & URGENCY: Limited spots, deadline bonuses. Real scarcity beats fake.
NAMING FORMULA: Who + Specific Person + Dream Outcome + Timeframe + Program Type

=== $100M LEADS - CORE FRAMEWORKS ===

CORE FOUR (4 ways to get leads):
1. WARM OUTREACH - message people you know. Free. High conversion. Start here.
2. POST FREE CONTENT - social media value. Build audience over time.
3. COLD OUTREACH - message strangers. Scale faster. Lower conversion.
4. PAID ADS - buy traffic. Fastest scale. Costs money.

LEAD MAGNET: Free valuable thing solving one problem, creating desire for more.

WARM OUTREACH SCRIPT:
'Hey [name], I started [thing]. Would you or anyone you know benefit from [result]?'

COLD OUTREACH: Personalize, lead with value, clear CTA, follow up 4-6 times.
'I help [type of person] get [result] without [pain]. Want to see how?'

CONTENT: Document don't create. Post what you learn daily. Hooks matter most.

PAID ADS: Test many creatives, double down on winners. Retarget engaged viewers.

LEAD GETTERS: Customer referrals, affiliates/partners, agencies, employees.

=== CLOSER FRAMEWORK (Sales) ===
C - Clarify why they are here
L - Label their problem
O - Overview past pain (what have they tried?)
S - Sell the vacation (outcome, not features)
E - Explain objections away
R - Reinforce their decision

TOP OBJECTIONS:
'Too expensive' - 'Compared to what? Cost of NOT solving this?'
'Need to think' - 'What specifically needs more thought?'
'Need to ask spouse' - 'If they say yes, are YOU in?'

=== KEY PRINCIPLES ===
- Sell outcomes, not features. Nobody buys a drill, they buy a hole.
- Niche down: 'I help X do Y in Z timeframe without W'
- Follow up 5+ times. Most sales happen after follow-up 3+
- Testimonials beat claims. Social proof sells.
- Make buying easy. Remove all friction.
- Conviction = 90% tonality, 10% words. Believe in your product.
`;const DRAGON = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M140 60 C135 45 125 35 112 30 C100 26 88 28 80 35 C72 42 68 52 68 62 C68 72 72 80 78 86 C70 92 62 100 58 110 C65 106 74 103 80 105 C76 115 75 126 78 134 C83 124 90 116 97 114 C102 122 110 128 120 127 C114 120 111 112 113 105 C122 108 130 106 136 100 C130 97 123 95 120 90 C128 87 136 80 140 72 C144 80 145 90 142 98 C148 90 150 78 140 60Z" fill="#C9A84C" stroke="#0a0a0a" stroke-width="2"/><path d="M68 62 C58 60 46 63 38 70 C44 68 50 68 54 72 C48 78 44 86 46 94 C50 88 56 84 62 86 C65 93 66 102 64 110 C69 102 70 93 68 86 C73 90 76 98 75 106 C78 98 77 88 73 82 C78 85 82 92 82 100 C83 91 80 82 76 76 C80 78 85 83 86 90 C86 81 82 73 76 68 C72 64 70 62 68 62Z" fill="#C9A84C" stroke="#0a0a0a" stroke-width="2"/><ellipse cx="96" cy="52" rx="12" ry="10" fill="#0a0a0a"/><ellipse cx="96" cy="52" rx="9" ry="7" fill="#E8C96D"/><path d="M96 44 L96 60" stroke="#0a0a0a" stroke-width="4" stroke-linecap="round"/><circle cx="93" cy="47" r="2" fill="white" opacity="0.6"/><path d="M84 44 C88 38 96 36 104 40 C100 42 96 42 92 44" fill="#0a0a0a"/><path d="M110 28 C108 18 104 10 98 6 C94 12 93 20 96 26 C100 22 106 22 110 28Z" fill="#C9A84C" stroke="#0a0a0a" stroke-width="1.5"/><path d="M124 32 C124 22 121 14 116 10 C113 16 113 24 117 29 C120 26 123 27 124 32Z" fill="#C9A84C" stroke="#0a0a0a" stroke-width="1.5"/><path d="M136 60 C142 50 150 42 158 36 C153 44 150 53 150 62 C155 54 162 46 168 40 C163 50 160 60 158 70 C163 62 169 54 173 48 C168 58 165 70 164 80 C158 72 148 66 136 60Z" fill="#C9A84C" stroke="#0a0a0a" stroke-width="1.8"/><path d="M50 88 L46 98 L53 94Z" fill="#e8e8e8" stroke="#0a0a0a" stroke-width="1"/><path d="M58 92 L55 103 L62 99Z" fill="#e8e8e8" stroke="#0a0a0a" stroke-width="1"/><path d="M66 94 L64 105 L70 101Z" fill="#e8e8e8" stroke="#0a0a0a" stroke-width="1"/><path d="M88 60 C90 56 94 55 96 58" stroke="#0a0a0a" stroke-width="1.2" fill="none"/><path d="M104 64 C107 60 111 60 113 64" stroke="#0a0a0a" stroke-width="1.2" fill="none"/><path d="M48 74 C46 71 42 72 42 75" stroke="#0a0a0a" stroke-width="1.5" fill="none"/></svg>`;
const LANGS = {
  uz: {
    name: "O'zbek", flag: "🇺🇿", placeholder: "Savol bering...",
    system: `Sen $100M Offers, $100M Leads va Breaking the Charts kitoblari asosida ishlayotgan sales va marketing bo'yicha mutaxassis maslahatchisin.\n\nKNOWLEDGE BASE:\n${KNOWLEDGE_BASE}\n\nQOIDALAR:\n- Har doim kitoblardan konkret framework keltir\n- Amaliy javob ber - Hormozi uslubida\n- Javob oxirida 1 ta konkret qadam taklif qil\n- O'zbek tilida javob ber`,
    suggested: ["Grand Slam Offer nima?","Value Equation qanday?","Leads qanday topiladi?","Narx qanday belgilanadi?","Garantiya qo'shish?","Cold outreach qanday?"],
    saved:"Saqlandi", ready:"Tayyor", clear:"Tozalash", yes:"Ha", no:"Yo'q",
    loading:"Yuklanmoqda...", subtitle:"Sales va Marketing AI Coach",
    hint:"3 kitob asosida • Chat tarixi saqlanadi",
    keyHint:"OpenRouter, Anthropic, OpenAI, Gemini, Groq — har qanday key ishlaydi",
    startBtn:"Boshlash →", keyStored:"Kalit brauzeringizda saqlanadi.",
    changeKey:"API Key"
  },
  en: {
    name: "English", flag: "🇬🇧", placeholder: "Ask a question...",
    system: `You are a sales and marketing expert coach trained on $100M Offers, $100M Leads, and Breaking the Charts.\n\nKNOWLEDGE BASE:\n${KNOWLEDGE_BASE}\n\nRULES:\n- Always reference specific frameworks from the books\n- Give practical, direct answers in Hormozi style\n- End with 1 concrete action step\n- Reply in English`,
    suggested: ["What is a Grand Slam Offer?","How does the Value Equation work?","How to get more leads?","How to price my offer?","How to add guarantees?","How to do cold outreach?"],
    saved:"Saved", ready:"Ready", clear:"Clear", yes:"Yes", no:"No",
    loading:"Loading...", subtitle:"Sales & Marketing AI Coach",
    hint:"Trained on 3 books • Chat history saved",
    keyHint:"Works with OpenRouter, Anthropic, OpenAI, Gemini, Groq — any key",
    startBtn:"Start Coaching →", keyStored:"Stored locally. Never shared.",
    changeKey:"API Key"
  },
  ru: {
    name: "Русский", flag: "🇷🇺", placeholder: "Задайте вопрос...",
    system: `Ты эксперт-коуч по продажам, обученный на книгах $100M Offers, $100M Leads и Breaking the Charts.\n\nKNOWLEDGE BASE:\n${KNOWLEDGE_BASE}\n\nПРАВИЛА:\n- Ссылайся на конкретные фреймворки из книг\n- Давай практичные ответы в стиле Хормози\n- Заканчивай 1 конкретным шагом\n- Отвечай на русском`,
    suggested: ["Что такое Grand Slam Offer?","Как работает Value Equation?","Как получить лидов?","Как установить цену?","Как добавить гарантию?","Холодный аутрич?"],
    saved:"Сохранено", ready:"Готово", clear:"Очистить", yes:"Да", no:"Нет",
    loading:"Загрузка...", subtitle:"AI-коуч по продажам",
    hint:"3 книги • История сохраняется",
    keyHint:"Работает с OpenRouter, Anthropic, OpenAI, Gemini, Groq",
    startBtn:"Начать →", keyStored:"Хранится локально.",
    changeKey:"API Ключ"
  }
};

const STORAGE_KEY = "hormozi-v5-";
const GOLD = "#C9A84C";
const GOLD_L = "#E8C96D";

async function callAI(apiKey, messages, systemPrompt) {
  const key = apiKey.trim();
  if (key.startsWith("sk-or-")) {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({ model: "google/gemini-2.0-flash-exp:free", max_tokens: 1024, messages: [{ role: "system", content: systemPrompt }, ...messages] })
    });
    const d = await res.json();
    return d.choices?.[0]?.message?.content || d.error?.message || "Error";
  }
  if (key.startsWith("sk-ant-")) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1024, system: systemPrompt, messages })
    });
    const d = await res.json();
    return d.content?.[0]?.text || d.error?.message || "Error";
  }
  if (key.startsWith("AIza")) {
    const contents = messages.map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + key, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ system_instruction: { parts: [{ text: systemPrompt }] }, contents, generationConfig: { maxOutputTokens: 1024 } })
    });
    const d = await res.json();
    return d.candidates?.[0]?.content?.parts?.[0]?.text || d.error?.message || "Error";
  }
  if (key.startsWith("gsk_")) {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({ model: "llama-3.3-70b-versatile", max_tokens: 1024, messages: [{ role: "system", content: systemPrompt }, ...messages] })
    });
    const d = await res.json();
    return d.choices?.[0]?.message?.content || d.error?.message || "Error";
  }
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
    body: JSON.stringify({ model: "gpt-4o-mini", max_tokens: 1024, messages: [{ role: "system", content: systemPrompt }, ...messages] })
  });
  const d = await res.json();
  return d.choices?.[0]?.message?.content || d.error?.message || "Error";
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("hac-v5-key") || "");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showKeyModal, setShowKeyModal] = useState(false);
  const bottomRef = useRef(null);
  const L = LANGS[lang];
  const hasKey = !!apiKey;

  useEffect(() => {
    setReady(false); setMessages([]);
    (async () => {
      try { const r = await window.storage.get(STORAGE_KEY + lang); if (r?.value) setMessages(JSON.parse(r.value)); } catch {}
      setReady(true);
    })();
  }, [lang]);

  useEffect(() => {
    if (!ready) return;
    (async () => {
      try {
        await window.storage.set(STORAGE_KEY + lang, JSON.stringify(messages));
        if (messages.length > 0) { setSaved(true); setTimeout(() => setSaved(false), 1500); }
      } catch {}
    })();
  }, [messages, ready]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  function saveKey() {
    const k = apiKeyInput.trim();
    if (!k) return;
    localStorage.setItem("hac-v5-key", k);
    setApiKey(k);
    setApiKeyInput("");
    setShowKeyModal(false);
  }

  async function send(text) {
    if (!hasKey) { setShowKeyModal(true); return; }
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    const next = [...messages, { role: "user", content: msg }];
    setMessages(next); setLoading(true);
    try {
      const reply = await callAI(apiKey, next, L.system);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch { setMessages([...next, { role: "assistant", content: "Connection error." }]); }
    finally { setLoading(false); }
  }

  async function clear() {
    try { await window.storage.delete(STORAGE_KEY + lang); } catch {}
    setMessages([]); setConfirmClear(false);
  }

  const DragonIcon = ({ size = 52 }) => (
    <div dangerouslySetInnerHTML={{ __html: DRAGON }} style={{ width: size, height: size, flexShrink: 0 }} />
  );

  const KeyModal = () => (
    <div style={{ position: "fixed", inset: 0, background: "#000000dd", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }}>
      <div style={{ maxWidth: 420, width: "100%", background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: 14, padding: 32 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <DragonIcon size={72} />
          </div>
          <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>Setup</div>
          <div style={{ color: "#f0f0f0", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Hormozi AI Coach</div>
          <div style={{ color: "#3a3a3a", fontSize: 12, lineHeight: 1.7 }}>{L.keyHint}</div>
        </div>
        <div style={{ color: "#2a2a2a", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>API KEY</div>
        <input
          value={apiKeyInput} onChange={e => setApiKeyInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && saveKey()}
          placeholder="sk-or-... / sk-ant-... / AIza... / gsk_... / sk-..."
          autoFocus
          style={{ width: "100%", padding: "12px 14px", background: "#080808", border: "1px solid #222", borderRadius: 6, color: "#ddd", fontSize: 13, outline: "none", fontFamily: "Georgia, serif", boxSizing: "border-box", marginBottom: 10 }}
        />
        <div style={{ color: "#1e1e1e", fontSize: 11, marginBottom: 18, lineHeight: 1.6 }}>
          Free: <span style={{ color: GOLD }}>openrouter.ai</span> • <span style={{ color: GOLD }}>aistudio.google.com</span> • <span style={{ color: GOLD }}>console.groq.com</span>
        </div>
        <button onClick={saveKey} style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg, #C9A84C, #E8C96D)", border: "none", borderRadius: 8, color: "#080808", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "Georgia, serif", marginBottom: 10 }}>
          {L.startBtn}
        </button>
        {hasKey && <button onClick={() => setShowKeyModal(false)} style={{ width: "100%", padding: "10px", background: "transparent", border: "1px solid #1a1a1a", borderRadius: 6, color: "#333", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif" }}>Cancel</button>}
        <div style={{ color: "#1a1a1a", fontSize: 11, textAlign: "center", marginTop: 12 }}>{L.keyStored}</div>
      </div>
    </div>
  );

  if (!hasKey) return <KeyModal />;

  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#e0e0e0", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 16px 32px" }}>
      {showKeyModal && <KeyModal />}

      <div style={{ width: "100%", maxWidth: 740, paddingTop: 28, paddingBottom: 16, borderBottom: "1px solid #141414", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <DragonIcon size={52} />
            <div>
              <div style={{ fontSize: 10, color: GOLD, letterSpacing: 4, textTransform: "uppercase", marginBottom: 2 }}>$100M Books</div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.5, color: "#f5f5f5" }}>Hormozi AI Coach</div>
              <div style={{ fontSize: 11, color: "#2a2a2a", marginTop: 1 }}>{L.hint}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {Object.entries(LANGS).map(([k, v]) => (
                <button key={k} onClick={() => setLang(k)} style={{ padding: "4px 9px", borderRadius: 4, border: lang === k ? "1px solid #C9A84C66" : "1px solid #1a1a1a", background: lang === k ? "#C9A84C15" : "transparent", color: lang === k ? GOLD : "#3a3a3a", fontSize: 11, cursor: "pointer", fontFamily: "Georgia, serif" }}>{v.flag} {v.name}</button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: saved ? "#4caf50" : "#1a1a1a", transition: "color 0.3s" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: saved ? "#4caf50" : "#1a1a1a" }} />
                {saved ? L.saved : L.ready}
              </div>
              <button onClick={() => setShowKeyModal(true)} style={{ padding: "4px 10px", background: "transparent", border: "1px solid #1a1a1a", borderRadius: 4, color: "#2a2a2a", fontSize: 10, cursor: "pointer", fontFamily: "Georgia, serif" }}>{L.changeKey}</button>
              {messages.length > 0 && !confirmClear && (
                <button onClick={() => setConfirmClear(true)} style={{ padding: "4px 10px", background: "transparent", border: "1px solid #1a1a1a", borderRadius: 4, color: "#2a2a2a", fontSize: 10, cursor: "pointer", fontFamily: "Georgia, serif" }}
                  onMouseEnter={e => { e.target.style.color = "#e74c3c"; e.target.style.borderColor = "#c0392b55"; }}
                  onMouseLeave={e => { e.target.style.color = "#2a2a2a"; e.target.style.borderColor = "#1a1a1a"; }}>
                  {L.clear}
                </button>
              )}
              {confirmClear && (
                <div style={{ display: "flex", gap: 5 }}>
                  <button onClick={clear} style={{ padding: "4px 10px", background: "#c0392b22", border: "1px solid #c0392b55", borderRadius: 4, color: "#e74c3c", fontSize: 10, cursor: "pointer", fontFamily: "Georgia, serif" }}>{L.yes}</button>
                  <button onClick={() => setConfirmClear(false)} style={{ padding: "4px 10px", background: "transparent", border: "1px solid #1a1a1a", borderRadius: 4, color: "#444", fontSize: 10, cursor: "pointer", fontFamily: "Georgia, serif" }}>{L.no}</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
          {["$100M Offers", "$100M Leads", "Breaking the Charts", "Sales Mastery"].map(b => (
            <span key={b} style={{ padding: "3px 10px", background: "#C9A84C0a", border: "1px solid #C9A84C1a", borderRadius: 20, fontSize: 10, color: GOLD }}>{b}</span>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 740, minHeight: 260, maxHeight: "52vh", overflowY: "auto", padding: "16px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {!ready && <div style={{ color: "#222", textAlign: "center", marginTop: 40, fontSize: 13 }}>{L.loading}</div>}
        {ready && messages.length === 0 && (
          <div style={{ textAlign: "center", paddingTop: 20 }}>
            <div style={{ color: "#1a1a1a", fontSize: 28, marginBottom: 8 }}>◆</div>
            <div style={{ color: "#333", fontSize: 13, lineHeight: 1.9 }}>{L.subtitle}</div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-start", gap: 9 }}>
            {m.role === "assistant" && <DragonIcon size={30} />}
            <div style={{ maxWidth: "80%", padding: "10px 15px", borderRadius: m.role === "user" ? "14px 14px 3px 14px" : "3px 14px 14px 14px", background: m.role === "user" ? "#C9A84C10" : "#0f0f0f", border: m.role === "user" ? "1px solid #C9A84C28" : "1px solid #181818", color: m.role === "user" ? GOLD_L : "#cacaca", fontSize: 14, lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <DragonIcon size={30} />
            <div style={{ display: "flex", gap: 5 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, opacity: 0.4, animation: "pulse 1.2s ease-in-out infinite", animationDelay: `${i*0.2}s` }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {ready && messages.length === 0 && (
        <div style={{ width: "100%", maxWidth: 740, marginBottom: 14 }}>
          <div style={{ color: "#1e1e1e", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 9 }}>Quick Questions</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {L.suggested.map((s, i) => (
              <button key={i} onClick={() => send(s)} style={{ padding: "6px 13px", background: "transparent", border: "1px solid #181818", borderRadius: 4, color: "#333", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif", transition: "all 0.2s" }}
                onMouseEnter={e => { e.target.style.borderColor = "#C9A84C44"; e.target.style.color = GOLD; }}
                onMouseLeave={e => { e.target.style.borderColor = "#181818"; e.target.style.color = "#333"; }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ width: "100%", maxWidth: 740, display: "flex", gap: 9, borderTop: messages.length > 0 ? "1px solid #101010" : "none", paddingTop: messages.length > 0 ? 14 : 0 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()} placeholder={L.placeholder}
          style={{ flex: 1, padding: "13px 18px", background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 6, color: "#ddd", fontSize: 14, outline: "none", fontFamily: "Georgia, serif" }}
          onFocus={e => e.target.style.borderColor = "#C9A84C44"} onBlur={e => e.target.style.borderColor = "#1a1a1a"} />
        <button onClick={() => send()} disabled={loading || !input.trim()} style={{ padding: "13px 22px", background: loading || !input.trim() ? "#101010" : "linear-gradient(135deg, #C9A84C, #E8C96D)", border: "none", borderRadius: 6, color: loading || !input.trim() ? "#222" : "#080808", fontWeight: 700, fontSize: 13, cursor: loading || !input.trim() ? "not-allowed" : "pointer", fontFamily: "Georgia, serif", letterSpacing: 1 }}>
          {loading ? "..." : "→"}
        </button>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.3;transform:scale(.85)} 50%{opacity:1;transform:scale(1.1)} }
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:#080808} ::-webkit-scrollbar-thumb{background:#181818;border-radius:2px}
      `}</style>
    </div>
  );
}
