function loadAPI() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => shoeApi(data));
}

function shoeApi(data) {
    console.log(data);
    const container = document.getElementById('divtag');

    for (let i = 0; i < data.length; i++) {
        const newDiv = document.createElement('div'); 
        newDiv.style.backgroundColor = '#ddd';
        newDiv.style.padding = '10px';
        
        newDiv.style.margin = '10px';
        newDiv.style.borderRadius = '5px';
        newDiv.style.boxShadow = '1px 1px 1px gray'
        newDiv.innerHTML = `
            <h2>Title: ${data[i].title}</h2>
            <img src="${data[i].url}">
        `;
        container.appendChild(newDiv); 
    }
}
