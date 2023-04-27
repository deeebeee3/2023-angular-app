# 2023AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# My Notes:

`ng generate --help`

`ng generate component books`

Component automatically imported into AppModule:

declarations: [AppComponent, BooksComponent],

---

## Property Binding

Interpolation not recommended everywhere.

Use Property Binding whenever possible for the properties or attributes for any html.

---

## Pipes

Look at the Angular api

https://angular.io/api/core/PipeTransform

---

## Sharing data between child and parent directives and components

### Passing data / props from Parent to Child...

Create new component called book (we already have the books component)

`ng generate component book`

It will be automatically registered in the App Module:

```js
declarations: [AppComponent, BooksComponent, BookComponent],
```

https://angular.io/guide/inputs-outputs

Similar to passing props to Child component from Parent component like in React.

We need to use the `@Input` decorator on the child component `book` variable
to mark it as a incoming / accepting a prop.

---

## Passing data from Child to Parent

https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component
