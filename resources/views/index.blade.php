<!doctype html>
<html ng-app="demoApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Personal Data Collector Demo App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link href="/demoApp/style.css" rel="stylesheet" type="text/css">

        <script src="/demoApp/angularjs/angular.min.js"></script>
        <script src="/demoApp/angularjs/angular-route.min.js"></script>
        <script src="/demoApp/angularjs/angular-messages.min.js"></script>

        <script src="/demoApp/app.js"></script>
        <script src="/demoApp/controllers.js"></script>
        <script src="/demoApp/services.js"></script>
    </head>
    <body>
        <div class="container">
            <h1>Personal Data Collector Demo App</h1>
            <div ng-view></div>
        </div>
    </body>
</html>
