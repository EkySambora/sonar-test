<template>
    <div>
        Halaman Dashboard
    </div>
</template>

<script>
export default {
    middleware:['auth'],
    layout: 'dashboard'
}
</script>