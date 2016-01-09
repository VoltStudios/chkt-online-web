/**
* cuestionarioCtrl Module
*
* Modulo que contiene el controlador de la pantalla de cuestionario.
*/
angular.module('cuestionarioCtrl', ['userSrvc'])

.controller('CuestionarioController', ['UserService', function(UserService){
	console.log("Cuestionario...");

	this.status = {}

	this.responder = function(cuestionario) {
		UserService.enviarStatus(cuestionario,
			function success(response) {
				console.log(response);
			},
			function failure(response) {
				console.log(response);
			});
	};
}])