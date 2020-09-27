<template>
    <div class='kait-card-header bg-white p-5 rounded-t-md  flex items-center self-center'>
        <div>
            <h4 class='font-bold text-gray-700'>
                <slot name="title"></slot>
            </h4>
            <p class='text-sm text-gray-600'>
                <slot name="subtitle"></slot>
            </p>
        </div>
        <slot name="card-action" class='ml-auto'/>
    </div>
</template>
<script>
export default {
    name: 'KaitCardHeader',
    
}
</script>