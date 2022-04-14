# Recipe app frontend

This is the frontend part of the 6th assignment for Fullstack Developer students at Chas academy.

It is deployed to be working together with an API built with Laravel which can be found [here](https://github.com/NovaBoman/recipe-app-be).

This application utilizes the [Spoonacular API](https://spoonacular.com/food-api) to retrieve recipe information.  
Users and user recipe lists are handled by the Laravel API mentioned above.

## Important note!

The API key used in developing this project, existing in the commit history is no longer usable.

To use this project with your own Spoonacular API key add your key to:

`src/app/services/recipe.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  // Add your API key here: 'apiKey=<your API key>'
  apiKey = 'apiKey=';
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to [localhost](http://localhost:4200/). The app will automatically reload if you change any of the source files.

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
