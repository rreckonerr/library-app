import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		return this.store.createRecord('invitation')
	},

	actions: {

		saveInvitation(newInvitation) {
			newInvitation.save().then(response => this.controller.set('responseMessage', `Thank you! We've just saved your email address with the following id: ${response.get('id')}`));
		},

		willTransition() {
			let model = this.controller.get('model');

			if (model.get('isNew')) {
				model.destroyRecord();
			}

		this.controller.set('responseMessage', false);
	}
	}
});
