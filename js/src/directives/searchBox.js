(function() {
    app.directive('searchBox', ['moviesSearch', function (moviesSearch) {
        'use strict';
        return  {
            replace: true,
            transclude: false,
            restrict: 'A',
            scope: true,
            template:   '<div class="searchBox">' +
                            '<input type="text" ng-model="searchText" ng-change="onChangedSearch()" placeholder="Start typing to get movies..." autofocus />' +
                            '<div class="resultsPanel" ng-show="isResultsPanelVisible">' +
                                '<div class="viewFilter">' +
                                    '<h3>MOVIES</h3>' +
                                    '<a href="#">VIEW ALL</a>' +
                                '</div>' +
                                '<div class="moviesPreview">' +
                                    '<a class="moviePreview clearfix" ng-repeat="movie in movies" ng-show="movies.length > 0" ng-click="updateView(movie)">' +
                                        '<img src="img/movieGenericThumbnail.png" />' +
                                        '<span class="title">{{movie.title}}</span>' +
                                    '</a>' +
                                    '<div class="noResults" ng-show="movies.length == 0">No results found</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>',
            link: function link(scope) {

                scope.onChangedSearch = function() {

                    if(scope.searchText.length >= 3) {
                        scope.isResultsPanelVisible = true;
                        moviesSearch.execute(scope.searchText)
                            .then(onExecutedSearchSuccess)
                            .then(onExecutedSearchFailure);
                    } else {
                        scope.isResultsPanelVisible = false;
                    }
                };

                scope.updateView = function(movie) {
                    //WARNING!!!! This is an antipattern because it couples the current directive with the index.html file
                    //Clean solutions (ng-view, ng-include...) cannot be applied without any real server.
                    //Please take a look to #2 for more details about this.
                    scope.$root.detailView = '<div><h1>' + movie.title + '</h1></div>'
                };

                /** Private methods **/
                function onExecutedSearchSuccess(movies) {

                    scope.movies = movies;
                }

                function onExecutedSearchFailure() {

                    //Add error handling here...
                }
                /** End of private methods **/
            }
        };
    }]);
})();
