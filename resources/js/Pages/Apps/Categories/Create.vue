<template>
    <Head>
        <title>Add New Category - Aplikasi Kasir</title>
    </Head>
    <main class="c-main">
        <div class="container-fluid">
            <div class="fade-in">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card border-0 rounded-3 shadow border-top-purple">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-folder"></i> ADD NEW CATEGORY</span>
                            </div>
                            <div class="card-body">

                                <form @submit.prevent="submit">
                                    <div class="mb-3">
                                        <input type="file" class="form-control"
                                            @input="form.image=$event.target.files[0]"
                                            :class="{ 'is-invalid': errors.image }">
                                    </div>
                                    <div v-if="errors.image" class="alert alert-danger">
                                        {{ errors.image }}
                                    </div>

                                    <div class="mb-3">
                                        <label class="fw-bold">Category Name</label>
                                        <input class="form-control" v-model="form.name" :class="{ 'is-invalid': errors.name }" type="text" placeholder="Category Name">
                                    </div>
                                    <div v-if="errors.name" class="alert alert-danger">
                                        {{ errors.name }}
                                    </div>
                                    <div class="mb-3">
                                        <label class="fw-bold">Description</label>
                                        <textarea class="form-control" v-model="form.description" :class="{ 'is-invalid': errors.description }" type="text" rows="4" placeholder="Description"></textarea>
                                    </div>
                                    <div v-if="errors.description" class="alert alert-danger">
                                        {{ errors.description }}
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <button class="btn btn-primary shadow-sm mr-1 rounded-sm" type="submit">SAVE</button>
                                            <button class="btn btn-warning shadow-sm ml-1 rounded-sm ms-3" type="reset">RESET</button>
                                        </div>
                                    </div>
                                </form>

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
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import { reactive } from 'vue';
    import { Inertia } from '@inertiajs/inertia';
    import  Swal  from 'sweetalert2';

    export default {
        layout: LayoutApp,
        components: {
            Head,
            Link
        },
        props: {
            errors: Object
        },
        setup(){
            // define form with reactive
            const form = reactive({
                image: '',
                name: '',
                description: ''
            });

            // method submit
            const submit = () => {

                // send request
                Inertia.post('/apps/categories', {
                    // send form data
                    name: form.name,
                    description: form.description,
                    image: form.image
                }, {
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Success',
                            text: 'Category has been added',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    }
                });
            }
            return {
                form, submit
            }
        }
    }
</script>
