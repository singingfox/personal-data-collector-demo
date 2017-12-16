# Set up new project

_(Assuming a linux or linux-like environment, for example Git Bash on Windows, is used for running commands)_

## Creat a new project on Github

Create a new repo on Github, and name it "personal-data-collector-demo". 

(See [Github Documentation](https://help.github.com/articles/create-a-repo/) for more details on how to create a new repo.)

## Create a blank Laraval project locally

```
composer create-project --prefer-dist laravel/laravel=5.4.* personal-data-collector-demo
```

_(use 5.4 because it does not require PHP 7)_

## Push blank project onto Github

Under the directory of newly created blank Laravel project, run the following

```
git init
git remote add origin https://MY-GITHUB-USERNAME:MY-GITHUB-PASSWORD@github.com/singingfox/personal-data-collector-demo.git
git add *
git add .env.example
git commit -m 'blank Laravel project'
git push -f origin master
```

_(.env.example is added to repo for convenience)_