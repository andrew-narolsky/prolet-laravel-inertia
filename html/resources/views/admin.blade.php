<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/js/admin.js', 'resources/js/app.js', 'resources/css/admin.css'])
    @inertiaHead
    @routes
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
    @inertia
</div>
</body>
</html>
