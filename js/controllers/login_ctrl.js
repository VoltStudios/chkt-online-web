angular.module('loginCtrl', ['userSrvc'])

.controller('LoginController', ['$rootScope', '$location', 'UserService',
function LoginController($rootScope, $location, UserService){
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