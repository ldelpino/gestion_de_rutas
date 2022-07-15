<template>
    <div id="pie">
        <footer>{{pie_de_pagina}}</footer>
    </div>
</template>

<script>

import { textos_es } from "@/constants/textos_es.js";

export default {
    name: 'Pie',
    data() {
        return {
            pie_de_pagina: textos_es.pie_de_pagina
        }
    }
}
</script>
<style scoped>
</style>