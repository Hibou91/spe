<template>
    <div>
        <div class=" container sp-container">
            <div class="flex-col sp-container-column">
                <SPanel>
                    <template #header>Placeholder</template>
                    <template #main>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </template>
                </SPanel>

                <SPanel>
                    <template #header>Showcase</template>
                    <template #main>
                        <div class="flex-col">
                            <div>
                                <h1>Title 01</h1>
                                <h2>Title 02</h2>
                                <h3>Title 03</h3>
                                <p class="card-text">Some <strong>quick example</strong> text to build on the card title
                                    and make up the bulk of
                                    the card's content.</p>
                                <a href="">Click me for more information</a>
                                <hr />
                            </div>
                            <div>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <label for="">Select box</label>
                                <select class="form-control" name="" id="">
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 2</option>
                                </select>
                            </div>

                            <div>
                                <label for="">Input</label>
                                <input class="form-control">
                            </div>

                            <div class="flex-col" style="gap:5px">
                                <!--<div class="alert alert-primary" role="alert">
                                    A simple primary alert—check it out!
                                </div>
                                <div class="alert alert-secondary" role="alert">
                                    A simple secondary alert—check it out!
                                </div> -->
                                <div class="alert alert-success" role="alert">
                                    A simple success alert—check it out!
                                </div>
                                <div class="alert alert-danger" role="alert">
                                    A simple danger alert—check it out!
                                </div>
                                <div class="alert alert-warning" role="alert">
                                    A simple warning alert—check it out!
                                </div>
                                <div class="alert alert-info" role="alert">
                                    A simple info alert—check it out!
                                </div>
                                <!--<div class="alert alert-light" role="alert">
                                    A simple light alert—check it out!
                                </div>
                                <div class="alert alert-dark" role="alert">
                                    A simple dark alert—check it out!
                                </div>-->
                            </div>

                            <div class="flex-row">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <!--<button type="button" class="btn btn-secondary">Secondary</button>-->
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>
                                <button type="button" class="btn btn-info">Info</button>
                                <!--<button type="button" class="btn btn-light">Light</button>
                                <button type="button" class="btn btn-dark">Dark</button>-->


                                <button type="button" class="btn btn-link">Link</button>

                            </div>

                        </div>

                    </template>
                </SPanel>


            </div>
            <div class="flex-col sp-container-column">
                <SPanel>
                    <template #header>My active items</template>
                    <template #main>
                        <div class="flex-col" style="gap:0;">
                            <div class="my-items-body">
                                <a class="activity-container b-b ng-scope">
                                    <div class="activity-title-container"><span class="activity-icon ng-scope has-icon"
                                            aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-check2-square"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                                <path
                                                    d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                                            </svg>
                                        </span><!-- end ngIf: data.showIcons == 'true' --> <span
                                            class="activity-title text-ellipsis text-ellipsis-one-line ng-binding"
                                            ec-multiline-ellipsis-tooltip=""
                                            ec-ellipsis-tooltip-title="Tasks">Tasks</span>
                                    </div>
                                    <div class="activity-count-container"><span
                                            class="activity-count ng-binding">7</span> <span aria-hidden="true"> >
                                        </span>
                                    </div>
                                </a>

                            </div>
                            <div class="my-items-body">
                                <a class="activity-container b-b ng-scope">
                                    <div class="activity-title-container"><span class="activity-icon ng-scope has-icon"
                                            aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-info-square"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path
                                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                            </svg>
                                        </span><!-- end ngIf: data.showIcons == 'true' --> <span
                                            class="activity-title text-ellipsis text-ellipsis-one-line ng-binding"
                                            ec-multiline-ellipsis-tooltip=""
                                            ec-ellipsis-tooltip-title="Tasks">Requests</span>
                                    </div>
                                    <div class="activity-count-container"><span
                                            class="activity-count ng-binding">0</span> <span aria-hidden="true"> </span>
                                    </div>
                                </a>

                            </div>
                            <div class="my-items-body">
                                <a class="activity-container b-b ng-scope">
                                    <div class="activity-title-container"><span class="activity-icon ng-scope has-icon"
                                            aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-ui-radios"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                            </svg>
                                        </span><!-- end ngIf: data.showIcons == 'true' --> <span
                                            class="activity-title text-ellipsis text-ellipsis-one-line ng-binding"
                                            ec-multiline-ellipsis-tooltip=""
                                            ec-ellipsis-tooltip-title="Tasks">Surveys</span>
                                    </div>
                                    <div class="activity-count-container"><span
                                            class="activity-count ng-binding">2</span> <span aria-hidden="true"> >
                                        </span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </template>
                </SPanel>
                <SPanel>
                    <template #header>Placeholder</template>
                    <template #main>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </template>
                </SPanel>
            </div>

        </div>

    </div>
</template>

<script setup>
import SPanel from './SPanel.vue';

</script>

<style scoped>
.sp-container {
    padding: var(--universap-gap);
    max-width: 100vw;
    display: flex;
    gap: var(--universap-gap);
    flex-direction: row;
}

.sp-container-column {
    max-width: calc(50% - 10px);
    min-width: 300px;
}

@media screen and (width <=900px) {
    .sp-container {
        padding: var(--universap-gap);
        max-width: 100vw;
        flex-direction: column;
    }

    .sp-container-column {
        max-width: calc(100% - 10px);
        min-width: 300px;
    }
}

.activity-container {
    cursor: pointer;
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    color: #181A1F;
    padding: 1rem 0;
}

.activity-title-container {
    display: flex;
    gap: 1.2rem;
    align-items: center;
}


.activity-icon {
    height: 2rem;
    width: 2rem;
    text-align: center;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--brand-primary-lightest);
    color: var(--brand-primary);
}
</style>