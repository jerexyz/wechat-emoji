(function() {
  'use strict';

  angular
    .module('gulpAngularEs5')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
