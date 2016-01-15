
if (Meteor.isServer) {

  if (Meteor.settings && Meteor.settings.ACCOUNTS_PHONE) {
  	SMS.twilio = {
  	  FROM: Meteor.settings.TWILIO.FROM,	
	  ACCOUNT_SID: Meteor.settings.TWILIO.SID,
	  AUTH_TOKEN: Meteor.settings.TWILIO.TOKEN
	};
    Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;
    Accounts._options.phoneVerificationMasterCode = Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE;
  }
}