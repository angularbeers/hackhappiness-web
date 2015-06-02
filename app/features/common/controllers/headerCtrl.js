(function () {
    define([], function () {
        return ['$scope',
            function ($scope) {

                $scope.goToSection = function (section) {
                    $('html, body').animate({
                        scrollTop: $("." + section).offset().top - 55
                    }, 500);
                };

                $scope.$apply();
            }
        ];
    });
})();