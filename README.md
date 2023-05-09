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

We need to use the `@Output` decorator to define our event emitter...

```js
@Output() bookEmitter = new EventEmitter<Book>();
...
this.bookEmitter.emit(this.book);
```

## Listen for the emitted event

---

## LifeCycle Hooks

**ngOnChanges()**
**ngOnInit()**
ngDoCheck()
ngAfterContentInit()
ngAfterContentChecked()
ngAfterViewInit()
ngAfterViewChecked()
**ngOnDestroy()**

---

## Services

`ng generate service books/books`

## Custom Module

```js
@Injectable({
  providedIn: 'root',
})
```

Here we were providing our service globally in the app...

```js
  providers: [BooksService],
```

Doing the above in the app.module.ts is the same thing (providing our service globally)...

We will create a Books module and import the service there...

`ng generate module books`

---

## State Management (by Service)

`ng generate service services/cart`

`ng generate component cart`

---

## Angular Routing

https://angular.io/guide/router

## Styling with TailWind

https://tailwindcss.com/docs/guides/angular

`npm install -D tailwindcss postcss autoprefixer`

Create a tailwind config file:
`npx tailwindcss init`

RESTART THE APP FOR THE ABOVE TO APPLY

so it can build and include all the tailwind css stuff

---

## AUTHENTICATION SECTION

`ng generate module auth`
`ng generate component auth/login`
`ng generate component auth/register`

### Angular Forms

https://angular.io/guide/forms-overview

---

## Firebase

### The below instructions come from firebase when you create your app:

`npm install firebase`

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "xxxx-xxxx-xxxxxx-xxxxx",
  authDomain: "angular-14-course-xxxx.firebaseapp.com",
  projectId: "angular-14-course-xxxx",
  storageBucket: "angular-14-course-xxxx.appspot.com",
  messagingSenderId: "xxxxxxxx",
  appId: "1:xxxx:web:xxxxxxx",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

### Install the CLI:

`npm install -g firebase-tools`

### Deploy to Firebase Hosting

`firebase login`

`firebase init`

`firebase deploy`

After deploying, view your app at angular-14-course-8f284.web.app

### Authentication

Enable email and password authentication in firebase

then:

https://firebase.google.com/docs?hl=en&authuser=0

search for build > authentication:

https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0

https://console.firebase.google.com/project/angular-14-course-8f284/authentication/users

### Logout the user

https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0

```js
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

---

## Check for Auth in our Angular App

`ng generate service auth/auth`
