(function() {

	angular
		.module('TPapp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($state,$location, projectSrv) {
		var mainVm = this;
		console.log('Main page loaded correctly.');

		// Public functions/data
		mainVm.toMap = toMap;
		mainVm.projectSrv = projectSrv;

		function toMap() {
			console.log('This works');
			$location.path('/map');
		}

	}

})();