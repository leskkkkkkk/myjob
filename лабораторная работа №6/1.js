let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // �������� ����������� �������� ��������

    // <span class="error-text">��������� ����</span>

  /*  let data = new FormData(this);
    data.forEach(function(item, index){
        console.log(index,item)
    });  */
// �������� �����
const form = document.getElementById('fam');

// �������� ��� �����-������
const radios = form.querySelectorAll('input[type="radio"]');

// ��������� ���������� ������� �� �����
form.addEventListener('submit', function(event) 
  // ���������, ��� ���� �� ���� �����-������ �������
  let isChecked = false;
  for (let i = 0; i < radios.length; i++) 
    if (radios[i].checked) 
      isChecked = true;
      break;
    
  
  // ���� �� ���� ������ �� �������, �������� �������� ����� � ������� ��������� �� ������
  if (!isChecked) 
    event.preventDefault();
    alert('�������� �������� ���������');
  
);
// �������� ���� �����
const snameInput = document.getElementById('sname');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const dateInputs = form.querySelectorAll('input[type="date"]');

// ��������� ���������� ������� �� �����
form.addEventListener('submit', function(event) 
  // ���������, ��� ��� ���� ���������
  if (snameInput.value === � || nameInput.value === � || surnameInput.value === �) 
    event.preventDefault();
    alert('��������� ��� ����');
  
  // ���������, ��� ���� �������� �������
  let isDateSelected = true;
  for (let i = 0; i < dateInputs.length; i++) 
    if (dateInputs[i].value === �) 
      isDateSelected = false;
      break;

  
  if (!isDateSelected) 
    event.preventDefault();
    alert('�������� ���� ��������');
  
);
// �������� �����
const form = document.getElementById('form');

// �������� ���� �����
const snameInput = document.getElementById('sname');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const dateInputs = form.querySelectorAll('input[type="date"]');
const citySelects = form.querySelectorAll('select#citySelect');
const grazInputs = form.querySelectorAll('input#graz');

// ��������� ���������� ������� �� �����
form.addEventListener('submit', function(event) 
  // ���������, ��� ��� ���� ���������
  if (snameInput.value === � || nameInput.value === � || surnameInput.value === �) 
    event.preventDefault();
    alert('��������� ��� ����');
  
  // ���������, ��� ���� �������� �������
  let isDateSelected = true;
  for (let i = 0; i < dateInputs.length; i++) 
    if (dateInputs[i].value === �) 
      isDateSelected = false;
      break;
    
  
  if (!isDateSelected) 
    event.preventDefault();
    alert('�������� ���� ��������');
  
  // ���������, ��� ������� ������ ��������
  let isCitySelected = true;
  for (let i = 0; i < citySelects.length; i++) 
    if (citySelects[i].value === �) 
      isCitySelected = false;
      break;
    
  
  if (!isCitySelected) 
    event.preventDefault();
    alert('�������� ����� ��������');
  
  // ���������, ��� ������� �����������
  let isGrazSelected = true;
  for (let i = 0; i < grazInputs.length; i++) 
    if (grazInputs[i].value === �) 
      isGrazSelected = false;
      break;
    
  
  if (!isGrazSelected) 
    event.preventDefault();
    alert('������� �����������');
  
);
// �������� �����
const form = document.getElementById('form');

// �������� ���� �����
const nationInput = document.getElementById('nation');
const eduCheckboxes = form.querySelectorAll('input[type="checkbox"]');
const namesInput = document.getElementById('names');
const seriesInput = document.getElementById('series');
const numbersInput = document.getElementById('numbers');
const whosInput = document.getElementById('whos');
const dateInput = form.querySelector('input[type="date"]');

// ��������� ���������� ������� �� �����
form.addEventListener('submit', function(event) 
  // ���������, ��� ���� "��������������" ���������
  if (nationInput.value === �) 
    event.preventDefault();
    alert('��������� ���� "��������������"');
  
  // ���������, ��� ������� ���� �� ���� �����������
  let isEduSelected = false;
  for (let i = 0; i < eduCheckboxes.length; i++) 
    if (eduCheckboxes[i].checked) 
      isEduSelected = true;
      break;
    
  
  if (!isEduSelected) 
    event.preventDefault();
    alert('�������� ���� �� ���� �����������');
  
  // ���������, ��� ��� ���� ��������� ���������
  if (namesInput.value === � || seriesInput.value === � || numbersInput.value === � || whosInput.value === � || dateInput.value === �) 
    event.preventDefault();
    alert('��������� ��� ���� ���������');
  
);