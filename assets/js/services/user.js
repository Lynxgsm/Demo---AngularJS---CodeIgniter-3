angular.module('userFactory', []).factory('userFactory', function ($rootScope, $http, $httpParamSerializer) {
    var urlBase = "./API/user";
    $rootScope.urlBase = urlBase;
    var dataFactory = {};
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
        }
    };

    dataFactory.insert = function (nom, prenom, date_naissance) {
        var data = $httpParamSerializer({
            "nom": nom,
            "prenom": prenom,
            "date_naissance": date_naissance
        });

        var url = urlBase + "/insert";

        return $http.post(url, data, config);
    };

    dataFactory.get = function (id) {
        var url = urlBase + "/get?id=" + id;

        return $http.post(url, data, config);
    };

    dataFactory.getAll = function (id) {
        var url = urlBase + "/getAll";

        return $http.get(url);
    };

    dataFactory.update = function (id, nom, prenom, date_naissance) {
        var data = $httpParamSerializer({
            "id": id,
            "nom": nom,
            "prenom": prenom,
            "date_naissance": date_naissance
        });

        var url = urlBase + "/update";

        return $http.post(url, data, config);
    };

    dataFactory.delete = function (id) {
        var data = $httpParamSerializer({
            "id": id
        });

        var url = urlBase + "/delete";

        return $http.post(url, data, config);
    };

    return dataFactory;
});