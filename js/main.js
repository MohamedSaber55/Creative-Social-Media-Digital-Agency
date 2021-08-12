

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: [$(" .nav-left"), $(" .nav-right")],

        
        responsive: responsive,


    });
});
const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 1,
    },
    560: {
        items: 2,
    },
    960: {
        items: 3,

    },
}







// -----------counter------------------
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;


        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);

        } else {
            count.innerText = target;
        }
    }

    updateCount();
});

// ---------navbar------------------
mynav = document.getElementById('navbar');

window.onscroll=function() {
	if(window.scrollY>50){
		mynav.style.backgroundcolor="none";
	}else{
		mynav.style.backgroundcolor="none";

	}
}

myButton = document.getElementById("myBtn");

window.onscroll=function () {
	// myButton.scrollTop ;
	if(window.scrollY >50){
		myButton.style.display="block";
	}else{
		myButton.style.display="none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}