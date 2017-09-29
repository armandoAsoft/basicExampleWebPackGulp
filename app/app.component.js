(function () {
    'use strict';

    angular
        .module('app')
        .component('headerTool', {
            controller: 'HeaderToolController',
            controllerAs: 'headerTool',
            template: require('./app.html'),
            bindings: {
                name: '@'
            }
        });
})();