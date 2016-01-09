/**
* registrarseCtrl Module
*
* Controlador para sección de registro de usuarios nuevos.
*/
angular.module('registrarseCtrl', ['userSrvc'])

.controller('RegistrarseController', ['$http', '$rootScope', '$location', 'UserService', 
function RegistrarseController($http, $rootScope, $location, UserService){
	this.user = {};

	this.registrarse = function registrarse(isValid) {
		var password = this.user.password;
		UserService.registrarse(this.user, 
			function success(response) {
				UserService.login(response.data.data.curp, password, 
					function success(response) {
						$location.path("/principal");
					},
					function failure(response) {
						console.log(response);
					});
			},
			function failure(response) {
				console.log("Error en registro")
				console.log(response);
			})
	};
}]);
