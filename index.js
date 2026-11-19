// CharForge — конструктор персонажей для SillyTavern (единый файл, без зависимостей от подпапок).

/* ═══ i18n ═══ */
const D = {
    ru: {
        kindChar: 'Персонаж', kindPersona: 'Персона', conceptPersona: 'Описание персоны',
        pullPersona: 'Подтянуть из текущей персоны', pullPersonaNone: 'Описание текущей персоны пусто', pullPersonaDone: 'Описание персоны добавлено',
        applyPersona: 'Применить к персоне',
        personaApplied: 'Описание применено к текущей персоне «{name}»',
        personaReplace: 'В текущей персоне уже есть описание. Заменить его новым?',
        personaNoField: 'Поле описания персоны не найдено: текст скопирован в буфер обмена.',
        sPersonaBudget: 'Бюджет анкеты персоны (токены)',
        sRelNote: 'Для персоны взаимоотношения и первое сообщение не используются.',
        badgePersona: 'Персона', libApply: 'Применить к персоне',
        title: 'Конструктор персонажей',
        menu: 'Конструктор персонажей',
        tabCreate: 'Создание', tabLibrary: 'Библиотека', tabSettings: 'Настройки',
        close: 'Закрыть', clearAll: 'Очистить редактор',
        clearConfirm: 'Очистить имя, описание, референсы, анкету и первое сообщение? Библиотека не затрагивается.',
        name: 'Имя', namePh: 'Оставь пустым: ИИ придумает сам',
        concept: 'Описание персонажа',
        conceptPh: 'Опиши идею своими словами: кто это, какой характер, сеттинг, что важно сохранить. Можно кратко: ИИ додумает остальное.',
        refs: 'Референсы',
        refsPh: 'Текстовые референсы: цитаты, факты, «похож на…». Модель считает это каноном.',
        addImage: 'Картинка-референс',
        imgNote: 'Картинки-референсы видят только мультимодальные модели. Сжимаются до 768 px.',
        imgNoteOff: 'Отправка картинок модели выключена в настройках.',
        avatar: 'Аватар карточки', avatarPick: 'Выбрать аватар', avatarRemove: 'Убрать',
        avatarAsRef: 'Учитывать аватар как референс внешности',
        generate: 'Сгенерировать анкету', cancel: 'Отмена',
        generating: 'Генерирую…', compressing: 'Сжимаю…', regenerating: 'Перегенерирую секцию…', genFirstBusy: 'Пишу первое сообщение…',
        done: 'Готово',
        empty: 'Здесь появится анкета. Опиши персонажа слева и нажми «Сгенерировать».',
        tokens: '{n} / {max} токенов',
        compress: 'Сжать', copy: 'Копировать', copied: 'Скопировано',
        save: 'В библиотеку', saved: 'Сохранено в библиотеке',
        exportJson: 'Экспорт JSON', createChar: 'Создать персонажа',
        created: 'Персонаж «{name}» создан',
        secWish: 'Пожелание (необязательно)', secRegen: 'Перегенерировать', secGen: 'Сгенерировать',
        firstMes: 'Первое сообщение',
        scene: 'Сцена / ситуация (необязательно)', scenePh: 'Например: она встречает {{user}} в ночной таверне',
        genFirst: 'Сгенерировать первое сообщение', regenFirst: 'Перегенерировать',
        firstPh: 'Первое сообщение появится здесь. Оно хранится отдельно от анкеты и не входит в её токены.',
        words: '{n} / {max} слов',
        errNoProfile: 'Не выбран профиль подключения. Выбери его на вкладке «Настройки» или в Connection Manager.',
        errNoService: 'Connection Manager недоступен. Включи его в Extensions → Manage extensions.',
        errEmpty: 'Сначала опиши персонажа.',
        errParse: 'Не удалось разобрать ответ модели. Попробуй ещё раз.',
        errNoDossier: 'Сначала сгенерируй анкету.',
        errMissing: 'Секции пропущены или обрезаны: {list}. Нажми «Сгенерировать» у нужной секции.',
        completing: 'Дописываю секцию: {list}…',
        errFailed: 'Ошибка запроса: {msg}',
        errCreate: 'Не удалось создать персонажа: {msg}',
        cancelled: 'Отменено',
        namePrompt: 'Имя персонажа не найдено. Введи имя:',
        // библиотека
        libSearch: 'Поиск по библиотеке…', libEmpty: 'Библиотека пуста. Сохрани персонажа кнопкой «В библиотеку».',
        libNone: 'Ничего не найдено.',
        libEdit: 'Открыть в редакторе', libToST: 'Создать в Таверне', libJson: 'Экспорт JSON', libDelete: 'Удалить',
        libDeleteConfirm: 'Удалить «{name}» из библиотеки?',
        libLoadConfirm: 'Заменить текущее содержимое редактора выбранным персонажем?',
        libNote: 'Библиотека хранится в настройках Таверны (вместе с аватарами).',
        untitled: 'Без имени', tokShort: 'ток.',
        // настройки
        gGeneral: 'Основное', gGen: 'Генерация', gFirst: 'Первое сообщение', gTheme: 'Тема', gSections: 'Секции анкеты',
        sLang: 'Язык интерфейса',
        sProfile: 'Профиль подключения', sProfileCur: '— Текущий профиль Таверны —',
        sProfileNote: 'Используются только профили Connection Manager. Ключи API расширение не видит.',
        sBudget: 'Бюджет анкеты персонажа (токены)', sMax: 'Лимит ответа модели (токены)', sExamples: 'Примеров реплик',
        sCreativity: 'Свобода додумывания',
        cStrict: 'Строго', cBalanced: 'Баланс', cFree: 'Смело',
        cStrictH: 'Только то, что следует из описания.',
        cBalancedH: 'Заполняет пробелы правдоподобными деталями.',
        cFreeH: 'Смелые детали, секреты, противоречия, события прошлого.',
        sPeople: 'Додумывать окружение (родные, друзья, враги с именами)',
        sImages: 'Отправлять картинки-референсы модели',
        sFirstWords: 'Лимит первого сообщения (слов)',
        sFirstLang: 'Язык первого сообщения', lAuto: 'Как в описании', lEn: 'Английский', lRu: 'Русский',
        sFirstFmt: 'Оформление', fAst: '*Действия* и «реплики»', fPlain: 'Обычный текст', fLit: '«Речь» + обычный текст (литературный стиль)',
        sBasicNote: 'Базовые данные включены всегда.',
        sOpen: 'Открыть конструктор',
        thAuto: 'Авто', thMidnight: 'Полночь', thRose: 'Роза', thForest: 'Лес', thPaper: 'Бумага',
        thAutoH: 'Авто подстраивается под цвета текущей темы Таверны.',
        'sec.basic': 'Базовые данные', 'sec.appearance': 'Внешность', 'sec.personality': 'Характер',
        'sec.backstory': 'Прошлое', 'sec.skills': 'Навыки', 'sec.details': 'Детали образа',
        'sec.sexuality': 'Сексуальность', 'sec.relationships': 'Взаимоотношения', 'sec.speech': 'Манера речи',
    },
    en: {
        kindChar: 'Character', kindPersona: 'Persona', conceptPersona: 'Persona concept',
        pullPersona: 'Pull from current persona', pullPersonaNone: 'The current persona description is empty', pullPersonaDone: 'Persona description added',
        applyPersona: 'Apply to persona',
        personaApplied: 'Description applied to the current persona "{name}"',
        personaReplace: 'The current persona already has a description. Replace it with the new one?',
        personaNoField: 'Persona description field not found: the text was copied to the clipboard.',
        sPersonaBudget: 'Persona dossier budget (tokens)',
        sRelNote: 'Relationships and the first message are not used for a persona.',
        badgePersona: 'Persona', libApply: 'Apply to persona',
        title: 'Character Forge',
        menu: 'Character Forge',
        tabCreate: 'Create', tabLibrary: 'Library', tabSettings: 'Settings',
        close: 'Close', clearAll: 'Clear editor',
        clearConfirm: 'Clear name, concept, references, dossier and first message? The library is not affected.',
        name: 'Name', namePh: 'Leave empty: the AI will invent one',
        concept: 'Character concept',
        conceptPh: 'Describe the idea in your own words: who they are, personality, setting, what must be kept. Short is fine, the AI fills in the rest.',
        refs: 'References',
        refsPh: 'Text references: quotes, facts, "looks like…". The model treats them as canon.',
        addImage: 'Reference image',
        imgNote: 'Reference images only work with multimodal models. Downscaled to 768 px.',
        imgNoteOff: 'Sending images to the model is disabled in settings.',
        avatar: 'Card avatar', avatarPick: 'Choose avatar', avatarRemove: 'Remove',
        avatarAsRef: 'Also use the avatar as an appearance reference',
        generate: 'Generate dossier', cancel: 'Cancel',
        generating: 'Generating…', compressing: 'Compressing…', regenerating: 'Regenerating section…', genFirstBusy: 'Writing the first message…',
        done: 'Done',
        empty: 'The dossier will appear here. Describe a character on the left and press "Generate".',
        tokens: '{n} / {max} tokens',
        compress: 'Compress', copy: 'Copy', copied: 'Copied',
        save: 'To library', saved: 'Saved to the library',
        exportJson: 'Export JSON', createChar: 'Create character',
        created: 'Character "{name}" created',
        secWish: 'Instruction (optional)', secRegen: 'Regenerate', secGen: 'Generate',
        firstMes: 'First message',
        scene: 'Scene / situation (optional)', scenePh: 'E.g. she meets {{user}} in a night tavern',
        genFirst: 'Generate first message', regenFirst: 'Regenerate',
        firstPh: 'The first message appears here. It is stored separately and does not count toward the dossier tokens.',
        words: '{n} / {max} words',
        errNoProfile: 'No connection profile selected. Pick one in the Settings tab or in Connection Manager.',
        errNoService: 'Connection Manager is unavailable. Enable it in Extensions → Manage extensions.',
        errEmpty: 'Describe the character first.',
        errParse: 'Could not parse the model response. Try again.',
        errNoDossier: 'Generate a dossier first.',
        errMissing: 'Sections skipped or cut off: {list}. Press "Generate" on the section you need.',
        completing: 'Completing section: {list}…',
        errFailed: 'Request failed: {msg}',
        errCreate: 'Could not create character: {msg}',
        cancelled: 'Cancelled',
        namePrompt: 'Character name not found. Enter a name:',
        libSearch: 'Search the library…', libEmpty: 'The library is empty. Save a character with "To library".',
        libNone: 'Nothing found.',
        libEdit: 'Open in editor', libToST: 'Create in SillyTavern', libJson: 'Export JSON', libDelete: 'Delete',
        libDeleteConfirm: 'Delete "{name}" from the library?',
        libLoadConfirm: 'Replace the current editor contents with the selected character?',
        libNote: 'The library is stored in SillyTavern settings (avatars included).',
        untitled: 'Untitled', tokShort: 'tok.',
        gGeneral: 'General', gGen: 'Generation', gFirst: 'First message', gTheme: 'Theme', gSections: 'Dossier sections',
        sLang: 'Interface language',
        sProfile: 'Connection profile', sProfileCur: '— Current SillyTavern profile —',
        sProfileNote: 'Only Connection Manager profiles are used. The extension never sees API keys.',
        sBudget: 'Character dossier budget (tokens)', sMax: 'Model response limit (tokens)', sExamples: 'Dialogue examples',
        sCreativity: 'Creative freedom',
        cStrict: 'Strict', cBalanced: 'Balanced', cFree: 'Bold',
        cStrictH: 'Only what follows from the concept.',
        cBalancedH: 'Fills gaps with plausible details.',
        cFreeH: 'Bold details, secrets, contradictions, past events.',
        sPeople: 'Invent surrounding people (named family, allies, enemies)',
        sImages: 'Send reference images to the model',
        sFirstWords: 'First message limit (words)',
        sFirstLang: 'First message language', lAuto: 'Same as concept', lEn: 'English', lRu: 'Russian',
        sFirstFmt: 'Formatting', fAst: '*Actions* and "speech"', fPlain: 'Plain prose', fLit: '"Speech" + plain text (literary style)',
        sBasicNote: 'Basic info is always on.',
        sOpen: 'Open Character Forge',
        thAuto: 'Auto', thMidnight: 'Midnight', thRose: 'Rose', thForest: 'Forest', thPaper: 'Paper',
        thAutoH: 'Auto follows the colors of the current SillyTavern theme.',
        'sec.basic': 'Basic info', 'sec.appearance': 'Appearance', 'sec.personality': 'Personality',
        'sec.backstory': 'Backstory', 'sec.skills': 'Skills', 'sec.details': 'Extra details',
        'sec.sexuality': 'Sexuality', 'sec.relationships': 'Relationships', 'sec.speech': 'Speech',
    },
};

let LANG = 'ru';
const setLang = (l) => { LANG = D[l] ? l : 'ru'; };
function t(key, vars = {}) {
    let s = D[LANG][key] ?? D.ru[key] ?? key;
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
}

/* ═══ styles (встроены в файл) ═══ */
const CF_CSS = "/* CharForge */\nbody.cf-lock { overflow: hidden; }\n\n/* ── Темы ── */\n.cf-overlay {\n    --cf-accent: #a07cf0; --cf-bg: #17171d; --cf-panel: #22222b; --cf-text: #ecebf2;\n    --cf-on-accent: #fff; --cf-err: #ff8a8a;\n}\n.cf-overlay[data-theme=\"midnight\"] { --cf-accent: #a07cf0; --cf-bg: #17171d; --cf-panel: #22222b; --cf-text: #ecebf2; }\n.cf-overlay[data-theme=\"rose\"]     { --cf-accent: #e0709a; --cf-bg: #1f1519; --cf-panel: #2b1d23; --cf-text: #f4e8ec; }\n.cf-overlay[data-theme=\"forest\"]   { --cf-accent: #5fbf8a; --cf-bg: #111a16; --cf-panel: #1a2822; --cf-text: #e4efe8; --cf-on-accent: #0c1511; }\n.cf-overlay[data-theme=\"paper\"]    { --cf-accent: #9a5b2e; --cf-bg: #f6f1e7; --cf-panel: #ebe3d3; --cf-text: #2b2620; --cf-err: #b3261e; }\n/* Авто: цвета текущей темы Таверны */\n.cf-overlay[data-theme=\"auto\"] {\n    --cf-bg: var(--SmartThemeBlurTintColor, #17171d);\n    --cf-text: var(--SmartThemeBodyColor, #ecebf2);\n    --cf-accent: var(--SmartThemeQuoteColor, #a07cf0);\n    --cf-panel: color-mix(in srgb, var(--cf-text) 9%, var(--cf-bg));\n}\n\n.cf-overlay {\n    position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9000;\n    display: none; align-items: center; justify-content: center;\n    background: rgba(0, 0, 0, .62);\n    backdrop-filter: blur(3px);\n}\n.cf-overlay.cf-open { display: flex; }\n\n.cf-window {\n    width: min(1060px, 96vw);\n    height: min(92vh, 940px);\n    height: min(92dvh, 940px);\n    display: flex; flex-direction: column;\n    background: linear-gradient(var(--cf-bg), var(--cf-bg)), #121216;\n    color: var(--cf-text);\n    border: 1px solid var(--cf-accent);\n    border-radius: 14px; overflow: hidden; max-width: 100%;\n    box-shadow: 0 10px 40px rgba(0, 0, 0, .5);\n    font-size: 15px;\n}\n\n.cf-head, .cf-foot {\n    display: flex; align-items: center; gap: 8px;\n    padding: 10px 14px; background: var(--cf-panel);\n}\n.cf-head { justify-content: space-between; }\n.cf-foot { flex-wrap: wrap; justify-content: flex-end; border-top: 1px solid color-mix(in srgb, var(--cf-accent) 35%, transparent); padding-bottom: max(10px, env(safe-area-inset-bottom)); }\n.cf-title { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.1em; }\n.cf-title i { color: var(--cf-accent); }\n.cf-head-actions { display: flex; gap: 6px; }\n\n/* Вкладки */\n.cf-tabs { display: flex; gap: 4px; padding: 0 10px; background: var(--cf-panel); border-bottom: 1px solid color-mix(in srgb, var(--cf-accent) 35%, transparent); }\n.cf-tab {\n    display: flex; align-items: center; gap: 8px; min-width: 0;\n    background: none; border: none; border-bottom: 3px solid transparent;\n    color: var(--cf-text); opacity: .7; cursor: pointer;\n    padding: 10px 14px; font: inherit; font-size: .95em;\n}\n.cf-tab:hover { opacity: 1; }\n.cf-tab.cf-active { opacity: 1; border-bottom-color: var(--cf-accent); font-weight: 600; }\n.cf-tab i { color: var(--cf-accent); }\n.cf-tab span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.cf-view { display: none; flex: 1; min-height: 0; flex-direction: column; }\n.cf-view.cf-active { display: flex; }\n\n.cf-body {\n    flex: 1; min-height: 0; overflow-y: auto;\n    display: grid; grid-template-columns: minmax(280px, 38%) minmax(0, 1fr);\n    gap: 14px; padding: 14px; align-items: start; overflow-x: hidden;\n}\n.cf-col, .cf-card, .cf-field, .cf-group, .cf-view { min-width: 0; }\n.cf-col { display: flex; flex-direction: column; gap: 8px; }\n\n.cf-label { font-weight: 600; font-size: .9em; opacity: .85; margin-top: 2px; }\n\n.cf-ta, .cf-input-line, .cf-select {\n    width: 100%; box-sizing: border-box;\n    background: var(--cf-panel); color: var(--cf-text);\n    border: 1px solid color-mix(in srgb, var(--cf-text) 18%, transparent);\n    border-radius: 8px; padding: 8px 10px;\n    font: inherit; font-size: 16px; line-height: 1.4;\n}\n.cf-ta { resize: vertical; }\n.cf-select { max-width: 100%; text-overflow: ellipsis; }\n.cf-body, .cf-lib-grid, .cf-settings-body { overscroll-behavior: contain; }\n.cf-ta:focus, .cf-input-line:focus, .cf-select:focus { outline: none; border-color: var(--cf-accent); }\n.cf-ta-sec, .cf-ta-first { resize: none; overflow: hidden; font-size: 14px; }\n.cf-ta-sec { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }\n.cf-ta-first { min-height: 110px; }\n\n.cf-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }\n.cf-between { justify-content: space-between; }\n.cf-btn, .cf-icon-btn {\n    display: inline-flex; align-items: center; justify-content: center; gap: 6px;\n    background: var(--cf-panel); color: var(--cf-text);\n    border: 1px solid color-mix(in srgb, var(--cf-accent) 55%, transparent);\n    border-radius: 8px; padding: 8px 14px; cursor: pointer;\n    font: inherit; font-size: .95em; min-height: 40px;\n    transition: background .15s, transform .05s;\n}\n.cf-btn:hover:not(:disabled), .cf-icon-btn:hover:not(:disabled) { background: color-mix(in srgb, var(--cf-accent) 25%, var(--cf-panel)); }\n.cf-btn:active:not(:disabled) { transform: scale(.98); }\n.cf-btn:disabled, .cf-icon-btn:disabled { opacity: .45; cursor: not-allowed; }\n.cf-btn[hidden] { display: none; }\n.cf-primary { background: var(--cf-accent); color: var(--cf-on-accent); border-color: var(--cf-accent); font-weight: 600; }\n.cf-primary:hover:not(:disabled) { background: color-mix(in srgb, var(--cf-accent) 85%, #fff); }\n.cf-danger { border-color: var(--cf-err); }\n.cf-danger-text { color: var(--cf-err); }\n.cf-small { padding: 4px 10px; min-height: 34px; }\n.cf-icon-btn { padding: 6px 10px; min-height: 36px; border-color: transparent; background: transparent; }\n\n.cf-note { font-size: .8em; opacity: .65; }\n.cf-status { min-height: 1.3em; font-size: .9em; color: var(--cf-accent); }\n.cf-status.cf-err { color: var(--cf-err); }\n.cf-check { display: flex; align-items: flex-start; gap: 8px; font-size: .9em; cursor: pointer; }\n.cf-check input { margin-top: 3px; accent-color: var(--cf-accent); }\n\n.cf-images { display: flex; flex-wrap: wrap; gap: 8px; }\n.cf-images:empty { display: none; }\n.cf-thumb { position: relative; width: 72px; height: 72px; }\n.cf-thumb img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; border: 1px solid var(--cf-accent); }\n.cf-thumb-x {\n    position: absolute; top: -6px; right: -6px; width: 22px; height: 22px;\n    border-radius: 50%; border: none; cursor: pointer;\n    background: #d06060; color: #fff; line-height: 1; font-size: 15px;\n}\n\n.cf-avatar-row { display: flex; gap: 12px; align-items: flex-start; }\n.cf-avatar-side { display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 0; }\n.cf-avatar {\n    flex: none; width: 84px; height: 112px; border-radius: 10px; overflow: hidden;\n    background: var(--cf-panel); border: 1px dashed color-mix(in srgb, var(--cf-accent) 60%, transparent);\n    display: flex; align-items: center; justify-content: center; color: var(--cf-accent); font-size: 28px;\n}\n.cf-avatar img { width: 100%; height: 100%; object-fit: cover; }\n\n.cf-meter { display: flex; align-items: center; gap: 10px; font-size: .9em; position: sticky; top: -14px; background: var(--cf-bg); padding: 6px 0; z-index: 1; }\n.cf-meter span { white-space: nowrap; font-variant-numeric: tabular-nums; }\n.cf-over-text { color: var(--cf-err); font-weight: 600; }\n.cf-bar { flex: 1; height: 8px; background: var(--cf-panel); border-radius: 4px; overflow: hidden; }\n#cf-bar-fill { height: 100%; width: 0; background: var(--cf-accent); transition: width .25s; }\n#cf-bar-fill.cf-over { background: var(--cf-err); }\n\n#cf-sections { display: flex; flex-direction: column; gap: 10px; }\n.cf-output { gap: 10px; }\n.cf-card { background: color-mix(in srgb, var(--cf-panel) 60%, transparent); border: 1px solid color-mix(in srgb, var(--cf-text) 12%, transparent); border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 6px; }\n.cf-card-title { font-weight: 700; color: var(--cf-accent); }\n.cf-sec-row .cf-input-line { flex: 1; min-width: 120px; padding: 5px 8px; font-size: 14px; }\n.cf-empty { opacity: .55; text-align: center; padding: 30px 10px; }\n.cf-empty[hidden] { display: none; }\n\n/* Библиотека */\n.cf-lib-bar { display: flex; align-items: center; gap: 10px; padding: 12px 14px 0; }\n.cf-lib-grid { flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; padding: 12px 14px; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr)); gap: 10px; align-content: start; }\n.cf-lib-grid > .cf-empty { grid-column: 1 / -1; }\n.cf-lib-note { padding: 6px 14px 10px; text-align: center; }\n.cf-lib-card { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 10px; padding: 10px; background: color-mix(in srgb, var(--cf-panel) 70%, transparent); border: 1px solid color-mix(in srgb, var(--cf-text) 12%, transparent); border-radius: 10px; }\n.cf-lib-thumb { width: 64px; height: 86px; border-radius: 8px; overflow: hidden; background: var(--cf-panel); display: flex; align-items: center; justify-content: center; color: var(--cf-accent); font-size: 22px; }\n.cf-lib-thumb img { width: 100%; height: 100%; object-fit: cover; }\n.cf-lib-info { min-width: 0; display: flex; flex-direction: column; gap: 2px; }\n.cf-lib-name { display: flex; align-items: center; gap: 8px; min-width: 0; font-weight: 700; }\n.cf-lib-name-t { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.cf-lib-snippet { font-size: .85em; opacity: .8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }\n.cf-lib-actions { grid-column: 1 / -1; display: flex; gap: 4px; justify-content: flex-end; border-top: 1px solid color-mix(in srgb, var(--cf-text) 10%, transparent); padding-top: 6px; }\n.cf-lib-btn { border: 1px solid color-mix(in srgb, var(--cf-accent) 40%, transparent); min-width: 40px; }\n\n/* Настройки */\n.cf-settings-body { flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; padding: 14px; display: flex; flex-direction: column; gap: 16px; }\n.cf-group { display: flex; flex-direction: column; gap: 10px; padding: 12px; background: color-mix(in srgb, var(--cf-panel) 60%, transparent); border: 1px solid color-mix(in srgb, var(--cf-text) 12%, transparent); border-radius: 10px; }\n.cf-group-title { font-weight: 700; color: var(--cf-accent); }\n.cf-field { display: flex; flex-direction: column; gap: 4px; }\n.cf-field-label { font-size: .9em; font-weight: 600; opacity: .9; }\n.cf-s-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr)); gap: 10px; }\n.cf-s-sections { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(170px, 100%), 1fr)); gap: 8px 12px; }\n.cf-swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(96px, 100%), 1fr)); gap: 8px; }\n.cf-swatch {\n    display: flex; flex-direction: column; align-items: center; gap: 6px;\n    padding: 10px 6px; border-radius: 10px; cursor: pointer; font: inherit; font-size: .85em;\n    background: var(--sw-bg); color: var(--cf-text);\n    border: 2px solid transparent; outline: 1px solid color-mix(in srgb, var(--cf-text) 20%, transparent);\n}\n.cf-swatch.cf-sw-auto { background: linear-gradient(135deg, #17171d 50%, #f6f1e7 50%); }\n.cf-swatch.cf-active { border-color: var(--cf-accent); outline-color: var(--cf-accent); }\n.cf-sw-dot { width: 22px; height: 22px; border-radius: 50%; background: var(--sw-ac); border: 2px solid rgba(255,255,255,.5); }\n.cf-sw-name { background: rgba(0,0,0,.55); color: #fff; padding: 1px 8px; border-radius: 6px; }\n\n/* Панель в Extensions */\n#cf_settings .menu_button { width: 100%; }\n\n/* Телефон и низкие экраны: окно занимает весь экран и не вылезает за его пределы.\n   Размер берётся от fixed-оверлея (inset: 0), а не от vh/dvh, чтобы не зависеть от адресной строки браузера. */\n@media (max-width: 720px), (max-height: 520px) {\n    .cf-overlay { align-items: stretch; justify-content: stretch; backdrop-filter: none; }\n    .cf-window {\n        width: 100%; height: 100%;\n        max-width: 100%; max-height: 100%;\n        border-radius: 0; border: none;\n        padding-left: env(safe-area-inset-left, 0px); padding-right: env(safe-area-inset-right, 0px);\n        box-shadow: none;\n    }\n    .cf-head { padding-top: max(8px, env(safe-area-inset-top, 0px)); }\n}\n@media (max-width: 720px) {\n    .cf-window { font-size: 14px; }\n    /* 16px в полях ввода: иначе мобильные браузеры приближают страницу при фокусе */\n    .cf-overlay input, .cf-overlay textarea, .cf-overlay select,\n    .cf-ta-sec, .cf-ta-first, .cf-sec-row .cf-input-line { font-size: 16px; }\n    .cf-tabs { padding: 0 4px; }\n    .cf-tab { flex: 1 1 0; justify-content: center; padding: 10px 4px; gap: 5px; font-size: .88em; }\n    .cf-body { grid-template-columns: minmax(0, 1fr); padding: 10px; gap: 12px; }\n    .cf-meter { top: -10px; }\n    .cf-lib-grid { grid-template-columns: minmax(0, 1fr); padding: 10px; }\n    .cf-lib-bar { padding: 10px 10px 0; }\n    .cf-settings-body { padding: 10px; }\n    .cf-group { padding: 10px; }\n    /* нижняя панель: одна строка, у второстепенных кнопок только иконки */\n    .cf-foot { flex-wrap: nowrap; gap: 6px; padding: 8px 10px max(8px, env(safe-area-inset-bottom, 0px)); }\n    .cf-foot .cf-btn { flex: 1 1 0; min-width: 40px; padding: 8px 6px; }\n    .cf-foot .cf-btn .cf-bl { display: none; }\n    .cf-foot .cf-primary { flex: 3 1 0; }\n    .cf-foot .cf-primary .cf-bl { display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .cf-avatar { width: 72px; height: 96px; }\n}\n@media (max-height: 520px) {\n    .cf-head { padding-bottom: 4px; }\n    .cf-tab { padding: 6px 10px; }\n    .cf-foot { padding-top: 6px; }\n    .cf-btn { min-height: 34px; }\n}\n\n/* Режим: персонаж / персона */\n.cf-overlay .cf-hide { display: none !important; }\n.cf-seg { display: grid; grid-template-columns: 1fr 1fr; padding: 3px; gap: 3px; background: var(--cf-panel); border: 1px solid color-mix(in srgb, var(--cf-text) 14%, transparent); border-radius: 10px; }\n.cf-seg button { display: flex; align-items: center; justify-content: center; gap: 8px; min-width: 0; border: none; background: transparent; color: var(--cf-text); opacity: .7; font: inherit; font-weight: 600; padding: 8px 10px; border-radius: 8px; cursor: pointer; }\n.cf-seg button.cf-active { background: var(--cf-accent); color: var(--cf-on-accent); opacity: 1; }\n.cf-seg button span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.cf-badge { flex: none; font-size: .7em; font-weight: 600; padding: 1px 8px; border-radius: 999px; background: color-mix(in srgb, var(--cf-accent) 25%, transparent); color: var(--cf-accent); vertical-align: middle; }\n";

/* ═══ schema ═══ */
const KEY = 'charforge';

const SECTIONS = [
    {
        id: 'basic', title: 'Basic', weight: 0.08, fields: [
            { key: 'Name', hint: 'real name; the only place it appears' },
            { key: 'Nicknames', hint: '2-4 nicknames / what friends, enemies, lovers call them' },
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
            { key: 'Family', hint: (s) => s.inventPeople ? 'named relatives, each with relation and 1-3 words of detail (invent if not given); "none" only if explicitly orphaned/alone' : 'relatives mentioned in the input, otherwise "none"' },
            { key: 'Allies', hint: (s) => s.inventPeople ? 'named friends/allies, each with relation and 1-3 words of detail (invent if not given)' : 'friends/allies mentioned in the input, otherwise "none"' },
            { key: 'Enemies', hint: (s) => s.inventPeople ? 'named rivals/antagonists, each with the reason for conflict (invent if not given)' : 'rivals/antagonists mentioned in the input, otherwise "none"' },
            { key: 'Toward {{user}}', hint: 'initial attitude and dynamic toward {{user}}; always fill, infer from the concept' },
        ],
    },
    {
        id: 'speech', title: 'Speech', weight: 0.16, fields: [
            { key: 'Tone', hint: 'slang / formal / dry / emotional, pace' },
            { key: 'Verbal tics', hint: 'filler words, repeated phrases, accent' },
            {
                key: 'Examples',
                hint: (s) => `${examplesOf(s)} short in-character lines, each on its own line starting with "- ", covering greeting, annoyance, affection, teasing${s.sections.sexuality ? ', flirting/kiss' : ''}`,
            },
        ],
    },
];

/** Темы. Цвета описаны в style.css; здесь только превью для переключателя. */
/** Урезанная версия анкеты для персоны (юзера): меньше полей, без взаимоотношений. */
const PERSONA_FIELDS = {
    basic: ['Name', 'Gender', 'Age', 'Species', 'Occupation'],
    personality: ['Outer', 'Inner', 'Traits', 'Fears/Weaknesses', 'Habits', 'Likes', 'Dislikes'],
    details: ['Goals', 'Trivia'],
    speech: ['Tone', 'Verbal tics'],
};
const PERSONA_WEIGHTS = { speech: 0.08, details: 0.05 };
for (const sec of SECTIONS) {
    if (sec.id === 'relationships') sec.noPersona = true;
    if (PERSONA_FIELDS[sec.id]) sec.pfields = sec.fields.filter(f => PERSONA_FIELDS[sec.id].includes(f.key));
    if (PERSONA_WEIGHTS[sec.id]) sec.pweight = PERSONA_WEIGHTS[sec.id];
}

const THEMES = [
    { id: 'auto', bg: '#17171d', ac: '#f6f1e7' },
    { id: 'midnight', bg: '#17171d', ac: '#a07cf0' },
    { id: 'rose', bg: '#1f1519', ac: '#e0709a' },
    { id: 'forest', bg: '#111a16', ac: '#5fbf8a' },
    { id: 'paper', bg: '#f6f1e7', ac: '#9a5b2e' },
];

const DEFAULT_DRAFT = {
    kind: 'char', name: '', concept: '', refText: '', dossier: {}, firstMes: '', scene: '',
    avatar: '', avatarAsRef: false, libraryId: '',
};

const DEFAULTS = {
    lang: 'ru',
    theme: 'auto',
    profileId: '',
    tokenBudget: 1000,
    personaBudget: 700,
    maxResponse: 4200,
    examples: 4,
    creativity: 'balanced',
    inventPeople: true,
    sendImages: true,
    firstMesWords: 300,
    firstMesLang: 'auto',
    firstMesFmt: 'asterisks',
    sections: Object.fromEntries(SECTIONS.map(s => [s.id, true])),
    draft: DEFAULT_DRAFT,
    library: [],
};

function getSettings() {
    const store = SillyTavern.getContext().extensionSettings;
    if (!store[KEY] || typeof store[KEY] !== 'object') store[KEY] = {};
    const s = store[KEY];
    if (!s._v) { if (s.maxResponse === 3000) s.maxResponse = 4200; s._v = 2; } // миграция: новый лимит по умолчанию
    for (const [k, v] of Object.entries(DEFAULTS)) if (s[k] === undefined) s[k] = structuredClone(v);
    if (!s.sections || typeof s.sections !== 'object') s.sections = {};
    for (const [k, v] of Object.entries(DEFAULTS.sections)) if (s.sections[k] === undefined) s.sections[k] = v;
    if (!s.draft || typeof s.draft !== 'object') s.draft = {};
    for (const [k, v] of Object.entries(DEFAULT_DRAFT)) if (s.draft[k] === undefined) s.draft[k] = structuredClone(v);
    if (!Array.isArray(s.library)) s.library = [];
    return s;
}
const saveSettings = () => SillyTavern.getContext().saveSettingsDebounced();
const isOn = (s, sec) => sec.id === 'basic' || !!s.sections[sec.id];

/* Режим «персона»: свой бюджет, меньше полей, без взаимоотношений и первого сообщения. */
const isPersona = (s) => s.draft?.kind === 'persona';
const budgetOf = (s) => (isPersona(s) ? s.personaBudget : s.tokenBudget);
const examplesOf = (s) => (isPersona(s) ? Math.min(2, s.examples) : s.examples);
const secFields = (sec, s) => (isPersona(s) && sec.pfields) || sec.fields;
const secWeight = (sec, s) => (isPersona(s) && sec.pweight) || sec.weight;

/* ═══ prompts ═══ */
const WORDS_PER_TOKEN = 0.72;
const enabledSections = (s) => SECTIONS.filter(x => isOn(s, x) && !(isPersona(s) && x.noPersona));
const nameLabel = (s) => (isPersona(s) ? 'PERSONA NAME' : 'CHARACTER NAME');
const wordBudget = (tokens) => Math.max(40, Math.round(tokens * WORDS_PER_TOKEN * 0.92));
const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);

const CREATIVITY_RULES = {
    strict: 'Stay close to the input: add only details strongly implied by the concept or references. Keep unmentioned aspects short and generic; do NOT invent major backstory events. Input facts always stay true.',
    balanced: 'Fill the gaps: invent plausible, fitting details so the character feels complete, specific and coherent, including small backstory facts and habits. Prefer concrete details over generic ones. Input facts always stay true.',
    free: 'Be bold and inventive: add distinctive hooks, secrets, inner contradictions, backstory events and memorable quirks that fit the concept. Avoid cliches. Input facts always stay true.',
};

/** denom: секции, по которым делится бюджет (для одной секции передаём все включённые). */
function skeleton(s, secs, denom = secs) {
    const total = wordBudget(budgetOf(s));
    const wsum = denom.reduce((a, x) => a + secWeight(x, s), 0);
    return secs.map(sec => {
        const w = Math.max(8, Math.round(total * secWeight(sec, s) / wsum));
        const lines = secFields(sec, s).map(f => {
            const hint = typeof f.hint === 'function' ? f.hint(s) : f.hint;
            return `${f.key}: <${hint}>`;
        });
        return `[${sec.title}] (~${w} words)\n${lines.join('\n')}`;
    }).join('\n\n');
}

function rules(s, secs, name, sectionWords = 0) {
    const words = wordBudget(budgetOf(s));
    const r = [
        'Output ONLY the dossier: no preface, no commentary, no markdown, no code fences.',
        'Use exactly the section headers in square brackets and exactly the field keys from the skeleton, in the same order, one field per line. Do NOT copy the word targets or the <hints>.',
        'Never omit a section or a field. Every field must contain content.',
        'Write terse fragments separated by commas or semicolons. No full sentences, no filler, no flowery prose, no repetition between fields.',
        sectionWords
            ? `HARD LIMIT: this section is at most ${sectionWords} words. Every field must still be present.`
            : `HARD LIMIT: the whole dossier is at most ${words} words (about ${budgetOf(s)} tokens). Respect the per-section word targets. Plan the length so the LAST section is complete: if you run long, shorten earlier fields instead of cutting off the end.`,
        CREATIVITY_RULES[s.creativity] || CREATIVITY_RULES.balanced,
        isPersona(s)
            ? 'This is a PERSONA: the profile of the user\'s own character. Refer to them as {{user}}; never use {{char}}. The real name appears only in the Name field. Describe stable traits only; never write {{user}}\'s dialogue, actions or feelings inside a scene.'
            : 'Write {{char}} for the character and {{user}} for the user\'s character. The real name appears only in the Name field.',
        name ? `The ${isPersona(s) ? 'persona' : 'character'}'s name is "${name}": use it exactly in the Name field.` : 'Invent a fitting name for the Name field.',
        'Write in English.',
    ];
    if (isPersona(s)) r.push('Keep it simple and practical: only the essentials that make the persona recognizable.');
    if (secs.some(x => x.id === 'relationships')) {
        r.push(s.inventPeople
            ? 'Relationships: invent specific named people around the character (family, allies, enemies) with a few words on each relation.'
            : 'Relationships: use only people mentioned in the input; otherwise write "none".');
    }
    if (secs.some(x => x.id === 'sexuality')) {
        r.push('The Sexuality section applies to adults only: if the character is under 18, write N/A in each of its fields.');
    }
    return (isPersona(s) ? 'You write compact persona profiles (the user\'s own roleplay character).' : 'You write compact character dossiers for roleplay character cards.') + '\nRules:\n' + r.map((x, i) => `${i + 1}. ${x}`).join('\n');
}

function userContent(s, name, concept, refText, images) {
    let text = name ? `${nameLabel(s)}: ${name}\n\n` : '';
    text += `CONCEPT:\n${concept.trim() || '(none, use references)'}`;
    if (refText.trim()) text += `\n\nREFERENCES (treat as canon):\n${refText.trim()}`;
    const useImgs = s.sendImages && images.length > 0;
    if (useImgs) text += '\n\nThe attached images are visual references for appearance and mood.';
    if (!useImgs) return text;
    return [{ type: 'text', text }, ...images.map(i => ({ type: 'image_url', image_url: { url: i.url } }))];
}

function buildGenerateMessages(s, name, concept, refText, images) {
    const secs = enabledSections(s);
    return [
        { role: 'system', content: `${rules(s, secs, name)}\n\nSKELETON:\n${skeleton(s, secs)}` },
        { role: 'user', content: userContent(s, name, concept, refText, images) },
    ];
}

function buildSectionMessages(s, sec, name, concept, refText, dossierText, instruction) {
    const all = enabledSections(s);
    const wsum = all.reduce((a, x) => a + secWeight(x, s), 0);
    const secWords = Math.max(15, Math.round(wordBudget(budgetOf(s)) * secWeight(sec, s) / wsum * 1.15));
    const sys = `${rules(s, [sec], name, secWords)}\n\nTask: write ONLY the section [${sec.title}] for the dossier below. Keep it consistent with the other sections. Output only that one section (header + fields).\n\nSKELETON:\n${skeleton(s, [sec], all)}`;
    let user = `CURRENT DOSSIER:\n${dossierText || '(empty)'}\n\n${name ? `${nameLabel(s)}: ${name}\n\n` : ''}CONCEPT:\n${concept.trim() || '(see dossier)'}`;
    if (refText.trim()) user += `\n\nREFERENCES:\n${refText.trim()}`;
    user += instruction.trim() ? `\n\nINSTRUCTION FOR THE [${sec.title}] SECTION: ${instruction.trim()}` : `\n\nWrite the [${sec.title}] section${dossierText.includes(`[${sec.title}]`) ? ' as a fresh, different take' : ''}.`;
    return [{ role: 'system', content: sys }, { role: 'user', content: user }];
}

function buildCompressMessages(s, dossierText) {
    const words = wordBudget(budgetOf(s));
    const sys = [
        isPersona(s) ? 'You compress persona profiles.' : 'You compress character dossiers.',
        `Rewrite the dossier in at most ${words} words (about ${budgetOf(s)} tokens).`,
        'Keep every section header in square brackets and every field key, in the same order.',
        'Preserve all distinctive facts; remove filler, merge synonyms, shorten phrasing. Keep {{char}} and {{user}}.',
        'Output ONLY the compressed dossier, no commentary, no markdown.',
    ].join('\n');
    return [{ role: 'system', content: sys }, { role: 'user', content: dossierText }];
}

function buildFirstMessageMessages(s, name, concept, dossierText, scene) {
    const words = s.firstMesWords;
    const lang = {
        auto: 'Write in the same language as the concept text (English if unclear).',
        en: 'Write in English.',
        ru: 'Write in Russian.',
    }[s.firstMesLang] || 'Write in English.';
    const FMT = {
        asterisks: 'Format: narration and actions in *asterisks*, spoken lines in "quotes".',
        plain: 'Format: plain prose without markup: no asterisks; spoken lines in "quotes".',
        literary: 'Format: literary prose in the style of a novel excerpt. Narration and actions as plain text in well-formed paragraphs with vivid sensory detail and a distinct narrative voice; spoken lines in "quotes" woven into the narration. No asterisks, no markdown.',
    };
    const fmt = FMT[s.firstMesFmt] || FMT.asterisks;
    const tense = s.firstMesFmt === 'literary'
        ? 'Narrate in third person with one consistent tense (past tense is fine).'
        : 'Narrate in third person, present tense.';
    const sys = [
        'You write the opening message (first message) of a roleplay character card, from the narrator/character side.',
        'Rules:',
        `1. HARD LIMIT: at most ${words} words. Aim for about ${Math.round(words * 0.8)}.`,
        '2. Use {{char}} for the character and {{user}} for the user. Never write {{user}}\'s actions, words, thoughts or feelings.',
        `3. ${tense} Show personality through behavior and speech that match the dossier (Speech section, quirks, outfit).`,
        '4. Give a concrete setting and one clear situation; end on a natural hook that invites {{user}} to respond.',
        `5. ${fmt}`,
        `6. ${lang}`,
        '7. Output ONLY the message text: no title, no commentary, no code fences.',
    ].join('\n');
    let user = `${name ? `CHARACTER NAME: ${name}\n\n` : ''}${dossierText ? `DOSSIER:\n${dossierText}\n\n` : ''}CONCEPT:\n${concept.trim() || '(see dossier)'}`;
    user += scene.trim() ? `\n\nSCENE / SITUATION: ${scene.trim()}` : '\n\nChoose a fitting, engaging opening situation.';
    return [{ role: 'system', content: sys }, { role: 'user', content: user }];
}

const normKey = (x) => x.toLowerCase().replace(/[^a-z]/g, '');

/** Возвращает список полей, которых нет или которые пусты/обрезаны. */
function sectionIssues(s, sec, text) {
    const lines = (text || '').split(/\r?\n/);
    const keyOf = (l) => { const i = l.indexOf(':'); return i > 0 ? normKey(l.slice(0, i)) : ''; };
    const issues = [];
    for (const f of secFields(sec, s)) {
        const idx = lines.findIndex(l => keyOf(l) === normKey(f.key));
        if (idx < 0) { issues.push(f.key); continue; }
        const val = lines[idx].slice(lines[idx].indexOf(':') + 1).trim();
        if (f.key === 'Examples') {
            const n = lines.slice(idx + 1).filter(l => /^\s*[-*•]/.test(l)).length + (val ? 1 : 0);
            if (n < Math.max(1, examplesOf(s) - 1)) issues.push(f.key);
        } else if (!val) issues.push(f.key);
    }
    return issues;
}

const stripJunk = (text) => String(text).replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/```[a-z]*/gi, '');

function parseDossier(text) {
    const byTitle = new Map(SECTIONS.map(x => [x.title.toLowerCase(), x.id]));
    const out = {};
    let cur = null;
    for (const raw of stripJunk(text).split(/\r?\n/)) {
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

function extractSection(text, sec) {
    const p = parseDossier(text);
    if (p[sec.id]) return p[sec.id];
    return stripJunk(text).split(/\r?\n/).filter(l => l.trim() && !/^\s*\[.*\]\s*$/.test(l)).join('\n');
}

/** Итоговый текст для Description. all=true: игнорировать выключенные секции (для библиотеки). */
function assemble(s, dossier, all = false) {
    return SECTIONS
        .filter(sec => all || (isOn(s, sec) && !(isPersona(s) && sec.noPersona)))
        .filter(sec => (dossier[sec.id] || '').trim())
        .map(sec => `[${sec.title}]\n${dossier[sec.id].trim()}`)
        .join('\n');
}

function getName(dossier) {
    const m = (dossier.basic || '').match(/^\s*Name\s*:\s*(.+)$/mi);
    return m ? m[1].trim() : '';
}

function toCardV2(name, description, firstMes = '') {
    return {
        spec: 'chara_card_v2',
        spec_version: '2.0',
        data: {
            name, description,
            personality: '', scenario: '', first_mes: firstMes, mes_example: '',
            creator_notes: 'Created with CharForge', system_prompt: '', post_history_instructions: '',
            alternate_greetings: [], tags: [], creator: 'CharForge', character_version: '1.0',
            extensions: { talkativeness: '0.5', fav: false },
        },
    };
}

/* ═══ api ═══ */
const stctx = () => SillyTavern.getContext();

const listProfiles = () => stctx().extensionSettings?.connectionManager?.profiles ?? [];

/** Запрос идёт через профиль Connection Manager: ключи остаются внутри Таверны. */
async function requestModel(profileId, messages, maxTokens, signal) {
    const { ConnectionManagerRequestService: Service, extensionSettings } = stctx();
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
        const fn = stctx().getTokenCountAsync;
        if (fn) return await fn(text);
    } catch { /* fallthrough */ }
    return Math.ceil(text.length / 3.5);
}

async function createCharacter(name, description, firstMes = '', avatarDataUrl = '') {
    const c = stctx();
    const fd = new FormData();
    fd.append('ch_name', name);
    fd.append('description', description);
    fd.append('personality', '');
    fd.append('scenario', '');
    fd.append('first_mes', firstMes);
    fd.append('mes_example', '');
    fd.append('creator_notes', 'Created with CharForge');
    fd.append('creator', 'CharForge');
    fd.append('tags', '');
    fd.append('talkativeness', '0.5');
    fd.append('fav', 'false');
    if (avatarDataUrl) {
        const blob = await (await fetch(avatarDataUrl)).blob();
        fd.append('avatar', blob, 'avatar.jpg');
    }
    const res = await fetch('/api/characters/create', {
        method: 'POST',
        headers: c.getRequestHeaders({ omitContentType: true }),
        body: fd,
        cache: 'no-cache',
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const avatar = await res.text();
    try { await c.getCharacters(); } catch { /* список обновится позже */ }
    return avatar;
}

function shrinkImage(file, max = 768, quality = 0.8) {
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
                resolve(cv.toDataURL('image/jpeg', quality));
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

/* ═══ ui ═══ */
const MAX_IMAGES = 4;
let overlay = null;
const state = { tab: 'create', images: [], busy: false, abort: null, tokenTimer: null };

const qs = (sel) => overlay.querySelector(sel);
const draft = () => getSettings().draft;
function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
}
const toast = (type, msg) => window.toastr?.[type]?.(msg);
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function openWindow(tab) {
    try {
        if (!overlay) buildWindow();
        switchTab(typeof tab === 'string' ? tab : state.tab);
        fitOverlay();
        overlay.classList.add('cf-open');
        document.body.classList.add('cf-lock');
        // диагностика: если окно получилось пустым или не по экрану, скажем об этом
        const r = qs('.cf-window').getBoundingClientRect();
        console.info('[CharForge] opened', { w: Math.round(r.width), h: Math.round(r.height), vw: innerWidth, vh: innerHeight });
        if (getComputedStyle(overlay).position !== 'fixed') toast('error', 'CharForge: стили не применились');
        else if (r.width < 50 || r.height < 50) toast('error', `CharForge: окно имеет размер ${Math.round(r.width)}×${Math.round(r.height)}`);
    } catch (e) {
        console.error('[CharForge] open failed', e);
        toast('error', `CharForge: ${e?.message || e}`);
        destroyWindow();
        document.body.classList.remove('cf-lock');
    }
}
function destroyWindow() { overlay?.remove(); overlay = null; }
function closeWindow() {
    overlay?.classList.remove('cf-open');
    document.body.classList.remove('cf-lock');
}
/** Размер оверлея задаётся в пикселях по реальной видимой области (как это делает сама Таверна). */
function fitOverlay() {
    if (!overlay) return;
    const w = document.documentElement.clientWidth || window.innerWidth;
    const h = window.innerHeight;
    if (w > 100 && h > 100) {
        overlay.style.width = `${w}px`;
        overlay.style.height = `${h}px`;
    } else {
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
    }
}
function initGlobalHandlers() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay?.classList.contains('cf-open')) closeWindow();
    });
    window.addEventListener('resize', fitOverlay);
    window.addEventListener('orientationchange', () => setTimeout(fitOverlay, 250));
}
/** Встроенные стили: расширение не зависит от отдельного style.css. */
function injectStyles() {
    document.getElementById('cf-style')?.remove();
    const st = document.createElement('style');
    st.id = 'cf-style';
    st.textContent = CF_CSS;
    document.head.appendChild(st);
}
function applyTheme() { if (overlay) overlay.dataset.theme = getSettings().theme; }

function switchTab(name) {
    state.tab = name;
    overlay.querySelectorAll('.cf-tab').forEach(b => b.classList.toggle('cf-active', b.dataset.tab === name));
    overlay.querySelectorAll('.cf-view').forEach(v => v.classList.toggle('cf-active', v.id === `cf-v-${name}`));
    if (name === 'library') renderLibrary();
    if (name === 'settings') buildSettingsView();
    if (name === 'create') requestAnimationFrame(autosizeAll);
}

function buildWindow() {
    overlay = el('div', 'cf-overlay');
    overlay.innerHTML = `
    <div class="cf-window" role="dialog" aria-modal="true">
      <div class="cf-head">
        <div class="cf-title"><i class="fa-solid fa-id-card"></i><span>${t('title')}</span></div>
        <div class="cf-head-actions">
          <button class="cf-icon-btn" id="cf-clear" data-act title="${t('clearAll')}"><i class="fa-solid fa-eraser"></i></button>
          <button class="cf-icon-btn" id="cf-close" title="${t('close')}"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
      <div class="cf-tabs">
        <button class="cf-tab" data-tab="create"><i class="fa-solid fa-wand-magic-sparkles"></i><span>${t('tabCreate')}</span></button>
        <button class="cf-tab" data-tab="library"><i class="fa-solid fa-book-bookmark"></i><span>${t('tabLibrary')}</span></button>
        <button class="cf-tab" data-tab="settings"><i class="fa-solid fa-gear"></i><span>${t('tabSettings')}</span></button>
      </div>

      <div class="cf-view" id="cf-v-create">
        <div class="cf-body">
          <div class="cf-col cf-input">
            <div class="cf-seg" id="cf-kind">
              <button type="button" data-k="char"><i class="fa-solid fa-masks-theater"></i><span>${t('kindChar')}</span></button>
              <button type="button" data-k="persona"><i class="fa-solid fa-user"></i><span>${t('kindPersona')}</span></button>
            </div>
            <label class="cf-label" for="cf-name">${t('name')}</label>
            <input id="cf-name" class="cf-input-line" type="text" autocomplete="off">
            <label class="cf-label" for="cf-concept" id="cf-concept-label">${t('concept')}</label>
            <textarea id="cf-concept" class="cf-ta" rows="7"></textarea>
            <div class="cf-row cf-hide" id="cf-pullrow"><button class="cf-btn cf-small" id="cf-pull-persona" data-act><i class="fa-solid fa-file-import"></i> ${t('pullPersona')}</button></div>
            <label class="cf-label" for="cf-ref">${t('refs')}</label>
            <textarea id="cf-ref" class="cf-ta" rows="3"></textarea>
            <div class="cf-images" id="cf-images"></div>
            <div class="cf-row">
              <button class="cf-btn" id="cf-add-img" data-act><i class="fa-solid fa-image"></i> ${t('addImage')}</button>
              <input type="file" id="cf-file" accept="image/*" multiple hidden>
            </div>
            <div class="cf-note" id="cf-imgnote"></div>
            <div id="cf-avatar-block"><div class="cf-label">${t('avatar')}</div>
            <div class="cf-avatar-row">
              <div class="cf-avatar" id="cf-avatar"></div>
              <div class="cf-avatar-side">
                <div class="cf-row">
                  <button class="cf-btn cf-small" id="cf-pick-avatar" data-act><i class="fa-solid fa-user-circle"></i> ${t('avatarPick')}</button>
                  <button class="cf-btn cf-small" id="cf-rm-avatar" data-act>${t('avatarRemove')}</button>
                  <input type="file" id="cf-avatar-file" accept="image/*" hidden>
                </div>
                <label class="cf-check"><input type="checkbox" id="cf-avatar-ref"><span>${t('avatarAsRef')}</span></label>
              </div>
            </div></div>
            <div class="cf-row">
              <button class="cf-btn cf-primary" id="cf-gen" data-act><i class="fa-solid fa-wand-magic-sparkles"></i> ${t('generate')}</button>
              <button class="cf-btn cf-danger" id="cf-cancel" hidden>${t('cancel')}</button>
            </div>
            <div class="cf-status" id="cf-status"></div>
          </div>

          <div class="cf-col cf-output">
            <div class="cf-meter"><span id="cf-tokens"></span><div class="cf-bar"><div id="cf-bar-fill"></div></div></div>
            <div id="cf-sections"></div>
            <div class="cf-empty" id="cf-empty">${t('empty')}</div>
            <div class="cf-card" id="cf-first">
              <div class="cf-card-title">${t('firstMes')}</div>
              <input id="cf-scene" class="cf-input-line" type="text" autocomplete="off">
              <textarea id="cf-firstmes" class="cf-ta cf-ta-first" rows="5"></textarea>
              <div class="cf-row cf-between">
                <span id="cf-words" class="cf-note"></span>
                <button class="cf-btn cf-small" id="cf-genfirst" data-act></button>
              </div>
            </div>
          </div>
        </div>
        <div class="cf-foot">
          <button class="cf-btn" id="cf-compress" data-act title="${t('compress')}"><i class="fa-solid fa-compress"></i><span class="cf-bl">${t('compress')}</span></button>
          <button class="cf-btn" id="cf-copy" data-act title="${t('copy')}"><i class="fa-solid fa-copy"></i><span class="cf-bl">${t('copy')}</span></button>
          <button class="cf-btn" id="cf-save" data-act title="${t('save')}"><i class="fa-solid fa-book-bookmark"></i><span class="cf-bl">${t('save')}</span></button>
          <button class="cf-btn" id="cf-export" data-act title="${t('exportJson')}"><i class="fa-solid fa-file-export"></i><span class="cf-bl">${t('exportJson')}</span></button>
          <button class="cf-btn cf-primary" id="cf-create" data-act title="${t('createChar')}"><i class="fa-solid fa-user-plus"></i><span class="cf-bl">${t('createChar')}</span></button>
        </div>
      </div>

      <div class="cf-view" id="cf-v-library">
        <div class="cf-lib-bar">
          <input id="cf-lib-q" class="cf-input-line" type="search" autocomplete="off">
          <span id="cf-lib-count" class="cf-note"></span>
        </div>
        <div class="cf-lib-grid" id="cf-lib-grid"></div>
        <div class="cf-note cf-lib-note">${t('libNote')}</div>
      </div>

      <div class="cf-view" id="cf-v-settings"><div class="cf-settings-body" id="cf-settings-body"></div></div>
    </div>`;
    document.body.appendChild(overlay);
    applyTheme();

    // плейсхолдеры через JS: в тексте бывают кавычки
    qs('#cf-name').placeholder = t('namePh');
    qs('#cf-concept').placeholder = t('conceptPh');
    qs('#cf-ref').placeholder = t('refsPh');
    qs('#cf-scene').placeholder = t('scenePh');
    qs('#cf-firstmes').placeholder = t('firstPh');
    qs('#cf-lib-q').placeholder = t('libSearch');

    overlay.querySelectorAll('.cf-tab').forEach(b => { b.onclick = () => switchTab(b.dataset.tab); });
    qs('#cf-close').onclick = closeWindow;
    overlay.addEventListener('mousedown', (e) => { if (e.target === overlay) closeWindow(); });

    qs('#cf-name').oninput = (e) => { draft().name = e.target.value; saveSettings(); };
    qs('#cf-concept').oninput = (e) => { draft().concept = e.target.value; saveSettings(); };
    qs('#cf-ref').oninput = (e) => { draft().refText = e.target.value; saveSettings(); };
    qs('#cf-scene').oninput = (e) => { draft().scene = e.target.value; saveSettings(); };
    qs('#cf-firstmes').oninput = (e) => { draft().firstMes = e.target.value; autosize(e.target); updateFirstUI(); saveSettings(); };
    qs('#cf-avatar-ref').onchange = (e) => { draft().avatarAsRef = e.target.checked; saveSettings(); };
    qs('#cf-lib-q').oninput = renderLibrary;

    qs('#cf-add-img').onclick = () => qs('#cf-file').click();
    qs('#cf-file').onchange = onPickImages;
    qs('#cf-pick-avatar').onclick = () => qs('#cf-avatar-file').click();
    qs('#cf-avatar-file').onchange = onPickAvatar;
    qs('#cf-rm-avatar').onclick = () => { draft().avatar = ''; saveSettings(); renderAvatar(); };

    overlay.querySelectorAll('#cf-kind button').forEach(b => { b.onclick = () => setKind(b.dataset.k); });
    qs('#cf-pull-persona').onclick = doPullPersona;
    qs('#cf-gen').onclick = doGenerate;
    qs('#cf-cancel').onclick = () => state.abort?.abort();
    qs('#cf-genfirst').onclick = doFirst;
    qs('#cf-compress').onclick = doCompress;
    qs('#cf-copy').onclick = doCopy;
    qs('#cf-save').onclick = doSave;
    qs('#cf-export').onclick = doExport;
    qs('#cf-create').onclick = doCreate;
    qs('#cf-clear').onclick = doClear;

    fillInputs();
}

/** Заполняет поля редактора из черновика. */
function fillInputs() {
    const s = getSettings(), d = s.draft;
    qs('#cf-name').value = d.name;
    qs('#cf-concept').value = d.concept;
    qs('#cf-ref').value = d.refText;
    qs('#cf-scene').value = d.scene;
    qs('#cf-firstmes').value = d.firstMes;
    qs('#cf-avatar-ref').checked = !!d.avatarAsRef;
    qs('#cf-imgnote').textContent = s.sendImages ? t('imgNote') : t('imgNoteOff');
    updateKindUI();
    renderAvatar();
    renderImages();
    renderSections();
    updateFirstUI();
    setStatus('');
}

/** Подстраивает окно под режим: персонаж или персона. */
function updateKindUI() {
    const d = draft(), persona = d.kind === 'persona';
    overlay.querySelectorAll('#cf-kind button').forEach(b => b.classList.toggle('cf-active', b.dataset.k === d.kind));
    ['#cf-first', '#cf-avatar-block', '#cf-export'].forEach(sel => qs(sel).classList.toggle('cf-hide', persona));
    qs('#cf-pullrow').classList.toggle('cf-hide', !persona);
    qs('#cf-concept-label').textContent = persona ? t('conceptPersona') : t('concept');
    const btn = qs('#cf-create');
    btn.querySelector('.cf-bl').textContent = persona ? t('applyPersona') : t('createChar');
    btn.title = persona ? t('applyPersona') : t('createChar');
    btn.querySelector('i').className = persona ? 'fa-solid fa-user-check' : 'fa-solid fa-user-plus';
}

function setKind(kind) {
    const d = draft();
    if (d.kind === kind) return;
    d.kind = kind;
    if (kind === 'persona' && !d.name.trim()) {
        const n = stctx().name1;
        if (n) { d.name = n; qs('#cf-name').value = n; }
    }
    saveSettings();
    updateKindUI();
    renderSections();
    updateFirstUI();
}

function doPullPersona() {
    const d = draft();
    const c = stctx();
    const text = String(c.powerUserSettings?.persona_description || document.getElementById('persona_description')?.value || '').trim();
    if (!text) { setStatus(t('pullPersonaNone'), true); toast('warning', t('pullPersonaNone')); return; }
    d.concept = d.concept.trim() ? `${d.concept.trim()}\n\n${text}` : text;
    qs('#cf-concept').value = d.concept;
    if (!d.name.trim() && c.name1) { d.name = c.name1; qs('#cf-name').value = c.name1; }
    saveSettings();
    setStatus(t('pullPersonaDone'));
}

/** Записывает описание в текущую персону Таверны (поле Persona Description). */
async function applyPersonaText(text) {
    const ta = document.getElementById('persona_description');
    if (!ta) { await copyText(text); toast('warning', t('personaNoField')); return false; }
    if (ta.value.trim() && ta.value.trim() !== text.trim() && !window.confirm(t('personaReplace'))) return false;
    ta.value = text;
    if (window.jQuery) window.jQuery(ta).trigger('input'); else ta.dispatchEvent(new Event('input', { bubbles: true }));
    toast('success', t('personaApplied', { name: stctx().name1 || '' }));
    return true;
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
/** fn может вернуть строку-предупреждение: она покажется вместо «Готово». */
async function run(label, fn) {
    if (state.busy) return;
    state.abort = new AbortController();
    setBusy(true, label);
    let msg = t('done'), isErr = false;
    try {
        const warn = await fn(state.abort.signal);
        if (warn) { msg = warn; isErr = true; }
    } catch (e) {
        console.error('[CharForge]', e);
        msg = errText(e);
        isErr = true;
    } finally {
        setBusy(false);
        setStatus(msg, isErr);
        if (isErr) toast('error', msg);
        state.abort = null;
    }
}

/* ───────────── Картинки и аватар ───────────── */

async function onPickImages(e) {
    const files = [...e.target.files];
    e.target.value = '';
    for (const f of files) {
        if (state.images.length >= MAX_IMAGES) break;
        try { state.images.push({ name: f.name, url: await shrinkImage(f, 768, 0.8) }); } catch (err) { console.warn(err); }
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
async function onPickAvatar(e) {
    const f = e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
        draft().avatar = await shrinkImage(f, 512, 0.85);
        saveSettings();
        renderAvatar();
    } catch (err) { console.warn(err); }
}
function renderAvatar() {
    const box = qs('#cf-avatar');
    box.innerHTML = '';
    const a = draft().avatar;
    if (a) {
        const im = document.createElement('img');
        im.src = a;
        box.appendChild(im);
    } else {
        box.innerHTML = '<i class="fa-solid fa-user"></i>';
    }
}
/** Картинки для модели: референсы + (по желанию) аватар. */
function modelImages() {
    const d = draft();
    const list = [...state.images];
    if (d.avatarAsRef && d.avatar && d.kind !== 'persona') list.push({ name: 'avatar', url: d.avatar });
    return list;
}

/* ───────────── Генерация ───────────── */

const completeNote = (issues) => `Your previous version of this section was incomplete or cut off (missing or empty: ${issues.join(', ')}). Write the FULL section with every field, keeping the good existing content.`;

/** Запрашивает одну секцию и записывает её в черновик. */
async function regenSection(s, d, sec, instruction, signal) {
    const name = d.name.trim() || getName(d.dossier);
    const msgs = buildSectionMessages(s, sec, name, d.concept, d.refText, assemble(s, d.dossier), instruction);
    const text = await requestModel(s.profileId, msgs, s.maxResponse, signal);
    const body = extractSection(text, sec);
    if (!body.trim()) throw new Error(t('errParse'));
    d.dossier[sec.id] = body;
    saveSettings();
}

function doGenerate() {
    const s = getSettings(), d = s.draft;
    const imgs = modelImages();
    if (!d.concept.trim() && !d.refText.trim() && !imgs.length) { setStatus(t('errEmpty'), true); return; }
    return run(t('generating'), async (signal) => {
        const msgs = buildGenerateMessages(s, d.name.trim(), d.concept, d.refText, imgs);
        const text = await requestModel(s.profileId, msgs, s.maxResponse, signal);
        const parsed = parseDossier(text);
        if (!Object.keys(parsed).length) throw new Error(t('errParse'));
        d.dossier = parsed;
        if (!d.name.trim()) {
            const n = getName(parsed);
            if (n) { d.name = n; qs('#cf-name').value = n; }
        }
        saveSettings();
        renderSections();

        // Модель могла пропустить или оборвать секции (обычно последние): дописываем их по одной.
        const secs = enabledSections(s);
        for (const sec of secs) {
            const issues = sectionIssues(s, sec, d.dossier[sec.id]);
            if (!issues.length) continue;
            setStatus(t('completing', { list: t(`sec.${sec.id}`) }));
            try {
                await regenSection(s, d, sec, completeNote(issues), signal);
                renderSections();
            } catch (e) {
                if (e?.name === 'AbortError') throw e;
                console.warn('[CharForge] completion failed for', sec.id, e);
            }
        }
        const bad = secs.filter(x => sectionIssues(s, x, d.dossier[x.id]).length).map(x => t(`sec.${x.id}`));
        return bad.length ? t('errMissing', { list: bad.join(', ') }) : '';
    });
}

function doSection(sec, instruction) {
    const s = getSettings(), d = s.draft;
    return run(t('regenerating'), async (signal) => {
        await regenSection(s, d, sec, instruction, signal);
        renderSections();
    });
}

function doFirst() {
    const s = getSettings(), d = s.draft;
    if (!d.concept.trim() && !Object.keys(d.dossier).length) { setStatus(t('errEmpty'), true); return; }
    return run(t('genFirstBusy'), async (signal) => {
        const name = d.name.trim() || getName(d.dossier);
        const msgs = buildFirstMessageMessages(s, name, d.concept, assemble(s, d.dossier), d.scene);
        const text = await requestModel(s.profileId, msgs, s.maxResponse, signal);
        const msg = stripJunk(text).trim();
        if (!msg) throw new Error(t('errParse'));
        d.firstMes = msg;
        saveSettings();
        qs('#cf-firstmes').value = msg;
        autosize(qs('#cf-firstmes'));
        updateFirstUI();
    });
}

function doCompress() {
    const s = getSettings(), d = s.draft;
    const current = assemble(s, d.dossier);
    if (!current) { setStatus(t('errNoDossier'), true); return; }
    return run(t('compressing'), async (signal) => {
        const text = await requestModel(s.profileId, buildCompressMessages(s, current), s.maxResponse, signal);
        const parsed = parseDossier(text);
        if (!Object.keys(parsed).length) throw new Error(t('errParse'));
        Object.assign(d.dossier, parsed);
        saveSettings();
        renderSections();
    });
}

/* ───────────── Вывод анкеты ───────────── */

function autosize(ta) {
    if (!ta || !ta.scrollHeight) return;
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight + 2}px`;
}
function autosizeAll() { overlay?.querySelectorAll('.cf-ta-sec,.cf-ta-first').forEach(autosize); }

function renderSections() {
    const s = getSettings();
    const box = qs('#cf-sections');
    box.innerHTML = '';
    const has = Object.keys(s.draft.dossier).length > 0;
    qs('#cf-empty').hidden = has;
    if (has) {
        for (const sec of enabledSections(s)) {
            const card = el('div', 'cf-card');
            card.appendChild(el('div', 'cf-card-title', t(`sec.${sec.id}`)));
            const ta = el('textarea', 'cf-ta cf-ta-sec');
            ta.value = s.draft.dossier[sec.id] || '';
            ta.oninput = () => {
                draft().dossier[sec.id] = ta.value;
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
            const filled = !!(s.draft.dossier[sec.id] || '').trim();
            btn.innerHTML = `<i class="fa-solid ${filled ? 'fa-rotate' : 'fa-wand-magic-sparkles'}"></i> ${filled ? t('secRegen') : t('secGen')}`;
            btn.onclick = () => doSection(sec, inp.value);
            row.append(inp, btn);
            card.appendChild(row);
            box.appendChild(card);
            requestAnimationFrame(() => autosize(ta));
        }
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
    if (!overlay) return;
    const max = budgetOf(s);
    const lbl = qs('#cf-tokens');
    lbl.textContent = t('tokens', { n, max });
    const fill = qs('#cf-bar-fill');
    fill.style.width = `${Math.min(100, (n / max) * 100)}%`;
    const over = n > max;
    fill.classList.toggle('cf-over', over);
    lbl.classList.toggle('cf-over-text', over);
}

function updateFirstUI() {
    const s = getSettings(), d = s.draft;
    const n = countWords(d.firstMes);
    const w = qs('#cf-words');
    w.textContent = t('words', { n, max: s.firstMesWords });
    w.classList.toggle('cf-over-text', n > s.firstMesWords);
    qs('#cf-genfirst').innerHTML = `<i class="fa-solid fa-feather-pointed"></i> ${d.firstMes.trim() ? t('regenFirst') : t('genFirst')}`;
    requestAnimationFrame(() => autosize(qs('#cf-firstmes')));
}

/* ───────────── Действия редактора ───────────── */

async function doCopy() {
    const s = getSettings();
    const text = assemble(s, s.draft.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    await copyText(text);
    setStatus(t('copied'));
}

function resolveName() {
    const d = draft();
    let name = d.name.trim() || getName(d.dossier);
    if (!name) name = (window.prompt(t('namePrompt')) || '').trim();
    if (name && !d.name.trim()) { d.name = name; qs('#cf-name').value = name; saveSettings(); }
    return name;
}

function doExport() {
    const s = getSettings(), d = s.draft;
    const text = assemble(s, d.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    const name = resolveName();
    if (!name) return;
    downloadJson(`${name.replace(/[^\w\-]+/g, '_')}.json`, toCardV2(name, text, d.firstMes));
}

async function doCreate() {
    const s = getSettings(), d = s.draft;
    const text = assemble(s, d.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    if (d.kind === 'persona') {
        if (await applyPersonaText(text)) setStatus(t('personaApplied', { name: stctx().name1 || '' }));
        return;
    }
    const name = resolveName();
    if (!name) return;
    await createInST(name, text, d.firstMes, d.avatar, true);
}

async function createInST(name, text, firstMes, avatar, report) {
    try {
        await createCharacter(name, text, firstMes, avatar);
        const msg = t('created', { name });
        if (report && overlay) setStatus(msg);
        toast('success', msg);
    } catch (e) {
        console.error('[CharForge]', e);
        const msg = t('errCreate', { msg: e.message });
        if (report && overlay) setStatus(msg, true);
        toast('error', msg);
    }
}

async function doSave() {
    const s = getSettings(), d = s.draft;
    const text = assemble(s, d.dossier);
    if (!text) { setStatus(t('errNoDossier'), true); return; }
    const name = resolveName();
    if (!name) return;
    const persona = d.kind === 'persona';
    const dossier = structuredClone(d.dossier);
    if (persona) delete dossier.relationships;
    const data = {
        name, kind: d.kind, dossier, firstMes: persona ? '' : d.firstMes, scene: persona ? '' : d.scene,
        concept: d.concept, refText: d.refText, avatar: persona ? '' : d.avatar,
        tokens: await countTokens(text), updated: Date.now(),
    };
    let entry = s.library.find(x => x.id === d.libraryId);
    if (entry) Object.assign(entry, data);
    else {
        entry = { id: newId(), ...data };
        s.library.unshift(entry);
        d.libraryId = entry.id;
    }
    saveSettings();
    setStatus(t('saved'));
    toast('success', t('saved'));
}

function doClear() {
    if (!window.confirm(t('clearConfirm'))) return;
    const s = getSettings();
    s.draft = { ...structuredClone(DEFAULT_DRAFT), kind: s.draft.kind };
    state.images = [];
    saveSettings();
    fillInputs();
}

/* ───────────── Библиотека ───────────── */

function iconBtn(icon, title, fn, cls = '') {
    const b = el('button', `cf-icon-btn cf-lib-btn ${cls}`);
    b.title = title;
    b.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    b.onclick = fn;
    return b;
}

function renderLibrary() {
    if (!overlay) return;
    const s = getSettings();
    const q = qs('#cf-lib-q').value.trim().toLowerCase();
    const grid = qs('#cf-lib-grid');
    grid.innerHTML = '';
    const list = s.library.filter(e => !q ||
        `${e.name} ${e.concept || ''} ${Object.values(e.dossier || {}).join(' ')}`.toLowerCase().includes(q));
    qs('#cf-lib-count').textContent = `${list.length}/${s.library.length}`;
    if (!list.length) {
        grid.appendChild(el('div', 'cf-empty', s.library.length ? t('libNone') : t('libEmpty')));
        return;
    }
    for (const e of list) grid.appendChild(libCard(s, e));
}

function libCard(s, e) {
    const card = el('div', 'cf-lib-card');
    const th = el('div', 'cf-lib-thumb');
    if (e.avatar) {
        const im = document.createElement('img');
        im.src = e.avatar;
        th.appendChild(im);
    } else th.innerHTML = '<i class="fa-solid fa-user"></i>';

    const info = el('div', 'cf-lib-info');
    const nm = el('div', 'cf-lib-name');
    nm.appendChild(el('span', 'cf-lib-name-t', e.name || t('untitled')));
    if (e.kind === 'persona') nm.appendChild(el('span', 'cf-badge', t('badgePersona')));
    info.appendChild(nm);
    const date = new Date(e.updated || Date.now()).toLocaleDateString(LANG === 'ru' ? 'ru-RU' : 'en-GB');
    info.appendChild(el('div', 'cf-note', `${e.tokens || 0} ${t('tokShort')} · ${date}`));
    const snippet = (e.concept || assemble(s, e.dossier || {}, true)).replace(/\s+/g, ' ').slice(0, 110);
    info.appendChild(el('div', 'cf-lib-snippet', snippet));

    const acts = el('div', 'cf-lib-actions');
    if (e.kind === 'persona') {
        acts.append(
            iconBtn('fa-pen-to-square', t('libEdit'), () => loadFromLibrary(e)),
            iconBtn('fa-user-check', t('libApply'), () => applyPersonaText(assemble(s, e.dossier || {}, true))),
            iconBtn('fa-trash-can', t('libDelete'), () => deleteFromLibrary(e), 'cf-danger-text'),
        );
    } else {
        acts.append(
            iconBtn('fa-pen-to-square', t('libEdit'), () => loadFromLibrary(e)),
            iconBtn('fa-user-plus', t('libToST'), () => createInST(e.name, assemble(s, e.dossier || {}, true), e.firstMes || '', e.avatar || '', false)),
            iconBtn('fa-file-export', t('libJson'), () => downloadJson(`${(e.name || 'character').replace(/[^\w\-]+/g, '_')}.json`, toCardV2(e.name, assemble(s, e.dossier || {}, true), e.firstMes || ''))),
            iconBtn('fa-trash-can', t('libDelete'), () => deleteFromLibrary(e), 'cf-danger-text'),
        );
    }
    card.append(th, info, acts);
    return card;
}

function loadFromLibrary(e) {
    const s = getSettings(), d = s.draft;
    const hasContent = d.concept.trim() || Object.keys(d.dossier).length;
    if (hasContent && d.libraryId !== e.id && !window.confirm(t('libLoadConfirm'))) return;
    s.draft = {
        ...structuredClone(DEFAULT_DRAFT),
        kind: e.kind === 'persona' ? 'persona' : 'char',
        name: e.name || '', concept: e.concept || '', refText: e.refText || '',
        dossier: structuredClone(e.dossier || {}), firstMes: e.firstMes || '', scene: e.scene || '',
        avatar: e.avatar || '', libraryId: e.id,
    };
    state.images = [];
    saveSettings();
    fillInputs();
    switchTab('create');
}

function deleteFromLibrary(e) {
    if (!window.confirm(t('libDeleteConfirm', { name: e.name || t('untitled') }))) return;
    const s = getSettings();
    s.library = s.library.filter(x => x.id !== e.id);
    if (s.draft.libraryId === e.id) s.draft.libraryId = '';
    saveSettings();
    renderLibrary();
}

/* ───────────── Вкладка «Настройки» ───────────── */

const thKey = (id) => `th${id[0].toUpperCase()}${id.slice(1)}`;

function buildSettingsView() {
    const s = getSettings();
    const box = qs('#cf-settings-body');
    box.innerHTML = '';

    const group = (title) => {
        const g = el('div', 'cf-group');
        g.appendChild(el('div', 'cf-group-title', title));
        box.appendChild(g);
        return g;
    };
    const field = (g, label, ctrl, hint) => {
        const w = el('div', 'cf-field');
        w.appendChild(el('span', 'cf-field-label', label));
        w.appendChild(ctrl);
        if (hint) w.appendChild(el('small', 'cf-note', hint));
        g.appendChild(w);
        return w;
    };
    const select = (key, opts, after) => {
        const sel = el('select', 'cf-select');
        for (const [v, l] of opts) { const o = el('option', '', l); o.value = v; sel.appendChild(o); }
        sel.value = s[key];
        sel.onchange = () => { s[key] = sel.value; saveSettings(); after?.(sel.value); };
        return sel;
    };
    const number = (key, min, max, step, after) => {
        const i = el('input', 'cf-input-line');
        i.type = 'number'; i.min = min; i.max = max; i.step = step;
        i.value = s[key];
        i.onchange = () => {
            const v = Math.min(max, Math.max(min, parseInt(i.value, 10) || DEFAULTS[key]));
            i.value = v; s[key] = v; saveSettings(); after?.(v);
        };
        return i;
    };
    const check = (label, get, set) => {
        const w = el('label', 'cf-check');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = get();
        cb.onchange = () => { set(cb.checked); saveSettings(); };
        w.append(cb, el('span', '', label));
        return w;
    };

    // Основное
    let g = group(t('gGeneral'));
    field(g, t('sLang'), select('lang', [['ru', 'Русский'], ['en', 'English']], (v) => {
        setLang(v);
        destroyWindow();
        openWindow('settings');
        document.dispatchEvent(new CustomEvent('cf-lang'));
    }));
    const profOpts = [['', t('sProfileCur')], ...listProfiles().map(p => [p.id, p.name])];
    if (s.profileId && !profOpts.some(o => o[0] === s.profileId)) s.profileId = '';
    field(g, t('sProfile'), select('profileId', profOpts), t('sProfileNote'));

    // Тема
    g = group(t('gTheme'));
    const sw = el('div', 'cf-swatches');
    for (const th of THEMES) {
        const b = el('button', 'cf-swatch');
        b.type = 'button';
        b.style.setProperty('--sw-bg', th.bg);
        b.style.setProperty('--sw-ac', th.ac);
        if (th.id === 'auto') b.classList.add('cf-sw-auto');
        b.classList.toggle('cf-active', s.theme === th.id);
        b.append(el('span', 'cf-sw-dot'), el('span', 'cf-sw-name', t(thKey(th.id))));
        b.onclick = () => {
            s.theme = th.id;
            saveSettings();
            applyTheme();
            sw.querySelectorAll('.cf-swatch').forEach(x => x.classList.toggle('cf-active', x === b));
        };
        sw.appendChild(b);
    }
    g.appendChild(sw);
    g.appendChild(el('small', 'cf-note', t('thAutoH')));

    // Генерация
    g = group(t('gGen'));
    const hints = { strict: t('cStrictH'), balanced: t('cBalancedH'), free: t('cFreeH') };
    const cHint = el('small', 'cf-note', hints[s.creativity]);
    const cWrap = field(g, t('sCreativity'), select('creativity',
        [['strict', t('cStrict')], ['balanced', t('cBalanced')], ['free', t('cFree')]],
        (v) => { cHint.textContent = hints[v]; }));
    cWrap.appendChild(cHint);
    g.appendChild(check(t('sPeople'), () => s.inventPeople, (v) => { s.inventPeople = v; }));
    g.appendChild(check(t('sImages'), () => s.sendImages, (v) => {
        s.sendImages = v;
        qs('#cf-imgnote').textContent = v ? t('imgNote') : t('imgNoteOff');
    }));
    const grid = el('div', 'cf-s-grid');
    field(grid, t('sBudget'), number('tokenBudget', 300, 4000, 50, updateTokens));
    field(grid, t('sPersonaBudget'), number('personaBudget', 300, 2000, 50, updateTokens));
    field(grid, t('sMax'), number('maxResponse', 500, 16000, 100));
    field(grid, t('sExamples'), number('examples', 1, 10, 1));
    g.appendChild(grid);

    // Первое сообщение
    g = group(t('gFirst'));
    const grid2 = el('div', 'cf-s-grid');
    field(grid2, t('sFirstWords'), number('firstMesWords', 50, 400, 10, updateFirstUI));
    field(grid2, t('sFirstLang'), select('firstMesLang', [['auto', t('lAuto')], ['en', t('lEn')], ['ru', t('lRu')]]));
    field(grid2, t('sFirstFmt'), select('firstMesFmt', [['asterisks', t('fAst')], ['plain', t('fPlain')], ['literary', t('fLit')]]));
    g.appendChild(grid2);

    // Секции
    g = group(t('gSections'));
    const sg = el('div', 'cf-s-sections');
    for (const sec of SECTIONS) {
        const lbl = check(t(`sec.${sec.id}`), () => isOn(s, sec), (v) => {
            s.sections[sec.id] = v;
            renderSections();
        });
        if (sec.id === 'basic') lbl.querySelector('input').disabled = true;
        sg.appendChild(lbl);
    }
    g.appendChild(sg);
    g.appendChild(el('small', 'cf-note', t('sBasicNote')));
    g.appendChild(el('small', 'cf-note', t('sRelNote')));
}

/* Панель в Extensions: только кнопка открытия */
function mountSettings() {
    document.getElementById('cf_settings')?.remove();
    const root = el('div');
    root.id = 'cf_settings';
    root.innerHTML = `
    <div class="inline-drawer">
      <div class="inline-drawer-toggle inline-drawer-header">
        <b>CharForge — ${t('title')}</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
      </div>
      <div class="inline-drawer-content">
        <button class="menu_button" id="cf_s_open"><i class="fa-solid fa-id-card"></i> ${t('sOpen')}</button>
      </div>
    </div>`;
    (document.getElementById('extensions_settings2') || document.getElementById('extensions_settings')).appendChild(root);
    root.querySelector('#cf_s_open').onclick = () => openWindow();
}

/* ═══ entry ═══ */
function addMenuButton() {
    const menu = document.getElementById('extensionsMenu');
    if (!menu) { setTimeout(addMenuButton, 500); return; }
    let item = document.getElementById('cf_wand');
    if (!item) {
        item = document.createElement('div');
        item.id = 'cf_wand';
        item.className = 'list-group-item flex-container flexGap5';
        item.innerHTML = '<div class="fa-solid fa-id-card extensionsMenuExtensionButton"></div><span></span>';
        item.addEventListener('click', () => openWindow());
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
    injectStyles();
    const s = getSettings();
    setLang(s.lang);
    mountSettings();
    addMenuButton();
    registerSlash();
    initGlobalHandlers();
    document.addEventListener('cf-lang', () => { addMenuButton(); mountSettings(); });
});
