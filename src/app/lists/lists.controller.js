// list.controller.js
(() => {

    angular
        .module('app')
        .controller('listsController', listsController);

    function listsController(listsService, editService) {
        const vm = this;
        vm.$onInit = onInit;
        vm.list = null;
        vm.header = 'lists';
        const record = {
            description: "",
            done: false
        }

        vm.record = angular.copy(record)
        activate();

        ////////////

        function activate() {
            // Resolve start-up logic
            listsService.query() //get list
                .then(list => {
                    console.log(list)
                    vm.list = list; //show on screen
                });
        }

        function onInit() {
            // Initialization logic that relies on bindings being present
            // should be put in this method, which is guarranteed to
            // always be called after the bindings have been assigned.
            vm.create = task => { 
                if(!task.description == ""){ //if para validar que o desc não pode ser nulo
                    listsService.create(task) //creating a new task
                        .then(response => { 
                            vm.record = angular.copy(record) //clean input
                            listsService.query() // getting a new updated list
                            .then(list => {
                                vm.list = list; //show updated list on screen
                            });    
                        })
                }
            }

            vm.remove = id => {
                listsService.remove({ids: [id]}) // remove a task a partir daqui
                    .then(response => {
                         listsService.query() // get list
                         .then(list => {
                             vm.list = list; //show list
                         })
                    })
            }

            vm.toggleDone = task => {
                task.done = !task.done
                editService.edit(task)
                    .then(response => {
                        listsService.query()
                            .then(list => {
                                vm.list = list;
                            }
                                )       
                    })
            }

            vm.searchTask = description => {
                listsService.query({search: description}) // remove a task from here
                    .then(response => {
                         vm.list = response
                    })
            }
        }

    }

})();