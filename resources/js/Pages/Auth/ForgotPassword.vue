<template>
    <Head title="Forgot Password - Juara POS" />
     <!-- Nested Row within Card Body -->
    <div class="row">
        <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
        <div class="col-lg-6">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p class="mb-4">We get it, stuff happens. Just enter your email address below
                        and we'll send you a link to reset your password!</p>
                </div>
                <div v-if="session.status" class="alert alert-success mt-2">
                        {{ session.status }}
                    </div>
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <input v-model="form.email" :class="{ 'is-invalid': errors.email }"
                            type="email" class="form-control form-control-user"
                            id="email" aria-describedby="email"
                            placeholder="Enter Email Address...">
                    </div>
                    <div v-if="errors.email" class="alert-danger">
                        {{ errors.email }}
                    </div>
                    <button class="btn btn-primary btn-user btn-block" type="submit">
                        KIRIM LINK RESET PASSWORD
                    </button>
                </form>
                <hr>
                <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                </div>
                <div class="text-center">
                    <a class="small" href="login.html">Already have an account? Login!</a>
                </div>
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

