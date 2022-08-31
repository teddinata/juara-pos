<template>
  <div class="c-app">
    <Sidebar />
    <div class="c-wrapper c-fixed-components">

      <!-- header -->
      <Header />
      <!-- end header -->

      <div class="c-body">

        <!-- content -->
        <slot />
        <!-- end content -->

        <footer class="c-footer">
          <div><strong>JUARA POS</strong> &copy; 2022 - creazylab.id</div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

    import Header from '../Components/Header.vue'
    import Sidebar from '../Components/Sidebar.vue'

export default {

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>

<style>

</style>
