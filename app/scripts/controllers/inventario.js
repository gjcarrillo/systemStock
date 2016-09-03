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
  	

  	$scope.sum=function(item,modal)
  	{
      if (parseInt(modal.change)>0){
        var data =[{id: item.id},{mount:parseInt(item.mount)+parseInt(modal.change)}];
        $http.post('controllers/inventario/updateController.php',data)
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
      }else{
        {ngNotify.set('Cantidad Invalida', 'error');}
      }
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
      $http.post('controllers/inventario/updateController.php',data)
          .then(function(response) 
          {
          console.log(response.data)
          if (response.data.mensaje == "success")
          {
            ngNotify.set('Ha decrementado el inventario');
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
