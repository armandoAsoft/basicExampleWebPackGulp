(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderToolController', HeaderToolController);

        HeaderToolController.$inject = [];

        function HeaderToolController() {
            var vm = this;

            vm.$onInit = onInit;
            vm.open = open;

            function onInit() {
                vm.opened = false;
                vm.dateLabel = 'Date of bird';
                vm.nameLabel = 'First name';
            }

            function open() {
                vm.opened = true;
            }
        }
})();