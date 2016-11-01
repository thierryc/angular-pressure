# Angular Pressure (angular-pressure)

A [Angular.js](https://angularjs.org/) module [angular-pressure](https://github.com/thierryc/angular-pressure) is that enables you to bind custom behavior to [pressure.js](http://pressurejs.com/) a JavaScript library that makes dealing with Apple’s Force Touch and 3D Touch simple.

Force Touch for new Macs and 3D Touch for the new iPhone 6s and 6s Plus, all bundled under one roof with a simple API that makes working with them.

Pressure gives you a handle on browsers that do and don’t support Force or 3D touch so you can have sensible fallbacks for users that don’t support it.

Sensible fallback polyfill is enabled by default.

## Installation

### Install using [Bower](http://bower.io/).

```bash 

$ bower install --save angular-pressure 

```

### Install using [NPM](https://www.npmjs.com/).

```shell 

$ npm install --save angular-pressure 

```

### CDN usage [jsdelivr](http://www.jsdelivr.com/?query=%2Fangular.pressure.

[https://cdn.jsdelivr.net/angular.pressure/2.0.1/angular.pressure.min.js](https://cdn.jsdelivr.net/angular.pressure/2.0.1/angular.pressure.min.js)

## Note

Add `psForceTouchEvents` to your app or module’s dependencies. This module is designed to work with Angular.js v1.3.0+, and pressure.js v2.0.0+.

A Note on Angular.js 2.0

At this time Angular Pressure has been tested with both Angular.js v1.3.x. Angular.js v2.0 presents massive changes to the framework. Until such time as this README indicates otherwise, it should be assumed that Angular Hammer **will not** be moving forward to Angular.js v2.0. I reserve the right to change my mind once the v2.0 spec come out and I am able to assess the transition path.

## Usage

The `psForceTouchEvents` module provides a series of attributes [directives](https://docs.angularjs.org/guide/directive) for hooking into the standard Pressure.js events.

### Standard Directives

The following list shows the Hammer event and corresponding Angular directive. Events on the top level are fired every time a gesture (pressure) of that type happens.

  - ps-force-touch-start: psForceTouchStart (event)
  
  this is called on Force Touch Start

  - ps-force-touch-end: psForceTouchEnd
  
  this is called on Force Touch End

  - ps-force-touch: psForceTouch (event, force)
  
  this is called every time there is a change in pressure force will always be a value from 0 to 1 on mobile and desktop

  - ps-force-touch-start-deep-press: psForceTouchStartDeepPress
  
  this is called on “force click”/“deep press”, aka once the force is greater than 0.5

  - ps-force-touch-end-deep-pres: psForceTouchEndDeepPress (event)
  
  this is called when the “force click”/“deep press” end

  - ps-force-touch-unsupported: psForceTouchUnsupported 
  
  this is called once there is a touch on the element and the device or browser does not support Force or 3D touch

Behaviors to be executed on an event are defined as values of the attribute. This value is parsed as a [Angular expression](https://docs.angularjs.org/guide/expression). Beware, invalid Angular expressions will throw an Angular error with those terrible call stacks.


####Example:

```html

<div id="target0" class="btn-test"
      ng-controller="psCtrl"
      ps-force-touch-start="onForceTouchStart($event)"
      ps-force-touch-end="onForceTouchEnd()"
      ps-force-touch="onForceTouch($event, force)"
      ps-force-touch-start-deep-press="onForceTouchStartDeepPress($event)"
      ps-force-touch-end-deep-press="count = count + 1"
      ps-force-touch-unsupported="onForceTouchUnsupported()"
      ps-force-touch-options="{polyfill: true, preventDefault: false}"
      ng-init="count=0;force=0"
      ><h2>{{eventType}}</h2>
      <p>default<br>Count: {{count}}<br>Force: {{force}}</p></div>

```

####Javascript:

```javascript

  /**
   * @psEvents
   */
  angular.module('psEvents', ['psForceTouchEvents'])
    .controller('psCtrl', function ($scope) {
      $scope.eventType = "No events yet";
      $scope.force = 0;
      $scope.forceG = 0;
      
      $scope.onForceTouchStart = function(event) {
        // on Force Touch Start
        $scope.eventType = event.type;
      };
      
      $scope.onForceTouchEnd = function(event) {
        // on Force Touch End
      };
      
      // change
      $scope.onForceTouch = function(event, force) {
        // on Force Touch
        $scope.force = Pressure.map(force, 0, 1, 0, 100).toFixed(0);
        $scope.forceG = Pressure.map(force, 0, 1, 0, 445.7).toFixed(2) + 'g'; // force (simulation) Gram. 
        event.element.css('backgroundColor', "rgb(" + parseInt(Pressure.map(force, 0, 1, 255, 0)) + ",200," + parseInt(Pressure.map(force, 0, 1, 0, 255)) +")");
        event.element.css('width', Pressure.map(force, 0, 1, 500, 600) + "px");
      };
      
      $scope.onForceTouchStartDeepPress = function(event) {
        // on Force Touch Start Deep Press
        $scope.eventType = event.type;
      };
      
      $scope.onForceTouchEndDeepPress = function() {
        // on Force Touch End Deep Press
        $scope.eventType = event.type;
      };
      
      $scope.onForceTouchUnsupported = function(event) {
        // on Force Touch Unsupported
      };
    
    });
    
```


### angular-pressure Options

```html

<div id="target0" class="btn-test"
      ng-controller="psCtrl"
      ps-force-touch="onForceTouch($event, force)"
      
      ps-force-touch-options="{polyfill: true, preventDefault: false}"
      
      ng-init="count=0;force=0"
      ><h2>{{eventType}}</h2>
      <p>default<br>Count: {{count}}<br>Force: {{force}}</p></div>

```

####examples:

``` 

{
  polyfill: true,
  polyfillSpeed: 1000,
  preventDefault: true,
  only: null
}

```

## Demo

_SOON_


```

> gunt 

open http://0.0.0.0:3000/raw/index.html

```



## Other Interesting Links about 3D Touch or Pressure.js

- [cordova-plugin-3dtouch](https://github.com/EddyVerbruggen/cordova-plugin-3dtouch) 
- [pressure.js](http://pressurejs.com/)
