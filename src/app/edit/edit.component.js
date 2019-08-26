// edit.component.js
(() => {

    angular
        .module('app')
        .component('edit', {
            controller: 'editController',
            controllerAs: 'vm',
            templateUrl: 'app/edit/edit.html'
        });

})();