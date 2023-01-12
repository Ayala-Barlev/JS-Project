
function createCarousel(images,kategory) {
    images = images.filter(function (x) {
        return x.kategory===kategory;
    })

    const myCarouselElement = document.querySelector('#carouselExampleInterval');
    const inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    myCarouselElement.append(inner);

    const DivImg1 = document.createElement('div');
    DivImg1.classList.add('carousel-item','active');
    DivImg1.setAttribute("data-bs-interval",1000);
    inner.append(DivImg1);
    const img1 = document.createElement('img');
    img1.src = `/images/${images[0].name}.jpg`;
    img1.classList.add('d-block','w-100')
    DivImg1.append(img1);

    for (let i = 1; i < images.length; i++) {
        let div = document.createElement('div');
        div.classList.add('carousel-item');
        inner.append(div);
        const img = document.createElement('img');
        img.src = `images/${images[i].name}.jpg`;
        img.classList.add('d-block','w-100')
        div.append(img);
    }
    let button_p = document.createElement('button');
        button_p.classList.add('carousel-control-prev');
        button_p.type="button";
        button_p.setAttribute("data-bs-target","#carouselExampleInterval");
        button_p.setAttribute("data-bs-slide","prev");
        myCarouselElement.append(button_p);
        let span_p1= document.createElement('span');
        span_p1.classList.add('carousel-control-prev-icon');
        span_p1.ariaHidden="true";
        button_p.append(span_p1);
        let span_p2= document.createElement('span');
        span_p2.classList.add('visually-hidden');
        span_p2.innerHTML="prev";
        button_p.append(span_p2);

        let button_n = document.createElement('button');
        button_n.classList.add('carousel-control-next');
        button_n.type="button";
        button_n.setAttribute("data-bs-target","#carouselExampleInterval");
        button_n.setAttribute("data-bs-slide","next");
        myCarouselElement.append(button_n);
        let span_n1= document.createElement('span');
        span_n1.classList.add('carousel-control-next-icon');
        span_n1.ariaHidden="true";
        button_n.append(span_n1);
        let span_n2= document.createElement('span');
        span_n2.classList.add('visually-hidden');
        span_n2.innerHTML="next";
        button_n.append(span_n2);
}
const loadImages = (kategory) => {
    $.ajax({
        method: 'GET',
        
        url: '/images.json',
        success: (data) => {
            createCarousel(data,kategory);
        }
    });
   
}
const saveKategory=JSON.parse(localStorage.getItem('kategory')) || [];

loadImages(saveKategory[0]);
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