<script setup>
import { ref, computed, watch, reactive } from "vue";
import BaseButton from "../base/BaseButton.vue";

const props = defineProps({
  data: Array,
  columns: Array,
  defaultSort: {
    type: Object,
    default: null,
  },
});

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";

const currentPage = ref(1);
const sorting = ref(props.defaultSort ? [props.defaultSort] : []);
const filter = ref("");
const rowSelection = ref({});
const emit = defineEmits(["onrowSelected", "addBtnClicked"]);

const tableOptions = reactive({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },

  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      // need to find a way to reset pagination along with filtering

      // if (filter.value != "") {
      //   table.setPageIndex(0);
      //   currentPage.value = 1;
      // }

      return filter.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },

  // need to find a way to default sort with page load itself

  // disableSortRemove: true,
  // defaultCanSort: true,

  enableRowSelection: true,
  enableMultiRowSelection: false,
  sortDescFirst: true,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onRowSelectionChange: (updateOrValue) => {
    rowSelection.value =
      typeof updateOrValue === "function"
        ? updateOrValue(rowSelection.value)
        : updateOrValue;
    emit("onrowSelected", table.getState().rowSelection);
  },

  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;

    resetPagination();
  },
  initialState: {
    pagination: {
      pageSize: 10,
    },
  },
});
const table = useVueTable(tableOptions);

const resetPagination = () => {
  table.setPageIndex(0);
  currentPage.value = 1;
};
const getStartIndex = computed(() => {
  const { pageIndex, pageSize } = table.getState().pagination;
  return pageIndex + 1 === 1 ? pageIndex + 1 : pageIndex * pageSize + 1;
});

const getEndIndex = computed(() => {
  const { pageIndex, pageSize } = table.getState().pagination;

  if (pageSize * (pageIndex + 1) > table.getFilteredRowModel().rows.length) {
    return table.getFilteredRowModel().rows.length;
  }
  return pageSize * (pageIndex + 1);
});

const paginateNav = (page) => {
  currentPage.value = page;
  table.setPageIndex(page - 1);
};

const paginateNext = () => {
  if (table.getCanNextPage()) {
    currentPage.value = currentPage.value + 1;
    table.nextPage();
  }
};

const paginatePrev = () => {
  if (table.getCanPreviousPage()) {
    currentPage.value = currentPage.value - 1;
    table.previousPage();
  }
};
const getSortingClass = (header) => {
  const isAsc = header.column.getIsSorted() === 'asc';
  const isDesc = header.column.getIsSorted() === 'desc';
  const isDisabled = header.column.getCanSort() == !true;

  // Determine which sorting class should be applied
  if (isAsc) {
    return 'sorting_asc';
  } else if (isDesc) {
    return 'sorting_desc';
  } else if (isDisabled) {
    return 'sorting_disabled';
  } else {
    return 'sorting';
  }
};
</script>
<template>
  <div class="dataTables_wrapper no-footer">
    <div class="row">
      <div class="col-sm-12 col-md-6"></div>
      <div class="col-sm-12 col-md-6">
        <div class="dataTables_filter">
          <label>
            <i class="fa fa-search dt-search text-muted"></i>
            <input
              type="search"
              class=""
              placeholder="Search"
              v-model="filter"
            />
          </label>

          <BaseButton
            title="Add"
            variant="add"
            @handleClick="emit('addBtnClicked')"
            data-bs-toggle="modal"
          >
            <i class="fa fa-plus"></i>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="">
      <div class="table-responsive">
        <table class="table dataTable no-footer" role="grid">
          <thead>
            <tr
              role="row"
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
            >
              <th
                v-for="header in headerGroup.headers"
                :key="header.id"
                scope="col"
                @click="header.column.getToggleSortingHandler()?.($event)"
                rowspan="1"
                colspan="1"
                
                aria-label=""
                :class="getSortingClass(header)"
              >
              {{ console.log(header.column.getIsSorted(),"header") }}
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              role="row"
              :class="{
                odd: row.id % 2 == 0,
                even: row.id % 2 !== 0,
              }"
              v-for="row in table.getRowModel().rows"
              :key="row.id"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                :class="[
                  cell.column.columnDef.meta?.cellClassName || '',
                  {
                    sorting_1:
                      cell.column.getIsSorted() === 'asc' ||
                      cell.column.getIsSorted() === 'desc',
                  },
                ]"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-5">
        <div
          class="dataTables_info"
          id="myPatients-data-table_info"
          role="status"
          aria-live="polite"
        >
          Showing {{ getStartIndex }} to {{ getEndIndex }} of
          {{ table.getFilteredRowModel().rows.length }} entries
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <div
          class="dataTables_paginate paging_simple_numbers"
          id="myPatients-data-table_paginate"
        >
          <!-- need to add class for disabled -->
          <a
            class="paginate_button previous"
            data-dt-idx="0"
            :class="{ disabled: !table.getCanPreviousPage() }"
            :disabled="!table.getCanPreviousPage()"
            tabindex="0"
            @click="paginatePrev"
          >
            Previous
          </a>
          <span>
            <a
              class="paginate_button"
              :class="{ current: page == currentPage }"
              v-for="page in table.getPageCount()"
              :key="page"
              data-dt-idx="1"
              @click="paginateNav(page)"
              tabindex="0"
            >
              {{ page }}
            </a>
          </span>
          <a
            class="paginate_button next"
            :class="{ disabled: !table.getCanNextPage() }"
            data-dt-idx="4"
            tabindex="0"
            :disabled="!table.getCanNextPage()"
            @click="paginateNext"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.delete-wrapper {
  padding: auto 0px;
}

.delete-wrapper > div {
  width: 12px;
}

/* .delete-icon {
  display: none;
} */

.action-buttons {
  width: 170px;
}

.action-buttons .action-btn-container {
  display: flex;
  gap: 0.5rem;
  min-width: 155px;
}

.action-buttons .btn.action-btn {
  width: 70px;
}
.action-buttons .btn-primary:focus {
  background: transparent;
  border-color: #0168fa;
}
table.dataTable {
  border: 1px solid rgba(72, 94, 144, 0.16);
}
table.dataTable.no-footer {
  border-bottom-color: rgba(72, 94, 144, 0.16);
}
table.dataTable thead th,
table.dataTable thead td {
  border-top-width: 0;
  border-bottom-width: 0;
  padding: 8px 10px;
  font-weight: 500;
  font-size: inherit;
}
table.dataTable thead .sorting_asc,
table.dataTable thead .sorting_desc {
  background-image: none;
  background-color: #eceff3;
  position: relative;
}
table.dataTable thead .sorting_asc::after,
table.dataTable thead .sorting_desc::after {
  font-family: "Ionicons";
  font-size: 11px;
  position: absolute;
  line-height: 0;
  top: 50%;
  right: 10px;
}
table.dataTable thead .sorting_asc::after {
  content: "\f3d8";
}
table.dataTable thead .sorting_desc::after {
  content: "\f3d0";
}
table.dataTable thead .sorting {
  background-image: none;
  position: relative;
}
table.dataTable thead .sorting::before,
table.dataTable thead .sorting::after {
  font-family: "Ionicons";
  font-size: 11px;
  position: absolute;
  line-height: 0;
  right: 10px;
}
table.dataTable thead .sorting::before {
  content: "\f3d8";
  top: 40%;
}
table.dataTable thead .sorting::after {
  content: "\f3d0";
  top: 60%;
}
table.dataTable tbody td.sorting_1 {
  background-color: #f3f4f7;
}

</style>
