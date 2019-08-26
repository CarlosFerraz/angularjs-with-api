// list.service.js
(() => {

    angular
        .module('app')
        .factory('listsService', listsService);

    function listsService(apiBase, Headers, $http) {

        return {
            query: query,
            create: create,
            remove: remove
        };
        ////////////
        
        function query(search) {
            return $http
                .post(`${apiBase}challenge.get-task`, search,{
                    headers: Headers
                })
                .then(response => response.data);
        }

        function create(task) {
            return $http
                .post(`${apiBase}challenge.post-task`, task,{
                    headers: Headers
                })
                .then(response => response.data);
        }

        function remove(id) {
            return $http
                .post(`${apiBase}challenge.delete-task`, id,{
                    headers: Headers
                })
                .then(response => response.data);
        }
    }
    ////////////

})();