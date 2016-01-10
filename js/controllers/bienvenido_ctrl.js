/**
* Bienvenido Module
*
* Modulo con el controlador de la pantalla de bienvenida. Esta pantalla solo se muestra cuando un usuario
* hace login por primera vez para llenar el cuestionario de estado.
*/
angular.module('bienvenidoCtrl', [])

.controller('BienvenidoController', ['$rootScope', function BienvenidoController($rootScope) {
	if ($rootScope.user) {
		this.user = $rootScope.user.data;
		this.nombre = this.user.nombre + " " + this.user.apaterno;
	} else {
		this.user = {};
	}
}]);