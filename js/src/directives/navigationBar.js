(function() {
    app.directive('navigationBar',['navigationItems', function (navigationItems) {
        'use strict';
        return  {
            replace: true,
            transclude: false,
            restrict: 'A',
            scope: true,
            template: '<div id="navigationBar">' +
                        '<div class="navigationItem" ng-repeat="navigationItem in navigationItems">' +
                            '<a class="navigationLink" href="{{navigationItem.link}}">{{navigationItem.text}}</a>' +
                        '</div>' +
                        '<div search-box class="searchBox"></div>' +
                      '</div>',
            link: function (scope) {
                scope.navigationItems = navigationItems;
            }
        };
    }]);

    app.constant('navigationItems', [
        {
            text: 'HOME',
            link: '#'
        },
        {
            text: 'NEW RELEASES',
            link: '#'
        },
        {
            text: 'COLLECTIONS',
            link: '#'
        },
        {
            text: 'GENRES',
            link: '#'
        },
        {
            text: 'MOVIE CHANNELS',
            link: '#'
        },
        {
            text: 'NEWS',
            link: '#'
        },
        {
            text: 'MY MOVIES',
            link: '#'
        }
    ]);

})();
