# ngx-dayjs

dayjs pipes for Angular

[![Build Status](https://travis-ci.org/ljmerza/ngx-dayjs.svg?branch=master)](https://travis-ci.org/ljmerza/ngx-dayjs)

Installation
------------

`npm install --save ngx-dayjs`

### For System.js users:

First you need to install dayjs:

`npm install dayjs --save`

Don't forget to update your systemjs.config.js:

```
packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            'dayjs': {
                main: './dayjs.js',
                defaultExtension: 'js'
            },
            'ngx-dayjs': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
```

Usage
-----

Import `dayjsModule` into your app's modules:

``` typescript
import { dayjsModule } from 'ngx-dayjs';

@NgModule({
  imports: [
    dayjsModule
  ]
})
```

This makes all the `ngx-dayjs` pipes available for use in your app components.

Available pipes
---------------

## amFromUnix pipe

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{ (1456263980 | amFromUnix) | amDateFormat:'hh:mmA'}}
  `
})
```

Prints `Last updated: 01:46PM`

## amParse pipe

Parses a custom-formatted date into a dayjs object that can be used with the other pipes.

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{'24/01/2014' | amParse:'DD/MM/YYYY' | amDateFormat:'LL'}}
  `
})
```

Prints `Last updated: January 24, 2016`

## amDifference pipe

``` typescript
@Component({
  selector: 'app',
  template: `
    Expiration: {{nextDay | amDifference: today :'days' : true}} days
  `
})
```
Prints `Expiration: 1 day`

## amAdd and amSubtract pipes

Use these pipes to perform date arithmetics. See [dayjsjs docs](http://dayjsjs.com/docs/#/manipulating/add/) for details.

``` typescript
@Component({
  selector: 'app',
  template: `
    Expiration: {{'2017-03-17T16:55:00.000+01:00' | amAdd: 2 : 'hours' | amDateFormat: 'YYYY-MM-DD HH:mm'}}
  `
})
```
Prints `Expiration: 2017-03-17 18:55`

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{'2017-03-17T16:55:00.000+01:00' | amSubtract: 5 : 'years' | amDateFormat: 'YYYY-MM-DD HH:mm'}}
  `
})
```
Prints `Last updated: 2012-03-17 16:55`


Complete Example
----------------

``` typescript
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { dayjsModule } from 'ngx-dayjs';

@Component({
  selector: 'app',
  template: `
    Last updated: <b>{{myDate | amSubtract:timeLeft}}</b>
  `
})
export class AppComponent {
  myDate: Date;

  constructor() {
    this.myDate = new Date();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    dayjsModule
  ],
  declarations: [ AppComponent ]
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```