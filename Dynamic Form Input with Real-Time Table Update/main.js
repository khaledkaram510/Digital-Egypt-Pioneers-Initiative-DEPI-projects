let name = document.querySelector(".name");
// console.log(name.children[1]);
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let curse = document.querySelector(".curseName");
let tableBody = document.querySelector("#tableBody");
let regName = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/;
let regEmail = /^\w+@\w+.\w+$/i;
let regPhone = /^01[0-2 5]\d{8}$/;
let regCurse = /^\w+ \w+$/;
let boolName = false;
let boolEmail = false;
let boolPhone = false;
let boolCurse = false;

name.children[1].addEventListener("change", function () {
  if (!regName.test(this.value)) {
    name.children[0].style.color = "#ff4b20";
  }else{
    name.children[0].style.color = "#57b846";
    boolName = true;
  }
});

email.children[1].addEventListener("change", function () {
  if (!regEmail.test(this.value)) {
    email.children[0].style.color = "#ff4b20";
  }else{
    email.children[0].style.color = "#57b846";
    boolEmail = true;
  }
});

phone.children[1].addEventListener("change", function () {
  if (!regPhone.test(this.value)) {
    phone.children[0].style.color = "#ff4b20";
  }else{
    phone.children[0].style.color = "#57b846";
    boolPhone = true;
  }
});

curse.children[1].addEventListener("change", function () {
  if (!regCurse.test(this.value)) {
    curse.children[0].style.color = "#ff4b20";
  }else{
    curse.children[0].style.color = "#57b846";
    boolCurse = true;
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if(boolName && boolEmail && boolPhone && boolCurse){
    tableBody.innerHTML += `
      <tr>
        <td>${name.children[1].value}</td>
        <td>${curse.children[1].value}</td>
        <td>${phone.children[1].value}</td>
        <td>${email.children[1].value}</td>
      </tr>
    `;
    document.querySelector("#reset").click();
  }
});





