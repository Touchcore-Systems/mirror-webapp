<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: Array,
  columns: Array,
})

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/vue-table'

const data = ref(props.data)

const sorting = ref([])
const filter = ref('')

const table = useVueTable({
  data: data.value,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),

  state: {
    get sorting() {
      return sorting.value
    },
    get globalFilter() {
      return filter.value
    },
  },
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue
  },
  initialState: {
    pagination: {
      pageSize: 10,
    },
  },
})

const currentPage = ref(1)

const getStartIndex = computed(() => {
  const { pageIndex, pageSize } = table.getState().pagination;
  return (pageIndex + 1) === 1 ? pageIndex + 1 : (pageIndex * pageSize) + 1;
})
const getEndIndex = computed(() => {
  const { pageIndex, pageSize } = table.getState().pagination;
  return pageSize * (pageIndex + 1);
})

const paginateNav = (page) => {
  currentPage.value = page
  table.setPageIndex(page - 1)
}
const paginateNext = () => {
  currentPage.value = currentPage.value + 1
  table.nextPage()
}

const paginatePrev = () => {
  currentPage.value = currentPage.value - 1
  table.previousPage()
}
</script>

<template>
     <input
              type="text"
              placeholder="Search"
              v-model="filter"
            /> 

  <table >
            <thead>
              <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  scope="col"
                  @click="header.column.getToggleSortingHandler()?.($event)">
                  <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
                  {{ { asc: ' ↑', desc: '↓' }[header.column.getIsSorted()] }}
                </th>
              </tr>
            </thead>
  
            <tbody >
              <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                >
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </td>
              </tr>
            </tbody>
          </table> 
  Pagination and Page Size Controls 
  <div style="margin-top: 2rem;">
        Page {{ table.getState().pagination.pageIndex + 1 }} of {{ table.getPageCount() }} -
        {{ table.getFilteredRowModel().rows.length }} results
      </div>
  
      <div style="margin-top: 2rem; display: flex; gap: 1rem;">
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          @click="table.setPageSize(5)"
          :disabled="table.getState().pageSize === 5"
        >
          Page Size 5
        </button>
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          @click="table.setPageSize(10)"
          :disabled="table.getState().pageSize === 10"
        >
          Page Size 10
        </button>
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          @click="table.setPageSize(20)"
          :disabled="table.getState().pageSize === 20"
        >
          Page Size 20
        </button>
      </div>
  
      <div style="margin-top: 2rem; display: flex; gap: 1rem;">
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          @click="table.setPageIndex(0)"
          :disabled="table.getState().pageIndex === 0"
        >
          First page
        </button>
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          @click="table.setPageIndex(table.getPageCount() - 1)"
          :disabled="table.getState().pageIndex === table.getPageCount() - 1"
        >
          Last page
        </button>
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          Prev page
        </button>
        <button
          style="border: 1px solid #cbd5e0; border-radius: 0.25rem; padding: 0.5rem 1rem; cursor: pointer; user-select: none;"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Next page
        </button>
      </div> 
</template>