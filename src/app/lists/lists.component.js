// albums.component.js
(() => {

    angular
        .module('app')
        .component('lists', {
            controller: 'listsController',
            controllerAs: 'vm',
            templateUrl: 'app/lists/lists.html'
        });

})();