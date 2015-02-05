require.config({
  baseUrl: 'js',
  paths: {
    'jquery': 'libs/jquery/dist/jquery',
    'lodash': 'libs/lodash/lodash'
  }
});
require(['app'], function (app) {
  console.log('start');
});