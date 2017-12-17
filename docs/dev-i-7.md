# Development - Iteration 7

<a name="1"></a>
## Add Larvel API endpoint for providing acknowledgement content

- In Laravel, add a simple route "api/acknowledgement" without controller to provide a block of acknowledgement text
- Protect route "api/data" (POST) by using [CORS](https://github.com/barryvdh/laravel-cors) to restrict access to API calls from the same domain

<a name="2"></a>
## Add custom AngularJS directive

- Change the previously created modal into a directive
- Add a service to call the acknowledgement API from within the controller
- and pass content into the directive by calling a method inside of the directive



