(function() {
    app.directive('navigation',['navigationItems', function (navigationItems) {
        'use strict';
        return  {
            replace: true,
            transclude: false,
            restrict: 'A',
            //scope: true,
            template: '<div id="navigationBar" class="clearfix">' +
                        '<div class="navigationItem" ng-repeat="navigationItem in navigationItems">' +
                            '<a ng-href="navigationItem.link">{{navigationItem.text}}</a>' +
                        '</div>' +
                        '<div><input type="text" /></div>' +
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
