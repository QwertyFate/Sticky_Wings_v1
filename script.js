let leftBtn = document.getElementById("leftBtn"),
    rightBtn = document.getElementById("rightBtn"),
    slideShow = document.querySelector(".slideShow"),
    home = document.getElementById("home"),
    whatsNew = document.getElementById("whatsNew"),
    aboutUs = document.getElementById("aboutUs"),
    menu = document.getElementById("menuSec"),
    flavors = document.getElementById("flavors"),
    food = document.getElementById("food"),
    multiplayer = document.getElementById("multiplayer"),
    burgerBtn = document.getElementById("burgerBtn"),
    mobileNav = document.querySelector(".mobileNav"),
    navItemMobile = document.querySelectorAll(".navItemMobile"),
    dragStart = false;

    



// for mobile slideshow

slideShow.addEventListener(("mousemove"), (e) => {
    if (!dragStart) {return};
    e.preventDefault();
    slideShow.scrollLeft = e.pageX;
})



// for active nav


window.addEventListener(("scroll"), () => {

    console.log(scrollY);
    if(scrollY >= 0 && scrollY < 407) {
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        home.classList.add("active");
       
    }
    else if (scrollY>=407 && scrollY < 2207){
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        whatsNew.classList.add("active");
    }
    else if (scrollY>=2207 && scrollY < 3747){
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        aboutUs.classList.add("active");
    }
    else if (scrollY>=3747 && scrollY < 4193){
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        menu.classList.add("active");
    }
    else if (scrollY>=4193 && scrollY <6067){
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        flavors.classList.add("active");
    }
    else if (scrollY>=6067 && scrollY <7888){
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        food.classList.add("active");
    }
    else if (scrollY>=7888){
        if (document.querySelector(".active")) {
            document.querySelector('.active').classList.remove('active')
        }
        multiplayer.classList.add("active");
    }
})



leftBtn.addEventListener(("click"), () => {
    slideShow.scrollLeft -= 200;
    slideShow.style.behavior = 'smooth';
});

rightBtn.addEventListener(("click"), () => {
    slideShow.scrollLeft += 400;
});

burgerBtn.addEventListener(("click"), () => {
    mobileNav.style.display = "flex";
});

navItemMobile.forEach(elem => {
    elem.addEventListener(("click"), () => {
        mobileNav.style.display = "none";
    });
});