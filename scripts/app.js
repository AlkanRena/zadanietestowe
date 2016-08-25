
var questionApp = angular.module('questionApp', []);

questionApp.controller('QuestionController', function QuestionListController($scope) {

    $scope.userProfile = [
        {
            profileid: '1',
            photo: 'images/evaPhoto.png',
            name: 'Eva',
            signUpDate: '1',
            lastseen: '1',
            activityLevel: '2',
            peers: '23',
            discussions: '29',
            findings: '19',
            questions: '10'
        },
        {
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            name: 'Andrew',
            signUpDate: '6',
            lastseen: '4',
            activityLevel: '1',
            peers: '50',
            discussions: '19',
            findings: '59',
            questions: '7'
        },
        {
            profileid: '3',
            photo: 'images/josephPhoto.png',
            name: 'Eva',
            signUpDate: '1',
            lastseen: '1',
            activityLevel: '2',
            peers: '23',
            discussions: '29',
            findings: '19',
            questions: '10'
        },
        {
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            name: 'Andrew',
            signUpDate: '6',
            lastseen: '4',
            activityLevel: '1',
            peers: '50',
            discussions: '19',
            findings: '59',
            questions: '7'
        },
        {
            profileid: '5',
            photo: 'images/waweruPhoto.png',
            name: 'Eva',
            signUpDate: '1',
            lastseen: '1',
            activityLevel: '2',
            peers: '23',
            discussions: '29',
            findings: '19',
            questions: '10'
        },
        {
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            name: 'Andrew',
            signUpDate: '6',
            lastseen: '4',
            activityLevel: '1',
            peers: '50',
            discussions: '19',
            findings: '59',
            questions: '7'
        }
    ];

    $scope.questions = [
        {
            profileid: '1',
            name: 'Eva',
            photo: 'images/evaPhoto.png',
            askedQuestion: 'Will insulin make my patient gain weight?',
            id: '1'
        }, {
            profileid: '2',
            name: 'Andrew',
            photo: 'images/andrewPhoto.png',
            askedQuestion: 'Vegan diet in diabetes treatment?',
            id: '2'
        }, {
            profileid: '3',
            name: 'Joseph',
            photo: 'images/josephPhoto.png',
            askedQuestion: 'Vegan diet to stop diabetes progress',
            id: '3'
        }
    ];

    $scope.commentAndAnswear = [
        {
            id: '1',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'ANSWERED'
        },
        {
            id: '3',
            profileid: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '2',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            profileid: '5',
            photo: 'images/waweruPhoto.png',
            type: 'ANSWERED'
        },
        {
            id: '3',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '2',
            profileid: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            profileid: '1',
            photo: 'images/evaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'ANSWERED'
        },
        {
            id: '3',
            profileid: '5',
            photo: 'images/waweruPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '2',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '1',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'COMMENTED'
        },
        {
            id: '3',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED'
        }
    ];

    $scope.showProfile = true;

    $scope.showProfile2 = true;
});

questionApp.directive('questionBoxField', function () {
return {
    restrict: 'E',
    templateUrl: 'htmlDirectives/questionBoxResult.html'
};
});

questionApp.directive('profileIdPage', function(){
return{
    restrict: 'E',
    templateUrl: 'htmlDirectives/userProfile.html'
}
});

questionApp.directive('profileIdPage2', function(){
    return{
        restrict: 'E',
        templateUrl: 'htmlDirectives/userProfileCandA.html'
    }
});