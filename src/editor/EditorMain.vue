<template>
    <div>
        <div class="s-top-menu flex-row">
            <a @click="() => { modalOpen = !modalOpen }">
                Select
            </a>
            <a @click="() => { openTheme() }">
                Open
            </a>
            <a @click="() => { editModalOpen = !editModalOpen }">
                Edit
            </a>
            <a @click="() => { saveTheme() }">
                Save
            </a>
            <a @click="() => { exportTheme() }">
                Export
            </a>
        </div>


        <!-- Modal -->
        <div class="s-modal" v-if="modalOpen == true">
            <div class="card ">
                <div class="card-header justify-around">
                    <h5 class="modal-title" id="exampleModalLongTitle">Select Color</h5>
                    <button type="button" class="close" @click="() => { modalOpen = false }" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body flex-col">
                    <div class="flex-col">
                        <div>
                            <label for="">Primary: {{ selectedPrimaryColor }}</label>
                            <input class="form-control" type="color" v-model="selectedPrimaryColor" />
                        </div>

                        <div>
                            <label for="">Use Secondary</label>
                            <input type="checkbox" name="" id="" value="" v-model="useSecondaryColor">
                        </div>

                        <div v-if="useSecondaryColor == true">
                            <label for="">Secondary: {{ selectedSecondaryColor }}</label>
                            <input class="form-control" type="color" v-model="selectedSecondaryColor" />
                        </div>

                    </div>
                    <div class="flex-row">
                        <button type="button" class="btn btn-secondary"
                            @click="() => { modalOpen = false }">Close</button>
                        <button type="button" class="btn btn-primary"
                            @click="() => { saveColor(selectedPrimaryColor) }">Save changes</button>
                    </div>

                </div>

            </div>
        </div>

        <!-- Modal -->
        <div class="e-modal" v-if="editModalOpen == true">
            <div class="card ">
                <div class="card-header justify-around">
                    <h5 class="modal-title" id="exampleModalLongTitle">Edit all colors</h5>
                    <button type="button" class="close" @click="() => { editModalOpen = false }" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body flex-col">
                    <div class="flex-col">
                        <div v-for="color in editor">
                            <label for="">{{ color.name }}: {{ color.value }}</label>
                            <input class="form-control" type="color" v-model="color.value" />
                        </div>

                    </div>
                    <div class="flex-row">
                        <button type="button" class="btn btn-secondary"
                            @click="() => { editModalOpen = false }">Close</button>
                        <button type="button" class="btn btn-primary" @click="() => { saveEditColor() }">Save
                            changes</button>
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import calculateOneSelectColor from './calculateOneSelectColor';
import calculateTwoSelectColorDefault from './calculateTwoSelectColorDefault';

import editorTemplate from './editorTemplate';



const modalOpen = ref(false)
const editModalOpen = ref(false)
const selectedPrimaryColor = ref('#4f52bd')
const selectedSecondaryColor = ref('#ffffff')
const useSecondaryColor = ref(false)

const colors = ref(structuredClone(editorTemplate))

const editor = ref(structuredClone(editorTemplate))


const saveColor = (color) => {


    const root = document.querySelector(':root');

    if (useSecondaryColor.value == true) {
        calculateTwoSelectColorDefault(selectedPrimaryColor, selectedSecondaryColor, colors)
    } else {
        calculateOneSelectColor(color, colors)
    }


    for (const color in colors.value) {
        root.style.setProperty(colors.value[color].name, colors.value[color].value);
        editor.value[color].value = colors.value[color].value
    }

    modalOpen.value = false

}

const exportTheme = async () => {

    const hermes = {}

    for (const color in colors.value) {
        hermes[color] = colors.value[color].value
    }

    window.electronAPI.saveTheme(hermes)

}

const saveTheme = async () => {

    const hermes = {}

    for (const color in colors.value) {
        hermes[color] = colors.value[color].value
    }

    window.electronAPI.saveThemeJson(hermes)

}

const openTheme = async () => {

    const result = await window.electronAPI.openThemeJson()
    if (result) {
        const root = document.querySelector(':root');
        for (const color in colors.value) {
            colors.value[color].value = result[color]
            root.style.setProperty(colors.value[color].name, colors.value[color].value);
            editor.value[color].value = colors.value[color].value
        }
    }


}

const saveEditColor = function () {
    for (const color in colors.value) {
        colors.value[color].value = editor.value[color].value
    }
}


</script>

<style scoped>
.s-modal {
    position: absolute;
    right: 10px;
    top: 10px;
}

.s-top-menu {
    padding: 0px 10px;
    background-color: black;
}

.s-top-menu a {
    cursor: pointer;
}

.e-modal {
    position: absolute;
    z-index: 1500;
}
</style>