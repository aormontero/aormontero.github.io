
var app = angular.module('app', []);

app.controller('appCont', function($scope,$interval){
   $('[data-toggle="popover"]').popover(); 

 $scope.sounds = [
    {soundID: 1, soundName: 'Alarma 1'},
    {soundID: 2, soundName: 'Alarma 2'}
  ];


  $scope.alarma = {
        status:0,
        alarm:'',
        hour: '',
        minutes:''


      };


$scope.disabAlarm= function(){
 if($scope.status==1){
  $("#clockp").removeClass('red');
  $("#pAlar").removeClass('hidden');
  document.getElementById('audio'+$scope.alarma.alarm).pause();
  $scope.alarma.hour='';
  $scope.alarma.minutes='';
  $scope.status=0;
 }
}
  $scope.sayHello= function(){
    alert("Hello World");
  };
  $scope.setAlarm= function(){
    
    $('#myAlarm').modal('hide');
  };
  $scope.tick = function() {
      $scope.clock = new Date();
        if(($scope.clock.getHours()==$scope.alarma.hour)&&($scope.clock.getMinutes()==$scope.alarma.minutes)&&$scope.alarma.status==0&&$scope.alarma.alarm!='')
          {
           
            $("#pAlar").addClass('hidden');
            $("#clockp").addClass('red');

            document.getElementById('audio'+$scope.alarma.alarm).play();
            $scope.status=1;
          }
  
  };

  $scope.tick();
  $interval($scope.tick, 1000);

});



