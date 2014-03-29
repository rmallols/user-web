describe('movies search', function() {

    var forEach = angular.forEach;
    beforeEach(function () {
        module("ntvApp");
    });

    it('should not return any movie if the filter is empty', inject(function($rootScope, moviesSearch) {

        var promiseMovies = null;

        moviesSearch.execute('').then(function (movies) {
            promiseMovies = movies;
        });

        $rootScope.$digest();
        expect(promiseMovies.length).toBe(0);
    }));

    it('should not return any movie if the filter is "batman"', inject(function($rootScope, $q, moviesSearch) {

        var promiseMovies = null;

        moviesSearch.execute('batman').then(function (movies) {
            promiseMovies = movies;
        });

        $rootScope.$digest();
        expect(promiseMovies.length).toBe(0);
    }));

    it('should return five movies if the filter is "sun"', inject(function($rootScope, $q, moviesSearch) {

        var promiseMovies = null;

        moviesSearch.execute('sun').then(function (movies) {
            promiseMovies = movies;
        });

        $rootScope.$digest();
        expect(promiseMovies.length).toBe(5);
    }));

    it('should return the proper movie data if the filter is "sun"', inject(function($rootScope, $q, moviesSearch, moviesCatalogue) {

        var promiseMovies = null,
            allMovies = moviesCatalogue.all();

        moviesSearch.execute('sun').then(function (movies) {
            promiseMovies = movies;
        });

        $rootScope.$digest();

        forEach(promiseMovies, function(promiseMovie, index) {

            expect(promiseMovie.title).toBe(allMovies[index].title);
            expect(promiseMovie.slug).toBe(allMovies[index].slug);
            expect(promiseMovie.thumbnail).toBe(allMovies[index].thumbnail);
        });
    }));

    it('should return all the movies if the filter is "sunshine"', inject(function($rootScope, $q, moviesSearch, moviesCatalogue) {

        var promiseMovies = null,
            allMovies = moviesCatalogue.all();

        moviesSearch.execute('sunshine').then(function (movies) {
            promiseMovies = movies;
        });

        $rootScope.$digest();
        expect(promiseMovies.length).toBe(allMovies.length);
    }));

    it('should return the proper movie data if the filter is "sun"', inject(function($rootScope, $q, moviesSearch, moviesCatalogue) {

        var promiseMovies = null,
            allMovies = moviesCatalogue.all();

        moviesSearch.execute('sunshine').then(function (movies) {
            promiseMovies = movies;
        });

        $rootScope.$digest();

        forEach(promiseMovies, function(promiseMovie, index) {

            expect(promiseMovie.title).toBe(allMovies[index].title);
            expect(promiseMovie.slug).toBe(allMovies[index].slug);
            expect(promiseMovie.thumbnail).toBe(allMovies[index].thumbnail);
        });
    }));
});
