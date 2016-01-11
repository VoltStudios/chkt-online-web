/**
* confirmacionCtrl Module
*
* Modulo que contiene el controlador de la sección de confirmación. Obtiene el usuario
* logeado del root scope.
*/
angular.module('confirmacionCtrl', [])

.controller('ConfirmacionController', ['$rootScope', function($rootScope){
	this.user = $rootScope.user.data;
	this.nombre = this.user.nombre + " " + this.user.apaterno + " " + this.user.amaterno;
}])