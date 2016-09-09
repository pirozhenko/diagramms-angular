angular.module("myDiagramm", ["chart.js"])
.controller("LineCtrl", function ($scope, $http) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };


  var config = {
  		headers: {
  			'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
		  	},
		  	data: {
		  		'x': 1,
		  		'y': 2
		  	}
  }
  $http.get('http://testtask.callway.com.ua/Help/Api/GET-api-chart', config)
  	.success(function(data, status, headers, config) {
  			console.log('yes');
  	})
  	.error(function(data, status, headers, config){
  			console.log(config);
  	});

  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});