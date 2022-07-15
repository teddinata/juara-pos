{{-- <!DOCTYPE html>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <script src="{{ asset('/admin/js/coreui.bundle.min.js') }}" defer></script>
    @vite('resources/js/app.js')
  </head>
  <body>
      @inertia

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html> --}}

{{-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
     {{-- custom css bootstrap --}}
     {{-- <link href="{{ asset('admin/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css"> --}}
     {{-- <link href="{{ asset('admin/css/sb-admin-2.min.css') }}" rel="stylesheet"> --}}

     <!-- Fonts -->
     {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"> --}}
    {{-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script> --}}
     <!-- Bootstrap core JavaScript-->
     {{-- <script src="{{ asset('/admin/vendor/jquery/jquery.min.js') }}"></script> --}}
     {{-- <script src="{{ asset('/admin/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script> --}}

     <!-- Core plugin JavaScript-->
     {{-- <script src="{{ asset('/admin/vendor/jquery-easing/jquery.easing.min.js') }}"></script> --}}

     <!-- Custom scripts for all pages-->
     {{-- <script src="{{ asset('/admin/js/sb-admin-2.min.js') }}"></script> --}}
    {{-- @inertiaHead --}}
    {{-- @vite('resources/js/app.js') --}}
  {{-- </head> --}}
  {{-- <body class="bg-gradient-primary" > --}}
    {{-- @inertia --}}
  {{-- </body> --}}
{{-- </html> --}}

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta content="Juara POS" name="juarapos is a AI Point Of Sales" />
    <meta content="juaraposthemes" name="juarapos" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="shortcut icon" href="assets/images/favicon.ico">

    <!--Morris Chart CSS -->
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/fullcalendar/vanillaCalendar.css') }}"/>
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/jvectormap/jquery-jvectormap-2.0.2.css') }}">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/chartist/css/chartist.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/morris/morris.css') }}">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/metro/MetroJs.min.css') }}">

    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/carousel/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/carousel/owl.theme.default.min.css') }}">

    <link rel="stylesheet" href="{{ asset('/newadmin/assets/plugins/animate/animate.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/css/bootstrap-material-design.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/css/icons.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('/newadmin/assets/css/style.css') }}" type="text/css">

    {{-- Javascript --}}
     <!-- jQuery  -->
     <script src="{{ asset('/newadmin/assets/js/jquery.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/popper.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/bootstrap-material-design.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/modernizr.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/detect.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/fastclick.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/jquery.slimscroll.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/jquery.blockUI.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/waves.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/jquery.nicescroll.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/js/jquery.scrollTo.min.js') }}"></script>


     <script src="{{ asset('/newadmin/assets/plugins/carousel/owl.carousel.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/fullcalendar/vanillaCalendar.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/peity/jquery.peity.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/chartist/js/chartist.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/chartist/js/chartist-plugin-tooltip.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/metro/MetroJs.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/raphael/raphael.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/plugins/morris/morris.min.js') }}"></script>
     <script src="{{ asset('/newadmin/assets/pages/dashborad.js') }}"></script>

     <!-- App js -->
     <script src="{{ asset('/newadmin/assets/js/app.js') }}"></script>
    {{-- @inertiaHead --}}
    @vite('resources/js/app.js')
  </head>
  <body class="bg-gradient-primary" >
    @inertia
  </body>
</html>

