<script setup>

import { useFetchDumbJson } from './whisky.js'

onMounted(async () => {

    // You can use the code in there like this.
    const res = await useDumbJson('https://pokeapi.co/api/v2/pokemon/meowscarada')

    console.log(res.name) // meowscarada.

    // PD: this kind of felt like an insult to intelligence. Why even calling it composables?
    // They are just .js files.

})

</script>