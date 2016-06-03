var app = angular.module("alarmClock", [])
	.controller('MainController', ['$scope', '$interval', 
		function($scope, $interval) {
		
			$scope.currentTime = { time : new Date() };
			
			$scope.alarmed = false;

			function startAlarm() {
				console.log('Alarmed');
			}

			function stopAlarm() {
				console.log('Not Alarmed!');
			}
		
			$scope.getTime = function() {
				$scope.currentTime = { time : new Date() };
			}
			
			$interval( function(){
				$scope.getTime();
				angular.forEach($scope.alarms, function(alarm, index){
					if(alarm.time <= $scope.currentTime.time) {
						alarm.alarmed = true;
						$scope.alarmed = true;
						startAlarm();
						return;
					}
				});
			}, 1000 ); 
		
			$scope.alarms = [];

			$scope.deleteAlarm = function(index) {
				$scope.alarms.splice(index, 1);
				alarm.alarmed = false;
				$scope.alarmed = false;
				stopAlarm();
			}
			
			$scope.setAlarm = function() {
				$scope.alarms.push({time: $scope.alarmTime, alarmed: false});
				$scope.alarmTime = "";
			}
		
		}
	]);