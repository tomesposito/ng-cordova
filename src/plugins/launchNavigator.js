// install   :      cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
// link      :      https://github.com/dpa99c/phonegap-launch-navigator

angular.module('ngCordova.plugins.launchNavigator', [])

  .factory('$cordovaLaunchNavigator', ['$q', function ($q) {

    return {
      navigate: function (destination, start, successFn, errorFn, options) {
        var q = $q.defer();
        launchnavigator.navigate(
          destination,
          start,
          function(){
            q.resolve();
          },
          function(error){
            q.reject(error);
          },
		  options);
        return q.promise;
      }
    };

  }]);
