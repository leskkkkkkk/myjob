function correctdate(date) {
  if (isblank(date)) {
    return "���� �������� �����������";
  }
  date = date.toString();
  let massiv = date.split("-");
  if (parseInt(massiv[1]) < 10) {
    massiv[1] = '0' + parseInt(massiv[1]);
  }
  else{}
  if (parseInt(massiv[2]) < 10) {
    massiv[2] = '0' + parseInt(massiv[2]);
  }
  else{}
  return "���� ���� ��������:" + massiv[2] + "." + massiv[1] + "." + massiv[0];
  
}
let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // �������� ����������� �������� ��������

    // <span class="error-text">��������� ����</span>

  /*  let data = new FormData(this);
    data.forEach(function(item, index){
        console.log(index,item)
    });  */
  

    let errors = document.querySelectorAll(".error-text");

    if(errors.length){
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;

    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let phoneInput = document.querySelector("#phone");
    let cityInput = document.querySelector("#city");
    let snameInput = document.querySelector("#sname");
    let surnameInput = document.querySelector("#surname");
    let grazInput = document.querySelector("#graz");
    let nationInput = document.querySelector("#nation");
    let namesInput = document.querySelector("#names");
    let whosInput = document.querySelector("#whos");
    let seriesInput = document.querySelector("#series");
    let numbersInput = document.querySelector("#numbers");


    let fields = [nameInput, emailInput, phoneInput, snameInput, cityInput, surnameInput, grazInput, nationInput, namesInput, whosInput, seriesInput, numbersInput];

    fields.forEach((field) => {
        if(field.value == ""){
            let span = document.createElement("span");
            span.className = "error-text"; // span.classList.add("error-text");
            span.innerText = "��������� ����";
            field.insertAdjacentElement("afterend", span);
            field.parentElement.classList.add("error");
            hasError = true;
        }
    });

    let fam = ["#a", "#b", "#c"];

    let checked = fam.some((radioId) => {
        return document.querySelector(radioId).checked; //document.querySelector(radioId) - input
    })

    if(!checked){
        let span = document.createElement("span");
        span.className = "error-text"; // span.classList.add("error-text");
        span.innerText = "�������� �������� ���������";
        document.querySelector("#c").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    let obr2 = ["#srp", "#os", "#nach", "#nm"];

    checked = obr2.some((checkboxId) => {
        return document.querySelector(checkboxId).checked; //document.querySelector(checkbox) - input
    })

    if(!checked){
        let span = document.createElement("span");
        span.className = "error-text"; // span.classList.add("error-text");
        span.innerText = "�������� ����� �����������";
        document.querySelector("#nm").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }
    let obr = ["#vis", "#nvis", "#sr", "#n"];

    checked = obr.some((checkboxId) => {
        return document.querySelector(checkboxId).checked; //document.querySelector(checkbox) - input
    })

    if(!checked){
        let span = document.createElement("span");
        span.className = "error-text"; // span.classList.add("error-text");
        span.innerText = "�������� ���������������� �����������";
        document.querySelector("#n").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    if(!hasError){
        let div = document.querySelector(".result");

        div.innerHTML += `�������: ${snameInput.value}<br>`;
        div.innerHTML += `���: ${nameInput.value}<br>`;
        div.innerHTML += `��������: ${surnameInput.value}<br>`;
        div.innerHTML += `�����������: ${grazInput.value}<br>`;
        div.innerHTML += `��������������: ${nationInput.value}<br>`;
        div.innerHTML += `������������ ���������, ��������������� ��������: ${namesInput.value}<br>`;
        div.innerHTML += `������������ ���������, ��������������� ��������: ${seriesInput.value}<br>`;
        div.innerHTML += `�����: ${numberInput.value}<br>`;
        div.innerHTML += `�����: ${whosInput.value}<br>`;
        div.innerHTML += `Email: ${emailInput.value}<br>`;
        div.innerHTML += `�������: ${phoneInput.value}<br>`;
        div.innerHTML += `�����: ${cityInput.value}<br>`;
        if(document.querySelector("#a").checked){
            div.innerHTML += `�������� ���������: ${document.querySelector("#a").value}<br>`;
        } else if(document.querySelector("#b").checked){
            div.innerHTML += `�������� ���������: ${document.querySelector("#c").value}<br>`;
        } else if(document.querySelector("#c").checked){
            div.innerHTML += `�������� ���������: ${document.querySelector("#c").value}<br>`;
        } 

        let obrValue = [];

        obr.forEach((obr) => {
            if(document.querySelector(obr).checked){
                hobbyValue.push(document.querySelector(obr).value);
            }
        })

        let obr2Value = [];

        obr2.forEach((obr2) => {
            if(document.querySelector(obr2).checked){
                hobbyValue.push(document.querySelector(obr2).value);
            }
        })

        div.innerHTML += `���������������� �����������: ${obrValue.join(",")}<br>`;
        div.innerHTML += `����� �����������: ${obr2Value.join(",")}<br>`;

        this.reset(); // �������� ����� this==form
    }
})