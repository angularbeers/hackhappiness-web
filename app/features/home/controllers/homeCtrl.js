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

                homeSV.loadHone(
                    function onSuccess(data) {
                        $scope.homeText = data;
                    },
                    function onError() {

                    }
                );

                homeSV.people(
                    function onSuccess(data) {
                        $scope.people = data;
                    },
                    function onError() {

                    }
                );

                $scope.$apply();
            }
        ];
    });
})();