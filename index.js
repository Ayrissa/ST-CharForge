// CharForge — конструктор персонажей для SillyTavern (единый файл, без зависимостей от подпапок).

/* ═══ src/i18n.js ═══ */
// Интерфейс: русский по умолчанию, английский опционально. Сама анкета всегда на английском.
const D = {
    ru: {
        title: 'Конструктор персонажей',
        menu: 'Конструктор персонажей',
        concept: 'Описание персонажа',
        conceptPh: 'Опиши идею своими словами: кто это, какой характер, сеттинг, что важно сохранить. Можно кратко: ИИ додумает остальное.',
        refs: 'Референсы',
        refsPh: 'Текстовые референсы: цитаты, факты, ссылки на образ, «похож на…». Модель считает это каноном.',
        addImage: 'Добавить картинку',
        imgNote: 'Картинки учитываются только мультимодальными моделями. Сжимаются до 768 px.',
        imgNoteOff: 'Отправка картинок выключена в настройках.',
        generate: 'Сгенерировать анкету',
        cancel: 'Отмена',
        generating: 'Генерирую…',
        compressing: 'Сжимаю…',
        regenerating: 'Перегенерирую секцию…',
        done: 'Готово',
        empty: 'Здесь появится анкета. Опиши персонажа слева и нажми «Сгенерировать».',
        tokens: '{n} / {max} токенов',
        compress: 'Сжать',
        copy: 'Копировать',
        copied: 'Скопировано',
        exportJson: 'Экспорт JSON',
        createChar: 'Создать персонажа',
        created: 'Персонаж «{name}» создан',
        clearAll: 'Очистить всё',
        clearConfirm: 'Очистить описание, референсы и анкету?',
        close: 'Закрыть',
        secWish: 'Пожелание (необязательно)',
        secRegen: 'Перегенерировать',
        // ошибки
        errNoProfile: 'Не выбран профиль подключения. Выбери его в Extensions → CharForge или в Connection Manager.',
        errNoService: 'Connection Manager недоступен. Включи его в Extensions → Manage extensions.',
        errEmpty: 'Сначала опиши персонажа.',
        errParse: 'Не удалось разобрать ответ модели. Попробуй ещё раз.',
        errNoDossier: 'Сначала сгенерируй анкету.',
        errFailed: 'Ошибка запроса: {msg}',
        errCreate: 'Не удалось создать персонажа: {msg}',
        cancelled: 'Отменено',
        namePrompt: 'Имя персонажа не найдено в анкете. Введи имя:',
        // настройки
        sSections: 'Секции анкеты',
        sProfile: 'Профиль подключения',
        sProfileCur: '— Текущий профиль Таверны —',
        sProfileNote: 'Используются только профили Connection Manager. Ключи API расширение не видит.',
        sBudget: 'Бюджет анкеты (токены)',
        sMax: 'Лимит ответа модели (токены)',
        sExamples: 'Примеров реплик',
        sLang: 'Язык интерфейса',
        sImages: 'Отправлять картинки-референсы модели',
        sColors: 'Цвета',
        sAccent: 'Акцент',
        sBg: 'Фон',
        sPanel: 'Панели',
        sText: 'Текст',
        sReset: 'Сбросить цвета',
        sOpen: 'Открыть конструктор',
        sBasicNote: 'Базовые данные включены всегда.',
        'sec.basic': 'Базовые данные',
        'sec.appearance': 'Внешность',
        'sec.personality': 'Характер',
        'sec.backstory': 'Прошлое',
        'sec.skills': 'Навыки',
        'sec.details': 'Детали образа',
        'sec.sexuality': 'Сексуальность',
        'sec.relationships': 'Взаимоотношения',
        'sec.speech': 'Манера речи',
    },
    en: {
        title: 'Character Forge',
        menu: 'Character Forge',
        concept: 'Character concept',
        conceptPh: 'Describe the idea in your own words: who they are, personality, setting, what must be kept. Short is fine, the AI fills in the rest.',
        refs: 'References',
        refsPh: 'Text references: quotes, facts, "looks like…". The model treats them as canon.',
        addImage: 'Add image',
        imgNote: 'Images only work with multimodal models. Downscaled to 768 px.',
        imgNoteOff: 'Sending images is disabled in settings.',
        generate: 'Generate dossier',
        cancel: 'Cancel',
        generating: 'Generating…',
        compressing: 'Compressing…',
        regenerating: 'Regenerating section…',
        done: 'Done',
        empty: 'The dossier will appear here. Describe a character on the left and press "Generate".',
        tokens: '{n} / {max} tokens',
        compress: 'Compress',
        copy: 'Copy',
        copied: 'Copied',
        exportJson: 'Export JSON',
        createChar: 'Create character',
        created: 'Character "{name}" created',
        clearAll: 'Clear all',
        clearConfirm: 'Clear concept, references and dossier?',
        close: 'Close',
        secWish: 'Instruction (optional)',
        secRegen: 'Regenerate',
        errNoProfile: 'No connection profile selected. Pick one in Extensions → CharForge or in Connection Manager.',
        errNoService: 'Connection Manager is unavailable. Enable it in Extensions → Manage extensions.',
        errEmpty: 'Describe the character first.',
        errParse: 'Could not parse the model response. Try again.',
        errNoDossier: 'Generate a dossier first.',
        errFailed: 'Request failed: {msg}',
        errCreate: 'Could not create character: {msg}',
        cancelled: 'Cancelled',
        namePrompt: 'Character name not found in the dossier. Enter a name:',
        sSections: 'Dossier sections',
        sProfile: 'Connection profile',
        sProfileCur: '— Current SillyTavern profile —',
        sProfileNote: 'Only Connection Manager profiles are used. The extension never sees API keys.',
        sBudget: 'Dossier budget (tokens)',
        sMax: 'Model response limit (tokens)',
        sExamples: 'Dialogue examples',
        sLang: 'Interface language',
        sImages: 'Send reference images to the model',
        sColors: 'Colors',
        sAccent: 'Accent',
        sBg: 'Background',
        sPanel: 'Panels',
        sText: 'Text',
        sReset: 'Reset colors',
        sOpen: 'Open Character Forge',
        sBasicNote: 'Basic info is always on.',
        'sec.basic': 'Basic info',
        'sec.appearance': 'Appearance',
        'sec.personality': 'Personality',
        'sec.backstory': 'Backstory',
        'sec.skills': 'Skills',
        'sec.details': 'Extra details',
        'sec.sexuality': 'Sexuality',
        'sec.relationships': 'Relationships',
        'sec.speech': 'Speech',
    },
};

let lang = 'ru';
const setLang = (l) => { lang = D[l] ? l : 'ru'; };
const getLang = () => lang;
function t(key, vars = {}) {
    let s = D[lang][key] ?? D.ru[key] ?? key;
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
}

/* ═══ src/schema.js ═══ */
// Структура анкеты и настройки по умолчанию.
const KEY = 'charforge';

/** Секции анкеты. weight — доля токенового бюджета. hint — подсказка для модели (может быть функцией от настроек). */
const SECTIONS = [
    {
        id: 'basic', title: 'Basic', weight: 0.08, fields: [
            { key: 'Name', hint: 'real name; the only place it appears' },
            { key: 'Gender', hint: 'gender identity / sex' },
            { key: 'Age', hint: 'number' },
            { key: 'Species', hint: 'species/race, "Human" if ordinary' },
            { key: 'Origin', hint: 'nationality / homeland' },
            { key: 'Occupation', hint: 'job or role' },
        ],
    },
    {
        id: 'appearance', title: 'Appearance', weight: 0.12, fields: [
            { key: 'Height/Build', hint: 'height, body type' },
            { key: 'Hair', hint: 'color, length, style' },
            { key: 'Eyes', hint: 'color, shape, gaze' },
            { key: 'Features', hint: 'face details, scars, tattoos, piercings, accessories' },
            { key: 'Outfit', hint: 'typical clothing / uniform / armor' },
        ],
    },
    {
        id: 'personality', title: 'Personality', weight: 0.22, fields: [
            { key: 'Outer', hint: 'how they act around others' },
            { key: 'Inner', hint: 'true feelings, hidden side' },
            { key: 'Traits', hint: '5-8 keywords' },
            { key: 'Values', hint: 'what matters to them' },
            { key: 'Fears/Weaknesses', hint: 'fears, insecurities, triggers' },
            { key: 'Habits', hint: 'quirks and bad habits' },
            { key: 'Under stress', hint: 'behavior under stress / in public / in specific situations' },
            { key: 'Likes', hint: 'things, food, people, activities' },
            { key: 'Dislikes', hint: 'what annoys or repels them' },
        ],
    },
    {
        id: 'backstory', title: 'Backstory', weight: 0.10, fields: [
            { key: 'Facts', hint: 'key life events as terse facts in chronological order, no prose' },
        ],
    },
    {
        id: 'skills', title: 'Skills', weight: 0.06, fields: [
            { key: 'Strengths', hint: 'skills, talents, abilities' },
            { key: 'Limitations', hint: 'weaknesses, things they cannot do' },
        ],
    },
    {
        id: 'details', title: 'Details', weight: 0.08, fields: [
            { key: 'Secrets', hint: 'what they hide' },
            { key: 'Goals', hint: 'what they want' },
            { key: 'Possessions', hint: 'notable items, pets, home' },
            { key: 'Trivia', hint: 'small humanizing details, contradictions, odd facts' },
        ],
    },
    {
        id: 'sexuality', title: 'Sexuality', weight: 0.08, fields: [
            { key: 'Orientation', hint: 'sexual / romantic orientation' },
            { key: 'Kinks', hint: 'kinks and turn-ons' },
            { key: 'Intimacy', hint: 'behavior and style in intimate situations' },
        ],
    },
    {
        id: 'relationships', title: 'Relationships', weight: 0.10, fields: [
            { key: 'Family', hint: 'relatives or their absence' },
            { key: 'Allies', hint: 'friends, allies' },
            { key: 'Enemies', hint: 'rivals, antagonists' },
            { key: 'Toward {{user}}', hint: 'concrete attitude and relationship to {{user}}' },
        ],
    },
    {
        id: 'speech', title: 'Speech', weight: 0.16, fields: [
            { key: 'Tone', hint: 'slang / formal / dry / emotional, pace' },
            { key: 'Verbal tics', hint: 'filler words, repeated phrases, accent' },
            {
                key: 'Examples',
                hint: (s) => `${s.examples} short in-character lines, each on its own line starting with "- ", covering greeting, annoyance, affection, teasing${s.sections.sexuality ? ', flirting/kiss' : ''}`,
            },
        ],
    },
];

const DEFAULTS = {
    lang: 'ru',
    profileId: '',
    tokenBudget: 1000,
    maxResponse: 3000,
    examples: 4,
    sendImages: true,
    sections: Object.fromEntries(SECTIONS.map(s => [s.id, true])),
    colors: { accent: '#a07cf0', bg: '#17171d', panel: '#22222b', text: '#ecebf2' },
    draft: { concept: '', refText: '', dossier: {} },
};

function getSettings() {
    const store = SillyTavern.getContext().extensionSettings;
    const cur = store[KEY] || {};
    store[KEY] = {
        ...structuredClone(DEFAULTS),
        ...cur,
        sections: { ...DEFAULTS.sections, ...(cur.sections || {}) },
        colors: { ...DEFAULTS.colors, ...(cur.colors || {}) },
        draft: { ...structuredClone(DEFAULTS.draft), ...(cur.draft || {}) },
    };
    return store[KEY];
}

function saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
}

function applyColors() {
    const c = getSettings().colors;
    const r = document.documentElement.style;
    r.setProperty('--cf-accent', c.accent);
    r.setProperty('--cf-bg', c.bg);
    r.setProperty('--cf-panel', c.panel);
    r.setProperty('--cf-text', c.text);
}

const isOn = (s, sec) => sec.id === 'basic' || !!s.sections[sec.id];

/* ═══ src/prompt.js ═══ */
// Построение промптов, разбор ответа и сборка итогового текста анкеты.
const WORDS_PER_TOKEN = 0.72; // ~0.72 англ. слова на токен (с запасом на пунктуацию)
const enabledSections = (s) => SECTIONS.filter(x => isOn(s, x));
const wordBudget = (tokens) => Math.max(40, Math.round(tokens * WORDS_PER_TOKEN * 0.92));

function skeleton(s, secs) {
    const total = wordBudget(s.tokenBudget);
    const wsum = secs.reduce((a, x) => a + x.weight, 0);
    return secs.map(sec => {
        const w = Math.max(8, Math.round(total * sec.weight / wsum));
        const lines = sec.fields.map(f => {
            const hint = typeof f.hint === 'function' ? f.hint(s) : f.hint;
            return `${f.key}: <${hint}>`;
        });
        return `[${sec.title}] (~${w} words)\n${lines.join('\n')}`;
    }).join('\n\n');
}

function rules(s, secs) {
    const words = wordBudget(s.tokenBudget);
    const r = [
        'You write compact character dossiers for roleplay character cards.',
        'Rules:',
        '1. Output ONLY the dossier: no preface, no commentary, no markdown, no code fences.',
        '2. Use exactly the section headers in square brackets and exactly the field keys from the skeleton, in the same order, one field per line. Do NOT copy the word targets or the <hints>.',
        '3. Write terse fragments separated by commas or semicolons. No full sentences, no filler, no flowery prose, no repetition between fields.',
        `4. HARD LIMIT: the whole dossier is at most ${words} words (about ${s.tokenBudget} tokens). Respect the per-section word targets.`,
        '5. Expand the concept: invent missing details so the character feels complete, specific and coherent. Prefer distinctive concrete details over generic ones; inner contradictions are welcome. Never contradict facts given by the user or the references.',
        '6. Write {{char}} for the character and {{user}} for the user\'s character. The real name appears only in the Name field.',
        '7. Write in English.',
    ];
    if (secs.some(x => x.id === 'sexuality')) {
        r.push('8. The Sexuality section applies to adults only: if the character is under 18, write N/A in each of its fields.');
    }
    return r.join('\n');
}

function userContent(s, concept, refText, images) {
    let text = `CONCEPT:\n${concept.trim()}`;
    if (refText.trim()) text += `\n\nREFERENCES (treat as canon):\n${refText.trim()}`;
    const useImgs = s.sendImages && images.length > 0;
    if (useImgs) text += '\n\nThe attached images are visual references for appearance and mood.';
    if (!useImgs) return text;
    return [{ type: 'text', text }, ...images.map(i => ({ type: 'image_url', image_url: { url: i.url } }))];
}

function buildGenerateMessages(s, concept, refText, images) {
    const secs = enabledSections(s);
    return [
        { role: 'system', content: `${rules(s, secs)}\n\nSKELETON:\n${skeleton(s, secs)}` },
        { role: 'user', content: userContent(s, concept, refText, images) },
    ];
}

function buildSectionMessages(s, sec, concept, refText, dossierText, instruction) {
    const one = skeleton({ ...s, tokenBudget: s.tokenBudget }, [sec]);
    const sys = `${rules(s, [sec])}\n\nTask: rewrite ONLY the section [${sec.title}] of the existing dossier below. Keep it consistent with the other sections. Output only that one section (header + fields).\n\nSKELETON:\n${one}`;
    let user = `CURRENT DOSSIER:\n${dossierText}\n\nCONCEPT:\n${concept.trim()}`;
    if (refText.trim()) user += `\n\nREFERENCES:\n${refText.trim()}`;
    user += instruction.trim() ? `\n\nINSTRUCTION FOR THE [${sec.title}] SECTION: ${instruction.trim()}` : `\n\nCreate a fresh, different take on the [${sec.title}] section.`;
    return [{ role: 'system', content: sys }, { role: 'user', content: user }];
}

function buildCompressMessages(s, dossierText) {
    const words = wordBudget(s.tokenBudget);
    const sys = [
        'You compress character dossiers.',
        `Rewrite the dossier in at most ${words} words (about ${s.tokenBudget} tokens).`,
        'Keep every section header in square brackets and every field key, in the same order.',
        'Preserve all distinctive facts; remove filler, merge synonyms, shorten phrasing. Keep {{char}} and {{user}}.',
        'Output ONLY the compressed dossier, no commentary, no markdown.',
    ].join('\n');
    return [{ role: 'system', content: sys }, { role: 'user', content: dossierText }];
}

/** Разбирает ответ модели в { sectionId: 'строки' }. */
function parseDossier(text) {
    const byTitle = new Map(SECTIONS.map(x => [x.title.toLowerCase(), x.id]));
    const out = {};
    let cur = null;
    const clean = String(text).replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/```[a-z]*/gi, '');
    for (const raw of clean.split(/\r?\n/)) {
        const line = raw.replace(/\s+$/, '');
        const m = line.match(/^\s*\[([^\]]+)\]\s*(?:\(.*\))?\s*$/) || line.match(/^\s*#{1,3}\s*([^()]+?)\s*(?:\(.*\))?\s*$/);
        if (m) {
            const id = byTitle.get(m[1].trim().toLowerCase());
            if (id) { cur = id; out[id] = out[id] || []; continue; }
        }
        if (cur && line.trim()) out[cur].push(line);
    }
    return Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.join('\n')]));
}

/** Достаёт текст одной секции из ответа на её перегенерацию. */
function extractSection(text, sec) {
    const p = parseDossier(text);
    if (p[sec.id]) return p[sec.id];
    return String(text).replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/```[a-z]*/gi, '')
        .split(/\r?\n/).filter(l => l.trim() && !/^\s*\[.*\]\s*$/.test(l)).join('\n');
}

/** Собирает итоговый текст для поля Description. */
function assemble(s, dossier) {
    return enabledSections(s)
        .filter(sec => (dossier[sec.id] || '').trim())
        .map(sec => `[${sec.title}]\n${dossier[sec.id].trim()}`)
        .join('\n');
}

function getName(dossier) {
    const m = (dossier.basic || '').match(/^\s*Name\s*:\s*(.+)$/mi);
    return m ? m[1].trim() : '';
}

function toCardV2(name, description) {
    return {
        spec: 'chara_card_v2',
        spec_version: '2.0',
        data: {
            name, description,
            personality: '', scenario: '', first_mes: '', mes_example: '',
            creator_notes: 'Created with CharForge', system_prompt: '', post_history_instructions: '',
            alternate_greetings: [], tags: [], creator: 'CharForge', character_version: '1.0',
            extensions: { talkativeness: '0.5', fav: false },
        },
    };
}

/* ═══ src/api.js ═══ */
// Работа с Таверной: запросы через профиль подключения, токены, создание персонажа.
const ctx = () => SillyTavern.getContext();

function listProfiles() {
    return ctx().extensionSettings?.connectionManager?.profiles ?? [];
}

/** Запрос идёт через профиль Connection Manager: ключи остаются внутри Таверны. */
async function requestModel(profileId, messages, maxTokens, signal) {
    const { ConnectionManagerRequestService: Service, extensionSettings } = ctx();
    if (!Service) throw new Error('NO_SERVICE');
    const id = profileId || extensionSettings?.connectionManager?.selectedProfile;
    if (!id) throw new Error('NO_PROFILE');
    const res = await Service.sendRequest(id, messages, maxTokens, {
        stream: false, signal, includePreset: true, includeInstruct: true,
    });
    const text = typeof res === 'string' ? res : (res?.content ?? '');
    return String(text).replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
}

async function countTokens(text) {
    try {
        const fn = ctx().getTokenCountAsync;
        if (fn) return await fn(text);
    } catch { /* fallthrough */ }
    return Math.ceil(text.length / 3.5);
}

async function createCharacter(name, description) {
    const c = ctx();
    const fd = new FormData();
    fd.append('ch_name', name);
    fd.append('description', description);
    fd.append('personality', '');
    fd.append('scenario', '');
    fd.append('first_mes', '');
    fd.append('mes_example', '');
    fd.append('creator_notes', 'Created with CharForge');
    fd.append('creator', 'CharForge');
    fd.append('tags', '');
    fd.append('talkativeness', '0.5');
    fd.append('fav', 'false');
    const res = await fetch('/api/characters/create', {
        method: 'POST',
        headers: c.getRequestHeaders({ omitContentType: true }),
        body: fd,
        cache: 'no-cache',
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const avatar = await res.text();
    try { await c.getCharacters(); } catch { /* список обновится при следующем открытии */ }
    return avatar;
}

function shrinkImage(file, max = 768) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            const img = new Image();
            img.onerror = reject;
            img.onload = () => {
                const k = Math.min(1, max / Math.max(img.width, img.height));
                const cv = document.createElement('canvas');
                cv.width = Math.round(img.width * k);
                cv.height = Math.round(img.height * k);
                cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
                resolve(cv.toDataURL('image/jpeg', 0.8));
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}

async function copyText(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return; }
    } catch { /* fallback */ }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
}

function downloadJson(filename, obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ═══ src/ui.js ═══ */
// Окно конструктора и панель настроек.
const MAX_IMAGES = 4;
let overlay = null;
const state = { images: [], busy: false, abort: null, tokenTimer: null };

const qs = (sel) => overlay.querySelector(sel);
const draft = () => getSettings().draft;
function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
}

/* ───────────── Окно ───────────── */

function openWindow() {
    if (!overlay) buildWindow();
    overlay.classList.add('cf-open');
    document.body.classList.add('cf-lock');
}

function destroyWindow() {
    overlay?.remove();
    overlay = null;
}

function closeWindow() {
    overlay?.classList.remove('cf-open');
    document.body.classList.remove('cf-lock');
}

function buildWindow() {
    overlay = el('div', 'cf-overlay');
    overlay.innerHTML = `
    <div class="cf-window" role="dialog" aria-modal="true">
      <div class="cf-head">
        <div class="cf-title"><i class="fa-solid fa-id-card"></i><span>${t('title')}</span></div>
        <div class="cf-head-actions">
          <button class="cf-icon-btn" id="cf-clear" data-act title="${t('clearAll')}"><i class="fa-solid fa-trash-can"></i></button>
          <button class="cf-icon-btn" id="cf-close" title="${t('close')}"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
      <div class="cf-body">
        <div class="cf-col cf-input">
          <label class="cf-label" for="cf-concept">${t('concept')}</label>
          <textarea id="cf-concept" class="cf-ta" rows="8" placeholder="${t('conceptPh')}"></textarea>
          <label class="cf-label" for="cf-ref">${t('refs')}</label>
          <textarea id="cf-ref" class="cf-ta" rows="4" placeholder="${t('refsPh')}"></textarea>
          <div class="cf-images" id="cf-images"></div>
          <div class="cf-row">
            <button class="cf-btn" id="cf-add-img" data-act><i class="fa-solid fa-image"></i> ${t('addImage')}</button>
            <input type="file" id="cf-file" accept="image/*" multiple hidden>
          </div>
          <div class="cf-note" id="cf-imgnote"></div>
          <div class="cf-row">
            <button class="cf-btn cf-primary" id="cf-gen" data-act><i class="fa-solid fa-wand-magic-sparkles"></i> ${t('generate')}</button>
            <button class="cf-btn cf-danger" id="cf-cancel" hidden>${t('cancel')}</button>
          </div>
          <div class="cf-status" id="cf-status"></div>
        </div>
        <div class="cf-col cf-output">
          <div class="cf-meter">
            <span id="cf-tokens"></span>
            <div class="cf-bar"><div id="cf-bar-fill"></div></div>
          </div>
          <div id="cf-sections"></div>
          <div class="cf-empty" id="cf-empty">${t('empty')}</div>
        </div>
      </div>
      <div class="cf-foot">
        <button class="cf-btn" id="cf-compress" data-act><i class="fa-solid fa-compress"></i> ${t('compress')}</button>
        <button class="cf-btn" id="cf-copy" data-act><i class="fa-solid fa-copy"></i> ${t('copy')}</button>
        <button class="cf-btn" id="cf-export" data-act><i class="fa-solid fa-file-export"></i> ${t('exportJson')}</button>
        <button class="cf-btn cf-primary" id="cf-create" data-act><i class="fa-solid fa-user-plus"></i> ${t('createChar')}</button>
      </div>
    </div>`;
    document.body.appendChild(overlay);

    const s = getSettings();
    qs('#cf-concept').value = s.draft.concept;
    qs('#cf-ref').value = s.draft.refText;
    qs('#cf-imgnote').textContent = s.sendImages ? t('imgNote') : t('imgNoteOff');

    qs('#cf-close').onclick = closeWindow;
    overlay.addEventListener('mousedown', (e) => { if (e.target === overlay) closeWindow(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay?.classList.contains('cf-open')) closeWindow(); });

    qs('#cf-concept').oninput = (e) => { draft().concept = e.target.value; saveSettings(); };
    qs('#cf-ref').oninput = (e) => { draft().refText = e.target.value; saveSettings(); };

    qs('#cf-add-img').onclick = () => qs('#cf-file').click();
    qs('#cf-file').onchange = onPickImages;
    qs('#cf-gen').onclick = doGenerate;
    qs('#cf-cancel').onclick = () => state.abort?.abort();
    qs('#cf-compress').onclick = doCompress;
    qs('#cf-copy').onclick = doCopy;
    qs('#cf-export').onclick = doExport;
    qs('#cf-create').onclick = doCreate;
    qs('#cf-clear').onclick = doClear;

    renderImages();
    renderSections();
}

/* ───────────── Состояние ───────────── */

function setBusy(on, msg = '') {
    state.busy = on;
    overlay.querySelectorAll('[data-act]').forEach(b => { b.disabled = on; });
    qs('#cf-cancel').hidden = !on;
    setStatus(msg);
}

function setStatus(msg, isErr = false) {
    const st = qs('#cf-status');
    st.textContent = msg;
    st.classList.toggle('cf-err', isErr);
}

function errText(e) {
    if (e?.name === 'AbortError') return t('cancelled');
    const m = String(e?.message || e);
    if (m === 'NO_PROFILE') return t('errNoProfile');
    if (m === 'NO_SERVICE') return t('errNoService');
    return t('errFailed', { msg: m });
}

async function run(label, fn) {
    if (state.busy) return;
    state.abort = new AbortController();
    setBusy(true, label);
    try {
        await fn(state.abort.signal);
        setStatus(t('done'));
    } catch (e) {
        console.error('[CharForge]', e);
        setStatus(errText(e), true);
    } finally {
        setBusy(false, qs('#cf-status').textContent);
        state.abort = null;
    }
}

/* ───────────── Картинки ───────────── */

async function onPickImages(e) {
    const files = [...e.target.files];
    e.target.value = '';
    for (const f of files) {
        if (state.images.length >= MAX_IMAGES) break;
        try { state.images.push({ name: f.name, url: await shrinkImage(f) }); } catch (err) { console.warn(err); }
    }
    renderImages();
}

function renderImages() {
    const box = qs('#cf-images');
    box.innerHTML = '';
    state.images.forEach((img, i) => {
        const w = el('div', 'cf-thumb');
        const im = document.createElement('img');
        im.src = img.url;
        im.alt = img.name;
        const x = el('button', 'cf-thumb-x', '×');
        x.onclick = () => { state.images.splice(i, 1); renderImages(); };
        w.append(im, x);
        box.appendChild(w);
    });
}

/* ───────────── Генерация ───────────── */

function collect() {
    const s = getSettings();
    return { s, concept: qs('#cf-concept').value, refText: qs('#cf-ref').value };
}

function doGenerate() {
    const { s, concept, refText } = collect();
    if (!concept.trim() && !refText.trim() && !state.images.length) { setStatus(t('errEmpty'), true); return; }
    return run(t('generating'), async (signal) => {
        const msgs = buildGenerateMessages(s, concept || '(see references)', refText, state.images);
        const text = await requestModel(s.profileId, msgs, s.maxResponse, signal);
        const parsed = parseDossier(text);
        if (!Object.keys(parsed).length) throw new Error(t('errParse'));
        s.draft.dossier = parsed;
        saveSettings();
        renderSections();
    });
}

function doSection(sec, instruction) {
    const { s, concept, refText } = collect();
    return run(t('regenerating'), async (signal) => {
        const current = assemble(s, s.draft.dossier);
        const msgs = buildSectionMessages(s, sec, concept, refText, current, instruction);
        const text = await requestModel(s.profileId, msgs, Math.min(s.maxResponse, 1500), signal);
        const body = extractSection(text, sec);
        if (!body.trim()) throw new Error(t('errParse'));
        s.draft.dossier[sec.id] = body;
        saveSettings();
        renderSections();
    });
}

function doCompress() {
    const { s } = collect();
    const current = assemble(s, s.draft.dossier);
    if (!current) { setStatus(t('errNoDossier'), true); return; }
    return run(t('compressing'), async (signal) => {
        const text = await requestModel(s.profileId, buildCompressMessages(s, current), s.maxResponse, signal);
        const parsed = parseDossier(text);
        if (!Object.keys(parsed).length) throw new Error(t('errParse'));
        s.draft.dossier = { ...s.draft.dossier, ...parsed };
        saveSettings();
        renderSections();
    });
}

/* ───────────── Вывод анкеты ───────────── */

function autosize(ta) {
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight + 2}px`;
}

function renderSections() {
    const s = getSettings();
    const box = qs('#cf-sections');
    box.innerHTML = '';
    const secs = enabledSections(s).filter(x => s.draft.dossier[x.id] !== undefined);
    qs('#cf-empty').hidden = secs.length > 0;
    for (const sec of secs) {
        const card = el('div', 'cf-card');
        card.appendChild(el('div', 'cf-card-title', t(`sec.${sec.id}`)));
        const ta = el('textarea', 'cf-ta cf-ta-sec');
        ta.value = s.draft.dossier[sec.id] || '';
        ta.oninput = () => {
            s.draft.dossier[sec.id] = ta.value;
            autosize(ta);
            saveSettings();
            scheduleTokens();
        };
        card.appendChild(ta);
        const row = el('div', 'cf-row cf-sec-row');
        const inp = el('input', 'cf-input-line');
        inp.type = 'text';
        inp.placeholder = t('secWish');
        const btn = el('button', 'cf-btn cf-small');
        btn.dataset.act = '';
        btn.innerHTML = `<i class="fa-solid fa-rotate"></i> ${t('secRegen')}`;
        btn.onclick = () => doSection(sec, inp.value);
        row.append(inp, btn);
        card.appendChild(row);
        box.appendChild(card);
        requestAnimationFrame(() => autosize(ta));
    }
    updateTokens();
}

function scheduleTokens() {
    clearTimeout(state.tokenTimer);
    state.tokenTimer = setTimeout(updateTokens, 300);
}

async function updateTokens() {
    if (!overlay) return;
    const s = getSettings();
    const text = assemble(s, s.draft.dossier);
    const n = text ? await countTokens(text) : 0;
    const lbl = qs('#cf-tokens');
    lbl.textContent = t('tokens', { n, max: s.tokenBudget });
    const fill = qs('#cf-bar-fill');
    fill.style.width = `${Math.min(100, (n / s.tokenBudget) * 100)}%`;
    const over = n > s.tokenBudget;
    fill.classList.toggle('cf-over', over);
    lbl.classList.toggle('cf-over-text', over);
}

/* ───────────── Действия ───────────── */

async function doCopy() {
    const s = getSettings();
    const text = assemble(s, s.draft.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    await copyText(text);
    setStatus(t('copied'));
}

function resolveName(s) {
    let name = getName(s.draft.dossier);
    if (!name) name = (window.prompt(t('namePrompt')) || '').trim();
    return name;
}

function doExport() {
    const s = getSettings();
    const text = assemble(s, s.draft.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    const name = resolveName(s);
    if (!name) return;
    downloadJson(`${name.replace(/[^\w\-]+/g, '_')}.json`, toCardV2(name, text));
}

async function doCreate() {
    const s = getSettings();
    const text = assemble(s, s.draft.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    const name = resolveName(s);
    if (!name) return;
    try {
        await createCharacter(name, text);
        const msg = t('created', { name });
        setStatus(msg);
        window.toastr?.success(msg);
    } catch (e) {
        console.error('[CharForge]', e);
        const msg = t('errCreate', { msg: e.message });
        setStatus(msg, true);
        window.toastr?.error(msg);
    }
}

function doClear() {
    if (!window.confirm(t('clearConfirm'))) return;
    const s = getSettings();
    s.draft = structuredClone(DEFAULTS.draft);
    state.images = [];
    saveSettings();
    qs('#cf-concept').value = '';
    qs('#cf-ref').value = '';
    renderImages();
    renderSections();
    setStatus('');
}

/* ───────────── Панель настроек ───────────── */

function mountSettings() {
    const s = getSettings();
    document.getElementById('cf_settings')?.remove();
    const root = el('div');
    root.id = 'cf_settings';
    root.innerHTML = `
    <div class="inline-drawer">
      <div class="inline-drawer-toggle inline-drawer-header">
        <b>CharForge — ${t('title')}</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
      </div>
      <div class="inline-drawer-content cf-settings">
        <button class="menu_button" id="cf_s_open"><i class="fa-solid fa-id-card"></i> ${t('sOpen')}</button>

        <label>${t('sLang')}
          <select id="cf_s_lang" class="text_pole">
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </label>

        <label>${t('sProfile')}
          <select id="cf_s_profile" class="text_pole"></select>
        </label>
        <small class="cf-hint">${t('sProfileNote')}</small>

        <div class="cf-s-grid">
          <label>${t('sBudget')}<input id="cf_s_budget" type="number" class="text_pole" min="300" max="4000" step="50"></label>
          <label>${t('sMax')}<input id="cf_s_max" type="number" class="text_pole" min="500" max="16000" step="100"></label>
          <label>${t('sExamples')}<input id="cf_s_examples" type="number" class="text_pole" min="1" max="10"></label>
        </div>

        <label class="checkbox_label"><input id="cf_s_images" type="checkbox"><span>${t('sImages')}</span></label>

        <b>${t('sSections')}</b>
        <div id="cf_s_sections" class="cf-s-sections"></div>
        <small class="cf-hint">${t('sBasicNote')}</small>

        <b>${t('sColors')}</b>
        <div class="cf-s-colors">
          <label>${t('sAccent')}<input type="color" data-color="accent"></label>
          <label>${t('sBg')}<input type="color" data-color="bg"></label>
          <label>${t('sPanel')}<input type="color" data-color="panel"></label>
          <label>${t('sText')}<input type="color" data-color="text"></label>
        </div>
        <button class="menu_button" id="cf_s_reset">${t('sReset')}</button>
      </div>
    </div>`;
    (document.getElementById('extensions_settings2') || document.getElementById('extensions_settings')).appendChild(root);

    const q = (sel) => root.querySelector(sel);

    // язык
    const lang = q('#cf_s_lang');
    lang.value = s.lang;
    lang.onchange = () => {
        s.lang = lang.value;
        setLang(s.lang);
        saveSettings();
        destroyWindow();
        mountSettings();
        document.dispatchEvent(new CustomEvent('cf-lang'));
    };

    // профили (только имена и id, ключи недоступны)
    const sel = q('#cf_s_profile');
    const cur = document.createElement('option');
    cur.value = '';
    cur.textContent = t('sProfileCur');
    sel.appendChild(cur);
    for (const p of listProfiles()) {
        const o = document.createElement('option');
        o.value = p.id;
        o.textContent = p.name;
        sel.appendChild(o);
    }
    sel.value = [...sel.options].some(o => o.value === s.profileId) ? s.profileId : '';
    sel.onchange = () => { s.profileId = sel.value; saveSettings(); };
    sel.onfocus = () => {
        // подтягиваем актуальный список профилей при открытии
        const known = new Set([...sel.options].map(o => o.value));
        for (const p of listProfiles()) {
            if (known.has(p.id)) continue;
            const o = document.createElement('option');
            o.value = p.id;
            o.textContent = p.name;
            sel.appendChild(o);
        }
    };

    // числа
    const num = (id, key, min, max) => {
        const i = q(id);
        i.value = s[key];
        i.onchange = () => {
            const v = Math.min(max, Math.max(min, parseInt(i.value, 10) || DEFAULTS[key]));
            i.value = v;
            s[key] = v;
            saveSettings();
            destroyWindow(); // перестроить окно с новым лимитом
        };
    };
    num('#cf_s_budget', 'tokenBudget', 300, 4000);
    num('#cf_s_max', 'maxResponse', 500, 16000);
    num('#cf_s_examples', 'examples', 1, 10);

    const img = q('#cf_s_images');
    img.checked = s.sendImages;
    img.onchange = () => { s.sendImages = img.checked; saveSettings(); destroyWindow(); };

    // секции
    const box = q('#cf_s_sections');
    for (const sec of SECTIONS) {
        const lbl = el('label', 'checkbox_label');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = isOn(s, sec);
        cb.disabled = sec.id === 'basic';
        cb.onchange = () => { s.sections[sec.id] = cb.checked; saveSettings(); destroyWindow(); };
        lbl.append(cb, el('span', '', t(`sec.${sec.id}`)));
        box.appendChild(lbl);
    }

    // цвета
    root.querySelectorAll('[data-color]').forEach(inp => {
        const k = inp.dataset.color;
        inp.value = s.colors[k];
        inp.oninput = () => { s.colors[k] = inp.value; applyColors(); saveSettings(); };
    });
    q('#cf_s_reset').onclick = () => {
        s.colors = { ...DEFAULTS.colors };
        applyColors();
        saveSettings();
        root.querySelectorAll('[data-color]').forEach(inp => { inp.value = s.colors[inp.dataset.color]; });
    };

    q('#cf_s_open').onclick = openWindow;
}

/* ═══ index.js ═══ */
// CharForge: точка входа.
function addMenuButton() {
    const menu = document.getElementById('extensionsMenu');
    if (!menu) { setTimeout(addMenuButton, 500); return; }
    let item = document.getElementById('cf_wand');
    if (!item) {
        item = document.createElement('div');
        item.id = 'cf_wand';
        item.className = 'list-group-item flex-container flexGap5';
        item.innerHTML = '<div class="fa-solid fa-id-card extensionsMenuExtensionButton"></div><span></span>';
        item.addEventListener('click', openWindow);
        menu.appendChild(item);
    }
    item.querySelector('span').textContent = t('menu');
}

function registerSlash() {
    try {
        const { SlashCommandParser, SlashCommand } = SillyTavern.getContext();
        SlashCommandParser.addCommandObject(SlashCommand.fromProps({
            name: 'charforge',
            callback: () => { openWindow(); return ''; },
            helpString: 'Open CharForge (character dossier builder).',
        }));
    } catch (e) {
        console.warn('[CharForge] slash command not registered', e);
    }
}

jQuery(() => {
    const s = getSettings();
    setLang(s.lang);
    applyColors();
    mountSettings();
    addMenuButton();
    registerSlash();
    document.addEventListener('cf-lang', addMenuButton);
});
