(function() {

    "use strict";

    var app = angular.module("MultiSelect", []);

    app.controller("MainController", ["$scope", function($scope) {

        $scope.items = [
            {id:0, displayText:"Red", rgb: "#FF0000"},
            {id:1, displayText:"Orange", rgb: "#FFA500"},
            {id:2, displayText:"Yellow", rgb: "#FFFF00"},
            {id:3, displayText:"Green", rgb: "#008000"},
            {id:4, displayText:"Blue", rgb: "#0000FF"},
            {id:5, displayText:"Indigo", rgb: "#4B0082"},
            {id:6, displayText:"Violet", rgb: "#EE82EE"}
        ];

        $scope.selectedColours = [
            $scope.items[2],
            $scope.items[3]
        ];

        $scope.onClear = function() {
            $scope.selectedColours = [];
        };

        $scope.nothingIsSelected = function() {
            return $scope.selectedColours.length === 0;
        };
    }]);
}());
