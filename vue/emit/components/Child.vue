<script>
    const emit = defineEmits(['eventLorem'])
</script>

<template>
    <!-- For some reason the even must be camel case -->
    <button @click="$emit('eventLorem')">Click me</button>
</template>
