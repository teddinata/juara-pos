<template>
  <!-- <div class="c-app">
    <Sidebar />
    <div class="c-wrapper c-fixed-components">

      header
      <Header />
      end header

      <div class="c-body">

        content
        <slot />
        end content

        <footer class="c-footer">
          <div><strong>JUARA POS</strong> &copy; 2022 - creazylab.id</div>
        </footer>
      </div>
    </div>
  </div> -->
   <!-- Page Wrapper -->
   <div id="wrapper">


    <!-- Sidebar -->
   <Sidebar />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            <Header />
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">

             <slot />
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Juara POS &copy; creazylab.id 2022</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>
</template>

<script>

    import Header from '../Components/Header.vue'
    import Sidebar from '../Components/Sidebar.vue'

export default {
    data() {
            return{
                isOpen: true
            }
        },
        methods: {
            sidebarToggleTop(){
                console.log("================"+this.isOpen)
                this.isOpen = !this.isOpen;
            }
        },

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>

<style>

</style>
