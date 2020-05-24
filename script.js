$('.site-slider').not('.slick-initialized').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.site-slider .slider-btn .prev',
    nextArrow: '.site-slider .slider-btn .next',
});

var btn = document.querySelector(".menu");
var nav = document.querySelector(".nav-list")
 
btn.addEventListener("click", function ()
{
    console.log("clickd")
    nav.classList.toggle("show");
})