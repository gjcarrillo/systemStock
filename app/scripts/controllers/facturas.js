'use strict';

/**
 * @ngdoc function
 * @name systemStockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the systemStockApp
 */
angular.module('systemStockApp')
  .controller('FacturasCtrl',['$scope', function ($scope) {
    $scope.isCollapsed=true;
  	console.log($scope.isCollapsed);
    $scope.fact=[{id:"001",cedula:"19296069",nombre:"Oscar",apellido:"Perez"},{id:"002",cedula:"19296069",nombre:"Jose",apellido:"Perez"},{id:"003",cedula:"19296069",nombre:"Julio",apellido:"Perez"}];

    $scope.ShowFactura=function(datos){
    	alert("Aqui va la factura con todos los datos y el form plantilla");
    }

  }]);
