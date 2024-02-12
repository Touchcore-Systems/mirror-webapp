import { storeToRefs,createPinia } from "pinia";


import { useModalStore } from "@/store/modalStore";
import DataCheckbox from "@/components/datatable/DataCheckbox.vue";
import BaseButton from "@/components/base/BaseButton.vue";


const pinia = createPinia();
const store = useModalStore(pinia);

const {
  selectedRow } = storeToRefs(store);

const { handleAddEdit } = store;
export const MY_PATIENT_COLUMNS = [
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