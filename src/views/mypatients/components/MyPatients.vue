<script setup lang="jsx">
import axios from "axios";
import { storeToRefs } from 'pinia'

import DeleteIcon from "@/assets/img/delete.svg";

import DataTable from "@/components/datatable/DataTable.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseProgressLoader from "@/components/base/BaseProgressLoader.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import DataCheckbox from "@/components/datatable/DataCheckbox.vue";

import people from "@/utils/mockDataPeople.json";
import { BASE_URL, APP_URL } from "@/utils/config";

import { ref, computed, onMounted } from "vue";
import { getfromLocalstorage } from "@/services/helpers";
import {
  getAllpatients,
  editOrDeletePatient,
} from "@/services/provider/dashboard";

import { useModalStore } from "../../../store/modalStore.js";

const selectedRow = ref(null);
const myallPatients = ref([]);
const patientsRequireActiveSubscription = ref(false);

const store = useModalStore();
const { showModal, modalStyle, patient, typeofModal } = storeToRefs(store);
const { handleClose, handleAddEdit } = store;

const handleGetallPatients = async () => {
  try {
    myallPatients.value = await getAllpatients();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  handleGetallPatients();
});

const handleSubmit = () => {
  switch (typeofModal.value) {
    case "Add Patient":
      console.log("Patient Added");
      handleClose();
      break;
    case "Edit Patient":
      // editOrDeletePatient(true,patient)
      handleClose();
      break;
    case "Delete Patient":
      // editOrDeletePatient(false,patient)
      handleClose();
      break;
    default:
      // Handle unexpected case or provide a default action
      console.error(`Unexpected typeofModal value: ${typeofModal.value}`);
  }
};

const MY_PATIENT_COLUMNS = [
  {
    id: "select",
    accessorKey: "select",
    header: " ",
    enableSorting: false,
    cell: ({ row }) => {
      return (
        <div>
          <DataCheckbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          ></DataCheckbox>
        </div>
      );
    },
  },
  {
    id: "firstName",
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: (data) => {
      if (data.getValue()) return data.getValue();
      else return "";
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: (data) => {
      if (data.getValue()) return data.getValue();
      else return "";
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    id: "actions",
    header: " ",
    enableSorting: false,
    meta: {
      cellClassName: "action-buttons",
    },
    cell: ({ row }) => {
      return (
        <div className="action-btn-container">
          <BaseButton variant={"action"}>Details</BaseButton>
          <BaseButton
            variant={"action"}
            onClick={() => handleAddEdit(row.original, "Edit Patient")}
            data-bs-toggle="modal"
          >
            Edit
          </BaseButton>
        </div>
      );
    },
  },
  {
    id: "delete",
    header: " ",
    enableSorting: false,
    meta: {
      cellClassName: "delete-wrapper",
    },

    cell: ({ row }) => {
      return (
        <div>
          {selectedRow.value == row.id && (
            <img
              class="delete-icon"
              src={DeleteIcon}
              onClick={() => handleAddEdit(row.original, "Delete Patient")}
              data-bs-toggle="modal"
            />
          )}
        </div>
      );
    },
  },
];

const showDeleteIcon = (rowId) => {
  selectedRow.value = Object.keys(rowId)[0];
};

</script>
<template>
  <DataTable
    v-if="myallPatients.length > 0"
    :data="myallPatients"
    :columns="MY_PATIENT_COLUMNS"
    :defaultSort="{ id: 'firstName', asc: true }"
    @onrowSelected="showDeleteIcon"
    @addBtnClicked="() => handleAddEdit(null, 'Add Patient')"
  />

  <BaseProgressLoader v-else />

  <BaseModal
    :centered="modalStyle"
    :showModal="showModal"
    :submit-type="typeofModal"
    @closeClick="handleClose"
    @submitClick="handleSubmit"
  >
    <h6 v-if="typeofModal == 'Add Patient' || typeofModal == 'Edit Patient'">
      <div class="demo-forms form">
        <div
          class="row form-group"
          style="padding-left: 15px; padding-right: 15px"
        >
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="First Name"
            required
            label="First Name"
            v-model="patient.firstName"
            labelClass="control-label"
          />
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Last Name"
            required
            label="Last Name"
            v-model="patient.lastName"
            labelClass="control-label"
          />
        </div>
        <div
          class="row form-group"
          style="padding-left: 15px; padding-right: 15px"
        >
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Email"
            :disabled="typeofModal == 'Edit Patient'"
            required
            label="Email"
            type="email"
            v-model="patient.firstName"
            labelClass="control-label"
          />
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Phone"
            label="Phone"
            type="tel"
            v-model="patient.phone"
            labelClass="control-label"
          />
        </div>
        <div
          class="row form-group"
          style="padding-left: 15px; padding-right: 15px"
        >
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="MM/DD/YYYY"
            required
            label="Date of Birth"
            v-model="patient.dateOfBirth"
            labelClass="control-label"
          />
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Last Name"
            required
            label="Gender"
            v-model="patient.gender"
            labelClass="control-label"
          >
            <template #others>
              <select v-model="patient.gender" class="form-control" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="notSpecified">Not Specified</option>
              </select>
            </template>
          </BaseInput>
        </div>

        <div
          class="row form-group"
          style="padding-left: 15px; padding-right: 15px"
        >
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Last Name"
            label="Height"
            v-model="patient.lastName"
            labelClass="control-label"
          >
            <template #others>
              <div class="row" style="">
                <div class="input-group col-6">
                  <input
                    v-model.number="patient.height.feet"
                    type="number"
                    min="1"
                    max="10"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">feet</span>
                  </div>
                </div>
                <div class="input-group col-6">
                  <input
                    v-model.number="patient.height.inches"
                    type="number"
                    min="0"
                    max="11"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">inches</span>
                  </div>
                </div>
              </div>
            </template>
          </BaseInput>

          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            label="Weight"
            labelClass="control-label"
          >
            <template #others>
              <div class="input-group">
                <input
                  v-model.number="patient.weight"
                  type="number"
                  min="1"
                  max="300"
                  class="form-control"
                />
                <div class="input-group-append">
                  <span class="input-group-text">lbs</span>
                </div>
              </div>
            </template>
          </BaseInput>
        </div>
      </div>
    </h6>

    <h6 v-if="typeofModal == 'Delete Patient'">
      Are you sure you want to delete this patient?
    </h6>
  </BaseModal>
</template>
