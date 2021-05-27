<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>


    <body class="p-0 m-0 vw-100 position-relative">
            <div id="root" class="m-0" style="padding-top: 0px; padding-right: 150px; padding-bottom: 0px; padding-left: 150px">
            
            </div>

            <div id="modal">

            </div>

            <!-- React-App -->
             <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
