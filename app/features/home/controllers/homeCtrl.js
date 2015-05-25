(function () {
    define([], function () {
        return ['$scope', 'homeSV',
            function ($scope, homeSV) {
                homeSV.events(
                    function onSuccess(data) {
                        $scope.events = data;
                    },
                    function onError() {

                    }
                );

                $scope.$apply();
            }
        ];
    });
})();