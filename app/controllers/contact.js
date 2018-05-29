import Controller from '@ember/controller';
import { match, and, gte } from '@ember/object/computed';


export default Controller.extend({

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: gte('message.length', 5),

  isValid: and('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      let email = this.get('emailAddress');
      let message = this.get('message');

      alert('Sending your message in progress... ');

      let responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});