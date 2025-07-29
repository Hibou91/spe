<template>
    <div>
        <div class="s-top-menu flex-row">
            <a @click="() => { modalOpen = !modalOpen }">
                Select color
            </a>
            <a @click="() => { editModalOpen = !editModalOpen }">
                Edit all colors
            </a>
            <a @click="() => { saveTheme() }">
                Save theme
            </a>
        </div>


        <!-- Modal -->
        <div class="s-modal" v-if="modalOpen == true">
            <div class="card ">
                <div class="card-header justify-around">
                    <h5 class="modal-title" id="exampleModalLongTitle">Select Color</h5>
                    <button type="button" class="close" @click="() => {  modalOpen = false }"
                        aria-label="Close">
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
                            <label for="">Primary: {{ selectedPrimaryColor }}</label>
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
                    <button type="button" class="close" @click="() => { editModalOpen = false }"
                        aria-label="Close">
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
                        <button type="button" class="btn btn-primary"
                            @click="() => { saveColor(selectedPrimaryColor) }">Save changes</button>
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import colorFunctions from '../utils/colorFunctions';


const modalOpen = ref(false)
const editModalOpen = ref(false)
const selectedPrimaryColor = ref('#ffffff')
const selectedSecondaryColor = ref('#ffffff')
const useSecondaryColor = ref(false)

const colors = ref({
    brandPrimary: { value: '#ffffff', name: '--brand-primary' },
    brandPrimaryDarkest: { value: '#ffffff', name: '--brand-primary-darkest' },
    brandPrimaryDarker: { value: '#ffffff', name: '--brand-primary-darker' },
    brandPrimaryLighter: { value: '#ffffff', name: '--brand-primary-lighter' },
    brandPrimaryLightest: { value: '#ffffff', name: '--brand-primary-lightest' },
    brandPrimaryOpacity: { value: '#ffffff', name: '--brand-primary-opacity' },

    spNavbarDividerColor: { value: '#ffffff', name: '--sp-navbar-divider-color' },
    navbarInverseBg: { value: '#ffffff', name: '--navbar-inverse-bg' },
    navbarInverseLinkColor: { value: '#ffffff', name: '--navbar-inverse-link-color' },
    navbarInverseLinkHoverColor: { value: '#ffffff', name: '--navbar-inverse-link-hover-color' },

    linkColor: { value: '#ffffff', name: '--link-color' },
    linkHoverColor: { value: '#ffffff', name: '--link-hover-color' },

    inputBorderFocus: { value: '#ffffff', name: '--input-border-focus' },

    textPrimary: { value: '#ffffff', name: '--text-primary' },
    textSecondary: { value: '#ffffff', name: '--text-secondary' },
    textTertiary: { value: '#ffffff', name: '--text-tertiary' },
    textWhite: { value: '#ffffff', name: '--text-white' },

    backgroundPrimary: { value: '#ffffff', name: '--background-primary' },
    backgroundSecondary: { value: '#ffffff', name: '--background-secondary' },
    backgroundTertiary: { value: '#ffffff', name: '--background-tertiary' },

    borderPrimary: { value: '#ffffff', name: '--border-primary' },
    borderSecondary: { value: '#ffffff', name: '--border-secondary' },
    borderTertiary: { value: '#ffffff', name: '--border-tertiary' },

    selectPrimary: { value: '#ffffff', name: '--select-primary' },
    selectPrimaryLighter: { value: '#ffffff', name: '--select-primary-lighter' },
    selectPrimaryDarker: { value: '#ffffff', name: '--select-primary-darker' },

    brandDanger: { value: '#ffffff', name: '--brand-danger' },
    brandWarning: { value: '#ffffff', name: '--brand-warning' },
    brandModerate: { value: '#ffffff', name: '--brand-moderate' },
    brandLow: { value: '#ffffff', name: '--brand-low' },
    brandSuccess: { value: '#ffffff', name: '--brand-success' },
    brandInfo: { value: '#ffffff', name: '--brand-info' },

    brandDangerDarker: { value: '#ffffff', name: '--brand-danger-darker' },
    brandWarningDarker: { value: '#ffffff', name: '--brand-warning-darker' },
    brandModerateDarker: { value: '#ffffff', name: '--brand-moderate-darker' },
    brandLowDarker: { value: '#ffffff', name: '--brand-low-darker' },
    brandSuccessDarker: { value: '#ffffff', name: '--brand-success-darker' },
    brandInfoDarker: { value: '#ffffff', name: '--brand-info-darker' },

    colorDarkest: { value: '#ffffff', name: '--color-darkest' },
    colorDarker: { value: '#ffffff', name: '--color-darker' },
    colorDark: { value: '#ffffff', name: '--color-dark' },
    colorDisabled: { value: '#ffffff', name: '--color-disabled' },
    colorLight: { value: '#ffffff', name: '--color-light' },
    colorLighter: { value: '#ffffff', name: '--color-lighter' },
    colorLightest: { value: '#ffffff', name: '--color-lightest' },
    colorAccent: { value: '#ffffff', name: '--color-accent' },
    colorAccentLight: { value: '#ffffff', name: '--color-accent-light' },
    colorAccentLightest: { value: '#ffffff', name: '--color-accent-lightest' },

    btnSuccessBg: { value: '#ffffff', name: '--btn-success-bg' },
    btnInfoBg: { value: '#ffffff', name: '--btn-info-bg' },
    btnWarningBg: { value: '#ffffff', name: '--btn-warning-bg' },
    btnDangerBg: { value: '#ffffff', name: '--btn-danger-bg' },

    stateSuccessBg: { value: '#ffffff', name: '--state-success-bg' },
    stateInfoBg: { value: '#ffffff', name: '--state-info-bg' },
    stateWarningBg: { value: '#ffffff', name: '--state-warning-bg' },
    stateDangerBg: { value: '#ffffff', name: '--state-danger-bg' },


})

const editor = ref({})

//const root = document.querySelector(':root');

for (const color in colors.value) {
    editor.value[color] = { value: '#ffffff', name: colors.value[color].name }
}


const saveColor = (color) => {


   var root = document.querySelector(':root');
    //var rs = getComputedStyle(root);



    colors.value.brandPrimary.value = color
    colors.value.brandPrimaryDarkest.value = colorFunctions.lighten(color, 20)
    colors.value.brandPrimaryDarker.value = colorFunctions.lighten(color, 40)
    colors.value.brandPrimaryLighter.value = colorFunctions.lighten(color, 60)
    colors.value.brandPrimaryLightest.value = colorFunctions.lighten(color, 80)
    colors.value.brandPrimaryOpacity.value = colorFunctions.saturate(colorFunctions.lighten(color, 60), 30)

    colors.value.textPrimary.value = colorFunctions.saturate(colorFunctions.lighten(color, 20), 30)
    colors.value.textSecondary.value = colorFunctions.saturate(colorFunctions.lighten(color, 30), 30)
    colors.value.textTertiary.value = colorFunctions.saturate(colorFunctions.lighten(color, 50), 30)
    colors.value.textWhite.value = colorFunctions.saturate(colorFunctions.lighten(color, 99), 1)

    colors.value.backgroundPrimary.value = colorFunctions.saturate(colorFunctions.lighten(color, 99), 1)
    colors.value.backgroundSecondary.value = colorFunctions.saturate(colorFunctions.lighten(color, 95), 5)
    colors.value.backgroundTertiary.value = colorFunctions.saturate(colorFunctions.lighten(color, 90), 10)

    colors.value.borderPrimary.value = colorFunctions.saturate(colorFunctions.lighten(color, 95), 5)
    colors.value.borderSecondary.value = colorFunctions.saturate(colorFunctions.lighten(color, 90), 10)
    colors.value.borderTertiary.value = colorFunctions.saturate(colorFunctions.lighten(color, 85), 15)

    colors.value.selectPrimary.value = colorFunctions.saturate(colorFunctions.lighten(color, 85), 15)
    colors.value.selectPrimaryLighter.value = colorFunctions.saturate(colorFunctions.lighten(color, 85), 15)
    colors.value.selectPrimaryDarker.value = colorFunctions.saturate(colorFunctions.lighten(color, 85), 15)

    colors.value.spNavbarDividerColor.value = colorFunctions.saturate(colorFunctions.lighten(color, 50), 70);
    colors.value.navbarInverseBg.value = colorFunctions.lighten(color, 20)
    colors.value.navbarInverseLinkColor.value = colors.value.textWhite.value
    colors.value.navbarInverseLinkHoverColor.value = '#ffffff'

    colors.value.linkColor.value = colors.value.brandPrimaryLightest.value
    colors.value.linkHoverColor.value = colors.value.brandPrimaryDarker.value

    colors.value.inputBorderFocus.value = colors.value.brandPrimary.value

    colors.value.brandDanger.value = colorFunctions.lighten(colorFunctions.mix(color, '#c42033', 30), 60)
    colors.value.brandWarning.value = colorFunctions.lighten(colorFunctions.mix(color, '#f1e869', 30), 80)
    colors.value.brandModerate.value = colorFunctions.lighten(colorFunctions.mix(color, '#8B6BFF', 30), 60)
    colors.value.brandLow.value = colorFunctions.lighten(colorFunctions.mix(color, '#9698A4', 30), 60)
    colors.value.brandSuccess.value = colorFunctions.lighten(colorFunctions.mix(color, '#7eb64d', 30), 60)
    colors.value.brandInfo.value = colorFunctions.lighten(colorFunctions.mix(color, '#2e8cca', 30), 80)

    colors.value.brandDangerDarker.value = colorFunctions.lighten(colorFunctions.mix(color, '#c42033', 30), 50)
    colors.value.brandWarningDarker.value = colorFunctions.lighten(colorFunctions.mix(color, '#f1e869', 30), 70)
    colors.value.brandModerateDarker.value = colorFunctions.lighten(colorFunctions.mix(color, '#8B6BFF', 30), 50)
    colors.value.brandLowDarker.value = colorFunctions.lighten(colorFunctions.mix(color, '#9698A4', 30), 50)
    colors.value.brandSuccessDarker.value = colorFunctions.lighten(colorFunctions.mix(color, '#7eb64d', 30), 50)
    colors.value.brandInfoDarker.value = colorFunctions.lighten(colorFunctions.mix(color, '#2e8cca', 30), 70)

    colors.value.btnSuccessBg.value = colors.value.brandSuccessDarker.value
    colors.value.btnInfoBg.value = colors.value.brandInfoDarker.value
    colors.value.btnWarningBg.value = colors.value.brandWarningDarker.value
    colors.value.btnDangerBg.value = colors.value.brandDangerDarker.value

    colors.value.stateSuccessBg.value = colorFunctions.lighten(colors.value.brandSuccess.value, 85)
    colors.value.stateInfoBg.value = colorFunctions.lighten(colors.value.brandInfo.value, 85)
    colors.value.stateWarningBg.value = colorFunctions.lighten(colors.value.brandWarning.value, 90)
    colors.value.stateDangerBg.value = colorFunctions.lighten(colors.value.brandDanger.value, 90)

    colors.value.colorDarkest.value = colorFunctions.lighten(color, 20)
    colors.value.colorDarker.value = colorFunctions.lighten(color, 20)
    colors.value.colorDark.value = colorFunctions.lighten(color, 20)
    colors.value.colorDisabled.value = colorFunctions.lighten(color, 20)
    colors.value.colorLight.value = colorFunctions.lighten(color, 20)
    colors.value.colorLighter.value = colorFunctions.lighten(color, 20)
    colors.value.colorLightest.value = colorFunctions.lighten(color, 20)
    colors.value.colorAccent.value = colorFunctions.lighten(color, 20)
    colors.value.colorAccentLight.value = colorFunctions.lighten(color, 20)
    colors.value.colorAccentLightest.value = colorFunctions.lighten(color, 20)


    for (const color in colors.value) {
        root.style.setProperty(colors.value[color].name, colors.value[color].value);
        editor.value[color].value = colors.value[color].value
    }

    modalOpen.value = false

}

const saveTheme = async () => {

    const hermes = {}

    for (const color in colors.value) {
        hermes[color] = colors.value[color].value
    }

    window.electronAPI.saveTheme(hermes)

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

.e-modal{
    position: absolute;
    z-index: 1500;
}
</style>