let name = document.querySelector(".name");
// console.log(name.children[1]);
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let regName = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/;
let regEmail = /^\w+@\w+.\w+$/i;
let regPhone = /^01[0-2 5]\d{8}$/;
let boolName = false;
let boolEmail = false;
let boolPhone = false;

name.children[1].addEventListener("change", function () {
  
  if (!regName.test(this.value)) {
    // name.style.border = "2px solid #ff4b20"; 
    // name.style.outlineColor = "#ff4b20";
    name.children[0].style.color = "#ff4b20";
  }else{
    // name.style.border = "2px solid #57b846"; 
    // name.style.outlineColor = "#57b846";
    name.children[0].style.color = "#57b846";
    boolName = true;
  }
});

email.children[1].addEventListener("change", function () {
  if (!regEmail.test(this.value)) {
    // this.style.border = "2px solid red"; 
    // this.style.outlineColor = "red";
    email.children[0].style.color = "#ff4b20";
  }else{
    // this.style.border = "2px solid green"; 
    // this.style.outlineColor = "green";
    email.children[0].style.color = "#57b846";
    boolEmail = true;
  }
});

phone.children[1].addEventListener("change", function () {
  if (!regPhone.test(this.value)) {
    // this.style.border = "2px solid red"; 
    // this.style.outlineColor = "red";
    phone.children[0].style.color = "#ff4b20";
  }else{
    // this.style.border = "2px solid green"; 
    // this.style.outlineColor = "green";
    phone.children[0].style.color = "#57b846";
    boolPhone = true;
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if(boolName && boolEmail && boolPhone){
    alert("The Form Is Valid");
  }
});




