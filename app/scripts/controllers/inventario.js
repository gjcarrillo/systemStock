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

  	$scope.isCollapsed=true;
  	console.log($scope.isCollapsed);
    $scope.items='';
    $http.get('controllers/getController.php')
          .then(function(response) 
          {
          console.log(response.data)
          if (response.data.mensaje == "success")
          {$scope.items=response.data.data} 
          else
          {ngNotify.set('Ocurrio un error al conectar, actualize la pagina para intentarlo nuevamente', 'error');}
          });
  	

  	$scope.sum=function(item,modal)
  	{
      var data =[{id: item.id},{mount:parseInt(item.mount)+parseInt(modal.change)}];
      $http.post('controllers/updateController.php',data)
          .then(function(response) 
          {
          console.log(response.data)
          if (response.data.mensaje == "success")
          {ngNotify.set('Se ha aumentado el inventario');
            item.mount=parseInt(item.mount)+parseInt(modal.change);
            modal.change='';
          } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });
  	}
    $scope.rest=function(item,modal)
    {
      if(item.mount-modal.change<0)
      {
        ngNotify.set('Error cantidad no valida', 'error');
      }
      else
      {
      var data =[{id: item.id},{mount:item.mount-modal.change}];
      $http.post('controllers/updateController.php',data)
          .then(function(response) 
          {
          console.log(response.data)
          if (response.data.mensaje == "success")
          {
            ngNotify.set('Vendido Con exito');
            item.mount-=modal.change;
            modal.change='';
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
      $http.post('controllers/deleteController.php',data)
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
      var data =[{name: nuevo.name},{mount:nuevo.mount}];
      $http.post('controllers/addController.php',data)
          .then(function(response) 
          {
          console.log(response)
          if (response.data.mensaje == "success")
          { 
            ngNotify.set('Producto agregado con exito');
          $scope.items.push({id:response.data.id,name:nuevo.name,mount:nuevo.mount});
          $scope.nuevo.name='';
          $scope.nuevo.mount='';
         } 
          else
          {ngNotify.set('Ocurrio un error,intentelo nuevamente', 'error');}
          });
  	}	

  }]);
