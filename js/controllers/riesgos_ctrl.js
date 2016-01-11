/**
* riesgosCtrl Module
*
* Modulo que contiene el controlador de la página de riesgos
*/
angular.module('riesgosCtrl', [])

.controller('RiesgosController', ['$rootScope', '$timeout', '$scope', function($rootScope, $timeout, $scope){
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

	// Información de presentación. Para actualizarse esta losta se puede hacer directamente. En versiones
	// posteriores se podría acceder a un servicio web que provea esta información. Sea el pripio o uno externo.
	this.riesgos = [
		{etiqueta: "Colesterol", riesgo: user.riesgo_colesterol, color: obtenerColor(user.riesgo_colesterol),
			show: false, link: "/colesterol",
			descripcion: "El colesterol es una sustancia grasa natural presente en todas las células del cuerpo humano necesaria para el normal funcionamiento del organismo. La mayor parte del colesterol se produce en el hígado, aunque también se obtiene a través de algunos alimentos."
		},
		{etiqueta: "Diabetes", riesgo: user.riesgo_diabetes, color: obtenerColor(user.riesgo_diabetes),
			show: false, link: "/diabetes",
			descripcion: "La diabetes es una enfermedad en la que el cuerpo no produce o no utiliza apropiadamente la insulina. La insulina es una hormona que se necesita para convertir el ázucar, los almidones y otros alimentos en energía necesaria para la vida diaria."
		},
		{etiqueta: "Riñones", riesgo: user.riesgo_rinones, color: obtenerColor(user.riesgo_rinones),
			show: false, link: "/rinones",
			descripcion: "En sus estadios tempranos, el cáncer de riñón no provoca dolor. Por lo tanto, los síntomas de la enfermedad suelen aparecer cuando el tumor es grande y comienza a afectar los órganos cercanos. Las personas con cáncer de riñón pueden experimentar los siguientes síntomas o signos. A veces, las personas con este tipo de cáncer no presentan ninguno de estos síntomas. O bien, estos síntomas pueden producirse por otra afección médica que no sea cáncer."
		},
		{etiqueta: "Cancer de Mama", riesgo: user.riesgo_cancer_mama, color: obtenerColor(user.riesgo_cancer_mama),
			show: false, link: "/cancermama",
			descripcion: "El cáncer de mama es una proliferación maligna de las células epiteliales que revisten los conductos o lobulillos mamarios. Es una enfermedad clonal; donde una célula individual producto de una serie de mutaciones somáticas o de línea germinal adquiere la capacidad de dividirse sin control ni orden, haciendo que se reproduzca hasta formar un tumor. El tumor resultante, que comienza como anomalía leve, pasa a ser grave, invade tejidos vecinos y, finalmente, se propaga a otras partes del cuerpo."
		},
		{etiqueta: "Hipertensión", riesgo: user.riesgo_hipertension, color: obtenerColor(user.riesgo_hipertension),
			show: false, link: "/hipertension",
			descripcion: "Es la elevación de los niveles de presión arterial de forma continua o sostenida. Para entenderlo mejor es importante definir la presión arterial. El corazón ejerce presión sobre las arterias para que éstas conduzcan la sangre hacia los diferentes órganos del cuerpo humano. Esta acción es lo que se conoce como presión arterial. La presión máxima se obtiene en cada contracción del corazón y la mínima, con cada relajación."
		},
		{etiqueta: "Cancer de Colon", riesgo: user.riesgo_cancer_colon, color: obtenerColor(user.riesgo_cancer_colon),
			show: false, link: "/cancercolon",
			descripcion: "El cáncer de colon es una enfermedad que se desarrolla debido a que la mucosa del colon contenida en un pólipo existente evoluciona por diferentes causas hasta convertirse en un tumor maligno. Normalmente las células malignas se localizan en la porción intermedia y más larga del intestino grueso."
		}
	];

	this.popUpVisible = false;
	
	this.toggleDescripcion = function(riesgo) {
		!riesgo;
	}

	this.togglePopup = function() {
		this.popUpVisible = !this.popUpVisible;
	}
}]);
