/**
* clinicaCtrl Module
*
* Módulo con el controlador para la clínica. Al no contarse con un servicio de localización
* se simula la información con valores estáticos.
*/
angular.module('clinicaCtrl', [])

.controller('ClinicaController', ['$location', function($location){
	this.datosClinica = "Av. Paseo de la Reforma #476 Planta Baja\nCuauhtémoc, Juárez, 06600 Ciudad de México, D.F.\nimss.gob.mx\ntel: 01 55 5238 2700";
}]);
