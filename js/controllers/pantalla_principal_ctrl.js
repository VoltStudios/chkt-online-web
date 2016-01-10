/**
* pantallaPrincipalCtrl Module
*
* Modulo que contiene el controlador de la pantalla principal. Esta pantalla debe mostrar
* al usuario su nivel de riesgo general.
*/
angular.module('pantallaPrincipalCtrl', [])

.controller('PantallaPrincipalController', ['$rootScope', function($rootScope){
	this.user = $rootScope.user.data || {};
	
	if (this.user.nombre) {
		this.nombre = this.user.nombre + " " + this.user.apaterno;
	} else {
		this.nombre = "Usuario";
	}

	if (this.user.riesgo_general) {
		this.riesgo_general = this.user.riesgo_general;
	} else {
		this.riesgo_general = 10;
	}

	if (this.riesgo_general < 4) {
		this.colorRiesgo = "#98CC81";
		this.nivelSalud = "Sano"
	} else if(this.riesgo_general < 8) {
		this.colorRiesgo = "#FFC821";
		this.nivelSalud = "Parcialmente Sano"
	} else {
		this.colorRiesgo = "#E82C2C";
		this.nivelSalud = "Poco sano";
	}

	this.porcentajeRiesgo = this.riesgo_general * 10;
}])