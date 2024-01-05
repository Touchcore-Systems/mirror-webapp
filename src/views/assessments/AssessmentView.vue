<script setup lang="jsx">
import DataTable from "@/components/datatable/DataTable.vue";
import people from "@/utils/mockDataPeople.json";

const ASSESSMENT_COLUMNS = [
  {
    
    accessorKey: "first_name",
    header: "Assessment Name",
  },

  {
     id:'type',
    accessorKey: "role",
    header: "Type",
  },
];

const handleAdd = () => {
  console.log("handle addd");
};


</script>
<template>
   <DataTable
        :data="people"
        :columns="ASSESSMENT_COLUMNS"
        :defaultSort="{ id: 'type', asc: true }"
        @addBtnClicked="handleAdd"
      />
</template>