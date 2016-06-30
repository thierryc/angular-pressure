# angular-pressure

A [Angular.js](https://angularjs.org/) module [angular-pressure](https://github.com/thierryc/angular-pressure) is that enables you to bind custom behavior to [pressure.js](http://pressurejs.com/) a JavaScript library that makes dealing with Apple's Force Touch and 3D Touch simple.

Force Touch for new Macs and 3D Touch for the new iPhone 6s and 6s Plus, all bundled under one roof with a simple API that makes working with them.

Pressure gives you a handle on browsers that do and don't support Force or 3D touch so you can have sensible fallbacks for users that don't support it.

For the moment this sensible fallback polyfill is enabled.

## Installation

Install using [Bower](http://bower.io/).


```bash $ bower install --save thierryc-angular-pressure ```

Install using [NPM](https://www.npmjs.com/).


```shell $ npm install --save angular-pressure ```

Add `psForceTouchEvents` to your app or module's dependencies. This module is designed to work with Angular.js v1.3.0+, and pressure.js v1.0.0+.

A Note on Angular.js 2.0

At this time Angular Pressure has been tested with both Angular.js v1.3.x. Angular.js v2.0 presents massive changes to the framework. Until such time as this README indicates otherwise, it should be assumed that Angular Hammer **will not** be moving forward to Angular.js v2.0. I reserve the right to change my mind once the v2.0 spec come out and I am able to assess the transition path.

## Usage

The `psForceTouchEvents` module provides a series of attributes [directives](https://docs.angularjs.org/guide/directive) for hooking into the standard Pressure.js events.

### Standard Directives

The following list shows the Hammer event and corresponding Angular directive. Events on the top level are fired every time a gesture (pressure) of that type happens.

- ps-force-touch-start: psForceTouchStart (event)
- ps-force-touch-end: psForceTouchEnd
- ps-force-touch: psForceTouch event is trigger when the pression change (event, force)
- ps-force-touch-start-deep-press: psForceTouchStartDeepPress
- ps-force-touch-end-deep-pres: psForceTouchEndDeepPress
- ps-force-touch-unsupported: psForceTouchUnsupported

Behaviors to be executed on an event are defined as values of the attribute. This value is parsed as a [Angular expression](https://docs.angularjs.org/guide/expression). Beware, invalid Angular expressions will throw an Angular error with those terrible call stacks.

Example Definition:

```html

```

Example Definition:

_SOON_

```html

```

### angular-pressure Options

_SOON_

## Demo

_SOON_
