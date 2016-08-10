'use strict';

/**
 * @ngdoc overview
 * @name systemStockApp
 * @description
 * # systemStockApp
 *
 * Main module of the application.
 */
angular
  .module('systemStockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inventario', {
        templateUrl: 'views/inventario.html',
        controller: 'InventarioCtrl',
        controllerAs: 'inventario'
      })
      .when('/facturas', {
        templateUrl: 'views/facturas.html',
        controller: 'FacturasCtrl',
        controllerAs: 'facturas'
      })
      .otherwise({
        redirectTo: '/inventario'
      });
  });
