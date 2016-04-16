//for connecting DB, change inputs according to your DB details
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('userdata', 'postgres', '1234567', {
      host: 'localhost',
      dialect: "postgres", 
      port:    5432,
    });

//created a table with name=user  
var User = sequelize.define('user', {
	  firstName: {
	    type: Sequelize.STRING,
	  },
	  lastName: {
	    type: Sequelize.STRING
	  },
	   email: {
	    type: Sequelize.STRING,
	  }
});


//synced everything
module.exports=function(userobject){
	
		sequelize.sync({force:false}).then(function(){
			console.log("connected to DB");
		}).then(function(){

	   User.create(userobject)
	   .then(function(user) {
	    console.log(user.get('firstName')); 
	    console.log(user.get('lastName'));
	    console.log(user.get('email'));
  })})


}