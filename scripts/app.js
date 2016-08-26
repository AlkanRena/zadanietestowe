
var questionApp = angular.module('questionApp', []);

questionApp.controller('QuestionController', function QuestionListController($scope) {

    $scope.userProfile = [
        {
            profileid: '1',
            photo: 'images/evaPhoto.png',
            name: 'Eva',
            signUpDate: '3',
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
            signUpDate: '4',
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
            name: 'Joseph',
            signUpDate: '4',
            lastseen: '3',
            activityLevel: '2',
            peers: '20',
            discussions: '39',
            findings: '49',
            questions: '17'
        },
        {
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            name: 'Halima',
            signUpDate: '3',
            lastseen: '2',
            activityLevel: '1',
            peers: '5',
            discussions: '9',
            findings: '9',
            questions: '4'
        },
        {
            profileid: '5',
            photo: 'images/waweruPhoto.png',
            name: 'Waweru',
            signUpDate: '4',
            lastseen: '6',
            activityLevel: '1',
            peers: '6',
            discussions: '9',
            findings: '2',
            questions: '2'
        },
        {
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            name: 'Patricia',
            signUpDate: '4',
            lastseen: '2',
            activityLevel: '3',
            peers: '70',
            discussions: '35',
            findings: '56',
            questions: '10'
        }
    ];

    $scope.questions = [
        {
            profileid: '1',
            name: 'Eva',
            photo: 'images/evaPhoto.png',
            askedQuestion: 'Will insulin make my patient gain weight?',
            askedQuestionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc ipsum, a bibendum mi porttitor ut. Phasellus at sem nec augue elementum eleifend eget vel dolor. Vestibulum gravida est quis nisl rutrum porttitor eget sit amet mauris. Donec in ornare nulla. Nam dignissim tincidunt vehicula. Aliquam est magna, ullamcorper id ante at, sodales malesuada dolor. Nullam id dolor aliquam, hendrerit mauris sit amet, placerat eros. Aenean facilisis neque dapibus condimentum viverra. Proin pharetra leo at nisl dignissim, id feugiat diam luctus. Nunc tempor odio pretium, euismod neque sed, porttitor leo. Aenean porta lorem nibh, ac congue sem semper non. ',
            id: '1'
        }, {
            profileid: '2',
            name: 'Andrew',
            photo: 'images/andrewPhoto.png',
            askedQuestion: 'Vegan diet in diabetes treatment?',
            askedQuestionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc ipsum, a bibendum mi porttitor ut. Phasellus at sem nec augue elementum eleifend eget vel dolor. Vestibulum gravida est quis nisl rutrum porttitor eget sit amet mauris. Donec in ornare nulla. Nam dignissim tincidunt vehicula. Aliquam est magna, ullamcorper id ante at, sodales malesuada dolor. Nullam id dolor aliquam, hendrerit mauris sit amet, placerat eros. Aenean facilisis neque dapibus condimentum viverra. Proin pharetra leo at nisl dignissim, id feugiat diam luctus. Nunc tempor odio pretium, euismod neque sed, porttitor leo. Aenean porta lorem nibh, ac congue sem semper non. ',
            id: '2'
        }, {
            profileid: '3',
            name: 'Joseph',
            photo: 'images/josephPhoto.png',
            askedQuestion: 'Vegan diet to stop diabetes progress',
            askedQuestionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc ipsum, a bibendum mi porttitor ut. Phasellus at sem nec augue elementum eleifend eget vel dolor. Vestibulum gravida est quis nisl rutrum porttitor eget sit amet mauris. Donec in ornare nulla. Nam dignissim tincidunt vehicula. Aliquam est magna, ullamcorper id ante at, sodales malesuada dolor. Nullam id dolor aliquam, hendrerit mauris sit amet, placerat eros. Aenean facilisis neque dapibus condimentum viverra. Proin pharetra leo at nisl dignissim, id feugiat diam luctus. Nunc tempor odio pretium, euismod neque sed, porttitor leo. Aenean porta lorem nibh, ac congue sem semper non. ',
            id: '3'
        }
    ];

    $scope.commentAndAnswear = [
        {
            id: '1',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'ANSWERED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: '3',
            profileid: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '2',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '1',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '1',
            profileid: '5',
            photo: 'images/waweruPhoto.png',
            type: 'ANSWERED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '2',
            profileid: '3',
            photo: 'images/josephPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '1',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '1',
            photo: 'images/evaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '1',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'ANSWERED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '5',
            photo: 'images/waweruPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '2',
            profileid: '4',
            photo: 'images/halimaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '1',
            profileid: '2',
            photo: 'images/andrewPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
            id: '3',
            profileid: '6',
            photo: 'images/patriciaPhoto.png',
            type: 'COMMENTED',
            date: '',
            votes: '',
            messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        }
    ];

    $scope.showProfile = true;

    $scope.showProfile2 = true;

    $scope.showmoreactivite = true;
    
    $scope.singleQuestion = true;
    //     if () {
    //
    //     }
    // else {
    //         false
    //     }

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

questionApp.directive('singleQuestion', function(){
    return{
        restrict: 'E',
        templateUrl: 'htmlDirectives/singleQuestionBase.html'
    }
});