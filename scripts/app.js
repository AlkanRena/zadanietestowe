
var questionApp = angular.module('questionApp', []);

questionApp.controller('QuestionController', function QuestionListController($scope) {
    $scope.questions = [
        {
            name: 'Eva',
            photo: 'something',
            askedQuestion: 'Will insulin make my patient gain weight?'
        }, {
            name: 'Andrew',
            photo: 'something',
            askedQuestion: 'Vegan diet in diabetes treatment?'
        }, {
            name: 'Joseph',
            photo: 'something',
            askedQuestion: 'Vegan diet to stop diabetes progress'
        }
    ];
});