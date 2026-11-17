/* ==========================================================
   UI TEXT — all English interface text lives here.
   ========================================================== */
var TEXT = {
  appTitle: "Dictée Practice",
  appSubtitle: "Practise this week's sentences!",
  currentWeek: "Current week",
  sentenceCount: "{n} sentences",
  menu: {
    practice: "Practice",
    test: "Test yourself",
    dictee: "Dictée!",
    see: "See sentences",
    parent: "Add your own sentences instead",
    memorize: "Memorize & Write",
    gaps: "Fill the Gaps",
    spot: "Spot the Right Sentence"
  },
  comingSoon: "Coming soon!",

  editor: {
    heading: "Sentence {n}",
    instruction:
      "Enter a correct sentence, followed by two ‘wrong versions’ of the same sentence. " +
      "Add a typo, drop an accent, be creative.",
    labelCorrect: "Correct sentence",
    labelWrong1: "Wrong version 1",
    labelWrong2: "Wrong version 2",
    back: "← Back",
    cancel: "✕ Cancel",
    next: "Next sentence",
    done: "That was all",
    finish: "Finish",
    confirmCancel: "Leave without saving? The sentences you typed will be lost."
  },

  summary: {
    heading: "This week's sentences",
    intro: "Check everything, then save the week.",
    sentence: "Sentence {n}",
    edit: "Edit",
    save: "Save week",
    back: "Go back and edit"
  },

  errors: {
    emptyScreen: "Please type a sentence first.",
    emptyCorrect: "Oops! The correct sentence is empty.",
    emptyWrong: "Oops! Both wrong versions need some text.",
    sameAsCorrect: "The wrong versions must be different from the correct sentence. Change a letter or two!",
    wrongsSame: "The two wrong versions must be different from each other.",
    noSentences: "Please enter at least one sentence."
  },

  memorize: {
    quit: "✕ Quit",
    confirmQuit: "Stop playing? This round will be lost.",
    counter: "{n} / {total}",
    lookInstruction: "Read the sentence carefully. When you remember it, press Go!",
    go: "Go!",
    writeInstruction: "Now write the sentence from memory.",
    check: "Check",
    emptyAnswer: "Write the sentence first!",
    perfect: "Perfect! 🎉",
    almost: "Almost! Look at the mistakes:",
    yoursLabel: "Your answer",
    correctLabel: "Correct sentence",
    next: "Next sentence",
    seeResults: "See my results",
    endScore: "You wrote {perfect} of {total} sentences perfectly."
  },

  gaps: {
    quit: "✕ Quit",
    confirmQuit: "Stop playing? This round will be lost.",
    counter: "{n} / {total}",
    instruction: "Listen to the sentence and write the missing word.",
    listen: "🔊 Listen",
    listenSlow: "🐢 Slowly",
    check: "Check",
    emptyAnswer: "Write the missing word first!",
    perfect: "Perfect! 🎉",
    almost: "Not quite! Here is the right word:",
    yoursLabel: "Your answer",
    correctLabel: "Correct word",
    next: "Next sentence",
    seeResults: "See my results",
    endScore: "You found {perfect} of {total} missing words."
  },

  spot: {
    quit: "✕ Quit",
    confirmQuit: "Stop playing? This round will be lost.",
    counter: "{n} / {total}",
    instruction: "Which sentence is written correctly? Tap it!",
    perfect: "Perfect! 🎉",
    almost: "Not quite! The green one is correct. The red letters show the mistakes.",
    next: "Next sentence",
    seeResults: "See my results",
    endScore: "You spotted {perfect} of {total} right sentences.",
    noRounds: "This week has no wrong versions to choose from."
  },

  dictee: {
    quit: "✕ Quit",
    confirmQuit: "Stop the dictée? Your answers will be lost.",
    counter: "{n} / {total}",
    instruction: "Tap the teacher to hear the sentence, then write it.",
    slow: "🐢 Slowly",
    emptyAnswer: "Write the sentence first!",
    next: "Next sentence",
    finish: "Finish the dictée",
    noSpeech: "This browser can't read sentences aloud, so the dictée won't work here. Try Chrome or Safari.",
    titleGreat: "Perfect dictée! 🏆",
    titleGood: "Dictée finished!",
    score: "{perfect} of {total} sentences without a mistake.",
    sentence: "Sentence {n}",
    perfectLine: "✓ Perfect!",
    yoursLabel: "You wrote",
    correctLabel: "Correct sentence",
    again: "Try again",
    home: "Back to home"
  },

  voice: {
    link: "🔊 Voice settings",
    back: "← Back",
    heading: "Reading voice",
    instruction: "Choose the French voice that reads the sentences aloud. Press Test to hear it.",
    auto: "Automatic (recommended)",
    test: "🔊 Test",
    testSentence: "Bonjour ! Le chat dort sur le canapé.",
    saved: "Saved!",
    noFrench: "No French voice was found on this device. On a Mac, add one in System Settings → Accessibility → Spoken Content → System Voice → Manage Voices, then restart the browser.",
    noSpeech: "This browser can't read text aloud."
  },

  end: {
    titleGreat: "Amazing work!",
    titleGood: "Well done!",
    again: "Play again",
    home: "Back to home"
  },

  saved: "Week saved! 🎉 It's now the current week.",
  saveFailed: "The week is ready, but it couldn't be saved on this device. It will be lost when the page closes."
};

/* ==========================================================
   EXAMPLE WEEK — used until a parent saves a real week.
   ========================================================== */
var EXAMPLE_WEEK = {
  id: "example",
  label: "Dictée 6",
  createdAt: null,
  sentences: [
    { text: "Nous visitons le musée", wrong1: "Nou visitons le musée", wrong2: "Nous visiton le musée"  },
    { text: "Ils visitent la maison et le jardin du peintre", wrong1: "Ils visit la maison et le jardin du peintre", wrong2: "Il visitent la meson et le jardin du peintre" },
    { text: "Ils parlent de leurs loisirs", wrong1: "Ils parlont de leurs loisirs", wrong2: "Il parlent de leur loisirs" },
    { text: "Nous parlons de nos peintres préférés", wrong1: "Nous parlons de no peintre préféré", wrong2: "Nous parlent de nos peintres préférés" },
    { text: "Nous nous promenons au centre-ville", wrong1: "Nou nou promenon au centre-ville", wrong2: "Nous nous promenon o centre-ville" },
    { text: "Elles se promènent dans les bois", wrong1: "Elles se promènon dan les bois", wrong2: "Elles se pokemon dans le boi" },
    { text: "C'est mon peintre préféré", wrong1: "C'est mon paintre préféré", wrong2: "C'est mon peintre prefere" },
    { text: "C'est un peintre. Il est né en mille huit cent quarante", wrong1: "C'est un peintre. Il et nee en mil huit cent quarante", wrong2: "C'est un peintre. Il est né en mille uit cent qarant" },
    { text: "Qui est-ce?", wrong1: "Ci est-ce?", wrong2: "Qui esce?" },

  ]
};

var MAX_SENTENCES = 10;

/* ==========================================================
   STORAGE — one localStorage key, always wrapped in try/catch.
   Shape: { version: 1, currentWeekId, weeks: [ { id, label, createdAt,
            sentences: [ { text, wrong1, wrong2 } ] } ] }
   ========================================================== */
var STORAGE_KEY = "dictee-app";

function emptyData() {
  return { version: 1, currentWeekId: null, weeks: [] };
}

function loadData() {
  try {
    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyData();
    var data = JSON.parse(raw);
    if (!data || !Array.isArray(data.weeks)) return emptyData();
    return data;
  } catch (e) {
    return emptyData();
  }
}

function saveData(data) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

/* ==========================================================
   APP STATE
   ========================================================== */
var state = {
  data: loadData(),
  // Parent editor draft (kept in memory until "Save week").
  entries: [],
  index: 0
};

// The week every mode should use.
function getCurrentWeek() {
  var weeks = state.data.weeks;
  for (var i = 0; i < weeks.length; i++) {
    if (weeks[i].id === state.data.currentWeekId) return weeks[i];
  }
  return EXAMPLE_WEEK;
}

/* ==========================================================
   HELPERS
   ========================================================== */
function $(id) {
  return document.getElementById(id);
}

function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, function (m, key) {
    return values[key] !== undefined ? values[key] : m;
  });
}

function setText(id, value) {
  var el = $(id);
  if (el) el.textContent = value;
}

function setButtonText(id, value) {
  var el = $(id);
  if (!el) return;
  var span = el.querySelector(".btn-text");
  (span || el).textContent = value;
}

// kind: "error", "success" or "" (plain)
function showMessage(id, msg, kind) {
  var el = $(id);
  el.textContent = msg || "";
  el.className = "message" + (msg && kind ? " " + kind : "");
}

function showScreen(id) {
  stopSpeaking();
  ["home", "sentences", "editor", "summary", "memorize", "gaps", "spot", "dictee", "dictee-results", "game-end", "voice"].forEach(function (s) {
    $(s).hidden = s !== id;
  });
  window.scrollTo(0, 0);
}

// Trim and collapse repeated spaces, so invisible differences don't count.
function clean(str) {
  return String(str || "").replace(/\s+/g, " ").trim();
}

function formatWeekLabel(date) {
  try {
    return "Week of " + date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch (e) {
    return "Week of " + date.toDateString();
  }
}

/* ==========================================================
   HOME SCREEN
   ========================================================== */
function renderHome(message, kind) {
  var week = getCurrentWeek();
  setText("week-name", week.label);
  setText("week-count", fill(TEXT.sentenceCount, { n: week.sentences.length }));
  showMessage("home-message", message || "", kind);
  showScreen("home");
}

/* ==========================================================
   SEE SENTENCES — the correct sentences of the current week
   ========================================================== */
function showSentences() {
  var week = getCurrentWeek();
  setText("sentences-heading", week.label);
  var list = $("sentences-list");
  list.innerHTML = "";
  week.sentences.forEach(function (s) {
    var li = document.createElement("li");
    li.textContent = s.text;
    list.appendChild(li);
  });
  showScreen("sentences");
}

/* ==========================================================
   PARENT AREA — one sentence per screen
   ========================================================== */
var fields = {};

function readFields() {
  return {
    text: clean(fields.correct.value),
    wrong1: clean(fields.wrong1.value),
    wrong2: clean(fields.wrong2.value)
  };
}

function isEmptyEntry(e) {
  return !e.text && !e.wrong1 && !e.wrong2;
}

// Returns { msg, field } describing the first problem, or null if fine.
function validateEntry(e) {
  if (!e.text) return { msg: TEXT.errors.emptyCorrect, field: "correct" };
  if (!e.wrong1) return { msg: TEXT.errors.emptyWrong, field: "wrong1" };
  if (!e.wrong2) return { msg: TEXT.errors.emptyWrong, field: "wrong2" };
  if (e.wrong1 === e.text) return { msg: TEXT.errors.sameAsCorrect, field: "wrong1" };
  if (e.wrong2 === e.text) return { msg: TEXT.errors.sameAsCorrect, field: "wrong2" };
  if (e.wrong1 === e.wrong2) return { msg: TEXT.errors.wrongsSame, field: "wrong2" };
  return null;
}

function clearInvalid() {
  ["correct", "wrong1", "wrong2"].forEach(function (k) {
    fields[k].classList.remove("invalid");
  });
}

function showEditorError(problem) {
  clearInvalid();
  showMessage("editor-message", problem.msg, "error");
  if (problem.field) {
    fields[problem.field].classList.add("invalid");
    fields[problem.field].focus();
  }
}

function startEditor() {
  state.entries = [];
  state.index = 0;
  showEditor();
}

function showEditor(problem) {
  var i = state.index;
  var entry = state.entries[i] || { text: "", wrong1: "", wrong2: "" };
  var isLast = i >= MAX_SENTENCES - 1;

  setText("editor-heading", fill(TEXT.editor.heading, { n: i + 1 }));
  $("editor-progress").style.width = ((i + 1) / MAX_SENTENCES) * 100 + "%";
  $("editor-back").hidden = i === 0;

  fields.correct.value = entry.text;
  fields.wrong1.value = entry.wrong1;
  fields.wrong2.value = entry.wrong2;

  $("btn-next").hidden = isLast;
  $("btn-done").hidden = isLast;
  $("btn-finish").hidden = !isLast;

  clearInvalid();
  showMessage("editor-message", "");
  showScreen("editor");

  if (problem) showEditorError(problem);
  else fields.correct.focus();
}

// When the correct sentence is confirmed, copy it into empty wrong fields.
function prefillWrongs() {
  var text = clean(fields.correct.value);
  if (!text) return;
  if (!clean(fields.wrong1.value)) fields.wrong1.value = text;
  if (!clean(fields.wrong2.value)) fields.wrong2.value = text;
}

function onNext() {
  var e = readFields();
  if (isEmptyEntry(e)) {
    showEditorError({ msg: TEXT.errors.emptyScreen, field: "correct" });
    return;
  }
  var problem = validateEntry(e);
  if (problem) {
    showEditorError(problem);
    return;
  }
  state.entries[state.index] = e;
  state.index++;
  showEditor();
}

function onDone() {
  var e = readFields();
  if (isEmptyEntry(e)) {
    // An empty screen is simply dropped.
    if (state.index < state.entries.length) state.entries.splice(state.index, 1);
  } else {
    var problem = validateEntry(e);
    if (problem) {
      showEditorError(problem);
      return;
    }
    state.entries[state.index] = e;
  }
  finishEditing();
}

function onBack() {
  var e = readFields();
  if (isEmptyEntry(e)) {
    if (state.index < state.entries.length) state.entries.splice(state.index, 1);
  } else {
    // Keep what was typed (even unfinished); it is checked again later.
    state.entries[state.index] = e;
  }
  state.index = Math.max(0, state.index - 1);
  showEditor();
}

function onCancel() {
  var hasContent = state.entries.length > 0 || !isEmptyEntry(readFields());
  if (hasContent && !window.confirm(TEXT.editor.confirmCancel)) return;
  state.entries = [];
  state.index = 0;
  renderHome();
}

function finishEditing() {
  // Drop empties, then make sure every remaining sentence is valid.
  state.entries = state.entries.filter(function (e) {
    return e && !isEmptyEntry(e);
  });

  if (state.entries.length === 0) {
    state.index = 0;
    showEditor({ msg: TEXT.errors.noSentences, field: "correct" });
    return;
  }

  for (var i = 0; i < state.entries.length; i++) {
    var problem = validateEntry(state.entries[i]);
    if (problem) {
      state.index = i;
      showEditor(problem);
      return;
    }
  }
  showSummary();
}

/* ==========================================================
   PARENT AREA — summary & save
   ========================================================== */
function summaryLine(cls, mark, text) {
  var p = document.createElement("p");
  p.className = "summary-line " + cls;
  var m = document.createElement("span");
  m.className = "mark";
  m.textContent = mark;
  p.appendChild(m);
  p.appendChild(document.createTextNode(text));
  return p;
}

function showSummary() {
  var list = $("summary-list");
  list.innerHTML = "";

  state.entries.forEach(function (e, i) {
    var li = document.createElement("li");
    li.className = "summary-item";

    var head = document.createElement("div");
    head.className = "summary-head";
    var title = document.createElement("span");
    title.textContent = fill(TEXT.summary.sentence, { n: i + 1 });
    var edit = document.createElement("button");
    edit.type = "button";
    edit.className = "link-btn";
    edit.textContent = TEXT.summary.edit;
    edit.addEventListener("click", function () {
      state.index = i;
      showEditor();
    });
    head.appendChild(title);
    head.appendChild(edit);

    li.appendChild(head);
    li.appendChild(summaryLine("summary-correct", "✓", e.text));
    li.appendChild(summaryLine("summary-wrong", "✗", e.wrong1));
    li.appendChild(summaryLine("summary-wrong", "✗", e.wrong2));
    list.appendChild(li);
  });

  showMessage("summary-message", "");
  showScreen("summary");
}

function onSaveWeek() {
  var now = new Date();
  var week = {
    id: "week-" + now.getTime(),
    label: formatWeekLabel(now),
    createdAt: now.toISOString(),
    sentences: state.entries.map(function (e) {
      return { text: e.text, wrong1: e.wrong1, wrong2: e.wrong2 };
    })
  };

  state.data.version = 1;
  state.data.weeks.push(week);
  state.data.currentWeekId = week.id;
  var ok = saveData(state.data);

  state.entries = [];
  state.index = 0;
  renderHome(ok ? TEXT.saved : TEXT.saveFailed, ok ? "success" : "error");
}

/* ==========================================================
   GAME 1: MEMORIZE & WRITE
   ========================================================== */
var game = {
  order: [],   // shuffled list of sentence texts
  index: 0,
  perfect: 0
};

function shuffle(list) {
  var a = list.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

// Make typing differences that aren't real mistakes disappear:
// curly apostrophes (iPad keyboards), decomposed accents, extra spaces.
function normalizeAnswer(str) {
  var s = String(str || "");
  if (s.normalize) s = s.normalize("NFC");
  s = s.replace(/[’‘ʼ]/g, "'");
  return clean(s);
}

// Character diff (longest common subsequence) between what was typed
// and the correct sentence. Returns a list of { type, text } parts where
// type is "same", "wrong" (only in typed) or "missing" (only in correct).
function diffChars(typed, correct) {
  var a = typed.split("");
  var b = correct.split("");
  var n = a.length;
  var m = b.length;
  var i, j;

  // dp[i][j] = LCS length of a[i..] and b[j..]
  var dp = [];
  for (i = 0; i <= n; i++) {
    dp.push(new Array(m + 1).fill(0));
  }
  for (i = n - 1; i >= 0; i--) {
    for (j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  var parts = [];
  function push(type, ch) {
    var last = parts[parts.length - 1];
    if (last && last.type === type) last.text += ch;
    else parts.push({ type: type, text: ch });
  }

  i = 0;
  j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      push("same", a[i]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      push("wrong", a[i]);
      i++;
    } else {
      push("missing", b[j]);
      j++;
    }
  }
  while (i < n) push("wrong", a[i++]);
  while (j < m) push("missing", b[j++]);
  return parts;
}

// Fill a box (element or id) with the parts of the diff that belong to one side.
function renderDiff(boxId, parts, side) {
  var box = typeof boxId === "string" ? $(boxId) : boxId;
  box.innerHTML = "";
  parts.forEach(function (p) {
    if (p.type === "same") {
      box.appendChild(document.createTextNode(p.text));
    } else if (p.type === side) {
      var span = document.createElement("span");
      span.className = side === "wrong" ? "hl-wrong" : "hl-missing";
      span.textContent = p.text;
      box.appendChild(span);
    }
  });
}

function showMemPhase(phase) {
  $("mem-phase-look").hidden = phase !== "look";
  $("mem-phase-write").hidden = phase !== "write";
  $("mem-phase-result").hidden = phase !== "result";
}

function startMemorize() {
  var week = getCurrentWeek();
  game.order = shuffle(week.sentences.map(function (s) { return s.text; }));
  game.index = 0;
  game.perfect = 0;
  showMemSentence();
}

function showMemSentence() {
  var total = game.order.length;
  setText("mem-counter", fill(TEXT.memorize.counter, { n: game.index + 1, total: total }));
  $("mem-progress").style.width = (game.index / total) * 100 + "%";
  setText("mem-sentence", game.order[game.index]);
  showMemPhase("look");
  showScreen("memorize");
  $("mem-go").focus();
}

function onMemGo() {
  var input = $("mem-input");
  input.value = "";
  showMessage("mem-write-message", "");
  showMemPhase("write");
  input.focus();
}

function onMemCheck() {
  var typed = normalizeAnswer($("mem-input").value);
  if (!typed) {
    showMessage("mem-write-message", TEXT.memorize.emptyAnswer, "error");
    $("mem-input").focus();
    return;
  }

  var correct = normalizeAnswer(game.order[game.index]);
  var isPerfect = typed === correct;
  if (isPerfect) game.perfect++;

  var fb = $("mem-feedback");
  fb.textContent = isPerfect ? TEXT.memorize.perfect : TEXT.memorize.almost;
  fb.className = "feedback " + (isPerfect ? "good" : "bad");

  var parts = diffChars(typed, correct);
  $("mem-yours-block").hidden = isPerfect;
  renderDiff("mem-yours", parts, "wrong");
  renderDiff("mem-correct", parts, "missing");

  var isLast = game.index >= game.order.length - 1;
  setButtonText("mem-next", isLast ? TEXT.memorize.seeResults : TEXT.memorize.next);
  $("mem-progress").style.width = ((game.index + 1) / game.order.length) * 100 + "%";

  showMemPhase("result");
  $("mem-next").focus();
}

function onMemNext() {
  game.index++;
  if (game.index < game.order.length) showMemSentence();
  else showEnd(game.perfect, game.order.length, TEXT.memorize.endScore, startMemorize);
}

function onMemQuit() {
  if (window.confirm(TEXT.memorize.confirmQuit)) renderHome();
}

/* ==========================================================
   GAME 3: SPOT THE RIGHT SENTENCE
   ========================================================== */
var spotGame = {
  rounds: [],   // [{ correct, options: [text, ...] }]
  index: 0,
  perfect: 0,
  answered: false
};

// Build one round per sentence: the correct text plus its distinct wrong versions.
function buildSpotRounds(sentences) {
  var rounds = [];
  sentences.forEach(function (s) {
    var correct = clean(s.text);
    var options = [correct];
    [s.wrong1, s.wrong2].forEach(function (w) {
      var t = clean(w);
      var isNew = options.every(function (o) {
        return normalizeAnswer(o) !== normalizeAnswer(t);
      });
      if (t && isNew) options.push(t);
    });
    if (options.length > 1) rounds.push({ correct: correct, options: shuffle(options) });
  });
  return shuffle(rounds);
}

function startSpot() {
  spotGame.rounds = buildSpotRounds(getCurrentWeek().sentences);
  spotGame.index = 0;
  spotGame.perfect = 0;
  if (!spotGame.rounds.length) {
    renderHome(TEXT.spot.noRounds, "error");
    return;
  }
  showSpotRound();
}

function showSpotRound() {
  var round = spotGame.rounds[spotGame.index];
  var total = spotGame.rounds.length;
  spotGame.answered = false;

  setText("spot-counter", fill(TEXT.spot.counter, { n: spotGame.index + 1, total: total }));
  $("spot-progress").style.width = (spotGame.index / total) * 100 + "%";

  var box = $("spot-options");
  box.innerHTML = "";
  box.classList.remove("answered");
  round.options.forEach(function (text) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.setAttribute("lang", "fr");
    btn.textContent = text;
    btn.addEventListener("click", function () {
      onSpotChoose(btn, text);
    });
    box.appendChild(btn);
  });

  $("spot-feedback").hidden = true;
  $("spot-next").hidden = true;
  showScreen("spot");
}

function onSpotChoose(chosenBtn, chosenText) {
  if (spotGame.answered) return;
  spotGame.answered = true;

  var round = spotGame.rounds[spotGame.index];
  var isPerfect = chosenText === round.correct;
  if (isPerfect) spotGame.perfect++;

  var box = $("spot-options");
  box.classList.add("answered");
  Array.prototype.forEach.call(box.querySelectorAll(".option"), function (btn, i) {
    var text = round.options[i];
    if (text === round.correct) {
      btn.classList.add("correct");
    } else {
      // Show where each wrong version differs from the correct sentence.
      renderDiff(btn, diffChars(text, round.correct), "wrong");
      btn.classList.add(btn === chosenBtn ? "wrong" : "dim");
    }
  });

  var fb = $("spot-feedback");
  fb.textContent = isPerfect ? TEXT.spot.perfect : TEXT.spot.almost;
  fb.className = "feedback " + (isPerfect ? "good" : "bad");
  fb.hidden = false;

  var isLast = spotGame.index >= spotGame.rounds.length - 1;
  setButtonText("spot-next", isLast ? TEXT.spot.seeResults : TEXT.spot.next);
  $("spot-progress").style.width = ((spotGame.index + 1) / spotGame.rounds.length) * 100 + "%";
  $("spot-next").hidden = false;
  $("spot-next").focus();
}

function onSpotNext() {
  spotGame.index++;
  if (spotGame.index < spotGame.rounds.length) showSpotRound();
  else showEnd(spotGame.perfect, spotGame.rounds.length, TEXT.spot.endScore, startSpot);
}

function onSpotQuit() {
  if (window.confirm(TEXT.spot.confirmQuit)) renderHome();
}

/* ==========================================================
   DICTÉE — the teacher reads, the child writes; correction at the end.
   ========================================================== */
var dictee = {
  sentences: [],  // in the order the parent entered them
  answers: [],
  index: 0
};

function startDictee() {
  if (!speechSupported) {
    renderHome(TEXT.dictee.noSpeech, "error");
    return;
  }
  dictee.sentences = getCurrentWeek().sentences.map(function (s) { return clean(s.text); });
  dictee.answers = [];
  dictee.index = 0;
  showDicteeSentence();
}

function showDicteeSentence() {
  var total = dictee.sentences.length;
  var isLast = dictee.index >= total - 1;
  setText("dictee-counter", fill(TEXT.dictee.counter, { n: dictee.index + 1, total: total }));
  $("dictee-progress").style.width = (dictee.index / total) * 100 + "%";
  setButtonText("dictee-next", isLast ? TEXT.dictee.finish : TEXT.dictee.next);
  $("dictee-input").value = "";
  $("dictee-teacher").classList.remove("speaking");
  showMessage("dictee-message", "");
  showScreen("dictee");
  $("dictee-teacher").focus();
}

function dicteeSpeak(slow) {
  var teacher = $("dictee-teacher");
  speak(
    dictee.sentences[dictee.index],
    slow,
    function () { teacher.classList.add("speaking"); },
    function () { teacher.classList.remove("speaking"); }
  );
}

function onDicteeNext() {
  var typed = normalizeAnswer($("dictee-input").value);
  if (!typed) {
    showMessage("dictee-message", TEXT.dictee.emptyAnswer, "error");
    $("dictee-input").focus();
    return;
  }
  dictee.answers[dictee.index] = typed;
  dictee.index++;
  if (dictee.index < dictee.sentences.length) showDicteeSentence();
  else showDicteeResults();
}

function showDicteeResults() {
  var total = dictee.sentences.length;
  var perfect = 0;
  var list = $("dr-list");
  list.innerHTML = "";

  dictee.sentences.forEach(function (sentence, i) {
    var typed = dictee.answers[i] || "";
    var correct = normalizeAnswer(sentence);
    var ok = typed === correct;
    if (ok) perfect++;

    var li = document.createElement("li");
    li.className = "summary-item";

    var head = document.createElement("div");
    head.className = "summary-head";
    head.textContent = fill(TEXT.dictee.sentence, { n: i + 1 });
    li.appendChild(head);

    if (ok) {
      li.appendChild(summaryLine("summary-correct", "✓", sentence));
      var p = document.createElement("p");
      p.className = "dr-perfect";
      p.textContent = TEXT.dictee.perfectLine;
      li.appendChild(p);
    } else {
      var parts = diffChars(typed, correct);

      var l1 = document.createElement("p");
      l1.className = "label label-wrong";
      l1.textContent = TEXT.dictee.yoursLabel;
      var yours = document.createElement("div");
      yours.className = "diff-box";
      yours.setAttribute("lang", "fr");
      renderDiff(yours, parts, "wrong");

      var l2 = document.createElement("p");
      l2.className = "label label-correct";
      l2.textContent = TEXT.dictee.correctLabel;
      var right = document.createElement("div");
      right.className = "diff-box";
      right.setAttribute("lang", "fr");
      renderDiff(right, parts, "missing");

      li.appendChild(l1);
      li.appendChild(yours);
      li.appendChild(l2);
      li.appendChild(right);
    }
    list.appendChild(li);
  });

  var great = perfect === total;
  setText("dr-emoji", great ? "🏆" : "📝");
  setText("dr-title", great ? TEXT.dictee.titleGreat : TEXT.dictee.titleGood);
  setText("dr-score", fill(TEXT.dictee.score, { perfect: perfect, total: total }));
  showScreen("dictee-results");
}

function onDicteeQuit() {
  if (window.confirm(TEXT.dictee.confirmQuit)) renderHome();
}

/* ==========================================================
   SHARED END SCREEN
   ========================================================== */
var endRestart = null;

function showEnd(perfect, total, scoreTemplate, restartFn) {
  var great = perfect === total;
  endRestart = restartFn;
  setText("end-emoji", great ? "🏆" : "⭐");
  setText("end-title", great ? TEXT.end.titleGreat : TEXT.end.titleGood);
  setText("end-score", fill(scoreTemplate, { perfect: perfect, total: total }));
  showScreen("game-end");
}

/* ==========================================================
   SPEECH — the browser's built-in voice reads French aloud.
   ========================================================== */
var speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
var currentUtterance = null; // kept alive so the browser doesn't drop it mid-sentence

// Standard, reliable French voices (Mac, Windows, Chrome). Some extra voices
// listed by the system (e.g. Eddy, Flo, Jacques on macOS) can't always be
// played, and the browser then silently falls back to English.
var GOOD_FRENCH_VOICES = /thomas|am[ée]lie|audrey|aur[ée]lie|marie|hortense|julie|paul|denise|henri|google/i;

function voiceLang(v) {
  return String(v.lang || "").replace("_", "-").toLowerCase();
}

function voiceId(v) {
  return v.voiceURI || v.name;
}

function getAllVoices() {
  try {
    return window.speechSynthesis.getVoices() || [];
  } catch (e) {
    return [];
  }
}

// All French voices, best first.
function getFrenchVoices() {
  var french = getAllVoices().filter(function (v) { return voiceLang(v).indexOf("fr") === 0; });
  function rank(v) {
    var score = 0;
    if (GOOD_FRENCH_VOICES.test(v.name)) score += 4;
    if (v.localService) score += 2;
    if (voiceLang(v) === "fr-fr") score += 1;
    return score;
  }
  french.sort(function (a, b) { return rank(b) - rank(a); });
  return french;
}

function getSavedVoiceId() {
  var s = state.data.settings;
  return s && s.voiceId ? s.voiceId : "";
}

// Looked up fresh every time: cached voice objects can go stale, and then
// the browser silently falls back to its default English voice.
function getFrenchVoice() {
  var french = getFrenchVoices();
  if (!french.length) return null;
  var saved = getSavedVoiceId();
  if (saved) {
    for (var i = 0; i < french.length; i++) {
      if (voiceId(french[i]) === saved) return french[i];
    }
  }
  return french[0];
}

// Voices load in the background; wait (up to ~1.5 s) for them before speaking,
// otherwise the browser uses its default (English) voice.
function whenVoicesReady(callback) {
  if (getAllVoices().length) {
    callback();
    return;
  }
  var done = false;
  function go() {
    if (done) return;
    done = true;
    callback();
  }
  try {
    window.speechSynthesis.addEventListener("voiceschanged", go, { once: true });
  } catch (e) {}
  var tries = 0;
  var poll = setInterval(function () {
    tries++;
    if (getAllVoices().length || tries > 15) {
      clearInterval(poll);
      go();
    }
  }, 100);
}

// onStart / onEnd are optional callbacks (used to animate the teacher).
function speak(text, slow, onStart, onEnd) {
  if (!speechSupported) return;
  var synth = window.speechSynthesis;

  function start() {
    try {
      var u = new SpeechSynthesisUtterance(text);
      if (onEnd) {
        u.onend = onEnd;
        u.onerror = onEnd;
      }
      if (onStart) onStart();
      var voice = getFrenchVoice();
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang; // keep language and voice in agreement
      } else {
        u.lang = "fr-FR";
      }
      u.rate = slow ? 0.6 : 0.9;
      currentUtterance = u;
      synth.speak(u);
    } catch (e) {
      /* speech is a bonus; ignore failures */
    }
  }

  try {
    // Never interrupt with cancel(): in Firefox on Mac it can break voice
    // selection for the rest of the session (everything turns English).
    // If it's still talking, just ignore the extra press.
    if (synth.speaking || synth.pending) return;
    whenVoicesReady(start);
  } catch (e) {}
}

/* ==========================================================
   VOICE SETTINGS SCREEN
   ========================================================== */
function showVoiceSettings() {
  showMessage("voice-message", "");
  showScreen("voice");
  if (!speechSupported) {
    $("voice-select").hidden = true;
    $("voice-test").hidden = true;
    showMessage("voice-message", TEXT.voice.noSpeech, "error");
    return;
  }
  whenVoicesReady(fillVoiceSelect);
}

function fillVoiceSelect() {
  var select = $("voice-select");
  var french = getFrenchVoices();
  select.innerHTML = "";

  if (!french.length) {
    select.hidden = true;
    $("voice-test").hidden = true;
    showMessage("voice-message", TEXT.voice.noFrench, "error");
    return;
  }
  select.hidden = false;
  $("voice-test").hidden = false;

  var auto = document.createElement("option");
  auto.value = "";
  auto.textContent = TEXT.voice.auto + " — " + french[0].name;
  select.appendChild(auto);

  french.forEach(function (v) {
    var opt = document.createElement("option");
    opt.value = voiceId(v);
    opt.textContent = v.name + " (" + v.lang + ")";
    select.appendChild(opt);
  });

  var saved = getSavedVoiceId();
  select.value = saved;
  if (select.value !== saved) select.value = ""; // saved voice no longer exists
}

function onVoiceChange() {
  var settings = state.data.settings || {};
  settings.voiceId = $("voice-select").value;
  state.data.settings = settings;
  saveData(state.data);
  showMessage("voice-message", TEXT.voice.saved, "success");
  speak(TEXT.voice.testSentence, false);
}

// Deliberately does nothing: sentences are short, so we let them finish
// rather than calling cancel() (see speak()). Kept so callers stay simple.
function stopSpeaking() {}

/* ==========================================================
   GAME 2: FILL THE GAPS
   ========================================================== */
var gapGame = {
  order: [],
  index: 0,
  perfect: 0,
  current: null,  // { text, tokens, gap, word }
  lastGap: {}     // sentence text -> gap index used last time (this session)
};

// French elisions (l', d', qu', ...) are split off and never become the gap.
var ELISION = /^(lorsqu|puisqu|jusqu|qu|[cdjlmnst])(['’])(.+)$/i;

function pushWord(word, tokens) {
  var m = word.match(ELISION);
  if (m) {
    tokens.push({ text: m[1] + m[2], word: false });
    pushWord(m[3], tokens);
  } else {
    tokens.push({ text: word, word: true });
  }
}

// Split a sentence into words (possible gaps) and everything else.
// Keeps "aujourd'hui" and "peut-être" as one word.
function tokenize(sentence) {
  var tokens = [];
  var re = /\p{L}+(?:[-'’]\p{L}+)*/gu;
  var last = 0;
  var m;
  while ((m = re.exec(sentence))) {
    if (m.index > last) tokens.push({ text: sentence.slice(last, m.index), word: false });
    pushWord(m[0], tokens);
    last = m.index + m[0].length;
  }
  if (last < sentence.length) tokens.push({ text: sentence.slice(last), word: false });
  return tokens;
}

function pickGap(text, tokens) {
  var options = [];
  tokens.forEach(function (t, i) {
    if (t.word) options.push(i);
  });
  // Don't hide the same word twice in a row for the same sentence.
  if (options.length > 1 && gapGame.lastGap[text] !== undefined) {
    options = options.filter(function (i) { return i !== gapGame.lastGap[text]; });
  }
  return options[Math.floor(Math.random() * options.length)];
}

function startGaps() {
  var week = getCurrentWeek();
  gapGame.order = shuffle(week.sentences.map(function (s) { return clean(s.text); }));
  gapGame.index = 0;
  gapGame.perfect = 0;
  showGapSentence();
}

function showGapSentence() {
  var total = gapGame.order.length;
  var text = gapGame.order[gapGame.index];
  var tokens = tokenize(text);
  var gap = pickGap(text, tokens);
  gapGame.lastGap[text] = gap;
  gapGame.current = { text: text, tokens: tokens, gap: gap, word: tokens[gap].text };

  setText("gap-counter", fill(TEXT.gaps.counter, { n: gapGame.index + 1, total: total }));
  $("gap-progress").style.width = (gapGame.index / total) * 100 + "%";

  var card = $("gap-sentence");
  card.innerHTML = "";
  tokens.forEach(function (t, i) {
    if (i === gap) {
      var input = document.createElement("input");
      input.type = "text";
      input.id = "gap-input";
      input.className = "gap-input";
      input.setAttribute("spellcheck", "false");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("autocapitalize", "off");
      input.setAttribute("autocomplete", "off");
      input.setAttribute("lang", "fr");
      input.style.width = Math.max(t.text.length + 2, 5) + "ch";
      input.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          ev.preventDefault();
          onGapCheck();
        }
      });
      input.addEventListener("input", function () {
        showMessage("gap-message", "");
      });
      card.appendChild(input);
    } else {
      card.appendChild(document.createTextNode(t.text));
    }
  });

  showMessage("gap-message", "");
  $("gap-result").hidden = true;
  $("gap-check").hidden = false;
  $("gap-next").hidden = true;
  showScreen("gaps");
  $("gap-input").focus();
}

function onGapCheck() {
  var input = $("gap-input");
  if (!input) return;
  var typed = normalizeAnswer(input.value);
  if (!typed) {
    showMessage("gap-message", TEXT.gaps.emptyAnswer, "error");
    input.focus();
    return;
  }

  var word = normalizeAnswer(gapGame.current.word);
  var isPerfect = typed === word;
  if (isPerfect) gapGame.perfect++;

  // Put the right word into the sentence.
  var span = document.createElement("span");
  span.className = "gap-word " + (isPerfect ? "good" : "bad");
  span.textContent = gapGame.current.word;
  input.parentNode.replaceChild(span, input);

  var fb = $("gap-feedback");
  fb.textContent = isPerfect ? TEXT.gaps.perfect : TEXT.gaps.almost;
  fb.className = "feedback " + (isPerfect ? "good" : "bad");

  $("gap-diff").hidden = isPerfect;
  if (!isPerfect) {
    var parts = diffChars(typed, word);
    renderDiff("gap-yours", parts, "wrong");
    renderDiff("gap-correct", parts, "missing");
  }

  var isLast = gapGame.index >= gapGame.order.length - 1;
  setButtonText("gap-next", isLast ? TEXT.gaps.seeResults : TEXT.gaps.next);
  $("gap-progress").style.width = ((gapGame.index + 1) / gapGame.order.length) * 100 + "%";

  showMessage("gap-message", "");
  $("gap-result").hidden = false;
  $("gap-check").hidden = true;
  $("gap-next").hidden = false;
  $("gap-next").focus();
}

function onGapNext() {
  stopSpeaking();
  gapGame.index++;
  if (gapGame.index < gapGame.order.length) showGapSentence();
  else showEnd(gapGame.perfect, gapGame.order.length, TEXT.gaps.endScore, startGaps);
}

function onGapQuit() {
  if (window.confirm(TEXT.gaps.confirmQuit)) renderHome();
}

/* ==========================================================
   STARTUP
   ========================================================== */
function applyStaticText() {
  document.title = TEXT.appTitle;
  setText("app-title", TEXT.appTitle);
  setText("app-subtitle", TEXT.appSubtitle);

  setText("week-kicker", TEXT.currentWeek);
  setButtonText("btn-see", TEXT.menu.see);
  setButtonText("btn-parent", TEXT.menu.parent);
  setText("sentences-back", TEXT.voice.back);
  setText("sentences-kicker", TEXT.currentWeek);
  setButtonText("sentences-add", TEXT.menu.parent);
  setButtonText("btn-memorize", TEXT.menu.memorize);
  setButtonText("btn-gaps", TEXT.menu.gaps);
  setButtonText("btn-spot", TEXT.menu.spot);

  setText("editor-instruction", TEXT.editor.instruction);
  setText("label-correct", TEXT.editor.labelCorrect);
  setText("label-wrong1", TEXT.editor.labelWrong1);
  setText("label-wrong2", TEXT.editor.labelWrong2);
  setText("editor-back", TEXT.editor.back);
  setText("editor-cancel", TEXT.editor.cancel);
  setButtonText("btn-next", TEXT.editor.next);
  setButtonText("btn-done", TEXT.editor.done);
  setButtonText("btn-finish", TEXT.editor.finish);

  setText("summary-heading", TEXT.summary.heading);
  setText("summary-intro", TEXT.summary.intro);
  setButtonText("btn-save", TEXT.summary.save);
  setButtonText("btn-summary-back", TEXT.summary.back);

  setText("mem-quit", TEXT.memorize.quit);
  setText("mem-look-instruction", TEXT.memorize.lookInstruction);
  setButtonText("mem-go", TEXT.memorize.go);
  setText("mem-write-instruction", TEXT.memorize.writeInstruction);
  setButtonText("mem-check", TEXT.memorize.check);
  setText("mem-yours-label", TEXT.memorize.yoursLabel);
  setText("mem-correct-label", TEXT.memorize.correctLabel);
  setText("gap-quit", TEXT.gaps.quit);
  setText("gap-instruction", TEXT.gaps.instruction);
  setButtonText("gap-listen", TEXT.gaps.listen);
  setButtonText("gap-listen-slow", TEXT.gaps.listenSlow);
  setButtonText("gap-check", TEXT.gaps.check);
  setText("gap-yours-label", TEXT.gaps.yoursLabel);
  setText("gap-correct-label", TEXT.gaps.correctLabel);
  $("gap-listen-row").hidden = !speechSupported;

  setText("label-practice", TEXT.menu.practice);
  setText("label-test", TEXT.menu.test);
  setButtonText("btn-dictee", TEXT.menu.dictee);

  setText("dictee-quit", TEXT.dictee.quit);
  setText("dictee-instruction", TEXT.dictee.instruction);
  setButtonText("dictee-slow", TEXT.dictee.slow);
  $("dictee-teacher").setAttribute("aria-label", TEXT.dictee.instruction);
  setButtonText("dr-again", TEXT.dictee.again);
  setButtonText("dr-home", TEXT.dictee.home);

  setText("spot-quit", TEXT.spot.quit);
  setText("spot-instruction", TEXT.spot.instruction);

  setText("btn-voice", TEXT.voice.link);
  setText("voice-back", TEXT.voice.back);
  setText("voice-heading", TEXT.voice.heading);
  setText("voice-instruction", TEXT.voice.instruction);
  setButtonText("voice-test", TEXT.voice.test);

  setButtonText("end-again", TEXT.end.again);
  setButtonText("end-home", TEXT.end.home);
}

function bindEvents() {
  fields.correct = $("field-correct");
  fields.wrong1 = $("field-wrong1");
  fields.wrong2 = $("field-wrong2");

  // Home
  $("btn-parent").addEventListener("click", startEditor);
  $("btn-see").addEventListener("click", showSentences);
  $("sentences-back").addEventListener("click", function () { renderHome(); });
  $("sentences-add").addEventListener("click", startEditor);
  $("btn-memorize").addEventListener("click", startMemorize);
  $("btn-gaps").addEventListener("click", startGaps);
  $("btn-spot").addEventListener("click", startSpot);

  // Editor
  fields.correct.addEventListener("change", prefillWrongs);
  fields.correct.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      prefillWrongs();
      fields.wrong1.focus();
    }
  });
  fields.wrong1.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      fields.wrong2.focus();
    }
  });
  fields.wrong2.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      if (state.index >= MAX_SENTENCES - 1) onDone();
      else onNext();
    }
  });
  ["correct", "wrong1", "wrong2"].forEach(function (k) {
    fields[k].addEventListener("input", function () {
      fields[k].classList.remove("invalid");
    });
  });

  $("btn-next").addEventListener("click", onNext);
  $("btn-done").addEventListener("click", onDone);
  $("btn-finish").addEventListener("click", onDone);
  $("editor-back").addEventListener("click", onBack);
  $("editor-cancel").addEventListener("click", onCancel);

  // Summary
  $("btn-save").addEventListener("click", onSaveWeek);
  $("btn-summary-back").addEventListener("click", function () {
    state.index = state.entries.length - 1;
    showEditor();
  });

  // Game 1: Memorize & Write
  $("mem-go").addEventListener("click", onMemGo);
  $("mem-check").addEventListener("click", onMemCheck);
  $("mem-next").addEventListener("click", onMemNext);
  $("mem-quit").addEventListener("click", onMemQuit);
  // Game 2: Fill the Gaps
  // Same call as the Test button in Voice settings, nothing else:
  // moving focus into the text box right after speak() made Firefox (Mac)
  // drop the chosen voice and use its default English one.
  function listen(slow) {
    var active = document.activeElement;
    if (active && active.blur && active.tagName === "INPUT") active.blur();
    speak(gapGame.current.text, slow);
  }
  $("gap-listen").addEventListener("click", function () { listen(false); });
  $("gap-listen-slow").addEventListener("click", function () { listen(true); });
  $("gap-check").addEventListener("click", onGapCheck);
  $("gap-next").addEventListener("click", onGapNext);
  $("gap-quit").addEventListener("click", onGapQuit);

  // Game 3: Spot the Right Sentence
  $("spot-next").addEventListener("click", onSpotNext);
  $("spot-quit").addEventListener("click", onSpotQuit);

  // Dictée
  $("btn-dictee").addEventListener("click", startDictee);
  $("dictee-teacher").addEventListener("click", function () { dicteeSpeak(false); });
  $("dictee-slow").addEventListener("click", function () { dicteeSpeak(true); });
  $("dictee-next").addEventListener("click", onDicteeNext);
  $("dictee-quit").addEventListener("click", onDicteeQuit);
  $("dictee-input").addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      onDicteeNext();
    }
  });
  $("dictee-input").addEventListener("input", function () {
    showMessage("dictee-message", "");
  });
  $("dr-again").addEventListener("click", startDictee);
  $("dr-home").addEventListener("click", function () { renderHome(); });

  // Shared end screen
  $("end-again").addEventListener("click", function () {
    if (endRestart) endRestart();
  });
  $("end-home").addEventListener("click", function () { renderHome(); });

  // Voices load in the background in some browsers.
  // Voice settings
  $("btn-voice").addEventListener("click", showVoiceSettings);
  $("voice-back").addEventListener("click", function () { renderHome(); });
  $("voice-select").addEventListener("change", onVoiceChange);
  $("voice-test").addEventListener("click", function () {
    speak(TEXT.voice.testSentence, false);
  });

  // Asking once here makes the voices start loading.
  if (speechSupported) getAllVoices();
  $("mem-input").addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      onMemCheck();
    }
  });
  $("mem-input").addEventListener("input", function () {
    showMessage("mem-write-message", "");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyStaticText();
  bindEvents();
  renderHome();
});
