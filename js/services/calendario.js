/**
* calendarioSrvc Module
*
* Modulo que contiene el servicio de citas. Sirve como almacén de información para las citas. Debería de
* conectarse con un servicio externo de citas, de proveerse estos accesos en un futuro.
*/
angular.module('calendarioSrvc', [])

.factory('CalendarioService', [function(){
/** 
* Almacena citas. El formato debe ser 
*
*	{
*		encabezado: String,
*		fecha: Date,
*		ubicacion: String,
*		detalles: String,
*		color: String (Debe ser un código exadecimal de color válido)
*	}
*/


	// Valores de prueba. En versión final utilizar un arreglo vacío o conectar con un servicio web.
	var citas = [
		{
			encabezado: "Cita en laboratorio",
			fecha: new Date(2015, 09, 27, 7, 15),
			ubicacion: "Clínica 79, Gaviotas #13, Tlalnepantla, 53120",
			detalles: "Venir en ayuno. Traer expediente",
			color: "#FFBA75"
		}, {
			encabezado: "Cita en consultorio",
			fecha: new Date(2015, 09, 30, 7, 15),
			ubicacion: "Clínica 79, Gaviotas #13, Tlalnepantla, 53120",
			detalles: "Venir en ayuno. Traer expediente",
			color: "#F57D7D"
		}
	];

	return {
		agregarCita: function(cita) {
			console.log(cita);
			citas.push(cita);
		},

		obtenerCitas: function() {
			return citas;
		}
	};
}]);
