﻿(function (app) {
    'use strict';

    app.controller('rootCtrl', rootCtrl);

    rootCtrl.$inject = ['$scope', '$location', '$rootScope'];
    function rootCtrl($scope, $location, $rootScope) {
        //$location.path('#/');

    }

})(angular.module('lendingLibrary'));
