<template>
    <div id="theme-search" class="container-fluid py-100">
        <h2 class="text-center text-4x m-b-lg sp-tagline-color">Select Theme</h2>
        <div><input type="checkbox" ng-model="c.isNewTheme"> <span>New</span></div>
        
        <div ng-if="c.isNewTheme == true" class="input-group">
            <input placeHolder="New Theme" type="color" class="form-control " ng-model="c.newTheme">
            <input type="text" class="form-control " ng-model="c.newThemeColor">
            <span class="input-group-btn">
                <button class="btn btn-neutral ">Start</button>
            </span>

        </div>

        <div ng-if="c.isNewTheme == false">
            <input placeHolder="Find Theme" type="text" class="form-control input-typeahead" ng-model="c.searchTerm"
                ng-change="c.findTheme()">

            <div class="relative">
                <ul class="theme-dropdown" ng-if="c.searchTerm != '' && c.themes.length == 0">
                    <li>No matches found</li>
                </ul>
                <ul class="theme-dropdown" ng-if="c.searchTerm != '' && c.themes.length > 0">
                    <li ng-repeat="theme  in c.themes">{{ theme.name }}</li>
                </ul>
            </div>
        </div>
    </div>


</template>