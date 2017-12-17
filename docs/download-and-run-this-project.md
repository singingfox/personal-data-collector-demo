# Download and run this project

_(PHP 5.6.4 or above required)_

_(Assuming a linux or linux-like environment, for example Git Bash on Windows, is used for running commands)_

## Clone from Github

Choose a parent directory on local computer, and run 

```
git clone https://github.com/singingfox/personal-data-collector-demo.git
```

## Pull in dependencies

Run under cloned directory ```personal-data-collector-demo```

```
composer update
cp .env.example .env
php artisan key:generate

rm database/database.sqlite
touch database/database.sqlite
php artisan migrate
```

## Start application

To try out the application, run under cloned directory ```personal-data-collector-demo```

```
php artisan serve
```

The command line console should show something like this

```
Laravel development server started: <http://127.0.0.1:8000>
```

Open a browser and visit http://localhost:8000 or http://127.0.0.1:8000, and the application should now show up.
