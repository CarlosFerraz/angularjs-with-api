// albums.service.js
(() => {

    angular
        .module('app')
        .factory('editService', editService);

    function editService($http, apiBase, Headers) {

        return {
            edit: edit,
            get: get 
        };

        ////////////

        function get(id) {
            return $http
                .post(`${apiBase}challenge.get-task`, id,{
                    headers: Headers
                })
                .then(response => response.data);
        }

        function edit(task) {
            return $http
                .post(`${apiBase}challenge.put-task`, task,{
                    headers: Headers
                })
                .then(response => response.data);
        }

    }

})();