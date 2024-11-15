document.getElementById('btn').addEventListener('click',function(){
	const menuList = document.getElementById('menuListHeader');

	if (menuList.style.maxHeight ==='300px') {
		menuList.style.maxHeight = '0px';
		
	}
	else {
		menuList.style.maxHeight = '300px';
	}
	

	
})