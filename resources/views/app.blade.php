<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('/admin/css/style.css') }}" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="{{ asset('/admin/css/custom.css') }}" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet">
    {{-- <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <script src="{{ asset('/admin/js/coreui.bundle.min.js') }}" defer></script>
    @vite('resources/js/app.js')
  </head>
  <body>
      @inertia

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>


 {{-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />


    <link rel="stylesheet" href="{{ asset('/admin/admin/node_modules/simplebar/dist/simplebar.css') }}">
    <link rel="stylesheet" href="{{ asset('/admin/admin/dist/css/vendors/simplebar.css') }}">

    <link href="{{ asset('/admin/admin/dist/css/style.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.css">
    <link href="{{ asset('/admin/admin/dist/css/examples.css') }}" rel="stylesheet">
    <link href="{{ asset('/admin/admin/node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

    <script src="{{ asset('/admin/admin/node_modules/@coreui/coreui/dist/js/coreui.bundle.min.js') }}"></script>
    <script src="{{ asset('/admin/admin/node_modules/simplebar/dist/simplebar.min.js') }}"></script>

    <script src="{{ asset('/admin/admin/node_modules/chart.js/dist/chart.min.js') }}"></script>
    <script src="{{ asset('/admin/admin/node_modules/@coreui/chartjs/dist/js/coreui-chartjs.js') }}"></script>
    <script src="{{ asset('/admin/admin/node_modules/@coreui/utils/dist/coreui-utils.js') }}"></script>
    <script src="{{ asset('/admin/admin/dist/js/main.js') }}"></script>
    @vite('resources/js/app.js')
  </head>
  <body>
      @inertia

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html> --}}

