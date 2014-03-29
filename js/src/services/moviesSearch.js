(function() {
    app.service('moviesSearch', ['$q', 'catalogue', function ($q, catalogue) {
        'use strict';

        function execute(filter) {
            var deferred = $q.defer();
            try {
                deferred.resolve(getMovies(filter));
            }catch(e){
                deferred.reject(e);
            }
            return deferred.promise;
        }

        /** Private methods **/
        function getMovies(filter) {
            switch(filter) {
                case 'sunshine':
                    return getAllMovies();
                    break;
                case 'sun':
                    return getFiveFirstMovies();
                    break;
                case 'batman':
                default:
                    return getNoMovies();
                    break;
            }
        }


        function getAllMovies() {
            return catalogue;
        }

        function getFiveFirstMovies() {
            var fiveFirstMovies = [];
            for(var i = 0; i < 5; i++) {
                fiveFirstMovies[i] = catalogue[i]
            }
            return fiveFirstMovies;
        }

        function getNoMovies() {
            return [];
        }

        /** End of private methods **/

        return  {
            execute: execute
        };
    }]);
})();
