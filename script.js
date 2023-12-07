let buttons = document.querySelectorAll('.addCart');
let shopCard  = document.querySelectorAll(".list");

// Attach a click event listener to each button
buttons.forEach(function (button) {
      button.addEventListener('click', function () {
            alert("Your Item Add to Cart ");

      });
});

//   like button
let i = document.querySelectorAll("i");

i.forEach(function (like) {
      like.addEventListener("click", function () {
            like.style.color = "red";
      })
})


// men's section  start here...

let slide = document.querySelectorAll(".slideCard");
let count = 0;
slide.forEach(function (slides, index) {
      slides.style.left = `${index * 100}%`;
});

function myfun() {
      slide.forEach(function (curVal) {
            curVal.style.transform = `translateX(-${count * 100}%)`
      })
}

setInterval(function () {
      count++;
      if (count == slide.length) {
            count = 0;
      }
      myfun();

}, 2000);

// image information here..
shopCard.forEach(function(card){
      
      card.addEventListener("click", function(){
            document.querySelector(".container").innerHTML = "";
            let div = document.createElement("div");
            div.classList.add("detailCard");
            div.innerHTML = `
            <img src="${card.firstElementChild.src}" alt="">
            <div>
                  <h1>Trend's At Now</h1>
                  <h2>Upto 50% Off</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                  <a href="">Shop Now</a>
            </div>
            `
            console.log(card);
            document.querySelector("body").appendChild(div);
      })
})

// humburger menu....

let toggle = document.querySelector(".icon");

toggle.addEventListener("click", function(){
let listMenu = document.querySelector(".list-menu");

      if(listMenu.style.display == "block"){
            listMenu.style.display = "none";
      }else{
            listMenu.style.display = "block";
      }
      console.log("heello");
})

// close toggle....

let close = document.querySelector(".close");