// New Script //

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {

	$scope.loadNews = function () {

		var query = $('#input').val();

		var api = "http://api.nytimes.com/svc/topstories/v1/" + query + ".json?api-key=15a95b4fc0ed63adc8692cc3fe3eee5f:5:74516329";

		console.log(api);

		$scope.resultsList = [];

		$.getJSON(api, function (data) {
			console.log(data);

			var results = data.results;

			for(var i = 0; i < results.length; i++) {
				var result = results[i];

				var title = result.title;
				var summary = result.abstract;
				/*var img = result.multimedia[0].url;
				if (result.multimedia == null || result.multimedia == "" || result.multimedia == undefined) {
					continue;
				}*/
				var date =result.updated_date;

				$scope.resultsList.push({
					title: title,
					summary: summary,
				//	img: img,
					date: date
				});



			}

			$scope.$apply(function () {
				console.log($scope.resultsList);
			});

		});

	}

});
