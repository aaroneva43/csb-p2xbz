(function () {
    var app = angular.module('Demo', ['AxelSoft']);

    app.controller('DemoController', ['$scope', '$timeout', '$q', function ($scope, $timeout, $q) {
        $scope.nestedItemsLevel1 = [{value: 1, label: 'item1'}, {value: 2, label: 'item2'}];
        $scope.level1 = $scope.nestedItemsLevel1[0].label;
    }]);

})();