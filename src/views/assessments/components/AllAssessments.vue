<template>
      <DataTable
   v-if="allAssessments.length > 0"
    :data="allAssessments"
    :columns="ASSESSMENT_COLUMNS"
    :defaultSort="{ id: 'type', asc: true }"
    @addBtnClicked="handleAdd"
  />

    <BaseProgressLoader v-else/>
</template>

<script setup lang="jsx">
import DataTable from "@/components/datatable/DataTable.vue";
import people from "@/utils/mockDataPeople.json";
import { ref, computed, onMounted } from "vue";
import { getAllAssessments } from "@/services/provider/dashboard/index.js";
import BaseProgressLoader from "@/components/base/BaseProgressLoader.vue";


const allAssessments = ref([]);
const ASSESSMENT_COLUMNS = [
  {
    accessorKey: "name",
    header: "Assessment Name",
  },

  {
    id: "type",
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      //create map
      if (row.original.type == "functionalTest") {
        return "Functional Test";
      }
      if (row.original.type == "rom") {
        return "Range of Motion";
      }
      if (row.original.type == "exercise") {
        return "Exercise";
      }
      if (row.original.type == "form") {
        return "PROM";
      }

      return "";
    },
  },
];

const handleAdd = () => {
};

const handleGetallAssessments = async () => {
  try {
    allAssessments.value = await getAllAssessments();
  } catch (error) {}
};

onMounted(() => {
  handleGetallAssessments();
});

</script>
