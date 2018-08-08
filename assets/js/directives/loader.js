angular.module('loader', []).directive('loader', function () {
    return {
        template: `
        <div class="text-center">
        <div class="loader">
    <svg class="circular">
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
  </div>
  </div>`}
});
