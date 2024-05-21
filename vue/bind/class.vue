<script setup lang="ts">

// This does not work because this is not a Vue 3 project.
//import { type Ref, ref } from 'vue'

// Boolean that control the classes to be assigned.
//const FOO: Ref<boolean> = ref(true)
//const BAR: Ref<boolean> = ref(true)

// No red underline nor red file alert on vs code.
const FOO: boolean = true
const BAR: boolean = true

</script>

<template>

    <!-- Multiple bind class example. -->
    <!-- https://vuejs.org/guide/essentials/class-and-style.html -->
    <div :class="[FOO === true ? 'zone' : '', BAR === true ? 'code' : '']">
        Hello maskeds.
    </div>

</template>

<style scoped>
.zone {
    background-color: black;
}

.code {
    color: white;
}
</style>
