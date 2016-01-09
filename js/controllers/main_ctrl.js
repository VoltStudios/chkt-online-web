angular.module('mainCtrl', [])

.controller('MainController', ['UserService', function UserServiceFactory(UserService){
	this.tagline = "I want a bowtie";

	// UserService();
}]);