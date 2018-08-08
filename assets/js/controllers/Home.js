angular.module('HomeController', []).controller('HomeController', function ($rootScope, $scope, userFactory, $window) {
    $scope.showInfo = false;
    $scope.showInsert = false;
    $scope.showUpdate = false;
    $scope.operation_pending = false;
    $scope.edit_pending = false;

    var options = {
        minDate: new Date(1930, 1, 1),
        format: "yyyy-mm-dd"
    };

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);

    userFactory.getAll()
        .then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });

    $scope.init_update = function (id, nom, prenom, date_naissance) {
        $scope.id = id;
        $scope.nom_update = nom;
        $scope.prenom_update = prenom;
        document.querySelector('#date_naissance_update').value = date_naissance;
        $scope.showUpdate = true;
        $scope.edit_pending = true;
    };

    $scope.init_delete = function (id) {
        $scope.id = id;
        var modal = document.querySelector('#delete_modal');
        var init = M.Modal.init(modal);
        init.open();
    };

    $scope.insert = function (nom, prenom) {
        var date_naissance = document.querySelector('#date_naissance');
        userFactory.insert(nom, prenom, date_naissance.value)
            .then(function (response) {
                if (response.data.result) {
                    $window.location.reload();
                }
            }, function (error) {
                console.log(error);
            });
    };

    $scope.update = function () {
        userFactory.update($scope.id, document.querySelector("#nom_update").value, document.querySelector("#prenom_update").value, document.querySelector('#date_naissance_update').value)
            .then(function (response) {
                if (response.data.result) {
                    $window.location.reload();
                }
            }, function (error) {
                console.log(error);
            });
    };

    $scope.delete = function () {
        userFactory.delete($scope.id)
            .then(function (response) {
                if (response.data.result) {
                    $window.location.reload();
                }
            }, function (error) {
                console.log(error);
            });
    };
});