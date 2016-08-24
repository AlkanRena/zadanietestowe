
var questionApp = angular.module('questionApp', []);

questionApp.controller('QuestionController', function QuestionListController($scope) {

    $scope.userProfileLunch = function(lunch){
        return {
            restrict: 'E',
            replace: true,
            template: 'htmlDirectives/userProfile.html'
        }
    };

    $scope.userProfile = [
        {
            profileid: '1',
            photo: '',
            name: 'Eva',
            signUpDate: '1',
            lastseen: '1',
            activityLevel: '2',
            peers: '23',
            discussions: '29',
            findings: '19',
            questions: '10'
        }
    ];

    $scope.questions = [
        {
            name: 'Eva',
            photo: 'images/evaPhoto.png',
            askedQuestion: 'Will insulin make my patient gain weight?',
            id: '1'
        }, {
            name: 'Andrew',
            photo: 'images/andrewPhoto.png',
            askedQuestion: 'Vegan diet in diabetes treatment?',
            id: '2'
        }, {
            name: 'Joseph',
            photo: 'images/josephPhoto.png',
            askedQuestion: 'Vegan diet to stop diabetes progress',
            id: '3'
        }
    ];
    

    $scope.CommentAndAnswear = [
        {
            id: '1',
            photo: 'images/josephPhoto.png',
            type: 'ANSWERED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '2',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            photo: 'images/josephPhoto.png',
            type: 'ANSWERED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '2',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            photo: 'images/josephPhoto.png',
            type: 'ANSWERED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '2',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        }
    ]
});

questionApp.directive('questionBoxField', function () {
return {
    restrict: 'E',
    templateUrl: 'htmlDirectives/questionBoxResult.html'
}


});

