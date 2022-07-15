<template>

    <Head>
        <title>Login Account - Aplikasi Kasir</title>
    </Head>
     <!-- Nested Row within Card Body -->
     <!-- <div class="card o-hidden border-0 shadow-lg my-5"> -->
        <div class="card">
            <div class="card-body">
                <div class="text-center pt-3">
                    <a href="index.html">
                        <img src="../../Components/Images/logo.png" alt="logo" height="200" />
                    </a>
                </div>
                <div v-if="session.status" class="alert alert-success mt-2">
                    {{ session.status }}
                </div>
                <div class="px-3 pb-3">
                    <form @submit.prevent="submit" class="form-horizontal m-t-20 mb-0">
                        <div class="form-group row">
                            <div class="col-12">
                                <input type="email" class="form-control form-control-user"
                                    v-model="form.email" :class="{'is-invalid': errors.email}"
                                    id="email" aria-describedby="email"
                                    placeholder="Enter Email Address...">
                            </div>
                        </div>
                        <div v-if="errors.email" class="alert alert-danger">
                                {{ errors.email }}
                            </div>
                        <div class="form-group row">
                            <div class="col-12">
                                <input type="password" class="form-control form-control-user"
                                    v-model="form.password" :class="{'is-invalid': errors.password}"
                                    id="exampleInputPassword" placeholder="Password">
                            </div>
                        </div>
                        <div v-if="errors.password" class="alert alert-danger">
                                {{ errors.password }}
                            </div>
                        <div class="form-group row">
                            <div class="col-12">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">Remember me</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group text-right row m-t-20">
                            <div class="col-12">
                                <button class="btn btn-primary btn-raised btn-block waves-effect waves-light" type="submit">Log In</button>
                            </div>
                        </div>

                        <div class="form-group m-t-10 mb-0 row">
                            <div class="col-sm-7 m-t-20">
                                <Link href="/forgot-password" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password ?</Link>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    <!-- </div> -->
</template>

<script>
    //import layout
    import LayoutAuth from '../../Layouts/Auth.vue';

    //import reactive
    import { reactive } from 'vue';

    //import inertia adapter
    import { Inertia } from '@inertiajs/inertia';

    //import Heade and useForm from Inertia
    import {
        Head,
        Link,
    } from '@inertiajs/inertia-vue3';

    export default {

        //layout
        layout: LayoutAuth,

        //register component
        components: {
            Head,
            Link
        },

        props: {
            errors: Object,
            session: Object
        },

        //define composition API
        setup() {

            //define form state
            const form = reactive({
                email: '',
                password: '',
            });

            //submit method
            const submit = () => {

                //send data to server
                Inertia.post('/login', {

                    //data
                    email: form.email,
                    password: form.password,
                });
            }

            //return form state and submit method
            return {
                form,
                submit,
            };

        }

    }
</script>

<style>

</style>
