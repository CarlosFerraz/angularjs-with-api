// edit.controller.js
(() => {

    angular
        .module('app')
        .controller('editController', editController);

    function editController(editService, $state) {
        const vm = this;
        vm.$onInit = onInit;
        vm.edit = null;
        vm.header = 'edit';
        const record = {
            id: "",
            description: "",
            done: false
        }

        vm.record = angular.copy(record)
        vm.error = false
        vm.success = false
        activate();

        

        ////////////

        function activate() {
            // Resolve start-up logic
            editService.get({id:$state.params.id}) //catch info from certain tasks
                .then(task => {
                    vm.record = task; //throw info on screen
                })
                .catch(response =>{
                    vm.error = true
                    vm.message = "Task not found"
                });
        }

        function onInit() {
            // Initialization logic that relies on bindings being present
            // should be put in this method, which is guarranteed to
            // always be called after the bindings have been assigned.
            vm.edit = task => {
                if(!task.description == ""){
                    editService.edit(task) //edit a task
                        .then(response => {
                            vm.success = true //state return to previous list

                        })
                        .catch(response =>{
                            vm.error = true
                            vm.message = "Error, couldn't alter task, try again later"
                        })
                }
            }
        }

    }

})();