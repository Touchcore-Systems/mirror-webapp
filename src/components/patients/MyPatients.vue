<script setup lang="jsx">
import DeleteIcon from "../../assets/img/delete.svg";
import DashboardLayout from "../../layouts/DashboardLayout.vue";
import DataTable from "../datatable/DataTable.vue";
import BaseButton from "../base/BaseButton.vue";

import people from "../../utils/mockDataPeople.json";
import car from "../../utils/mockDataCars.json";

import { h } from "vue";
import { format } from "date-fns";
import DataCheckbox from "../datatable/DataCheckbox.vue";

const columnsPeople = [
  {
    id: "select",
    accessorKey: "select",
    header: " ",
    enableSorting: false,
    // cell: ({ row }) => {
    //   console.log(row.getIsSelected(),"Sttae");
    //   console.log(!row.getCanSelect(),"disabled");
    //   return h(DataCheckbox, {
    //     modelValue: row.getIsSelected(),
    //     disabled: !row.getCanSelect(),
    //     onCli: () => row.getToggleSelectedHandler()
    //   });
    // },

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
    // cell: ({ row }) => {
    //   return (
    //     <div className="px-1">
    //       <DataCheckbox
    //         checked={row.getIsSelected()}
    //         disabled={!row.getCanSelect()}
    //         onChange={row.getToggleSelectedHandler()}
    //       ></DataCheckbox>
    //     </div>
    //   )
    // },
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
  // {
  //   accessorFn: row => `${row.first_name} ${row.last_name}`,
  //   header: 'Name',
  // },
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   accessorKey: "title",
  //   header: "Title",
  // },
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
    cell: ({ row }) => {
      return (
        <div className="action-buttons">
          <div className="action-btn-container">
            <BaseButton variant={"action"}>Details</BaseButton>
            <BaseButton variant={"action"}>Edit</BaseButton>
          </div>
        </div>
      );
    },
  },
  {
    id: "delete",
    header: " ",
    cell: ({ row }) => {
      return (
        <div class="delete-wrapper">
         { false && <img  class="delete-icon" src={DeleteIcon} onclick="" />}
        </div>
      );
    },
  },
  // cell: ({ row }) => h(<a onclick="" title="Edit Patient"  class="btn ">Edit</a>),
  // cell: ({ row }) => h(BaseButton, { variant: "action" }, () => "Edit"),

  // cell: ({ row }) =>
  //   h(
  //     h("div", { class: "action-btn-container" }, [
  //       h(BaseButton, { variant: "action" }, () => "Details"),
  //       h(BaseButton, { variant: "action" }, () => "Edit"),
  //     ])
  //   ),

  // class: "action-buttons",
];

const columnsCars = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
  },
  {
    accessorKey: "car_make",
    header: "Car Make",
  },
  {
    accessorKey: "car_model",
    header: "Car Model",
  },
  {
    accessorKey: "car_year",
    header: "Year",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: "actions",
    cell: ({ row }) => h(BaseButton),
  },
];
</script>

<template>
  <DashboardLayout>
    <div  class="row row-xs mg-t-10" style="margin-left: 5px">
      <h4 class="mg-b-0">My Patients</h4>

      <!-- ##include dataTable.html({"root":"myPatients"}) -->
      <DataTable
        :data="people"
        :columns="columnsPeople"
        :defaultSort="{ id: 'firstName', asc: true }"
      />

      <!-- <DataTable :data="car" :columns="columnsCars"/> -->
    </div>
  </DashboardLayout>
</template>
