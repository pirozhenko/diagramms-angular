angular.module("myDiagramm", ["chart.js"])
.controller("LineCtrl", function ($scope, $http) {

  $scope.labels = [];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [],
    []
  ];
  $scope.regexp = /\d+/g;
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
 	$scope.showHide = false;
 	$scope.show = function() {
  	$scope.showHide = !$scope.showHide;
  };

  // var data = {
  //  {x: 50, y: 50}
  // };
  // var config = {
  //    header: {
  //      'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==',
  //      'Access-Control-Allow-Origin': '*',
    //    'Content-Type': 'application/json'
    //    }
  // };
  $http.get('diagrams.json')
    .success(function(res) {
      res.forEach(function(item) {
        $scope.coord = item.data;
        $scope.data[0].push($scope.coord.x)
        $scope.data[1].push($scope.coord.y)
        $scope.label = item.label;

        $scope.labels.push($scope.label)
      })
    });

  $scope.addItem = function() {
    $scope.data[0].push($scope.coordX);
    $scope.data[1].push($scope.coordY);
    $scope.labels.push($scope.newLabel);
    $scope.coordX = '';
    $scope.coordY = '';
    $scope.newLabel = '';
  };

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