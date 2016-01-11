angular.module('chktApp', 
	['ngRoute', 'mainCtrl', 'loginCtrl', 'registrarseCtrl', 'bienvenidoCtrl', 'cuestionarioCtrl',
	 'riesgosCtrl', 'expedienteCtrl', 'localizaCtrl', 'clinicaCtrl', 'citasCtrl', 'agregarCitaCtrl',
	 'confirmacionCtrl',
	 'headerDrctv', 'sliderDrctv', 'footerDrctv'])

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
	})

	.when("/riesgos", {
		templateUrl: "/partials/riesgos.html",
		controller: "RiesgosController as riesgos"
	})

	.when("/expediente", {
		templateUrl: "/partials/expediente.html",
		controller: "ExpedienteController as expediente"
	})

	.when("/localizaclinica", {
		templateUrl: "/partials/localiza.html",
		controller: "LocalizaController as localiza"
	})

	.when("/clinica", {
		templateUrl: "/partials/clinica.html",
		controller: "ClinicaController as clinica"
	})

	.when("/confirmacion", {
		templateUrl: "/partials/confirmacion.html",
		controller: "ConfirmacionController as confirmacion"
	})

	.when("/citas", {
		templateUrl: "/partials/citas.html",
		controller: "CitasController as citas"
	})

	.when("/agregarcita", {
		templateUrl: "/partials/agregarcita.html",
		controller: "AgregarCitaController as agregarCita"
	});

	$locationProvider.html5Mode(true);
}])

.value('apiSite', "http://localhost:4000")
.value('accessToken', "");