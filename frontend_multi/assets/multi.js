const apiBase = (window.__API_BASE__ || 'http://localhost:3000') + '/api';

const steps = [
  { id: 'person', title: 'Dados pessoais', fields: [
      {name:'name', label:'Nome', type:'text'},
      {name:'filiacao', label:'Filiação', type:'text'},
      {name:'cpf', label:'CPF', type:'text'},
      {name:'rg', label:'RG', type:'text'},
      {name:'birth_date', label:'Data de Nascimento', type:'date'},
      {name:'social_id', label:'Número de ID Social', type:'text'},
      {name:'sex', label:'Sexo', type:'select', options:['Feminino','Masculino','Personalizado']}
    ], endpoint: '/persons'},

  { id: 'address', title: 'Endereço', fields: [
      {name:'person_id', label:'Person ID (retornado ao salvar dados pessoais)', type:'number'},
      {name:'street', label:'Rua', type:'text'},
      {name:'number', label:'Número', type:'text'},
      {name:'neighborhood', label:'Bairro', type:'text'},
      {name:'city', label:'Cidade', type:'text'},
      {name:'municipality', label:'Município', type:'text'},
      {name:'complement', label:'Complemento', type:'text'}
    ], endpoint: '/addresses'},

  { id: 'household', title: 'Dados do domicílio', fields: [
      {name:'responsible_name', label:'Nome do responsável', type:'text'},
      {name:'responsible_cpf', label:'CPF do responsável', type:'text'},
      {name:'total_members', label:'Total de moradores', type:'number'},
      {name:'room_count', label:'Número de cômodos', type:'number'}
    ], endpoint: '/households'},

  { id: 'members', title: 'Membros (adicione 1 por vez)', fields: [
      {name:'household_id', label:'Household ID', type:'number'},
      {name:'name', label:'Nome', type:'text'},
      {name:'cpf', label:'CPF', type:'text'},
      {name:'relation', label:'Parentesco', type:'text'},
      {name:'age', label:'Idade', type:'number'},
      {name:'education', label:'Escolaridade', type:'text'},
      {name:'sex', label:'Sexo', type:'select', options:['Feminino','Masculino','Personalizado']}
    ], endpoint: '/members'},

  { id: 'incomes', title: 'Rendimentos (adicione 1 por vez)', fields: [
      {name:'household_id', label:'Household ID', type:'number'},
      {name:'source', label:'Fonte', type:'text'},
      {name:'amount', label:'Valor', type:'number'},
      {name:'notes', label:'Observações', type:'text'}
    ], endpoint: '/incomes'},

  { id: 'qualification', title: 'Qualificação profissional', fields: [
      {name:'person_id', label:'Person ID', type:'number'},
      {name:'qualification', label:'Qualificação profissional', type:'text'},
      {name:'work_capacity', label:'Capacidade de trabalho', type:'text'},
      {name:'market_insertion', label:'Inserção no mercado', type:'text'},
      {name:'qualification_goals', label:'Metas de qualificação', type:'text'},
      {name:'education_levels', label:'Níveis de formação', type:'text'},
      {name:'professional_functions', label:'Funções profissionais', type:'text'}
    ], endpoint: '/qualifications'},

  { id: 'domicile', title: 'Condições do domicílio', fields: [
      {name:'household_id', label:'Household ID', type:'number'},
      {name:'housing_type', label:'Tipo de moradia', type:'select', options:['Casa própria','Casa alugada','Outra']},
      {name:'has_water', label:'Abastecimento de água', type:'checkbox'},
      {name:'has_electricity', label:'Energia elétrica', type:'checkbox'},
      {name:'has_sanitation', label:'Saneamento básico', type:'checkbox'},
      {name:'state_of_conservation', label:'Estado de conservação', type:'select', options:['Boa','Regular','Precária']},
      {name:'room_count', label:'Número de cômodos', type:'number'}
    ], endpoint: '/domicile'},

  { id: 'dependents', title: 'Dependentes', fields: [
      {name:'household_id', label:'Household ID', type:'number'},
      {name:'has_children', label:'Tem crianças?', type:'checkbox'},
      {name:'has_elderly', label:'Tem idosos?', type:'checkbox'},
      {name:'has_disability', label:'Tem pessoa com deficiência?', type:'checkbox'},
      {name:'no_dependents', label:'Não há dependentes', type:'checkbox'},
      {name:'needs_care', label:'Indica necessidade de cuidados?', type:'checkbox'},
      {name:'impacts_budget', label:'Impacta no orçamento?', type:'checkbox'}
    ], endpoint: '/dependents'},

  { id: 'health', title: 'Estado de Saúde', fields: [
      {name:'member_id', label:'Member ID', type:'number'},
      {name:'condition', label:'Condição de saúde', type:'select', options:['Boa','Regular','Precária']},
      {name:'has_disease', label:'Tem algum tipo de doença?', type:'checkbox'},
      {name:'disease_type', label:'Qual?', type:'text'},
      {name:'support_needs', label:'Auxilia na definição de suporte', type:'text'},
      {name:'influences_benefits', label:'Pode influenciar em benefícios sociais?', type:'checkbox'}
    ], endpoint: '/health'},

  { id: 'income_verification', title: 'Averiguação de renda', fields: [
      {name:'household_id', label:'Household ID', type:'number'},
      {name:'needs_check', label:'Precisa verificar sua renda?', type:'checkbox'},
      {name:'confirm_data', label:'Quer confirmar se seus dados de renda estão corretos?', type:'checkbox'},
      {name:'undergoing_verification', label:'Está passando por averiguação de renda?', type:'checkbox'},
      {name:'need_send_documents', label:'Precisa enviar documentos?', type:'checkbox'}
    ], endpoint: '/income_verification'}
];

function el(tag, attrs={}, ...children){ const e = document.createElement(tag); for(const k in attrs) e.setAttribute(k, attrs[k]); children.forEach(c => { if (typeof c === 'string') e.appendChild(document.createTextNode(c)); else e.appendChild(c); }); return e; }

function buildForm() {
  const stepsDiv = document.getElementById('steps');
  steps.forEach((s, idx) => {
    const stepEl = el('div', {'class':'step', 'data-step':s.id});
    stepEl.appendChild(el('h2', {}, s.title));
    s.fields.forEach(f => {
      const lbl = el('label', {}, f.label);
      let input;
      if (f.type === 'select') {
        input = el('select', {'name':f.name});
        input.appendChild(el('option', {'value':''}, '--'));
        f.options.forEach(o => input.appendChild(el('option', {'value':o}, o)));
      } else if (f.type === 'checkbox') {
        input = el('input', {'type':'checkbox', 'name':f.name});
      } else {
        input = el('input', {'type':f.type || 'text', 'name':f.name});
      }
      lbl.appendChild(input);
      stepEl.appendChild(lbl);
    });
    stepsDiv.appendChild(stepEl);
  });
}

let current = 0;
function showStep(i){
  const stepEls = document.querySelectorAll('.step');
  stepEls.forEach((s, idx) => s.classList.toggle('active', idx===i));
  document.getElementById('prevBtn').style.display = i===0 ? 'none' : 'inline-block';
  document.getElementById('nextBtn').style.display = i===steps.length-1 ? 'none' : 'inline-block';
}

async function saveCurrentStep() {
  const step = steps[current];
  const container = document.querySelector(`.step[data-step="${step.id}"]`);
  const inputs = container.querySelectorAll('input,select,textarea');
  const payload = {};
  inputs.forEach(i => {
    if (i.type === 'checkbox') payload[i.name] = i.checked ? 1 : 0;
    else payload[i.name] = i.value || null;
  });
  // send to endpoint
  try {
    const res = await fetch(apiBase + step.endpoint, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    document.getElementById('output').textContent = JSON.stringify({step: step.id, result: data}, null, 2);
    // if created id returned, try to populate next fields that need it (e.g., person_id, household_id)
    if (data.insertId) {
      // fill fields named person_id or household_id or member_id in following steps if empty
      document.querySelectorAll('input[name="person_id"], input[name="household_id"], input[name="member_id"]').forEach(inp => {
        if (!inp.value) inp.value = data.insertId;
      });
    }
  } catch (err) {
    document.getElementById('output').textContent = 'Erro: ' + err.message;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buildForm();
  showStep(0);

  document.getElementById('prevBtn').addEventListener('click', () => { if (current>0) { current--; showStep(current); }});
  document.getElementById('nextBtn').addEventListener('click', () => { if (current<steps.length-1) { current++; showStep(current); }});
  document.getElementById('saveBtn').addEventListener('click', saveCurrentStep);
});