/**
* expedienteController Module
*
* Modulo que contiene el controlador para la sección de expediente. Se debe agregar una librería de 
* graficación.
*/
angular.module('expedienteCtrl', [])

.controller('ExpedienteController', ['$rootScope', function($rootScope){
	this.user = $rootScope.user.data;

	this.metricas = [
		{metrica: "peso", texto: "Peso"},
		{metrica: "estatura", texto: "Estatura"},
		{metrica: "colesterol", texto: "Colesteron"},
		{metrica: "consumo_alcohol", texto: "Consumo de Alcohol"},
		{metrica: "consumo_cigarro", texto: "Consumo de Cigarros"},
		{metrica: "estilo_de_vida", texto: "Estilo de Vida"}
	];

	this.metrica = this.metricas[0];
}])