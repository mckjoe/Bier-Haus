# TapRoom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## specs
behavior | input | output
--------|--------|-------
create keg objects automatically | hard coded | beer name, company name, abv, etc.
display kegs on screen for user | click | website will display list of available kegs
edit current beer | click on edit button | recieve form to edit the kegs properties
create button to add new keg to list |button click| form to add new beer appears
add ability to remove pints from the keg | click | pints go from 124 to 123 available
color beer based on price| $5.00 | green
change appearence based on abv | if above 12% | red border
