<script setup>
defineProps({
    message: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h1>Zulu is quite a character!</h1>
        <h2>{{ message }}</h2>
        <!-- 
            Shows on virtual DOM:
            Zulu is quite a character!
            She likes whiskey. He always carries a nice cold ice flask.
        -->
    </div>
</template>
