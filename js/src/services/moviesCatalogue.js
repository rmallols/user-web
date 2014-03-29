(function() {
    app.service('moviesCatalogue', ['catalogue', function (catalogue) {
        'use strict';

        /**
         * Retrieves all the available movies from the catalogue
         *
         * @returns {Array} The total amount of movies that are available in the catalogue
         */
        this.all = function () {
            return catalogue;
        }
    }]);

    app.constant('catalogue', [
        {
            "title": "Pirates of the Caribbean",
            "slug": "pirates-caribbean",
            "thumbnail": "..."
        },

        {
            "title": "Edward Scissorhands",
            "slug": "edward-scissorhands",
            "thumbnail": "..."
        },

        {
            "title": "Rango",
            "slug": "rango",
            "thumbnail": "..."
        },

        {
            "title": "Alice in Wonderland",
            "slug": "alice-in-wonderland",
            "thumbnail": "..."
        },

        {
            "title": "Little Miss Sunshine",
            "slug": "little-miss-sunshine",
            "thumbnail": "..."
        },

        {
            "title": "Sunshine",
            "slug": "sunshine",
            "thumbnail": "..."
        },

        {
            "title": "Sunshine State",
            "slug": "sunshine-state",
            "thumbnail": "..."
        },

        {
            "title": "Eternal Sunshine of the Spotless Mind",
            "slug": "eternal-sunshine-spotless-mind",
            "thumbnail": "..."
        },

        {
            "title": "Sunshine and Oranges",
            "slug": "sunshine-oranges",
            "thumbnail": "..."
        },

        {
            "title": "Tears of the Sun",
            "slug": "tears-sun",
            "thumbnail": "..."
        },

        {
            "title": "Rising Sun",
            "slug": "rising-sun",
            "thumbnail": "..."
        }
    ]);
})();