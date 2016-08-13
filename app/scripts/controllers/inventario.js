'use strict';

/**
 * @ngdoc function
 * @name systemStockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the systemStockApp
 */
angular.module('systemStockApp')
  .controller('InventarioCtrl',['$scope', function ($scope) {

  	$scope.isCollapsed=true;
  	console.log($scope.isCollapsed);
  	$scope.items=[{name:"Mica",precio:"100.00bsf",mount:"12"},{name:"Pantalla",precio:"900.00bsf",mount:"6"},{name:"Tactil",precio:"9.000.00bsf",mount:"4"}];

  	$scope.sum=function(item,modal)
  	{
  		item.mount+=modal.change;
  	}
  	$scope.rest=function(item,modal)
  	{
  		item.mount-=modal.change;
  	}
  	$scope.delete=function(item,index)
  	{
  		$scope.items.splice(index,1);
  	}
  	$scope.add=function(nuevo)
  	{	
  		$scope.items.push({name:nuevo.name,precio:nuevo.precio,mount:nuevo.mount});
      $scope.nuevo.name='';
  		$scope.nuevo.precio='';
  		$scope.nuevo.mount='';

  	}	

  }]);
