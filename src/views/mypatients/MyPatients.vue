<script setup lang="jsx">
import DeleteIcon from "@/assets/img/delete.svg";
import DataTable from "@/components/datatable/DataTable.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import DataCheckbox from "@/components/datatable/DataCheckbox.vue";

import DashboardLayout from "@/layouts/DashboardLayout.vue";
import people from "@/utils/mockDataPeople.json";

import { ref } from "vue";
import { h } from "vue";
import { format } from "date-fns";

const selectedRow = ref(null);
const patientId = ref({});
const mode = ref();

const test = (patient) => {
  mode.value = "Edit";
  patientId.value = patient;
  console.log(mode.value);
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
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: (info) => format(new Date(info.getValue()), "MMM d, yyyy"),
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
          <BaseButton variant={"action"} onClick={test}>
            Details
          </BaseButton>
          <BaseButton variant={"action"} onClick={() => test(row.original)}>
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
      if (selectedRow.value == row.id) {
        patientId.value = row.original;
        console.log(patientId.value, "patientId.value");
      }
      return (
        <div>
          {selectedRow.value == row.id && (
            <img class="delete-icon" src={DeleteIcon} onclick="" />
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
  <DashboardLayout>
    <div class="row row-xs mg-t-10" style="margin-left: 5px">
      <h4 class="mg-b-0">My Patients</h4>

      <DataTable
        :data="people"
        :columns="MY_PATIENT_COLUMNS"
        :defaultSort="{ id: 'firstName', asc: true }"
        @onrowSelected="showDeleteIcon"
      />
    </div>
  </DashboardLayout>
</template>
