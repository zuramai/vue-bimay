<template>
    <div class="app">
        <bi-sidebar/>
        <div id="content">
            <bi-navbar/>
            <div id="main-content" class='px-8 pt-5'>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/scss/admin.scss';
export default {
    mounted() {
        console.log('master')
    }
}
</script>