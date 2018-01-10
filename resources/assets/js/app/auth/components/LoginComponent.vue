<template>
    <div>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <h3 class="title has-text-grey">Login</h3>
                        <p class="subtitle has-text-grey">Please login to proceed.</p>
                        <div class="box">
                            <figure class="avatar">
                                <img src="https://placehold.it/128x128">
                            </figure>
                            <form action="#" @submit.prevent="submitForm">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input" v-model="form.formFields.username">
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input" v-model="form.FormFields.password">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                        <input type="checkbox">
                                        Remember me
                                    </label>
                                </div>
                               <button type="submit" class="button is-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    import {mapGetters } from 'vuex'
    export default {

        computed: mapGetters ({
                form:'auth/FormData'

            }),


        mounted() {
            console.log(form)
        },


        methods:{
            submitForm(){
                this.form.submit('/login');
            }
        }

    }
</script>
