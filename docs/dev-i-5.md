# Development - Iteration 5

<a name="1"></a>
## Populate state selector options

- Add a services module to provide states data
- Inject services into app
- use ng-repeat to populate state selector options in data form

<a name="2"></a>
## AngularJS form data validation

- Use ```ngMessages``` to help with form data validation
- Enabled form submission button only all fields are valid
- Inject $http into ```HomeController``` for making API call(s)
- Add a bare minimal method ```submit``` to ```HomeController``` (called when the form is submitted)

<a name="3"></a>
## Laravel database migration

- Set up MySQL data and configure in .env
- Add migration file for "addresses" table ```php artisan make:migrate create_addresses_table``` (then add all fields)
- Run migration ```php artisan migrate```

