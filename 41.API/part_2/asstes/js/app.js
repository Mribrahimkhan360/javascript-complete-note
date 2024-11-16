document.getElementById('btn').addEventListener('click',function(){
    fetch('http://127.0.0.1:5500/part_2/api.txt')
    .then(response=>response.text())
    .then(data=>{
        document.getElementById('p').innerText= data;
    })
})