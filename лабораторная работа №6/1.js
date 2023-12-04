let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // отменяет стандартные действия браузера

    // <span class="error-text">Заполните поле</span>

  /*  let data = new FormData(this);
    data.forEach(function(item, index){
        console.log(index,item)
    });  */
// Получаем форму
const form = document.getElementById('fam');

// Получаем все радио-кнопки
const radios = form.querySelectorAll('input[type="radio"]');

// Добавляем обработчик события на форму
form.addEventListener('submit', function(event) 
  // Проверяем, что хотя бы одна радио-кнопка выбрана
  let isChecked = false;
  for (let i = 0; i < radios.length; i++) 
    if (radios[i].checked) 
      isChecked = true;
      break;
    
  
  // Если ни одна кнопка не выбрана, отменяем отправку формы и выводим сообщение об ошибке
  if (!isChecked) 
    event.preventDefault();
    alert('Выберите семейное положение');
  
);
// Получаем поля ввода
const snameInput = document.getElementById('sname');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const dateInputs = form.querySelectorAll('input[type="date"]');

// Добавляем обработчик события на форму
form.addEventListener('submit', function(event) 
  // Проверяем, что все поля заполнены
  if (snameInput.value === ” || nameInput.value === ” || surnameInput.value === ”) 
    event.preventDefault();
    alert('Заполните все поля');
  
  // Проверяем, что даты рождения выбраны
  let isDateSelected = true;
  for (let i = 0; i < dateInputs.length; i++) 
    if (dateInputs[i].value === ”) 
      isDateSelected = false;
      break;

  
  if (!isDateSelected) 
    event.preventDefault();
    alert('Выберите дату рождения');
  
);
// Получаем форму
const form = document.getElementById('form');

// Получаем поля ввода
const snameInput = document.getElementById('sname');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const dateInputs = form.querySelectorAll('input[type="date"]');
const citySelects = form.querySelectorAll('select#citySelect');
const grazInputs = form.querySelectorAll('input#graz');

// Добавляем обработчик события на форму
form.addEventListener('submit', function(event) 
  // Проверяем, что все поля заполнены
  if (snameInput.value === ” || nameInput.value === ” || surnameInput.value === ”) 
    event.preventDefault();
    alert('Заполните все поля');
  
  // Проверяем, что даты рождения выбраны
  let isDateSelected = true;
  for (let i = 0; i < dateInputs.length; i++) 
    if (dateInputs[i].value === ”) 
      isDateSelected = false;
      break;
    
  
  if (!isDateSelected) 
    event.preventDefault();
    alert('Выберите дату рождения');
  
  // Проверяем, что выбраны города рождения
  let isCitySelected = true;
  for (let i = 0; i < citySelects.length; i++) 
    if (citySelects[i].value === ”) 
      isCitySelected = false;
      break;
    
  
  if (!isCitySelected) 
    event.preventDefault();
    alert('Выберите город рождения');
  
  // Проверяем, что указано гражданство
  let isGrazSelected = true;
  for (let i = 0; i < grazInputs.length; i++) 
    if (grazInputs[i].value === ”) 
      isGrazSelected = false;
      break;
    
  
  if (!isGrazSelected) 
    event.preventDefault();
    alert('Укажите гражданство');
  
);
// Получаем форму
const form = document.getElementById('form');

// Получаем поля ввода
const nationInput = document.getElementById('nation');
const eduCheckboxes = form.querySelectorAll('input[type="checkbox"]');
const namesInput = document.getElementById('names');
const seriesInput = document.getElementById('series');
const numbersInput = document.getElementById('numbers');
const whosInput = document.getElementById('whos');
const dateInput = form.querySelector('input[type="date"]');

// Добавляем обработчик события на форму
form.addEventListener('submit', function(event) 
  // Проверяем, что поле "Национальность" заполнено
  if (nationInput.value === ”) 
    event.preventDefault();
    alert('Заполните поле "Национальность"');
  
  // Проверяем, что выбрано хотя бы одно образование
  let isEduSelected = false;
  for (let i = 0; i < eduCheckboxes.length; i++) 
    if (eduCheckboxes[i].checked) 
      isEduSelected = true;
      break;
    
  
  if (!isEduSelected) 
    event.preventDefault();
    alert('Выберите хотя бы одно образование');
  
  // Проверяем, что все поля документа заполнены
  if (namesInput.value === ” || seriesInput.value === ” || numbersInput.value === ” || whosInput.value === ” || dateInput.value === ”) 
    event.preventDefault();
    alert('Заполните все поля документа');
  
);