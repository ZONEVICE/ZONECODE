<script setup>
import { ref } from 'vue'

// Counter -string, number, boolean-.
const count = ref(0)
function increment_counter() {
    count.value++
}

// Array.
const my_array = ref([])
function increment_array() {
    my_array.value.push(1)
}

</script>

<template>

    <button @click="increment_counter">
        Increment counter. Counter is: {{ count }}
    </button>

    <br />
    <br />

    <button @click="increment_array">
        Increment array.
    </button>

    <br />
    Array items:
    <br />
    <ul>
        <li v-for="n in my_array">
            {{ n }}
        </li>
    </ul>

</template>