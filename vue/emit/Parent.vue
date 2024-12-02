<script setup>

// Import component.
import Zulu from './components/Zulu.vue'

// Function to run.
function CallbackFunction() {
    console.log('lorem');
}

</script>

<template>
    <div>
        <!-- For some reason the even must be kebab case -->
        <Zulu @event-lorem="CallbackFunction" />
    </div>
</template>
