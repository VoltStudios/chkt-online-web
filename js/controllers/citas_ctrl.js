/**
* citasCtrl Module
*
* Modulo que contiene el controlador para desplegar las citas. Debe conectarse a un servicio para administrar
* las citas y desplegarlas en lista y en calendario. Función de calendario no implementada para el prototipo.
*/
angular.module('citasCtrl', ['calendarioSrvc'])

.controller('CitasController', ['CalendarioService', function(CalendarioService){
	this.citas = CalendarioService.obtenerCitas();

	var diaSemana = function(dia) {
		if (dia == 0) {
			return "Domingo";
		} else if (dia == 1) {
			return "Lunes";
		} else if (dia == 2) {
			return "Martes";
		} else if (dia == 3) {
			return "Miércoles";
		} else if (dia == 4) {
			return "Jueves";
		} else if (dia == 5) {
			return "Viernes";
		} else if (dia == 6) {
			return "Sábado";
		} else {
			return "Día no válido"
		}
	}

	var mesAno = function(mes) {
		if (mes == 0) {
			return "Enero";
		} else if (mes == 1) {
			return "Febrero";
		} else if (mes == 2) {
			return "Marzo";
		} else if (mes == 3) {
			return "Abril";
		} else if (mes == 4) {
			return "Mayo";
		} else if (mes == 5) {
			return "Junio";
		} else if (mes == 6) {
			return "Julio";
		} else if (mes == 7) {
			return "Agosto";
		} else if (mes == 8) {
			return "Septiembre";
		} else if (mes == 9) {
			return "Octubre";
		} else if (mes == 10) {
			return "Noviembre";
		} else if (mes == 11) {
			return "Diciembre";
		}
	}

	this.formatoFecha = function(fecha) {
		return "" 
			+ diaSemana(fecha.getDay()) 
			+ " " 
			+ fecha.getDate() 
			+ " de " 
			+ mesAno(fecha.getMonth()) 
			+ " del " 
			+ fecha.getFullYear();
	}

	this.formatoHora = function(fecha) {
		var hora = fecha.getHours();
		var minutos = fecha.getMinutes();
		
		return ""
			+ (hora % 12)
			+ ":"
			+ (minutos < 10 ? "0" + minutos : minutos)
			+ (hora < 12 ? " am" : " pm")
	}
}])
