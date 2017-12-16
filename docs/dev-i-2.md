# Development - Iteration 2

## Add boiler plate AngularJS app

### AngularJS "skeleton" directories and files

- Create new directory```public/demoApp```
- Create a bare minimal app file ```public/demoApp/app.js``` 
- Specify <% %> as variable tag in AngularJS template, instead of the default {{ }}
- Create a bare minimal controllers file ```public/demoApp/controllers.js```
- Create new directory ```public/demoApp/templates```
- Create a bare minimal template file ```public/demoApp/templates/home.html```

### Add AngularJS library files

- Create new directory ```public/demoApp/angularjs``` 
- Download ```angular.min.js``` (version 1.6.4) under the above directory
- Download ```angular-route.min.js``` (version 1.6.4) under the above directory

## Add AngularJS to Laravel "index" template

- For now just add some bare minimal things "ng-app", and "ng-view"