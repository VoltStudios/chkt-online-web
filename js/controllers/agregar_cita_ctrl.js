/**
* agregarCitaCtrl Module
*
* Módulo con el controlador para la sección de agregar citas. Depende del módulo de calendario usado
* en el sistema de citas.
*/
angular.module('agregarCitaCtrl', ['calendarioSrvc'])

.controller('AgregarCitaController', ['$location', 'CalendarioService', function($location, CalendarioService){
	this.cita = {};

	// Agrega citas de tipo consultiorio. Una vez determinados los distintos tipos de citas se puede actualizar
	// junto con su respectiva interface.
	this.agregarCita = function(cita) {
		var citaFormato = {};

		citaFormato.fecha = new Date(
			cita.fecha.getFullYear(),
			cita.fecha.getMonth(),
			cita.fecha.getDate(),
			cita.horario
		);
		citaFormato.encabezado = "Cita en consultorio";
		citaFormato.ubicacion = cita.ubicacion;
		citaFormato.detalles = cita.detalles;
		citaFormato.color = "#F57D7D"

		CalendarioService.agregarCita(citaFormato);
		$location.url("/citas");
	}
}])
