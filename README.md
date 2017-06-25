# Angular-Datetimepicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Instructions
This project is built for showing how to use angular-datetimepicker-component.

# Angular Datetimepicker Component

## Related Versions

Angular Datetimepicker Component is baseed on these plugins and libs(version):
- [angular(>= 2.0-release)](https://angular.io/)
- [jQuery](https://jquery.com/)
- [bootstrap](http://getbootstrap.com/)
- [bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)

## How to use
---
### Install
``` cmd
# npm install
npm install angular-datetimepicker-component --save

# if you have not installed jquery
npm install jquery --save

# if you have not install bootstrap
# to use datetimepicker, you need to import bootstrap css global
npm install bootstrap --save
```

### Use as component
1. Import component.

``` javascript
// import NgModule
import {NgModule} from '@angular/core';
// import DateTimePickerComponent
import {DateTimePickerComponent} from 'angular-select2-component';

@NgModule({
  // ...
  // declare components
  declarations: [DateTimePickerComponent]
})
export class YourModule {
}
```

2. Template.

``` html
<date-time-picker [(ngModel)]="your_prop" accuracy="hour" [startDate]="startDate" [endDate]="endDate" 
  [maxView]="maxView" [minView]="minView" [disabled]="isDisabled" (onChange)="change($event)" ></date-time-picker>
```

### Options
- `accuracy`: `string`
  - accuracy of date-time pick. 
  - min(default) | hour | day
- `startDate`: `string`
  - date range: start date
- `endDate`: `string`
  - date range: end date
- `maxView`: `string`
  - maxView: default 4
    - 0 or 'hour' for the hour view （hour view）
    - 1 or 'day' for the day view 0-24h （day view）
    - 2 or 'month' for month view (the default) （month view）
    - 3 or 'year' for the 12-month overview （year view）
    - 4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers.
- `minView`: `string`
- `disabled`: `boolean`
  - isDisabled: default false
- `onSelect`
  - callback when datetime selected