angular.module('loginCtrl', ['userSrvc'])

.controller('LoginController', ['$location', 'UserService',
function LoginController($location, UserService){
	this.curp = "";
	this.password = "";

	this.login = function() {
		UserService.login(this.curp, this.password,
			function success(response) {

				$location.path("/principal");
			},
			function failure(response) {
				console.log("Error en login...")
				console.log(response);
			});
	}
}]);