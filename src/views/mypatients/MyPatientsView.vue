<script setup lang="jsx">
import DeleteIcon from "@/assets/img/delete.svg";
import DataTable from "@/components/datatable/DataTable.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import DataCheckbox from "@/components/datatable/DataCheckbox.vue";

import DashboardLayout from "@/layouts/DashboardLayout.vue";
import people from "@/utils/mockDataPeople.json";

import { ref,computed,onMounted } from "vue";
import { useRoute } from "vue-router";

import { format } from "date-fns";


const route = useRoute();
const selectedRow = ref(null);
const patientId = ref({});
const typeofModal = ref();
const showModal = ref();
const patientsRequireActiveSubscription = ref(false);
const patient=ref({
   height: {}
})


const handleAddEdit = (patient, type) => {
  typeofModal.value = `${type} Patient`;
  showModal.value = true;
  patientId.value = patient;
  document.body.classList.add('modal-open')
};

const handleDelete = (patient) => {
  handleAddEdit(patient, "Delete");
};


const handleClose = () => {
  typeofModal.value=null
  showModal.value = false;
   document.body.classList.remove('modal-open')

};


const handleSubmit = () => {
 switch (typeofModal.value) {
    case "Add Patient":
      console.log("Patient Added");
      handleClose()
      break;
    case "Edit Patient":
      console.log("Patient Edited");
      handleClose()
      break;
    case "Delete Patient":
      console.log("Patient Deleted");
      handleClose()
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
          <BaseButton variant={"action"}   >
            Details
          </BaseButton>
          <BaseButton variant={"action"} onClick={() => handleAddEdit(row.original,"Edit")} data-bs-toggle="modal">
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
            <img class="delete-icon" src={DeleteIcon} onClick={() => handleDelete(row.original)} data-bs-toggle="modal" />
          )}
        </div>
      );
    },
  },
];



const showDeleteIcon = (rowId) => {
  selectedRow.value = Object.keys(rowId)[0];
};

const modalStyle = computed(() =>typeofModal.value == "Delete Patient" ? true : false)

// onMounted(() => {
  
//       $(function(){
//         'use strict'

//         $('#reusemodal').on('show.bs.modal', function (event) {

//           var animation = $(event.relatedTarget).data('animation');
//           console.log(object);
//           $(this).addClass(animation);
//         })

//         // hide modal with effect
//         $('#reusemodal').on('hidden.bs.modal', function (e) {
//           $(this).removeClass (function (index, className) {
//               return (className.match (/(^|\s)effect-\S+/g) || []).join(' ');
//           });
//         });

//       });
    
// }
// )

</script>

<template>
  <div class="row row-xs mg-t-10" style="margin-left: 5px">
    <h4 class="mg-b-0">{{ route.meta.header }}</h4>

    <DataTable
      :data="people"
      :columns="MY_PATIENT_COLUMNS"
      :defaultSort="{ id: 'firstName', asc: true }"
      @onrowSelected="showDeleteIcon"
      @addBtnClicked="() => handleAddEdit(null, 'Add')"/>
  </div>

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
            :disabled="typeofModal=='Edit Patient'"
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
