mainObj.gPopup =
{
	outListener:false,
	open(contentClass)
	{
		this.removeListner();
		let popupHtml = $(`.${contentClass}`).html();
		$('._overlay').addClass('open').html(popupHtml);
		$('body').css({overflow:'hidden'});
		$('html').css({overflow:'hidden'});
		this.setEscEvent();

		let $popup = $('._overlay').find('._popup-content')
		let self = this;
		setTimeout(function()
		{
			self.outListener = mainObj.clickOutside($popup, () => {
				self.close();
			});
		},10);
	},
	close()
	{
		$('._overlay').removeClass('open');
		$('body').css({overflow:'hidden'});
		$('html').css({overflow:'auto'});
		this.removeListner();
	},
	removeListner()
	{
		if(this.outListener)
			document.removeEventListener('click', this.outListener);
		this.outListener = false
	},
	escEvent:false,
	setEscEvent()
	{
		if(this.escEvent) return false;
		let self = this;
		document.onkeydown = function(evt)
		{
			evt = evt || window.event;
			if (evt.keyCode == 27)
				self.close();
		};
		this.escEvent = true;
	},
}