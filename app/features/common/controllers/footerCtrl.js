(function () {
    define([], function () {
        return ['$scope', 'commonSV',
            function ($scope, commonSV) {

                commonSV.sponsor(
                    function onSuccess(data) {
                        $scope.sponsors = data;
                    },
                    function onError() {

                    }
                );

                $scope.sponsorIMG = function (sponsor) {
                    return utils.getImgStatic('image', sponsor.image);
                };

                $scope.$apply();
            }
        ];
    });
})();