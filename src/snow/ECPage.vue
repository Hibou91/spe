<template>
    <div >
        <EditorMain  />
        <SHeader />
        <SSearch />
        <SPAgeContent />
        <SFooter />
        
    </div>

</template>

<script setup>

import EditorMain from '../editor/EditorMain.vue';
import SFooter from './components/SFooter.vue';
import SHeader from './components/SHeader.vue';
import SPAgeContent from './components/SPageContent.vue';
import SSearch from './components/SSearch.vue';


</script>

<style>
.test{
    font-weight: bold;
}
</style>