
var questionApp = angular.module('questionApp', []);

questionApp.controller('QuestionController', function QuestionListController($scope) {
    $scope.questions = [
        {
            name: 'Eva',
            photo: 'images/evaPhoto.png',
            askedQuestion: 'Will insulin make my patient gain weight?'
        }, {
            name: 'Andrew',
            photo: 'images/andrewPhoto.png',
            askedQuestion: 'Vegan diet in diabetes treatment?'
        }, {
            name: 'Joseph',
            photo: 'images/josephPhoto.png',
            askedQuestion: 'Vegan diet to stop diabetes progress'
        }
    ];
    $scope.CommentAndAnswear = [
        {
            name: '',
            photo: '',
            type: ''
        }
    ]
});

questionApp.directive('questionBoxField', function () {
return {
    restrict: 'E',
    templateUrl: 'htmlDirectives/questionBoxResult.html'
}

});