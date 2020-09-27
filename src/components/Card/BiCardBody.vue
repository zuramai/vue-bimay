<template>
    <div :class="{'kait-card-body bg-white text-gray-700 text-sm': true, 'px-0 py-0': NoPadding,'px-5 py-4':!NoPadding}">
        <slot/>
    </div>
</template>
<script>
export default {
    props: {
        NoPadding: {
            default: false,
        }
    }
}
</script>