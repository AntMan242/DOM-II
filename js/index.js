// Your code goes here

// mouseover
const button = document.querySelector('.btn');

button.addEventListener('mouseover', function() {
    console.log('hovered over');
});

// keydown
const navLink = document.querySelector('.nav-link');
navLink.forEach(function() {
    navLink.addEventListener('keydown', function(event) {
        alert(`key down`);
})

});

// wheel
const allBody = document.querySelector('body');
allBody.addEventListener('wheel', function() {
    console.log('wheel');
});

// drag/drop
