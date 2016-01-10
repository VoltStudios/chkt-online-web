/**
* riesgosCtrl Module
*
* Modulo que contiene el controlador de la página de riesgos
*/
angular.module('riesgosCtrl', [])

.controller('RiesgosController', ['$rootScope', function($rootScope){
	var obtenerColor = function(riesgo) {
		if (riesgo < 4) {
			return "#98CC81";
		} else if(riesgo < 8) {
			return "#FFC821";
		} else {
			return "#E82C2C";
		}
	};

	var user = $rootScope.user.data;

	console.log(user);

	this.riesgos = [
		{etiqueta: "Colesterol", riesgo: user.riesgo_colesterol, color: obtenerColor(user.riesgo_colesterol)},
		{etiqueta: "Diabetes", riesgo: user.riesgo_diabetes, color: obtenerColor(user.riesgo_diabetes)},
		{etiqueta: "Riñones", riesgo: user.riesgo_rinones, color: obtenerColor(user.riesgo_rinones)},
		{etiqueta: "Cancer de Mama", riesgo: user.riesgo_cancer_mama, color: obtenerColor(user.riesgo_cancer_mama)},
		{etiqueta: "Hipertensión", riesgo: user.riesgo_hipertension, color: obtenerColor(user.riesgo_hipertension)},
		{etiqueta: "Cancer de Colon", riesgo: user.riesgo_cancer_colon, color: obtenerColor(user.riesgo_cancer_colon)}
	];
}]);
