<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Authentication | Personal Data Collector Demo App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link href="/demoApp/style.css" rel="stylesheet" type="text/css">

        @if(starts_with(strtolower(Request::url()), 'https://hguo.ocef.us'))
        <script src='https://www.google.com/recaptcha/api.js'></script>
        @endif

    </head>
    <body>
        <div class="container">
            <div>
                <div class="sso">
                    SSO Login
                </div>
                <hr>
                <input class="demo-token" placeholder="For DEMO purpose, simply use a token">
                <button class="right">Bypass Real Login</button>
            </div>

            @if(starts_with(strtolower(Request::url()), 'https://hguo.ocef.us'))
            <div class="g-recaptcha" data-sitekey="6LdpVD0UAAAAACqZivGIRuUr2MgBPPDquk3wAwqf"></div>
            @endif
        </div>
    </body>
</html>
