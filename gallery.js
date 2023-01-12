const saveKategory=JSON.parse(localStorage.getItem('kategory')) || [];
const outside = document.querySelector('#outside');
const intside = document.querySelector('#inside');
outside.onclick = () => {
    saveKategory[0]="outside";
    localStorage.setItem('kategory',JSON.stringify(saveKategory));
    location.href="http://127.0.0.1:5501/selectImages.html";
    console.log(localStorage.getItem('kategory'));   
}
intside.onclick = () => {
    saveKategory[0]="inside";
    localStorage.setItem('kategory',JSON.stringify(saveKategory));
    location.href="http://127.0.0.1:5501/selectImages.html";
    console.log(localStorage.getItem('kategory'));
}

//תפריט
window.onscroll = function () {
    stickyFunction();
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function stickyFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })
  //טופס
const form = document.querySelector('.modal-content');
form.name.onkeypress = (event) => {
  const key = event.key;
  if ((key < 'א' || key > 'ת') && !' -'.includes(key) && (key < 'a' || key > 'z') && (key < 'A' || key > 'Z')) {
    event.preventDefault();
  }
}
form.phone.onkeypress = (event) => {
  const key = event.key;
  if ((key < '0' || key > '9') && !' -'.includes(key)) {
    event.preventDefault();
  }
}
form.email.onkeypress = (event) => {
  const key = event.key;
  if ((key < '0' || key > '9') && !' @_-'.includes(key) && (key < 'a' || key > 'z') && (key < 'A' || key > 'Z')) {
    event.preventDefault();
  }
}
form.onsubmit = (event) => {
  event.preventDefault();
  sendMessage();
}
const modal = document.getElementById('id01');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//שליחת הטופס
function sendMessage() {
  const details = JSON.parse(localStorage.getItem('detail')) || [];
  class form {
    name;
    phone;
    email;
    start;
    end;

    constructor(name, phone, email, start, end) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.start = start;
      this.end = end;
    }
  }
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');
  if (name.value != '' && phone.value != '') {
    var x = document.getElementById("snackbar");
    x.className = "show";
    modal.style.display = "none";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    details.push(new form(name.value, phone.value, email.value, start.value, end.value));

    localStorage.setItem('detail', JSON.stringify(details));
    console.log(localStorage.getItem('detail'));
  }

}
function filledForm() {

  const details = JSON.parse(localStorage.getItem('detail')) || [];
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');
  if (details.length !== 0) {
    name.value = details[details.length - 1].name;
    phone.value = details[details.length - 1].phone;
    email.value = details[details.length - 1].email;
    start.value = details[details.length - 1].start;
    end.value = details[details.length - 1].end;
  }
  else {
    name.value = "";
    phone.value = "";
    email.value = "";
    start.value = "";
    end.value = "";
  }

}
filledForm();

