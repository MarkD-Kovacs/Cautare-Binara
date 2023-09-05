const box = document.getElementById('box');
const array = [6, 8, 23, 27, 31, 32, 33, 50, 85, 96, 108, 121, 136, 141, 150];

function addElement(x) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = x;
    newDiv.classList.add('element');
    newDiv.style.width = '100px';
    newDiv.style.color = 'green';
    newDiv.addEventListener('click', function() {
        newDiv.style.color = 'orange';
    });
    document.body.appendChild(newDiv);
}

for (let number of array) {
    addElement(number);
}

