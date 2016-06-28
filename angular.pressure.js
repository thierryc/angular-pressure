// ---- Angular Pressure ----

// Copyright (c) 2016
// Licensed under the MIT Software License
//
// 
//

(function (angular, Pressure) {
  'use strict';

  // Checking to make sure Pressure and Angular are defined

  if (typeof angular === 'undefined') {
    throw Error("angular-pressure: AngularJS (angular) is undefined but is necessary.");
  }
  if (typeof Pressure === 'undefined') {
    throw Error("angular-pressure: PressureJS (Pressure) is undefined but is necessary.");
  }

  /**
   * Mapping of the pressure event names with the Angular attribute directive
   * names. Follows the form: <directiveName>:<eventName>.
   *
   * @type {Array}
   */
  var pressureTypes = [
    {
      directive: 'psForceTouchStart',
      event: 'start'
    },
    {
      directive: 'psForceTouchEnd',
      event: 'end'
    },
    {
      directive: 'psForceTouch',
      event: 'change'
    },
    {
      directive: 'psForceTouchStartDeepPress',
      event: 'startDeepPress'
    },
    {
      directive: 'psForceTouchEndDeepPress',
      event: 'endDeepPress'
    },
    {
      directive: 'psForceTouchChange',
      event: 'change'
    },
    {
      directive: 'psForceTouchUnsupported',
      event: 'unsupported'
    }
  ];
  

  // ---- Module Definition ----

  /**
   * @module psForceTouchEvents
   * @description Angular.js module for adding Pressure.js event listeners to HTML
   * elements using attribute directives
   * @requires angular
   * @requires pressure
   */
  var NAME = 'psForceTouchEvents';
  var psForceTouchEvents = angular.module('psForceTouchEvents', []);

  /**
   * Provides a common interface for configuring global manager and recognizer
   * options. Allows things like pressure forece / duration etc to be defaulted globally and
   * overridden on a per-directive basis as needed.
   *
   * @return {Object} functions to add manager and recognizer options.
   */
  psForceTouchEvents.provider(NAME, function(){
    var self = this;
    self.$get = function(){
      return {};
    };
  });

  /**
   * Iterates through each pressure type mapping and creates a directive for
   * each of the
   *
   * @param  {String} type Mapping in the form of <directiveName>:<eventName>
   * @return None
   */
     
  angular.forEach(pressureTypes, function (type) {
    
     psForceTouchEvents.directive(type.directive, ['$parse', '$window', NAME, function ($parse, $window, defaultEvents) {
        return {
          restrict: 'A',
          scope: false,
          link: function (scope, element, attrs) {

            // Check for Pressure and required functionality.
            // error if they arent found as unexpected behaviour otherwise            
            if (!Pressure || !$window.addEventListener) {
              throw Error(NAME+": window.Pressure or window.addEventListener not found, can't add event " + type.directive);
            }
                        
            // Obtain and wrap our handler function
            var handlerExpr = $parse(attrs[type.directive]).bind(null,scope);
            var handler = function (event) {
              
              // todo update arguments
              
              //console.log(arguments);
              scope.$apply(function(){
                handlerExpr({ '$event': event })();
              });
            };
            
            var settings = {};
            settings[type.event] = handler;
            
            var isElement = function(o){
              return (
                typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
              );
            };
            
            angular.forEach(element, function (el) {
              // todo get options
              Pressure.set(el, settings, {polyfill: true});
            });

            
          }
        };
      }]);
  });
})(angular, Pressure);