angular.module('starter.services', [])
//http://49.205.70.139:8080/campuschamps/pub/student/login
.constant('constants',
	{
		host:"49.205.70.139",
		port:"8080",
		server:"http://49.205.70.139:8080/"
	}
)

.factory('API',function(constants){
	if(!window.device){
		window.device = {uuid:"d637a78bf03f7f"};
	}
	return {
		
		getAuthenticateUser:function(){
			return constants.server+"campuschamps/pub/student/login";
		}
		
	}
})

.factory('AjaxFactory', function($http){
	return {
		get:function(url){
			//throw 'Test Exception';
			var promise = $http.get(url);
			return promise;
		},
		post:function(url,obj){
			var promise = $http.post(url,obj);
			return promise;
		}
	}
})

.factory('SessionFactory', function($http){
	return {
		setUser:function(obj){
			localStorage.setItem("userObj",JSON.stringify(obj));
		},
		getUser:function(){
			var userStr = localStorage.getItem("userObj");
			if(userStr && userStr!=undefined &&  userStr!=""){
				try{
					return JSON.parse(userStr);
				}catch(e){
					return {};
				}
			}else
				return {};
		}
	}
})


.service('CommonServices', function($state,$q,API,$ionicLoading,AjaxFactory,SessionFactory){
	this.getCrashTraceeDetails = function($scope){
		$ionicLoading.show({
	      template: 'Loading stack trace...'
	    });
		var url = API.getCrashTraceeDetails();
		var promise = AjaxFactory.get(url);
		promise.then(function(resp){
			if(resp.data.status="success"){
				$scope.dataObj = resp.data.result;
				$scope.$apply();
			}else{
				alert(resp.data.message)
			}
			$ionicLoading.hide();
		},function(err){
			$ionicLoading.hide();
			alert(JSON.stringify(err));
			//throw JSON.stringify(err);
		});
	}
	this.authenticateUser = function($scope,$state){
		var url = API.getAuthenticateUser();
		console.log($scope.loginObj);
		var promise = AjaxFactory.post(url,$scope.loginObj);
		promise.then(function(resp){
			console.log(resp);
			localStorage.setItem("hasLogged","s");
			$scope.loginObj.userJson = JSON.stringify(resp.data)
			//return 1;
			DBUtils.createLogin($scope.loginObj,function(resp){
				if(resp.status=="success"){
					$state.go("app.playlists");
				}
			});
			
		},function(err){
			console.log(err);
		});
	}
});

