function loadApi(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data)) // Fixed typo in the function name
}

function displayData(data) { // Corrected function name here
    const div = document.getElementById('divtag');
    
    data.map(user => { // Using map as in your original pattern
        const p = document.createElement('p');
        p.innerText = user.name;
        div.appendChild(p);
    });
}
