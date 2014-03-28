describe('movies catalogue', function() {

    beforeEach(function () {
        module("ntvApp");
    });

    it('should return all the movies', inject(function(moviesCatalogue) {

        var allMovies = moviesCatalogue.all();

        expect(allMovies[0].title).toEqual("Pirates of the Caribbean");
        expect(allMovies.length).toEqual(11);
    }))
});
