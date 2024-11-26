// variables
const openBtn = document.getElementById('open-btn');
const modelContainer = document.getElementById('model-container');
const closeBtn = document.getElementById('close-btn');

// function to add invisible, and remove the darkEffect class
function openContainerStyle() {
    modelContainer.classList.add('invisible');
    modelContainer.classList.remove('darkEffect');
}

// event listeners
openBtn.addEventListener('click', () => {
    modelContainer.classList.remove('invisible');
    modelContainer.classList.add('darkEffect');

});

closeBtn.addEventListener('click', () => {
    openContainerStyle();
});
window.addEventListener('click', (event) => {
    if (event.target === modelContainer) {
        openContainerStyle();
    }
});

