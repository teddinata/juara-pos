<template>
    <Head title="Reset Password - Juara POS" />

    <!-- Nested Row within Card Body -->
     <!-- <div class="card o-hidden border-0 shadow-lg my-5"> -->
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Reset Password</h1>
                        </div>
                            <div v-if="session.status" class="alert alert-success mt-2">
                            {{ session.status }}
                        </div>
                        <form @submit.prevent="submit">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                                <input type="email" class="form-control form-control-user"
                                    v-model="form.email" :class="{'is-invalid': errors.email}"
                                    id="email" aria-describedby="email"
                                    placeholder="Enter Email Address...">
                            </div>
                            <div v-if="errors.email" class="alert alert-danger">
                                {{ errors.email }}
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input type="password" class="form-control form-control-user"
                                    v-model="form.password" :class="{'is-invalid': errors.password}"
                                    id="exampleInputPassword" placeholder="Password">
                            </div>
                            <div v-if="errors.password" class="alert alert-danger">
                                {{ errors.password }}
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input class="form-control" v-model="form.password_confirmation" :class="{ 'is-invalid': errors.password_confirmation }" type="password" placeholder="Password Confirmation">
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox small">
                                    <input type="checkbox" class="custom-control-input" id="customCheck">
                                    <label class="custom-control-label" for="customCheck">Remember
                                        Me</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                Update Password
                            </button>
                        </form>
                        <hr>
                    </div>
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
        // layout
        layout: LayoutAuth,

        components: {
            Head, Link
        },

        props: {
            errors: Object,
            route: Object,
            session: Object,
        },

        // define composition API
        setup(props) {
           //define form state
            const form = reactive({
                email: props.route.query.email,
                password: '',
                password_confirmation: '',
                token: props.route.params.token,
            });

            //submit method
            const submit = () => {

                //send data to server
                Inertia.post('/reset-password', {

                    //data
                    email: form.email,
                    password: form.password,
                    password_confirmation: form.password_confirmation,
                    token: form.token,
                })
            }

            //return form state and submit method
            return {
                form,
                submit,
            };

        }

    }
</script>
