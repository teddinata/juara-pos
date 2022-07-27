// import { createApp, h } from 'vue';
// import { createInertiaApp } from '@inertiajs/inertia-vue3';

// import { InertiaProgress } from '@inertiajs/progress';

// createInertiaApp({
//   resolve: name => require(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
//   setup({ el, app, props, plugin }) {
//     createApp({ render: () => h(app, props) })
//     // setup mixins
//     .mixin({
//         method: {
//             // method has permission
//             hasAnyPermission:function (permission) {

//                 // get permission from props
//                 let allPermissions = this.$route.meta.permissions;

//                 let hasPermission = false;
//                 permissions.forEach(function(item){
//                     if(allPermissions[item]) hasPermission = true;
//                 });

//                 return hasPermission;
//             }
//         },
//     })
//       .use(plugin)
//       .mount(el)
//   },
// });

// InertiaProgress.init()

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
        //set mixins
        .mixin({
            methods: {

            //method "hasAnyPermission"
            hasAnyPermission: function (permissions) {

                //get permissions from props
                let allPermissions = this.$page.props.auth.permissions;

                let hasPermission = false;
                permissions.forEach(function(item){
                if(allPermissions[item]) hasPermission = true;
                });

                return hasPermission;
            },
            // format price
            formatPrice (value) {
                let val = (value/1).toFixed(0).replace('.', ',');
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },

            },
        })
            .use(plugin)
            .mount(el);
    },
});

InertiaProgress.init()
