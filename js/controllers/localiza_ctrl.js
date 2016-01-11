/**
* localizaCtrl Module
*
* Modulo que contiene el controlador para el localizador de clínicas.
* Como no se cuenta con un servicio externo para obtener la localización de las clínicas
* esta información será simulada.
*/
angular.module('localizaCtrl', [])

.controller('LocalizaController', ['$location', function($location){
	this.calleYNumero = "";
	this.colonia = "";
	this.codigoPostal = "";

	this.localiza = function () {
		// En este método se debe realizar la localización de clínica.

		$location.url("/clinica");
	}
}]);
