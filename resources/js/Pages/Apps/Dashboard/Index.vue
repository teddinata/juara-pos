<template>
    <Head title="Dashboard - Juara POS" />

   <main class="c-main">
        <div class="container-fluid">
            <div class="fade-in">

                <div class="row">
                    <div class="col-md-8">
                        <div v-if="hasAnyPermission(['dashboard.sales_chart'])" class="card border-0 rounded-3 shadow border-top-purple">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-chart-bar"></i> SALES CHART 7 DAYS</span>
                            </div>
                            <div class="card-body">
                                <!-- <div class="chart-area">
                                    <BarChart :chartData="chartSellWeek" :options="options" id="myAreaChart"/>
                                </div> -->
                                <BarChart :chartData="chartSellWeek" :options="options"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div v-if="hasAnyPermission(['dashboard.sales_today'])" class="card border-0 rounded-3 shadow border-top-info mb-4">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-chart-line"></i> SALES TODAY</span>
                            </div>
                            <div class="card-body">
                                <strong>{{ count_sales_today }}</strong> SALES
                                <hr>
                                <h5 class="fw-bold">{{ formatPrice(sum_sales_today)}}</h5>
                            </div>
                        </div>

                        <div v-if="hasAnyPermission(['dashboard.profits_today'])" class="card border-0 rounded-3 shadow border-top-success">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-chart-bar"></i> PROFITS TODAY</span>
                            </div>
                            <div class="card-body">
                                <h5 class="fw-bold">Rp. {{ formatPrice(sum_profits_today) }}</h5>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div v-if="hasAnyPermission(['dashboard.best_selling_product'])" class="card border-0 rounded-3 shadow border-top-warning">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-chart-pie"></i> BEST SELIING PRODUCT</span>
                            </div>
                            <div class="card-body">
                                <DoughnutChart :chartData="chartBestProduct" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div v-if="hasAnyPermission(['dashboard.product_stock'])" class="card border-0 rounded-3 shadow border-top-danger">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-box-open"></i> STOK SISA KURANG DARI 10</span>
                            </div>
                            <div class="card-body">
                                <div v-if="products_limit_stock.length > 0">
                                     <ol class="list-group list-group-numbered">
                                        <li v-for="product in products_limit_stock" :key="product.id" class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">{{ product.title }}</div>
                                                <div class="text-muted">Category : {{ product.category.name }}</div>
                                            </div>
                                            <span class="badge bg-danger rounded-pill text-white">{{ product.stock }}</span>
                                        </li>
                                    </ol>
                                </div>
                                <div v-else class="alert alert-danger border-0 shadow rounded-3">
                                    <div class="text-center">
                                        <h5 class="fw-bold">Belum ada produk yang stoknya menipis, bos.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>

    import LayoutApp from '../../../Layouts/App.vue';

    import { Head } from '@inertiajs/inertia-vue3';

    import { ref } from 'vue';

    // chart
    import { BarChart, DoughnutChart } from 'vue-chart-3';
    import { Chart, registerables } from "chart.js";

    // register chart
    Chart.register(...registerables);

    export default {

        // layout
        layout: LayoutApp,

        // register components
        components: {
            Head,
            BarChart,
            DoughnutChart,
        },

        props: {
            // total penjualan hari ini
            count_sales_today: {
                Number,
            },
            // total profit hari ini
            sum_profits_today: {
                Number,
            },
            // sum sales today
            sum_sales_today: {
                Number,
            },

            // chart sales
            sales_date: Array,
            grand_total: Array,

            // chart best product
            product: Array,
            total: Array,

            // produck limit stock
            products_limit_stock: Array,
        },

        setup(props) {

            // method random color
            function randomBackgroundColor(length){
                var data = [];
                for (var i = 0; i < length; i++) {
                    data.push(getRandomColor());
                }
                return data;
            }

            // method generate random color
            function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            // option chart
            const options = ref({
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                },
                beginZero: true,
            });

            // chart sell week
            const chartSellWeek = {
                labels: props.sales_date,
                datasets: [{
                    data: props.grand_total,
                    backgroundColor: randomBackgroundColor(props.sales_date.length),
                },],
            };

            // chart best product
            const chartBestProduct = {
                labels: props.product,
                datasets: [{
                    data: props.total,
                    backgroundColor: randomBackgroundColor(6),
                },],
            };

            return {
                options,
                chartSellWeek,
                chartBestProduct,
            }
        },
    }
</script>

<style>

</style>
