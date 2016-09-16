'use strict';

/**
 * @ngdoc function
 * @name systemStockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the systemStockApp
 */
angular.module('systemStockApp')
  .controller('InventarioCtrl',['$scope','$http','ngNotify', function ($scope,$http,ngNotify) {
  $scope.botao1 = function() {
   
   // alert('Ok!');
  }
  	$scope.isCollapsed=true;
  	console.log($scope.isCollapsed);
    $scope.nuevo={};
    $scope.items='';
    $http.get('controllers/inventario/getController.php')
          .then(function(response) 
          {
          console.log(response.data)
          if (response.data.mensaje == "success")
            {$scope.items=response.data.data} 
          else
            {ngNotify.set('Ocurrio un error al conectar, actualize la pagina para intentarlo nuevamente', 'error');}
          });
  	
     $scope.openmodal=function(item,index)
    {
      $scope.update='';
      $scope.modalinventario='';
      $scope.modalinventario=item;
      alert($scope.modalinventario.name);
      $scope.guardar=function(data)
      {
        alert(data.name);
        data.id=item.id;
         $http.post('controllers/inventario/updateController.php',data)
            .then(function(response) 
            {
            console.log(response.data)
            if (response.data.mensaje == "success")
            {
              ngNotify.set('Inventario modificado');
              $scope.items[index]=data;
            } 
            else
            {
              ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');
            }
            });
      }
    }
  	$scope.delete=function(item,index)
  	{
      var data =[{id: item.id}];
      $http.post('controllers/inventario/deleteController.php',data)
          .then(function(response) 
          {
          console.log(response.data)
          if (response.data.mensaje == "success")
          {
            ngNotify.set('Producto eliminado exito');
            $scope.items.splice(index,1);
          } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });
  	}
  	$scope.add=function(nuevo)
  	{	
      $http.post('controllers/inventario/addController.php',nuevo)
          .then(function(response) 
          {
          console.log(response)
          if (response.data.mensaje == "success")
          { 
            ngNotify.set('Producto agregado con exito');
          $scope.items.push({id:response.data.id,name:nuevo.name,price:nuevo.price,mount:nuevo.mount});
          $scope.nuevo.name='';
          $scope.nuevo.mount='';
          $scope.nuevo.price='';
         } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });

  	}

  }]);
