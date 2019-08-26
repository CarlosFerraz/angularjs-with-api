// app.settings.js
(() => {

    angular.module('app')

        .value('debuggingBorder', false)
        .value('apiBase', 'https://homolog.compufacil.com.br/rpc/v1/')
        .value('Headers', {
                "challenge-token":"52e518649a1a1b25ceb8e10eb4a69205",
                "Content-Type": "application/json"
            })

})();