# Development - Iteration 4

<a name="1"></a>
## Add boiler plate Laravel API endpoint "/data" (POST)

- Add a new route ```/data```
- Add a new controller ```DataConnectionController.php```, with a method that does nothing but returning a JSON string

<a name="2"></a>
## Let AngularJS form submission call the new API endpoint

- Inject $http into ```HomeController```
- Add a bare minimal method ```submit``` to ```HomeController``` (called when the form is submitted)

