mainObj.signPopup =
{
	submit(instance)
	{
		let validator = new MainValidator(instance);
		validator.callbacks.email = this.email;
		validator.callbacks.confirm = this.confirm;

		if(!validator.validate())
			return false;
	},
	email(field)
	{
		let $input = $(field).find('input');
		const regex = /\S+@\S+\.\S+/;
		if(regex.test($input.val()))
			return true;
		this.setMessage(field,'Please enter your Email');
		return false;
	},
	confirm(field)
	{
		let $input = $(field).find('input');
		if($input.val() == $input.parents('form').find('._passwords').val())
			return true;
		else
		{
			this.setMessage(field,'Please confirm a password');
			return false;
		}
	}
}