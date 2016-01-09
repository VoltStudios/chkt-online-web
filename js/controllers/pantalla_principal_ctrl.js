/**
* mainScreenCtrl Module
*
* Modulo con el controlador de la pantalla principal. No confundir con controlador principal de la aplicación
* en su totalidad.
*/
angular.module('pantallaPrincipalCtrl', [])

.controller('PantallaPrincipalController', ['$rootScope', function PantallaPrincipalController($rootScope) {
	if ($rootScope.user) {
		this.user = $rootScope.user.data;
		this.nombre = this.user.nombre + " " + this.user.apaterno;
	} else {
		this.user = {};
	}
}]);