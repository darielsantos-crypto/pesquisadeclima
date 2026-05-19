const DEFAULT_CONFIG = {
  "settings": {
    "company": "Luncena",
    "title": "Pesquisa de Clima Organizacional",
    "minimumScore": 75,
    "adminUser": "admin",
    "adminPass": "lucena2026"
  },
  "works": [
    {
      "code": "2221",
      "name": "PORTO MANT. 2024",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 102
    },
    {
      "code": "2277",
      "name": "ADUTORA",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 70
    },
    {
      "code": "2262",
      "name": "RENOVAÇÕES",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 242
    },
    {
      "code": "2211",
      "name": "PACOTE IV MA",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 3
    },
    {
      "code": "2264",
      "name": "PACOTE 07",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 191
    },
    {
      "code": "2263",
      "name": "INTEGRIDADE KM 296",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 73
    },
    {
      "code": "2281",
      "name": "KM 374",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 149
    },
    {
      "code": "",
      "name": "BALANÇA SILO I",
      "state": "MA",
      "type": "Privada",
      "expectedRespondents": 12
    },
    {
      "code": "2273",
      "name": "DRENAGEM CARAJÁS",
      "state": "PA",
      "type": "Privada",
      "expectedRespondents": 113
    },
    {
      "code": "2278",
      "name": "SERRA LESTE",
      "state": "PA",
      "type": "Privada",
      "expectedRespondents": 170
    },
    {
      "code": "2211",
      "name": "PACOTE IV PA",
      "state": "PA",
      "type": "Privada",
      "expectedRespondents": 3
    }
  ],
  "areas": [
    "Almoxarifado",
    "Administrativo",
    "Comunicação",
    "Compras/Suprimentos",
    "Contabilidade",
    "Controladoria",
    "Diretoria",
    "Engenharia",
    "Financeiro",
    "Informática/TI",
    "Jurídico",
    "Licitação/Contratos",
    "Logística",
    "Manutenção",
    "Operacional",
    "Orçamento",
    "Planejamento",
    "Qualidade",
    "RH/DP",
    "Sala Técnica",
    "Serviços/Apoio/Recepção",
    "SESMT"
],
  "profiles": [
    "Administrativo",
    "Operacional"
  ],
  "pillars": [
    {
      "id": "seguranca",
      "name": "Saúde, Segurança e Bem-estar",
      "shortName": "Segurança e Bem-estar",
      "icon": "🛡️",
      "description": "Avalia se a empresa protege as pessoas, promove segurança e cuida do bem-estar físico e emocional.",
      "questions": [
        "Sinto que a Luncena valoriza a vida e a segurança das pessoas em primeiro lugar.",
        "Tenho condições seguras para realizar meu trabalho.",
        "A empresa orienta e cobra práticas de segurança de forma clara.",
        "Sinto que minha saúde e bem-estar são considerados pela empresa."
      ]
    },
    {
      "id": "ambienteFisico",
      "name": "Ambiente Físico e Condições de Trabalho",
      "shortName": "Ambiente Físico",
      "icon": "🏗️",
      "description": "Avalia estrutura, ferramentas, equipamentos e condições práticas para execução do trabalho.",
      "questions": [
        "Tenho os recursos, ferramentas e equipamentos necessários para realizar bem meu trabalho.",
        "O ambiente físico da obra/unidade é adequado para minhas atividades.",
        "As condições de higiene, organização e infraestrutura atendem às necessidades do trabalho.",
        "A empresa age rapidamente quando há problemas estruturais ou operacionais."
      ]
    },
    {
      "id": "lideranca",
      "name": "Liderança e Gestão",
      "shortName": "Liderança",
      "icon": "👷",
      "description": "Avalia confiança, proximidade, orientação e qualidade da gestão.",
      "questions": [
        "Minha liderança orienta com clareza o que espera de mim.",
        "Minha liderança escuta a equipe e considera nossas opiniões.",
        "Recebo feedbacks úteis para melhorar meu desempenho.",
        "Confio nas decisões tomadas pela liderança da minha área."
      ]
    },
    {
      "id": "comunicacao",
      "name": "Comunicação Interna",
      "shortName": "Comunicação Interna",
      "icon": "💬",
      "description": "Avalia clareza das informações, alinhamento e transparência.",
      "questions": [
        "Recebo as informações necessárias para realizar meu trabalho.",
        "A comunicação entre empresa, liderança e equipe é clara.",
        "Entendo os objetivos e prioridades da Luncena.",
        "As mudanças importantes são comunicadas com antecedência e transparência."
      ]
    },
    {
      "id": "etica",
      "name": "Ética, Respeito e Confiança",
      "shortName": "Ética e Respeito",
      "icon": "⚖️",
      "description": "Avalia integridade, justiça, respeito e coerência entre discurso e prática.",
      "questions": [
        "A empresa age com ética e integridade no dia a dia.",
        "Sinto que sou tratado com respeito no ambiente de trabalho.",
        "Percebo coerência entre os valores da empresa e as atitudes praticadas.",
        "Sinto segurança para falar sobre problemas sem medo de retaliação."
      ]
    },
    {
      "id": "remuneracao",
      "name": "Remuneração, Benefícios e Reconhecimento",
      "shortName": "Remuneração e Benefícios",
      "icon": "💰",
      "description": "Avalia percepção de justiça, valorização e reconhecimento.",
      "questions": [
        "Considero minha remuneração compatível com minhas responsabilidades.",
        "Os benefícios oferecidos atendem às minhas principais necessidades.",
        "Sinto que meu esforço e dedicação são reconhecidos.",
        "A empresa valoriza quem entrega bons resultados."
      ]
    },
    {
      "id": "engajamento",
      "name": "Compromisso, Engajamento e Orgulho",
      "shortName": "Engajamento",
      "icon": "🤝",
      "description": "Avalia vínculo emocional, motivação e intenção de permanência.",
      "questions": [
        "Tenho orgulho de trabalhar na Luncena.",
        "Sinto motivação para contribuir com os resultados da empresa.",
        "Pretendo continuar trabalhando na Luncena nos próximos anos.",
        "Eu recomendaria a Luncena como um bom lugar para trabalhar."
      ]
    }
  ],
  "simulatedResponses": []
};

const DB_KEY = 'lucena_clima_db_v4_setores_atualizados';
const USER_KEY = 'lucena_current_user_v1';
let CONFIG = null;
let DB = null;

async function boot() {
  CONFIG = await fetch('data.json').then(r => r.json()).catch(() => window.LUCENA_DATA || DEFAULT_CONFIG);
  DB = loadDB();
  route();
}

function seedResponse(r, index) {
  const scores = calculateScores(r.answers);
  return {
    id: 'SIM-' + String(index + 1).padStart(4, '0'),
    name: r.name,
    registration: r.registration,
    unit: r.unit,
    area: r.area,
    role: r.role,
    gender: r.gender || 'Não informado',
    createdAt: new Date(Date.now() - (index + 2) * 86400000).toISOString(),
    answers: r.answers,
    openStrengths: r.openStrengths || '',
    openImprove: r.openImprove || '',
    pillarScores: scores.pillars,
    totalScore: scores.total
  };
}

function loadDB() {
  const saved = localStorage.getItem(DB_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    parsed.works = parsed.works || normalizeWorks(CONFIG.works || []);
    parsed.responses = parsed.responses || [];
    parsed.expectedRespondents = totalExpected(parsed.works);
    return parsed;
  }
  const base = {
    works: normalizeWorks(CONFIG.works || []),
    expectedRespondents: totalExpected(CONFIG.works || []),
    responses: (CONFIG.simulatedResponses || []).map(seedResponse)
  };
  localStorage.setItem(DB_KEY, JSON.stringify(base));
  return base;
}

function saveDB() { localStorage.setItem(DB_KEY, JSON.stringify(DB)); }
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }
function fmt(n) { return (Number(n || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function normalizeWorks(works) {
  return (works || []).map((w, index) => ({
    id: w.id || `OBRA-${Date.now()}-${index}`,
    code: String(w.code || '').trim(),
    name: String(w.name || '').trim(),
    state: String(w.state || '').trim() || 'MA',
    type: String(w.type || '').trim() || 'Privada',
    expectedRespondents: Number(w.expectedRespondents || 0)
  })).filter(w => w.name);
}
function totalExpected(works = DB?.works || []) { return (works || []).reduce((sum, w) => sum + Number(w.expectedRespondents || 0), 0); }
function workNames() { return (DB?.works?.length ? DB.works : normalizeWorks(CONFIG.works || [])).map(w => w.name); }
function getWorkByName(name) { return (DB?.works || []).find(w => w.name === name); }
function expectedForWork(name) { const w = getWorkByName(name); return w ? Number(w.expectedRespondents || 0) : 0; }
function inferProfile(row) {
  if (row.profile) return row.profile;
  const txt = normalizeText([row.role, row.area].join(' '));
  const adminKeys = ['administrativo','adm','analista','auxiliar','assistente','compras','suprimentos','rh','dp','financeiro','controladoria','contabilidade','juridico','licitação','licitacao','contratos','orçamento','orcamento','diretoria','comunicação','comunicacao','informática','informatica','ti','planejamento','qualidade','recepção','recepcao','serviços','servicos','apoio'];
  const operKeys = ['operacional','operador','encarregado','motorista','pedreiro','servente','tecnico','técnico','engenharia','sesmt','ssma','manutencao','manutenção','almoxarifado','logística','logistica','sala técnica','sala tecnica','campo','obra'];
  if (adminKeys.some(k => txt.includes(k))) return 'Administrativo';
  if (operKeys.some(k => txt.includes(k))) return 'Operacional';
  return row.area === 'Administrativo' ? 'Administrativo' : 'Operacional';
}
function scoreClass(score) { if (score >= 85) return 'good'; if (score >= 75) return 'ok'; if (score >= 60) return 'attention'; return 'critical'; }
function scoreLabel(score) { if (score >= 85) return 'Ponto forte'; if (score >= 75) return 'Bom, pode evoluir'; if (score >= 60) return 'Atenção'; return 'Crítico'; }
function answerToScore(v) { return ({1:0,2:25,3:50,4:75,5:100})[Number(v)] ?? 0; }

function calculateScores(answers) {
  const pillars = {};
  CONFIG.pillars.forEach(p => {
    const arr = answers[p.id] || [];
    pillars[p.id] = arr.length ? arr.reduce((s, v) => s + answerToScore(v), 0) / arr.length : 0;
  });
  const vals = Object.values(pillars);
  const total = vals.length ? vals.reduce((a,b) => a+b,0) / vals.length : 0;
  return { pillars, total };
}

function currentResponses(filter = {}) {
  let res = [...DB.responses];
  if (filter.unit && filter.unit !== 'Todos') res = res.filter(r => r.unit === filter.unit);
  if (filter.area && filter.area !== 'Todas') res = res.filter(r => r.area === filter.area);
  return res;
}

function aggregate(responses) {
  const emptyPillars = Object.fromEntries(CONFIG.pillars.map(p => [p.id, 0]));
  if (!responses.length) return { total: 0, pillars: emptyPillars, count: 0, byUnit: [], byArea: [], byGender: [], byProfile: [] };
  const pillars = {};
  CONFIG.pillars.forEach(p => {
    pillars[p.id] = avg(responses.map(r => r.pillarScores[p.id]));
  });
  return {
    total: avg(responses.map(r => r.totalScore)),
    pillars,
    count: responses.length,
    byUnit: groupAvg(responses, 'unit'),
    byArea: groupAvg(responses, 'area'),
    byGender: groupAvg(responses, 'gender'),
    byProfile: groupAvg(responses.map(r => ({...r, profile: inferProfile(r)})), 'profile')
  };
}
function avg(arr){ return arr.length ? arr.reduce((a,b)=>a+Number(b||0),0)/arr.length : 0; }
function groupAvg(rows, key) {
  const map = {};
  rows.forEach(r => { const name = r[key] || 'Não informado'; (map[name] ||= []).push(r.totalScore); });
  return Object.entries(map).map(([name, values]) => ({ name, score: avg(values), count: values.length })).sort((a,b)=>b.score-a.score);
}
function sortedPillars(pillarScores, asc=false) {
  return CONFIG.pillars.map(p => ({...p, score: pillarScores[p.id]})).sort((a,b)=> asc ? a.score-b.score : b.score-a.score);
}

function route() {
  const page = document.body.dataset.page;
  renderTopbar();
  if (page === 'index') renderIndex();
  if (page === 'survey') renderSurvey();
  if (page === 'dashboard') renderDashboard();
  if (page === 'admin') renderAdmin();
}

function renderTopbar() {
  const el = $('#topbar');
  if (!el) return;
  el.innerHTML = `
    <div class="brand"><div class="logo-mark">L</div><div>LUNCENA<small>Pesquisa de Clima Organizacional</small></div></div>
    <div class="nav no-print">
      <a href="index.html">Pesquisa</a><a href="dashboard.html">Dashboard</a><a href="admin.html">Admin</a>
    </div>`;
}

function renderIndex() {
  $('#units').innerHTML = workNames().map(u=>`<option>${u}</option>`).join('');
  $('#area').innerHTML = CONFIG.areas.map(a=>`<option>${a}</option>`).join('');
  const profile = $('#profile');
  if (profile) profile.innerHTML = (CONFIG.profiles || ['Administrativo','Operacional']).map(p=>`<option>${p}</option>`).join('');
  const areaSelect = $('#area');
  if (areaSelect && profile) {
    const syncProfile = () => {
      const guess = inferProfile({ area: areaSelect.value, role: areaSelect.value });
      if ([...profile.options].some(o => o.value === guess)) profile.value = guess;
    };
    areaSelect.addEventListener('change', syncProfile);
    syncProfile();
  }
  $('#loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    localStorage.setItem(USER_KEY, JSON.stringify(data));
    location.href = 'survey.html';
  });
  renderKpiPreview();
}

function renderKpiPreview() {
  const target = $('#previewMetrics');
  if (!target) return;
  const ag = aggregate(DB.responses);
  const strengths = sortedPillars(ag.pillars).slice(0,3);
  const weak = sortedPillars(ag.pillars,true).slice(0,3);
  target.innerHTML = `
    <div class="metric"><b>${fmt(ag.total)}</b><span>Nota geral</span></div>
    <div class="metric"><b>${DB.responses.length}</b><span>Respostas registradas</span></div>
    <div class="metric"><b>${strengths[0]?.shortName || '-'}</b><span>Maior pilar</span></div>
    <div class="metric"><b>${weak[0]?.shortName || '-'}</b><span>Maior atenção</span></div>`;
}

function renderSurvey() {
  const user = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
  if (!user.name) location.href = 'index.html';
  $('#userHello').textContent = `${user.name}, sua percepção ajuda a construir um ambiente melhor.`;
  let step = -1;
  const state = { answers: {}, openStrengths: '', openImprove: '' };
  const totalSteps = CONFIG.pillars.length + 1;

  function draw() {
    const progress = Math.max(0, ((step + 1) / totalSteps) * 100);
    $('#progressFill').style.width = `${progress}%`;
    $('#stepList').innerHTML = CONFIG.pillars.map((p,i)=>`<div class="step-item ${i===step?'active':''}">${i+1}. ${p.shortName}</div>`).join('') + `<div class="step-item ${step===CONFIG.pillars.length?'active':''}">Finalização</div>`;
    if (step === -1) {
      $('#surveyContent').innerHTML = introHtml();
      $('#startBtn').onclick = () => { step = 0; draw(); };
      return;
    }
    if (step < CONFIG.pillars.length) renderPillarStep(CONFIG.pillars[step]); else renderFinalStep();
  }
  function introHtml() {
    return `<div class="card"><span class="pill">8 a 12 minutos</span><h2>Antes de começar</h2><p>A pesquisa busca entender ambiente, liderança, comunicação, segurança, ética, remuneração, desenvolvimento e engajamento. Use a escala de 1 a 5, sendo 1 discordo totalmente e 5 concordo totalmente.</p><div class="notice">As respostas serão tratadas de forma consolidada para análise de clima organizacional.</div><br><button class="btn" id="startBtn">Começar</button></div>`;
  }
  function renderPillarStep(p) {
    const qs = p.questions.map((q,idx)=>`
      <div class="question"><h4>${idx+1}. ${q}</h4><div class="scale">${[1,2,3,4,5].map(v=>`<label><input type="radio" name="q${idx}" value="${v}" ${state.answers[p.id]?.[idx]==v?'checked':''}><div>${v}</div><small>${['Discordo totalmente','Discordo parcialmente','Neutro','Concordo parcialmente','Concordo totalmente'][v-1]}</small></label>`).join('')}</div></div>`).join('');
    $('#surveyContent').innerHTML = `<div class="card"><span class="pill">${p.icon} Pilar ${step+1}</span><h2>${p.name}</h2><p>${p.description}</p><form id="pillarForm">${qs}<div class="btn-row"><button type="button" class="btn alt" id="prevBtn">Voltar</button><button class="btn">${step === CONFIG.pillars.length-1 ? 'Ir para perguntas finais' : 'Próximo pilar'}</button></div></form></div>`;
    $('#prevBtn').onclick = () => { step--; draw(); };
    $('#pillarForm').onsubmit = (e) => {
      e.preventDefault();
      const values = p.questions.map((_, idx) => Number(new FormData(e.target).get(`q${idx}`)));
      if (values.some(v=>!v)) return toast('Responda todas as perguntas deste pilar.');
      state.answers[p.id] = values;
      step++; draw();
    };
  }
  function renderFinalStep() {
    $('#surveyContent').innerHTML = `<div class="card"><span class="pill">Finalização</span><h2>Perguntas abertas</h2><div class="field"><label>Quais são hoje os três principais pontos fortes da Luncena?</label><textarea id="openStrengths" rows="4">${state.openStrengths}</textarea></div><div class="field"><label>Quais são hoje os três principais pontos que a Luncena precisa melhorar?</label><textarea id="openImprove" rows="4">${state.openImprove}</textarea></div><br><div class="btn-row"><button class="btn alt" id="backFinal">Voltar</button><button class="btn" id="finishSurvey">Finalizar pesquisa</button></div></div>`;
    $('#backFinal').onclick = () => { step--; draw(); };
    $('#finishSurvey').onclick = () => {
      state.openStrengths = $('#openStrengths').value.trim();
      state.openImprove = $('#openImprove').value.trim();
      const scores = calculateScores(state.answers);
      DB.responses.push({
        id: 'RSP-' + Date.now(), name: user.name, registration: user.registration, unit: user.unit, area: user.area, profile: user.profile || inferProfile(user), role: user.role, gender: user.gender || 'Não informado', createdAt: new Date().toISOString(),
        answers: state.answers, openStrengths: state.openStrengths, openImprove: state.openImprove, pillarScores: scores.pillars, totalScore: scores.total
      });
      saveDB();
      localStorage.removeItem(USER_KEY);
      $('#surveyContent').innerHTML = `<div class="card"><span class="pill">Pesquisa enviada</span><h2>Obrigado por participar!</h2><p>Sua resposta foi registrada com sucesso. A análise principal será exibida de forma consolidada e anônima.</p><div class="btn-row"><a class="btn" href="admin.html">Ver área administrativa</a><a class="btn alt" href="index.html">Nova resposta</a></div></div>`;
    };
  }
  draw();
}

function renderDashboard() {
  fillFilters();
  const run = () => {
    const filter = { unit: $('#unitFilter').value, area: $('#areaFilter').value };
    const res = currentResponses(filter);
    const ag = aggregate(res);
    renderExecutiveDashboard(ag, res, filter);
  };
  $('#unitFilter').onchange = run; $('#areaFilter').onchange = run; $('#resetDemo').onclick = resetDemo; $('#printBtn').onclick = () => window.print();
  run();
}

function fillFilters() {
  const units = ['Todos', ...new Set(DB.responses.map(r=>r.unit))];
  const areas = ['Todas', ...new Set(DB.responses.map(r=>r.area))];
  $('#unitFilter').innerHTML = units.map(x=>`<option>${x}</option>`).join('');
  $('#areaFilter').innerHTML = areas.map(x=>`<option>${x}</option>`).join('');
}

function renderExecutiveDashboard(ag, res, filter) {
  const target = filter.unit !== 'Todos' ? filter.unit : 'Grupo Luncena';
  const strengths = sortedPillars(ag.pillars).slice(0,3);
  const weak = sortedPillars(ag.pillars,true).slice(0,3);
  const answered = res.length;
  const expected = filter.unit === 'Todos' ? DB.expectedRespondents : Math.max(answered, Math.round(DB.expectedRespondents / 6));
  $('#dashboardRoot').innerHTML = `
    <div class="grid grid-4">
      ${kpi('Previsto', expected)}${kpi('Respondido', answered)}${kpi('Adesão', expected?fmt(answered/expected*100)+'%':'0%')}${kpi('Nota geral', fmt(ag.total))}
    </div>
    <div class="report-blue">
      <div class="section-title"><span class="pill">Resultado geral</span><button class="btn light no-print" onclick="location.href='admin.html'">Admin</button></div>
      <div class="split"><div><h2>${target}</h2><p>${autoIntro(target, ag.total, weak)}</p><div class="score-big">${fmt(ag.total)}</div><span class="tag ${scoreClass(ag.total)}">${scoreLabel(ag.total)}</span></div><div>${barList(ag.pillars, true)}</div></div>
      <br><div class="insight-box"><b>Comentário executivo:</b> ${executiveComment(ag.total, strengths, weak)}</div>
    </div>
    <div class="grid grid-2">
      <div class="card"><div class="section-title"><h3>Oportunidades de melhoria</h3><span class="pill">menores notas</span></div>${miniBars(weak, true)}${actionPlan(weak)}</div>
      <div class="card"><div class="section-title"><h3>Pontos fortes</h3><span class="pill">maiores notas</span></div>${miniBars(strengths, false)}<p class="notice">Esses pilares devem ser preservados como referência de cultura e replicados nas áreas com menor desempenho.</p></div>
    </div>
    <div class="grid grid-2">
      <div class="card"><div class="section-title"><h3>Ranking por obra/filial</h3></div>${rankingTable(ag.byUnit)}</div>
      <div class="card"><div class="section-title"><h3>Resultado por área</h3></div>${rankingTable(ag.byArea)}</div>
    </div>
    <div class="card"><div class="section-title"><h3>Comentários abertos agrupados</h3><span class="pill">qualitativo</span></div>${commentBlocks(res)}</div>`;
}
function kpi(label, value){ return `<div class="kpi"><span>${label}</span><strong>${value}</strong></div>`; }
function barList(pillars, light=false) { return CONFIG.pillars.map(p=>barRow(p.shortName, pillars[p.id], light)).join(''); }
function miniBars(items){ return items.map(p=>barRow(p.shortName, p.score)).join(''); }
function barRow(label, score) { return `<div class="bar-row"><div class="bar-label">${label}</div><div class="bar-track"><div class="bar-fill ${scoreClass(score)}" style="width:${Math.max(0,Math.min(100,score))}%"></div></div><div class="bar-score">${fmt(score)}</div></div>`; }
function rankingTable(rows) { return `<div class="table-wrap"><table><thead><tr><th>Nome</th><th>Respondentes</th><th>Nota</th><th>Status</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><b>${i+1}. ${r.name}</b></td><td>${r.count}</td><td>${fmt(r.score)}</td><td><span class="tag ${scoreClass(r.score)}">${scoreLabel(r.score)}</span></td></tr>`).join('')}</tbody></table></div>`; }
function autoIntro(target, total, weak) { return `Aqui estão os resultados consolidados de clima organizacional para ${target}. A nota geral indica ${scoreLabel(total).toLowerCase()}, com atenção especial para ${weak.map(w=>w.shortName).join(', ')}.`; }
function executiveComment(total, strengths, weak) { return `O resultado consolidado aponta nota ${fmt(total)}. Os principais pontos fortes são ${strengths.map(s=>s.shortName).join(', ')}. As prioridades de gestão devem se concentrar em ${weak.map(w=>w.shortName).join(', ')}, transformando os dados da pesquisa em planos de ação com responsáveis, prazos e acompanhamento.`; }
function actionPlan(weak) { return `<h4>Sugestões iniciais de ação</h4><ul>${weak.map(w=>`<li><b>${w.shortName}:</b> ${suggestion(w.id)}</li>`).join('')}</ul>`; }
function suggestion(id) { const m={seguranca:'tratar como prioridade máxima, reforçando DDS, inspeções, escuta ativa e resposta rápida aos riscos.',ambienteFisico:'mapear recursos críticos, criar rotina de manutenção e acompanhar pendências por unidade.',lideranca:'implantar trilha de desenvolvimento de gestores, feedbacks e rituais de alinhamento.',comunicacao:'criar calendário de comunicação interna, canais oficiais e alinhamentos periódicos por liderança.',etica:'reforçar canais de confiança, rituais de respeito e comunicação clara sobre condutas esperadas.',remuneracao:'avaliar percepção de benefícios, reconhecimento e competitividade interna por função.',engajamento:'fortalecer orgulho de pertencer, reconhecimento e conexão com os objetivos da empresa.'}; return m[id] || 'criar plano de ação específico.'; }
function commentBlocks(res) { const strengths = res.map(r=>r.openStrengths).filter(Boolean); const improves = res.map(r=>r.openImprove).filter(Boolean); return `<div class="grid grid-2"><div><h4>Pontos fortes citados</h4><ul>${strengths.slice(0,12).map(c=>`<li>${c}</li>`).join('') || '<li>Sem comentários.</li>'}</ul></div><div><h4>Pontos a melhorar citados</h4><ul>${improves.slice(0,12).map(c=>`<li>${c}</li>`).join('') || '<li>Sem comentários.</li>'}</ul></div></div>`; }

function renderAdmin() {
  $('#adminLogin').onsubmit = e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target).entries());
    if (f.user === CONFIG.settings.adminUser && f.pass === CONFIG.settings.adminPass) {
      $('#loginCard').classList.add('hidden');
      $('#adminPanel').classList.remove('hidden');
      initAdmin();
    } else toast('Usuário ou senha inválidos. Use admin / lucena2026');
  };
}

function initAdmin() {
  initAdminTabs();
  initWorkForm();
  initAdminFilters();
  renderWorksAdmin();
  drawAdmin();
  $('#exportJson').onclick = exportJson;
  $('#resetAll').onclick = resetDemo;
}
function initAdminTabs() {
  document.querySelectorAll('[data-admin-tab]').forEach(btn => {
    btn.onclick = () => switchAdminTab(btn.dataset.adminTab);
  });
  switchAdminTab('works');
}
function switchAdminTab(tab) {
  document.querySelectorAll('[data-admin-tab]').forEach(btn => btn.classList.toggle('active', btn.dataset.adminTab === tab));
  $('#worksAdminSection').classList.toggle('hidden', tab !== 'works');
  $('#dashboardAdminSection').classList.toggle('hidden', tab !== 'dashboard');
  if (tab === 'dashboard') { initAdminFilters(); drawAdmin(); }
}
function initWorkForm() {
  $('#workForm').onsubmit = e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target).entries());
    const item = {
      id: f.id || `OBRA-${Date.now()}`,
      code: String(f.code || '').trim(),
      name: String(f.name || '').trim().toUpperCase(),
      state: f.state,
      type: f.type,
      expectedRespondents: Number(f.expectedRespondents || 0)
    };
    if (!item.name) return toast('Informe o nome da obra.');
    DB.works = DB.works || [];
    const idx = DB.works.findIndex(w => w.id === item.id);
    if (idx >= 0) DB.works[idx] = item; else DB.works.push(item);
    DB.expectedRespondents = totalExpected(DB.works);
    saveDB();
    clearWorkForm();
    renderWorksAdmin();
    initAdminFilters();
    drawAdmin();
    toast('Obra salva com sucesso.');
  };
  $('#clearWorkForm').onclick = clearWorkForm;
}
function clearWorkForm() {
  $('#workId').value = '';
  $('#workForm').reset();
  $('#saveWorkBtn').textContent = 'Salvar obra';
}
function renderWorksAdmin() {
  DB.works = normalizeWorks(DB.works || []);
  DB.expectedRespondents = totalExpected(DB.works);
  $('#worksTotalPill').textContent = `${DB.expectedRespondents} respondentes previstos`;
  $('#worksTableCard').innerHTML = `
    <div class="section-title"><div><h3>Obras cadastradas</h3><span class="small-note">Essas opções aparecem automaticamente para o colaborador na tela da pesquisa.</span></div><span class="pill">${DB.works.length} obra(s)</span></div>
    <div class="table-wrap"><table><thead><tr><th>Código</th><th>Obra</th><th>Estado</th><th>Tipo</th><th>Previsto</th><th>Respondido</th><th>Adesão</th><th>Ações</th></tr></thead><tbody>${DB.works.map(w => {
      const responded = DB.responses.filter(r => r.unit === w.name).length;
      const adh = w.expectedRespondents ? responded / w.expectedRespondents * 100 : 0;
      return `<tr><td>${w.code || '-'}</td><td><b>${w.name}</b></td><td>${w.state}</td><td>${w.type}</td><td>${w.expectedRespondents}</td><td>${responded}</td><td>${Math.round(adh)}%</td><td><div class="respondent-actions"><button class="btn" onclick="editWork('${w.id}')">Editar</button><button class="btn red" onclick="deleteWork('${w.id}')">Excluir</button></div></td></tr>`;
    }).join('') || '<tr><td colspan="8">Nenhuma obra cadastrada.</td></tr>'}</tbody></table></div>`;
}
window.editWork = function(id) {
  const w = DB.works.find(x => x.id === id);
  if (!w) return;
  $('#workId').value = w.id;
  $('#workForm').elements.code.value = w.code || '';
  $('#workForm').elements.name.value = w.name || '';
  $('#workForm').elements.state.value = w.state || 'MA';
  $('#workForm').elements.type.value = w.type || 'Privada';
  $('#workForm').elements.expectedRespondents.value = w.expectedRespondents || 0;
  $('#saveWorkBtn').textContent = 'Atualizar obra';
  window.scrollTo({top:0, behavior:'smooth'});
};
window.deleteWork = function(id) {
  const w = DB.works.find(x => x.id === id);
  if (!w) return;
  if (DB.responses.some(r => r.unit === w.name)) return toast('Esta obra possui respostas vinculadas. Exclua apenas após exportar/limpar a base.');
  DB.works = DB.works.filter(x => x.id !== id);
  DB.expectedRespondents = totalExpected(DB.works);
  saveDB();
  renderWorksAdmin();
  initAdminFilters();
  drawAdmin();
  toast('Obra excluída.');
};

function initAdminFilters() {
  const unitSel = $('#adminUnitFilter');
  if (!unitSel) return;
  unitSel.innerHTML = ['Todas', ...workNames()].map(x=>`<option>${x}</option>`).join('');
  $('#adminAreaFilter').innerHTML = ['Todas', ...CONFIG.areas].map(x=>`<option>${x}</option>`).join('');
  $('#adminProfileFilter').innerHTML = ['Todos', ...(CONFIG.profiles || ['Administrativo','Operacional'])].map(x=>`<option>${x}</option>`).join('');
  $('#adminGenderFilter').innerHTML = ['Todos', ...new Set(['Feminino','Masculino','Outro','Não informado', ...DB.responses.map(r=>r.gender || 'Não informado')])].map(x=>`<option>${x}</option>`).join('');
  ['#adminUnitFilter','#adminAreaFilter','#adminProfileFilter','#adminGenderFilter','#adminSearch'].forEach(sel => {
    const el = $(sel);
    if (!el) return;
    el.oninput = drawAdmin;
    el.onchange = drawAdmin;
  });
}

function adminFilteredResponses() {
  let rows = [...DB.responses];
  const unit = $('#adminUnitFilter')?.value || 'Todas';
  const area = $('#adminAreaFilter')?.value || 'Todas';
  const profile = $('#adminProfileFilter')?.value || 'Todos';
  const gender = $('#adminGenderFilter')?.value || 'Todos';
  const search = ($('#adminSearch')?.value || '').trim().toLowerCase();
  if (unit !== 'Todas') rows = rows.filter(r => r.unit === unit);
  if (area !== 'Todas') rows = rows.filter(r => r.area === area);
  if (profile !== 'Todos') rows = rows.filter(r => inferProfile(r) === profile);
  if (gender !== 'Todos') rows = rows.filter(r => (r.gender || 'Não informado') === gender);
  if (search) rows = rows.filter(r => [r.name, r.registration, r.role, r.area, r.profile, r.unit].join(' ').toLowerCase().includes(search));
  return rows;
}

function drawAdmin() {
  const rows = adminFilteredResponses();
  const ag = aggregate(rows);
  const expected = adminExpected(rows);
  const responded = rows.length;
  const open = Math.max(0, expected - responded);
  const adherence = expected ? (responded / expected) * 100 : 0;
  const strengths = sortedPillars(ag.pillars).slice(0,3);
  const weak = sortedPillars(ag.pillars, true).slice(0,3);

  $('#adminKpis').innerHTML = [
    adminKpi('Previsto', expected),
    adminKpi('Respondido', responded),
    adminKpi('Em aberto', open),
    adminKpi('Aderência geral', `${Math.round(adherence)}%`, adherence < 60 ? 'soft-red' : ''),
    adminKpi('Nota geral', fmt(ag.total), 'soft-yellow')
  ].join('');

  $('#adminProfiles').innerHTML = [
    profileCard('Administrativo', '🧑‍💼', averageWhere(rows, r => inferProfile(r) === 'Administrativo'), 'Perfil'),
    profileCard('Feminino', '👩', averageWhere(rows, r => r.gender === 'Feminino'), 'Perfil'),
    profileCard('Masculino', '👨', averageWhere(rows, r => r.gender === 'Masculino'), 'Perfil'),
    profileCard('Operacional', '👷', averageWhere(rows, r => inferProfile(r) === 'Operacional'), 'Perfil')
  ].join('');

  $('#rankingCard').innerHTML = adminRankingCard(rows, adherence);
  $('#pillarCard').innerHTML = adminPillarCard(ag.pillars);
  $('#adminExecutiveInsights').innerHTML = adminExecutiveInsights(rows, ag, strengths, weak);
  $('#strengthCard').innerHTML = adminSummaryCard('Pontos fortes', 'strength', strengths);
  $('#attentionCard').innerHTML = adminSummaryCard('Pontos de atenção', 'attention', weak);
  $('#adminCommentConsolidation').innerHTML = adminCommentConsolidation(rows, strengths, weak);
  $('#respondentsCard').innerHTML = adminRespondentsCard(rows);
}

function adminExpected(rows) {
  const unit = $('#adminUnitFilter')?.value || 'Todas';
  if (unit !== 'Todas') return expectedForWork(unit);
  const area = $('#adminAreaFilter')?.value || 'Todas';
  const profile = $('#adminProfileFilter')?.value || 'Todos';
  const gender = $('#adminGenderFilter')?.value || 'Todos';
  if (area !== 'Todas' || profile !== 'Todos' || gender !== 'Todos') return Math.max(rows.length, Math.round(totalExpected(DB.works) * 0.35));
  return totalExpected(DB.works);
}
function adminKpi(label, value, cls='') { return `<div class="admin-kpi ${cls}"><span class="kpi-label">${label}</span><strong class="kpi-value">${value}</strong></div>`; }
function averageWhere(rows, predicate) { return avg(rows.filter(predicate).map(r => r.totalScore)); }
function profileCard(label, icon, score, meta='') {
  return `<div class="profile-card"><div class="profile-icon">${icon}</div><div class="profile-metric"><span class="profile-tag">${label}</span><strong>${fmt(score)}</strong><span>${meta}</span></div></div>`;
}
function adminRankingCard(rows, adherence) {
  const selectedUnit = $('#adminUnitFilter')?.value || 'Todas';
  const workRows = (selectedUnit === 'Todas' ? DB.works : DB.works.filter(w => w.name === selectedUnit)).map(w => {
    const unitResponses = rows.filter(r => r.unit === w.name);
    const score = avg(unitResponses.map(r => r.totalScore));
    const count = unitResponses.length;
    const expected = Number(w.expectedRespondents || 0);
    const adh = expected ? (count / expected) * 100 : 0;
    return { name: w.name, code: w.code, state: w.state, type: w.type, expected, count, adherence: adh, score };
  }).sort((a,b)=>b.score-a.score);
  return `
    <div class="admin-card-head"><div><h3>Ranking por obra</h3><div class="small-note">Comparativo das obras com previsto, respondido, adesão e status da nota.</div></div><div class="info-chip-row"><div class="info-chip warn"><b>Aderência média</b><span>${Math.round(adherence)}%</span></div><div class="info-chip goal"><b>Meta nota</b><span>${CONFIG.settings.minimumScore}%</span></div></div></div>
    <div class="table-wrap"><table><thead><tr><th>Obra</th><th>UF</th><th>Tipo</th><th>Prev.</th><th>Resp.</th><th>Aderência</th><th>Nota</th><th>Status nota</th></tr></thead><tbody>${workRows.map((r,i)=>`
      <tr>
        <td><b>${i+1}. ${r.name}</b><br><span class="small-note">${r.code || '-'}</span></td>
        <td>${r.state}</td><td>${r.type}</td><td>${r.expected}</td><td>${r.count}</td>
        <td><div class="adherence-line"><span class="tiny-text">${Math.round(r.adherence)}%</span><div class="tiny-track"><div class="tiny-fill ${scoreClass(r.adherence)}" style="width:${Math.max(0,Math.min(100,r.adherence))}%"></div></div></div></td>
        <td>${fmt(r.score)}</td>
        <td><span class="tag ${scoreClass(r.score)}">${scoreLabel(r.score)}</span></td>
      </tr>`).join('') || '<tr><td colspan="8">Sem obras cadastradas.</td></tr>'}</tbody></table></div>`;
}
function adminPillarCard(pillars) {
  const items = CONFIG.pillars.map(p => ({ label: p.shortName, score: pillars[p.id] || 0 }));
  return `<div class="admin-card-head"><div><h3>Resultado por pilar</h3><div class="small-note">Indicadores consolidados por dimensão da pesquisa.</div></div></div><div class="admin-bar-list">${items.map(item => adminBarRow(item.label, item.score)).join('')}</div>`;
}
function adminBarRow(label, score) {
  return `<div class="admin-bar-row"><div class="label">${label}</div><div class="track"><div class="fill ${scoreClass(score)}" style="width:${Math.max(0, Math.min(100, score))}%"></div></div><div class="value">${fmt(score)}</div></div>`;
}

function adminExecutiveInsights(rows, ag, strengths, weak) {
  const target = adminCurrentTarget();
  const critical = weak.filter(w => w.score < 60);
  const attentionText = weak.map(w => w.shortName).join(', ') || 'sem pilares críticos no recorte atual';
  const strengthText = strengths.map(s => s.shortName).join(', ') || 'sem dados suficientes';
  const direction = critical.length
    ? `Há pilar em condição crítica, com prioridade máxima para ${critical.map(c=>c.shortName).join(', ')}.`
    : `As principais oportunidades estão em ${attentionText}.`;
  return `
    <div class="admin-card-head"><div><h3>Comentários automáticos do resultado</h3><div class="small-note">Análise consolidada gerada a partir das notas e dos comentários registrados na plataforma.</div></div><span class="pill">${target}</span></div>
    <div class="admin-exec-grid">
      <div class="admin-exec-main">
        <b>Comentário executivo:</b> O resultado consolidado para ${target} aponta nota ${fmt(ag.total)} e classificação ${scoreLabel(ag.total).toLowerCase()}. Os principais pontos fortes são ${strengthText}. ${direction} A recomendação é transformar esses achados em plano de ação com responsáveis, prazos, comunicação aos colaboradores e acompanhamento periódico.
      </div>
      <div class="admin-exec-side">
        <span class="summary-title">Leitura gerencial</span>
        <ul>
          <li><b>Nota geral:</b> ${fmt(ag.total)}.</li>
          <li><b>Pontos fortes:</b> ${strengthText}.</li>
          <li><b>Prioridades:</b> ${attentionText}.</li>
          <li><b>Base analisada:</b> ${rows.length} resposta(s).</li>
        </ul>
      </div>
    </div>`;
}
function adminCurrentTarget() {
  const unit = $('#adminUnitFilter')?.value || 'Todas';
  const area = $('#adminAreaFilter')?.value || 'Todas';
  const profile = $('#adminProfileFilter')?.value || 'Todos';
  const gender = $('#adminGenderFilter')?.value || 'Todos';
  const parts = [];
  if (unit !== 'Todas') parts.push(unit); else parts.push('Grupo Luncena');
  if (area !== 'Todas') parts.push(area);
  if (profile !== 'Todos') parts.push(profile);
  if (gender !== 'Todos') parts.push(gender);
  return parts.join(' | ');
}
function adminCommentConsolidation(rows, strengths, weak) {
  const strengthComments = rows.map(r => cleanComment(r.openStrengths)).filter(Boolean);
  const improveComments = rows.map(r => cleanComment(r.openImprove)).filter(Boolean);
  const weakBlocks = weak.map(p => {
    const related = relatedCommentsForPillar(p, improveComments).slice(0,4);
    return `<div class="comment-pillar"><b>${p.shortName}: ${fmt(p.score)}</b><ul>${(related.length ? related : improveComments.slice(0,3)).map(c=>`<li>${c}</li>`).join('') || '<li>Sem comentários vinculados a este pilar.</li>'}</ul></div>`;
  }).join('');
  const strongBlocks = strengths.map(p => {
    const related = relatedCommentsForPillar(p, strengthComments).slice(0,3);
    return `<div class="comment-pillar positive"><b>${p.shortName}: ${fmt(p.score)}</b><ul>${(related.length ? related : strengthComments.slice(0,2)).map(c=>`<li>${c}</li>`).join('') || '<li>Sem comentários vinculados a este pilar.</li>'}</ul></div>`;
  }).join('');
  return `
    <div class="admin-card-head"><div><h3>Comentários consolidados da plataforma</h3><div class="small-note">Leitura qualitativa cruzada com as maiores e menores notas do recorte selecionado.</div></div><span class="pill">${rows.length} resposta(s)</span></div>
    <div class="grid grid-2">
      <div><span class="summary-title attention-title">Comentários ligados às oportunidades</span>${weakBlocks || '<p class="small-note">Sem dados para consolidar oportunidades.</p>'}</div>
      <div><span class="summary-title strength-title">Comentários ligados aos pontos fortes</span>${strongBlocks || '<p class="small-note">Sem dados para consolidar pontos fortes.</p>'}</div>
    </div>
    <div class="comment-all-grid"><div><h4>Todos os pontos fortes citados</h4><ul>${strengthComments.slice(0,18).map(c=>`<li>${c}</li>`).join('') || '<li>Sem comentários.</li>'}</ul></div><div><h4>Todos os pontos a melhorar citados</h4><ul>${improveComments.slice(0,18).map(c=>`<li>${c}</li>`).join('') || '<li>Sem comentários.</li>'}</ul></div></div>`;
}
function cleanComment(text) { return String(text || '').replace(/\s+/g, ' ').trim(); }
function relatedCommentsForPillar(pillar, comments) {
  const hay = pillarKeywordMap(pillar.id);
  return comments.filter(c => {
    const t = normalizeText(c);
    return hay.some(k => t.includes(k));
  });
}
function normalizeText(text) { return String(text || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function pillarKeywordMap(id) {
  const map = {
    seguranca:['seguranca','vida','saude','bem estar','risco','dds','acidente','epi','protecao'],
    ambienteFisico:['ambiente','estrutura','equipamento','ferramenta','higiene','organizacao','infraestrutura','obra','recurso','manutencao'],
    lideranca:['lideranca','lider','gestor','gestao','feedback','chefia','encarregado','decisao'],
    comunicacao:['comunicacao','informacao','transparencia','mudanca','alinhamento','reuniao','canal'],
    etica:['etica','respeito','confianca','integridade','justica','retaliacao','valor','conduta'],
    remuneracao:['remuneracao','beneficio','beneficios','salario','reconhecimento','valorizacao','pagamento'],
    engajamento:['engajamento','orgulho','motivacao','permanecer','continuar','pertencer','compromisso']
  };
  return map[id] || [normalizeText(id)];
}
function adminSummaryCard(title, type, items) { return `<span class="summary-title">${title}</span><ul>${items.map(p => `<li>${p.shortName}: ${fmt(p.score)}</li>`).join('')}</ul>`; }
function adminRespondentsCard(rows) {
  return `<div class="section-title"><div><h3>Lista de respondentes</h3><span class="small-note">Clique em visualizar para abrir a resposta individual.</span></div><span class="pill">${rows.length} registro(s)</span></div><div class="table-wrap"><table><thead><tr><th>Nome</th><th>CPF/Matrícula</th><th>Obra</th><th>Setor</th><th>Perfil</th><th>Função</th><th>Nota</th><th>Ação</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.name}</td><td>${r.registration}</td><td>${r.unit}</td><td>${r.area}</td><td>${inferProfile(r)}</td><td>${r.role}</td><td>${fmt(r.totalScore)}</td><td><div class="respondent-actions"><button class="btn" onclick="openResponse('${r.id}')">Visualizar</button></div></td></tr>`).join('') || '<tr><td colspan="8">Nenhum respondente encontrado com os filtros aplicados.</td></tr>'}</tbody></table></div>`;
}
window.openResponse = function(id) {
  const r = DB.responses.find(x=>x.id===id);
  if (!r) return;
  const body = `<div class="admin-modal" onclick="this.remove()"><div class="modal-card" onclick="event.stopPropagation()"><div class="section-title"><h2>${r.name}</h2><button class="btn alt" onclick="document.querySelector('.admin-modal').remove()">Fechar</button></div><p><b>Obra:</b> ${r.unit} | <b>Setor:</b> ${r.area} | <b>Perfil:</b> ${inferProfile(r)} | <b>Função:</b> ${r.role}</p><div class="score-big">${fmt(r.totalScore)}</div>${barList(r.pillarScores)}<h3>Comentários</h3><p><b>Pontos fortes:</b> ${r.openStrengths || '-'}</p><p><b>Pontos a melhorar:</b> ${r.openImprove || '-'}</p></div></div>`;
  document.body.insertAdjacentHTML('beforeend', body);
};
function exportJson() { const blob = new Blob([JSON.stringify(DB,null,2)], {type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='respostas-pesquisa-clima-luncena.json'; a.click(); URL.revokeObjectURL(a.href); }
function resetDemo() { localStorage.removeItem(DB_KEY); DB = loadDB(); toast('Base limpa restaurada com obras cadastradas.'); setTimeout(()=>location.reload(),700); }
function toast(msg) { const t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),3200); }

document.addEventListener('DOMContentLoaded', boot);
