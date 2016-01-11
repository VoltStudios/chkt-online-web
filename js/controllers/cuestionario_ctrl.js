/**
* cuestionarioCtrl Module
*
* Modulo que contiene el controlador de la pantalla de cuestionario.
*/
angular.module('cuestionarioCtrl', ['userSrvc'])

.controller('CuestionarioController', ['$location', 'UserService', function($location ,UserService){
	console.log("Cuestionario...");

	this.status = {}

	this.responder = function(cuestionario) {
		UserService.enviarStatus(cuestionario,
			function success(response) {
				$location.url("/riesgos")
			},
			function failure(response) {
				console.log(response);
			});
	};
}])