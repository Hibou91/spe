<template>
    <div class="card card-default">
        <div class="card-header card-title">
            <slot name="header" ></slot>
        </div>
        <div class="card-body card-text" >
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script setup>


</script>

<style>

.card{
    background-color: var(--background-primary);
}

.card-header {
     background-color: var(--background-secondary);
}
</style>