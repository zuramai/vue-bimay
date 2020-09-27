<template>
    <span class='bi-icon'>
        <svg class="bi" :width="width" :height="height" fill="currentColor">
            <use :xlink:href="require(`@/assets/icons/bootstrap-icons.svg`)+`#${icon}`"/>
        </svg>
    </span>
</template>
<script>
export default {
    props: {
        icon: {
            default: 'house'
        },
        width: {
            default: 24
        },
        height: {
            default: 24
        }
    }
}
</script>