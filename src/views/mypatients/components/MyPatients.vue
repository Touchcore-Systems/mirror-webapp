<script setup lang="jsx">

import DeleteIcon from "@/assets/img/delete.svg";
import BaseButton from '@/components/base/BaseButton.vue';
import BaseProgressLoader from "@/components/base/BaseProgressLoader.vue";
import DataCheckbox from "@/components/datatable/DataCheckbox.vue";
import DataTable from "@/components/datatable/DataTable.vue";
import MyPatientsModal from './MyPatientsModal.vue';



import { computed, onMounted, ref, watch } from "vue";


import { useModalStore } from "@/store/modalStore.js";
import { useProviderStore } from "@/store/providerStore";
import { storeToRefs } from "pinia";

const selectedRow = ref(null);

const patientsRequireActiveSubscription = ref(false);

const store = useModalStore();
const {  handleAddEdit } = store;

const providerStore = useProviderStore();
const {myallPatients}=storeToRefs(providerStore)
const {  handleGetallPatients } = providerStore;



onMounted(() => {
  handleGetallPatients();
});


// const reactivePatients = ref([]);

// watch(myallPatients, (newPatients) => {
//   reactivePatients.value = [...newPatients];
// });


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
  <MyPatientsModal />
</template>
