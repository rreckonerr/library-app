import { not, match } from '@ember/object/computed'
import Controller from '@ember/controller';

export default Controller.extend({

	emailAddress: '',
	responseMessage: '',
	headerMessage: 'Coming Soon',
	
	isValid: match('emailAddress', /^.+@.+\..+$/),
	isDisabled: not('isValid'),

	actions: {

		saveInvitation() {
			alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
		this.set('responseMessage', `Thank you! We've just saved your email address:
			${this.get('emailAddress')}`);
		this.set('emailAddress', '');
		}
	}

});
