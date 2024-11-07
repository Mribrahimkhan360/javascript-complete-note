const element = document.getElementById('dom1');

let view = element.getAttribute('class');
console.log(view);

let dis = element.setAttribute('disable',true);
console.log(dis);

const b = element.classList;
console.log(b);
// Adding a class to the element
element.classList.add('Ibrahim');
console.log(element.classList);  // To verify that 'Ibrahim' was added

element.classList.remove('Ibrahim');
console.log(element.classList);
