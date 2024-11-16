function loadApi(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>dispalayData(data))
}

function dispalayData(data) {
    console.log(data);
    data.map(user=>console.log(user.name))
}