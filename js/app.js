var app = angular.module('myApp', []);
app.controller('MainController', function($scope){
    $scope.skillsA = [{
        title: 'jQuery',
        container: 'jquery-container',
        content: 'jquery'
    },{
        title: 'Javascript',
        container: 'js-container',
        content: 'js'
    },{
        title: 'Java',
        container: 'java-container',
        content: 'java'
    },{
        title: 'PHP',
        container: 'php-container',
        content: 'php'
    },{
        title: 'HTML|CSS',
        container: 'html-container',
        content: 'html'
    }];
    $scope.skillsB = [{
        title: 'MySQL',
        container: 'mysql-container',
        content: 'mysql'
    },{
        title: 'Android',
        container: 'android-container',
        content: 'android'
    },{
        title: 'Angular JS',
        container: 'angular-container',
        content: 'angular'
    }];
    $scope.skillsC = [{
        title: 'Photoshop',
        container: 'ps-container',
        content: 'ps'
    },{
        title: 'GIT',
        container: 'git-container',
        content: 'git'
    },{
        title: 'SASS',
        container: 'sass-container',
        content: 'sass'
    },{
        title: 'Illustrator',
        container: 'ai-container',
        content: 'ai'
    }];
    $scope.mSkills = [{
        container: 'html-mobile'
    },{
        container: 'sass-mobile'
    },{
        container: 'jquery-mobile'
    },{
        container: 'js-mobile'
    },{
        container: 'angular-mobile'
    },{
        container: 'php-mobile'
    },{
        container: 'mysql-mobile'
    },{
        container: 'git-mobile'
    },{
        container: 'ps-mobile'
    },{
        container: 'ai-mobile'
    },{
        container: 'android-mobile'
    },{
        container: 'java-mobile'
    }];
});
