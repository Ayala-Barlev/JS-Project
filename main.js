
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

//זכוכית מגדלת
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  img.parentElement.insertBefore(glass, img);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

magnify("welcome", 3);
mybutton = document.getElementById("myBtn");

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
//אודות
let i = 0;
const txt = ' נקיון מוקפד ברמה גבוהה!!! חמישה חדרים סגורים כולל יחידת הורים ענקית, מיטות יהודיות ונוחות, מצעים  מפנקים, מגבות אישיות ומגבות אמבטיה, סלון ענק ומלכותי, כולל שולחן רחב ל-20 סועדים, מטבח ענק מהדרין הפרדה מלאה, חצר מושקעת ומוארת, נדנדות, ערסלים, דשא, טרמפולינה ופינות ישיבה, בריכה ענקית, מרפסות נוף, בתי כנסיות בקרבת מקום, מקווה וחנויות, תחבורה נוחה מכל חלקי הארץ, אפשרות להשכרת באגי במקום. ';
const speed = 100;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//תגובות
function createThanks(dataThanks) {
  const thanks = document.querySelector('#thanks');
  for (let i = 0; i < dataThanks.length; i = i + 2) {
    if (i % 6 == 0) {
      const div = document.createElement('div');
      thanks.append(div);
    }
    const flipBox = document.createElement('div');
    const flipBoxInner = document.createElement('div');
    const flipBoxFront = document.createElement('div');
    const flipBoxBack = document.createElement('div');
    const backText = document.createElement('h5');
    const frontText = document.createElement('h5');
    const backId = document.createElement('p');
    const frontId = document.createElement('p');
    thanks.append(flipBox);
    flipBox.append(flipBoxInner);
    flipBoxInner.append(flipBoxFront);
    flipBoxInner.append(flipBoxBack);
    flipBoxFront.append(frontText);
    flipBoxBack.append(backText);
    flipBoxFront.append(frontId);
    flipBoxBack.append(backId);
    flipBox.classList.add('flip-box');
    flipBoxInner.classList.add('flip-box-inner');
    flipBoxFront.classList.add('flip-box-front');
    flipBoxBack.classList.add('flip-box-back');
    frontText.innerHTML = dataThanks[i].text;
    frontId.innerHTML = dataThanks[i].identity;
    backText.innerHTML = dataThanks[i + 1].text;
    backId.innerHTML = dataThanks[i + 1].identity;


  }
}
const loadThanks = () => {
  $.ajax({
    method: 'GET',

    url: '/thanks.json',
    success: (data) => {
      createThanks(data);
    }
  });
}
loadThanks();


