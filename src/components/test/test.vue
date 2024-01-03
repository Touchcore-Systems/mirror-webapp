<template>
    <div id="myPatients-data-table_wrapper" class="dataTables_wrapper no-footer">
        <div class="row">
            <div class="col-sm-12 col-md-6"></div>
            <div class="col-sm-12 col-md-6">
                <div id="myPatients-data-table_filter" class="dataTables_filter">
                    <label>
                        <i class="fa fa-search dt-search text-muted"></i>
                        <input type="search" class="" placeholder="Search" aria-controls="myPatients-data-table">
                    </label>
                    <a href="#add-edit-modal" title="Add" onclick="app.openAddEditModal('add')"
                        class="pull-right btn btn-primary btn-icon btn-add-record" data-toggle="modal">
                        <i class="fa fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="">
            <div class="table-responsive">
                <table id="myPatients-data-table" class="table dataTable no-footer" role="grid"
                    aria-describedby="myPatients-data-table_info">
                    <thead>
                        <tr role="row">
                            <th class="sorting_disabled" rowspan="1" colspan="1" aria-label=""></th>
                            <th class="sorting_asc" tabindex="0" aria-controls="myPatients-data-table" rowspan="1"
                                colspan="1" aria-sort="ascending"
                                aria-label="First Name: activate to sort column descending">First Name</th>
                            <th class="sorting" tabindex="0" aria-controls="myPatients-data-table" rowspan="1" colspan="1"
                                aria-label="Last Name: activate to sort column ascending">Last Name</th>
                            <th class="sorting" tabindex="0" aria-controls="myPatients-data-table" rowspan="1" colspan="1"
                                aria-label="Email: activate to sort column ascending">Email</th>
                            <th class="sorting" tabindex="0" aria-controls="myPatients-data-table" rowspan="1" colspan="1"
                                aria-label="Phone: activate to sort column ascending">Phone</th>
                            <th class="sorting" tabindex="0" aria-controls="myPatients-data-table" rowspan="1" colspan="1"
                                aria-label="Status: activate to sort column ascending">Status</th>
                            <th class="action-buttons sorting_disabled" rowspan="1" colspan="1" aria-label=""></th>
                            <th class="delete-wrapper sorting_disabled" rowspan="1" colspan="1" aria-label=""></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr role="row" class="odd">
                            <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                            <td class="sorting_1">Aaron</td>
                            <td>James</td>
                            <td>aaranjames@mirrorar.io</td>
                            <td></td>
                            <td>Invited</td>
                            <td class=" action-buttons">
                                <div class="action-btn-container">
                                    <a href="patient-profile.html?patient_id=a26994ec-c42f-4112-8398-891a311082e7&amp;v=1.5.9"
                                        class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                    <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',13);"
                                        title="Edit Patient" data-toggle="modal"
                                        class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                                </div>
                            </td>
                            <td class=" delete-wrapper">
                                <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                        onclick="app.openDeleteModal('a26994ec-c42f-4112-8398-891a311082e7')"></div>
                            </td>
                        </tr>
                        <tr role="row" class="even">
                            <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                            <td class="sorting_1">Adam</td>
                            <td>Hermat</td>
                            <td>adamh23@mirrorar.io</td>
                            <td></td>
                            <td>Active</td>
                            <td class=" action-buttons">
                                <div class="action-btn-container">
                                    <a href="patient-profile.html?patient_id=eaab598e-6118-4c24-81e0-7389c3e65e1c&amp;v=1.5.9"
                                        class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                    <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',6);"
                                        title="Edit Patient" data-toggle="modal"
                                        class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                                </div>
                            </td>
                            <td class=" delete-wrapper">
                                <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                        onclick="app.openDeleteModal('eaab598e-6118-4c24-81e0-7389c3e65e1c')"></div>
                            </td>
                        </tr>
                        <tr role="row" class="odd">
                            <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                            <td class="sorting_1">Anaé</td>
                            <td>Jóhnathón</td>
                            <td>test-anae-d4sf564@mirrorar.io</td>
                            <td></td>
                            <td>Invited</td>
                            <td class=" action-buttons">
                                <div class="action-btn-container">
                                    <a href="patient-profile.html?patient_id=fa01de1d-70aa-410b-aca8-845c62f543ea&amp;v=1.5.9"
                                        class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                    <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',11);"
                                        title="Edit Patient" data-toggle="modal"
                                        class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                                </div>
                            </td>
                            <td class=" delete-wrapper">
                                <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                        onclick="app.openDeleteModal('fa01de1d-70aa-410b-aca8-845c62f543ea')"></div>
                            </td>
                        </tr>
                        <tr role="row" class="even">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Anya</td>
                        <td>Forger</td>
                        <td>anyaf23@mirrorar.io</td>
                        <td></td>
                        <td>Active</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=0740ff01-3829-4aee-9ba1-6ee4467ba5db&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',7);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('0740ff01-3829-4aee-9ba1-6ee4467ba5db')"></div>
                        </td>
                    </tr>
                    <tr role="row" class="odd">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Arham</td>
                        <td>Cohn</td>
                        <td>arhamc@mirrorar.io</td>
                        <td></td>
                        <td>Invited</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=89c291dd-f7fe-44eb-a21f-0eec2034f348&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',14);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('89c291dd-f7fe-44eb-a21f-0eec2034f348')"></div>
                        </td>
                    </tr>
                    <tr role="row" class="even">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Arya</td>
                        <td>Stark</td>
                        <td>ask@mirrorar.io</td>
                        <td></td>
                        <td>Invited</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=23ab2328-5e04-4bce-b388-f80898df3d44&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',0);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('23ab2328-5e04-4bce-b388-f80898df3d44')"></div>
                        </td>
                    </tr>
                    <tr role="row" class="odd">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Asha</td>
                        <td>Darekar</td>
                        <td>ashad@touchcoresystems.com</td>
                        <td></td>
                        <td>Invited</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=ad00534d-517c-4e9d-9280-336448ff221e&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',1);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('ad00534d-517c-4e9d-9280-336448ff221e')"></div>
                        </td>
                    </tr>
                    <tr role="row" class="even">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Bilal</td>
                        <td>Shaikh</td>
                        <td>sbilal@mirrorar.io</td>
                        <td></td>
                        <td>Active</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=d8826706-8c78-442e-8c7a-4629400d5475&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',12);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('d8826706-8c78-442e-8c7a-4629400d5475')"></div>
                        </td>
                    </tr>
                    <tr role="row" class="odd">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Bill</td>
                        <td>Sheraton</td>
                        <td>bills@mirrorar.io</td>
                        <td></td>
                        <td>Active</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=b1be3fb9-2058-4820-bee4-e30fb3cf8805&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',8);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('b1be3fb9-2058-4820-bee4-e30fb3cf8805')"></div>
                        </td>
                    </tr>
                    <tr role="row" class="even">
                        <td><input type="checkbox" class="delete-checkbox" onclick="app.showDeleteIcon(this)"></td>
                        <td class="sorting_1">Conway</td>
                        <td>Mills</td>
                        <td>conwaym@mirrorar.io</td>
                        <td></td>
                        <td>Invited</td>
                        <td class=" action-buttons">
                            <div class="action-btn-container">
                                <a href="patient-profile.html?patient_id=1b96b695-e5ca-48e0-a132-e2906851e47d&amp;v=1.5.9"
                                    class="btn action-btn btn-xs btn-primary mg-r-3 patient-details">Details</a>
                                <a href="#add-edit-patient" onclick="app.openAddEditModal('edit',20);"
                                    title="Edit Patient" data-toggle="modal"
                                    class="btn btn-xs action-btn mg-r-3 btn-primary">Edit</a>

                            </div>
                        </td>
                        <td class=" delete-wrapper">
                            <div class=""><img class="delete-icon" src="assets/img/delete.svg"
                                    onclick="app.openDeleteModal('1b96b695-e5ca-48e0-a132-e2906851e47d')"></div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-md-5">
            <div class="dataTables_info" id="myPatients-data-table_info" role="status" aria-live="polite">Showing 1 to
                10 of 28 entries</div>
        </div>
        <div class="col-sm-12 col-md-7">
            <div class="dataTables_paginate paging_simple_numbers" id="myPatients-data-table_paginate">
                <a class="paginate_button previous disabled" aria-controls="myPatients-data-table" data-dt-idx="0"
                    tabindex="0" id="myPatients-data-table_previous">Previous</a>
                <span>
                    <a class="paginate_button current" aria-controls="myPatients-data-table" data-dt-idx="1"
                        tabindex="0">1</a>
                    <a class="paginate_button" aria-controls="myPatients-data-table" data-dt-idx="2" tabindex="0">2</a>
                    <a class="paginate_button" aria-controls="myPatients-data-table" data-dt-idx="3" tabindex="0">3</a>
                </span>
                <a class="paginate_button next" aria-controls="myPatients-data-table" data-dt-idx="4" tabindex="0"
                    id="myPatients-data-table_next">Next</a>
            </div>
        </div>
    </div>
</div></template>