'use strict';

/**
 * @ngdoc function
 * @name systemStockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the systemStockApp
 */
angular.module('systemStockApp')
  .controller('FacturasCtrl',['$scope','$http','$uibModal','ngNotify', function ($scope,$http,$uibModal,ngNotify) {
    $scope.isCollapsed=true;
  	console.log($scope.isCollapsed);
    $scope.fact='';
    

     $http.post('controllers/facturas/getController.php')
          .then(function(response) 
          {
          console.log(response);
          if (response.data.mensaje == "success")
          { console.log(response);
            $scope.fact=response.data.data;
            ngNotify.set('Sincronizado con exito');
         } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });

    $scope.abrir = function (factura){
      $scope.modal='';
      alert(factura.id);
     $http.post('controllers/facturas/findController.php',factura)
          .then(function(response) 
          {

            console.log(response);
          if (response.data.mensaje == "success")
          {
            ngNotify.set('Mostrando factura');
            $scope.modal=response.data.data;
         } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });
      }
    
 	$scope.guardar=function(data)
 	{
 		 $http.post('controllers/facturas/addController.php',data)
          .then(function(response) 
          {
          console.log(response)
          if (response.data.mensaje == "success")
          { 
            ngNotify.set('Factura generada con exito');
            $scope.fact.push({id:response.data.id,cedula:data.ci,cliente:data.cliente,cel:data.cel,fecha:response.data.fecha});
            $scope.isCollapsed=true;
            console.log($scope.isCollapsed);
            data.id=response.data.id;
            data.fecha=response.data.fecha;
          $http.post('controllers/facturas/facturaPDF.php',data)
          .then(function(response) 
          {
          console.log(response);
          if (response.data.mensaje == "success")
          { 
            ngNotify.set('Descargando Factura');
         } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });
         } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });

  }

  }]);