<template>
    <login></login>
    <dashboard v-if="authenticated"></dashboard>
</template>

<script>
    import Login from '../components/LoginComponent'
    import Dashboard from '../components/DashboardComponent'
    export default {
        data () {
          return {
              authenticated:false
          }
        },
        components:{
          'Login':Login,
          'Dashboard':Dashboard
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
