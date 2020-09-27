<template>
    <div class='navbar'>
        <div class="navbar-toggle" @click="toggleSidebar()">
            <button class='btn btn-transparent'>
                <bi-icon icon="list"/>
            </button>
        </div>
        <div class="navbar-menu flex items-center">
            <bi-dropdown v-model="isDropdownShow" animation="slide-vertical" position="right" >
                <template v-slot:toggler>
                    <div class="flex flex-row mr-3">
                        <div class="flex flex-col mr-2 text-right">
                            <span class="name text-gray-700 text-sm">Ahmad Saugi</span>
                            <span class='role text-xs text-gray-600'>Student</span>
                        </div>
                        <bi-avatar :src="require('@/assets/images/avatar/avatar1.png')" @click="isDropdownShow=!isDropdownShow" size="small" ></bi-avatar>
                    </div>
                </template>
                <template v-slot:dropdown>
                    <bi-dropdown-item url="#" class='text-xs text-gray-700'><i class="fas fa-sign-out-alt"></i> <span class='ml-2'>Logout</span></bi-dropdown-item>
                </template>
            </bi-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {

    },
    data() {
        return {
            isDropdownShow: false,
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', !this.isSidebarActive)
            console.log(this.isSidebarActive)
        }
    },
    computed: {
        isSidebarActive: {
            get() {
            return this.$store.state.isSidebarActive;
            },
            set(val) {
            this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', val)
            }
        },
    }
}
</script>