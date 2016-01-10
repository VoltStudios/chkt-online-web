angular.module('mainCtrl', [])

.controller('MainController', ['$rootScope', function UserServiceFactory($rootScope){
	// Valores default para facilitar desarrollo. REMOVER EN PRODUCCION.
	this.tagline = "Bowties are cool";
	
	$rootScope.user = {};
	$rootScope.user.data = {
		"statuses":[
			{"peso":60.8,"id":"5691c5a2e852f87072bd27fe","estilo_de_vida":2,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":60.6,"id":"5691c4c8e852f87072db3da0","estilo_de_vida":2,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":60.5,"id":"5691c0c3e852f870722bab07","estilo_de_vida":2,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":60.4,"id":"569137abe852f80c3d981dd2","estilo_de_vida":1,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":1,"colesterol":null},
			{"peso":60.3,"id":"56913758e852f80c3dc29813","estilo_de_vida":1,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":1,"colesterol":null},
			{"peso":60.4,"id":"5691338ee852f80c3d154240","estilo_de_vida":2,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":60.3,"id":"56913210e852f80c3de4d207","estilo_de_vida":2,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":60.2,"id":"5691318fe852f80c3d539be4","estilo_de_vida":0,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":60.2,"id":"56913130e852f80c3d14d598","estilo_de_vida":0,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null},
			{"peso":65.1,"id":"5690b240e852f81f65b7e810","estilo_de_vida":1,"estatura":1.74,"consumo_cigarro":0,"consumo_alcohol":0,"colesterol":null}],
		"sexo":"hombre",
		"riesgo_rinones":5,
		"riesgo_hipertension":4,
		"riesgo_general":3,
		"riesgo_diabetes":4,
		"riesgo_colesterol":3,
		"riesgo_cancer_mama":2,
		"riesgo_cancer_colon":1,
		"nombre":"Aldo",
		"id":"5690792ce852f81f651c6140",
		"fecha_nacimiento":"1991-09-20",
		"email":"steam.axia@gmail.com",
		"edad":24,
		"curp":"B",
		"cuestionario_tomado":true,
		"apaterno":"Camarena",
		"amaterno":"Ramirez"
	};
}]);