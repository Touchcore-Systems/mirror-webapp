<template>
  
</template>

<script setup>
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

<style>

</style>