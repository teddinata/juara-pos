<template>
    <Head title="Forgot Password - Juara POS" />
     <!-- Nested Row within Card Body -->
     <div class="card">
    <div class="card-body">

        <div class="text-center pt-3">
            <a href="/apps/dashboard">
                <img src="../../Components/Images/logo.png" alt="logo" height="200" />
            </a>
        </div>
        <div v-if="session.status" class="alert alert-success mt-2">
            {{ session.status }}
        </div>

        <div class="p-3">
            <form @submit.prevent="submit" class="form-horizontal mb-0" action="index.html">

                <div class="alert alert-info mt-3 alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    Enter your <b>Email</b> and instructions will be sent to you!
                </div>

                <div class="form-group">
                    <div class="col-xs-12">
                        <input v-model="form.email" :class="{ 'is-invalid': errors.email }"
                        type="email" class="form-control form-control-user"
                        id="email" aria-describedby="email"
                        placeholder="Enter Email Address...">
                    </div>
                </div>
                <div v-if="errors.email" class="alert-danger">
                    {{ errors.email }}
                </div>

                <div class="form-group text-center row m-t-20 mb-0">
                    <div class="col-12">
                        <button class="btn btn-raised btn-primary btn-block waves-effect waves-light" type="submit">Send Email</button>
                    </div>
                </div>

            </form>
        </div>

    </div>
</div>
</template>

<script>
// import layout
import LayoutAuth from '../../Layouts/Auth.vue'

// import reactive
import {reactive} from 'vue'

// inertia adapter
import {Inertia} from '@inertiajs/inertia';

// import Head
import { Head, Link } from '@inertiajs/inertia-vue3';

export default {
    // layout for this page
    layout: LayoutAuth,

    // register component
    components: {
        Head,
        Link
    },

    props: {
        errors: Object,
        session: Object
    },

    // define composition API
    setup() {
        // define form state
        const form = reactive({
            email: '',
        });

        // submit function
        const submit = () => {
            // send request to server
            Inertia.post('/forgot-password', {
                email: form.email,
            });
        }

        // return form state
        return {
            form,
            submit
        };
    }
}
</script>

