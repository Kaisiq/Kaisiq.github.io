function initMap() {
    var mapOptions = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



function expandImage() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImage");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}


const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("from-bottom-animation", entry.isIntersecting);
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const elements = document.querySelectorAll('.box');
elements.forEach(el => {
    observer.observe(el, options);
});