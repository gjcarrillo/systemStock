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
  	$scope.items=[{name:"Mica",mount:"12"},{name:"Pantalla",mount:"6"},{name:"Tactil",mount:"4"}];

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
  		$scope.items.push({name:nuevo.name,mount:nuevo.mount});
  		$scope.nuevo.name='';
  		$scope.nuevo.mount='';

  	}	

  }]);
