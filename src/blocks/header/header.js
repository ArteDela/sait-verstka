mainObj.header =
{
	showMenu(instance)
	{
		let menu = document.querySelector('.header-menu');
		let header = document.querySelector('.header');
		if(instance.classList.contains('active'))
			instance.classList.remove('active');
		else
			instance.classList.add('active');
		if(menu.classList.contains('active'))
			menu.classList.remove('active');
		else
			menu.classList.add('active');
	}
};