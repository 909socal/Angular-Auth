'use strict'

var mongoose = require('mongoose')

var User; 

var userSchema = new mongoose.Schema({
	username: {type:string},
    password: {type:string}

})

userSchema.pre('save', function(next){
	// hash the password


	// this === obkect whwen were tying to save
	bcrypt.genSalt(12, function(err. salt){ //ensures we only salt the hash for new users
		bcrypt.bash(this.password, salt, null, function(err, hash){

			this.password= hash ; 
			
		})
	}) 
})

userSchema.statics.register = function(user, cb){
	// user === {username:_______, paswrod:___________}
	
	User.findOne({username: user.username}, function(err, dbuser){
		if(err || !dbUser) return cb(err || 'Username alredy taken');

		User.create(user, function(err, savedUser){
			savedUser.password = '';
			cb(err, savedUser); 

		});
	});
};


User = mongoose.model('User', userSchema)

module.exports = User; 