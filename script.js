const containerDiv = document.querySelectorAll('.icon-container');


const doStuff = function(e) {
    const selectedIcon = e.target.closest('.icon-container');
    const dropDownDiv = selectedIcon.querySelector('.dropdown');
    dropDownDiv.classList.toggle('hidden');
}

containerDiv.forEach(container => {
    container.addEventListener('mouseover', doStuff);
    container.addEventListener('mouseout', doStuff);
})

