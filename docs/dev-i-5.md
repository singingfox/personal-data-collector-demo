# Development - Iteration 5

<a name="1"></a>
## Populate state selector options

- Add a services module to provide states data
- Inject services into app
- use ng-repeat to populate state selector options in data form

<a name="2"></a>
## AngularJS form data validation

- Inject $http into ```HomeController```
- Add a bare minimal method ```submit``` to ```HomeController``` (called when the form is submitted)

<a name="3"></a>
## Laravel database migration

- Add a empty database file ```database/database.sqlite```
- Set default database as SQLite in ```.env```
- Add migration file for "addresses" table ```php artisan make:migrate create_addresses_table```
- Run migration ```php artisan migrate```

