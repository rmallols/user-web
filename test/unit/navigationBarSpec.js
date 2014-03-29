describe('navigation bar directive', function() {

    var $scope,
        navigationBarElm, navigationBarItemElms, navigationBarLinkElms,
        forEach = angular.forEach;
    beforeEach(function () {
        module("ntvApp");
    });

    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope.$new();
        navigationBarElm = $compile("<div navigation-bar></div>")($scope);
        $scope.$digest();
        navigationBarItemElms = $('.navigationItem', navigationBarElm);
        navigationBarLinkElms = $('a.navigationLink', navigationBarItemElms);
    }));

    it('should have the proper Id on the root element', inject(function() {

        expect(navigationBarElm.attr('id')).toBe('navigationBar');
    }));

    it('should define the proper amount of navigation items', inject(function(navigationItems) {

        expect(navigationBarItemElms.length).toBe(navigationItems.length);
    }));

    it('should define the proper amount of navigation links', inject(function(navigationItems) {

        expect(navigationBarLinkElms.length).toBe(navigationItems.length);
    }));

    it('should define the proper link and text for each navigation item', inject(function(navigationItems) {
        forEach(navigationBarLinkElms, function(navigationBarLinkElm, index) {
            if(typeof navigationItems[index] == 'object') {
                expect($(navigationBarLinkElm).attr('href')).toBe(navigationItems[index].link);
                expect($(navigationBarLinkElm).text()).toBe(navigationItems[index].text);
            }
        })
    }));
});
