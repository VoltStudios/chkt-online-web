angular.module('chktApp', 
	['ngRoute', 'mainCtrl', 'loginCtrl', 'registrarseCtrl', 'bienvenidoCtrl', 'cuestionarioCtrl', 
	 'headerDrctv', 'sliderDrctv'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

	.when("/", {
		templateUrl: "/partials/login.html",
		controller: "LoginController as login"
	})

	.when("/registrarse", {
		templateUrl: "/partials/registrarse.html",
		controller: "RegistrarseController as registrarse"
	})

	.when("/bienvenido", {
		templateUrl: "/partials/bienvenido.html",
		controller: "BienvenidoController as bienvenido"
	})

	.when("/cuestionario", {
		templateUrl: "/partials/cuestionario.html",
		controller: "CuestionarioController as cuestionario"
	});

	$locationProvider.html5Mode(true);
}])

.value('apiSite', "http://localhost:4000")
.value('accessToken', "");