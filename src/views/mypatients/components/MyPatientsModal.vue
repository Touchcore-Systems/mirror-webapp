<script setup>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import BaseLoader from '../../../components/base/BaseLoader.vue';

import { useModalStore } from "@/store/modalStore.js";
import { useToastStore } from "@/store/toastStore.js";

import { storeToRefs } from "pinia";
import { ref, watch, computed } from "vue";
import { editOrDeletePatient } from "../../../services/provider/dashboard";
import DatePicker from "../../../components/elements/DatePicker.vue";
import { useForm } from "vee-validate";
import { useApiStore } from "@/store/apiStore";
import { myPatientSchema } from "../../../components/form/schema/schemas.js";
import TestBaseInput from "../../../components/base/TestBaseInput.vue";
import ModalFooter from "../../../components/modal/ModalFooter.vue";
import BaseButton from "../../../components/base/BaseButton.vue";

const store = useModalStore();
const { showModal, patient, typeofModal } = storeToRefs(store);
const { handleClose } = store;

const toastStore = useToastStore();
const { toastContent, toastTitle } = storeToRefs(toastStore);
const { showToast } = toastStore;

const apiStore = useApiStore();
const { apiLoading } = storeToRefs(apiStore);
function patientDob() {
  if (patient.value.email !== undefined) {
    if (patient.value.dateOfBirth !== undefined) {
      console.log("patient.value.dateOfBirth exists");
      return new Date(patient.value.dateOfBirth);
    } else {
      console.log("patient.value.dateOfBirth doesnot exists");
      return null;
    }
  }
  console.log("patient.value doesnot exists");
  return null;
}
const date = ref(patientDob());

const { handleSubmit, setValues, defineField, errors } = useForm({
  validationSchema: myPatientSchema,
});



watch(patient, () => {
  date.value = patientDob();
  console.log(date.value,"hoiii");
  if (patient.value) {
    
    setValues({
      firstName: patient.value.firstName || "",
      lastName: patient.value.lastName || "",
      email: patient.value.email || "",
      phone: patient.value.phone || "",
      gender: patient.value.gender || "",
      heightFeet: (patient.value.height && patient.value.height.feet) || null,
      // dateOfBirth:patient.value.dateOfBirth ?? null,
      heightInches:
        (patient.value.height && patient.value.height.inches) || null,
      weightLbs: patient.value.weight || null,
    });
  }
});

const [gender, genderAttrs] = defineField("gender");
const [heightFeet, heightFeetAttrs] = defineField("heightFeet");
const [heightInches, heightInchesAttrs] = defineField("heightInches");
const [weightLbs, weightLbsAttrs] = defineField("weightLbs");

const submitHandler = async (e) => {
  console.log("kkooiiii");
  // try {
  //   toastTitle.value = typeofModal.value;
  //   patient.value.dateOfBirth = new Date(date.value);
  //   console.log(patient.value.dateOfBirth, "Date of Birth Value");
  //   switch (typeofModal.value) {
  //     case "Add Patient":
  //       toastContent.value = `Succesfullly Added ${patient.value.firstName}'s Details`;
  //       await handleClose();
  //       break;
  //     case "Edit Patient":
  //       await editOrDeletePatient(true, patient.value);
  //       toastContent.value = `Succesfullly Edited ${patient.value.firstName}'s Details`;
  //       showToast("success");
  //       handleClose();
  //       break;
  //     case "Delete Patient":
  //       editOrDeletePatient(false, patient.value);
  //       toastContent.value = `Succesfullly Deleted  ${patient.value.firstName}`;
  //       showToast("success");
  //       handleClose();
  //       break;
  //     default:
  //       console.error(`Unexpected typeofModal value: ${typeofModal.value}`);
  //   }
  // } catch (error) {
  //   toastContent.value = error;
  //   showToast("error");
  // }
};
const onDateChanged = (changedDate) => {
  console.log(changedDate, "onDateChanged");
  date.value = changedDate;
};
</script>
<template>
  <BaseModal
    :centered="typeofModal == 'Delete Patient'"
    :showModal="showModal"
    :submit-type="typeofModal"
    @closeClick="handleClose"
    @submitClick="handleSubmit(submitHandler)"
  >

  <!-- <DatePicker   :date="new Date()" @choosed-date="onDateChanged" /> -->
    <template
      #strictForm
      v-if="typeofModal == 'Add Patient' || typeofModal == 'Edit Patient'"
    >


      <form @submit="handleSubmit(submitHandler)">
        <div class="modal-body">
          <h6>
            <div class="demo-forms form">
              <div class="row form-group pl-pr-15">
                <!-- <TestBaseInput
                  outerdivClass="col-sm-12 col-md-6"
                  placeholder="First Name"
                  label="First Name"
                  name="email"
                  type="email"
                  labelClass="control-label"
                /> -->
                <BaseInput
                  outerdivClass="col-sm-12 col-md-6"
                  placeholder="First Name"
                  label="First Name"
                  name="firstName"
                  labelClass="control-label"
                />

                <BaseInput
                  outerdivClass="col-sm-12 col-md-6"
                  placeholder="Last Name"
                  label="Last Name"
                  name="lastName"
                  labelClass="control-label"
                />
              </div>

              <div class="row form-group pl-pr-15">
                <BaseInput
                  outerdivClass="col-sm-12 col-md-6"
                  placeholder="Email"
                  :disabled="typeofModal == 'Edit Patient'"
                  required
                  label="Email"
                  type="email"
                  name="email"
                  labelClass="control-label"
                />
                <BaseInput
                  outerdivClass="col-sm-12 col-md-6"
                  placeholder="Phone"
                  label="Phone"
                  type="tel"
                  name="phone"
                  labelClass="control-label"
                />
              </div>

              <div class="row form-group pl-pr-15">
   
   
                <DatePicker name="dateofBirth"   :date="date" @choosed-date="onDateChanged" />
                <div class="col-sm-12 col-md-6">
                  <label class="control-label">
                    <span class="required">*</span>
                    Gender
                  </label>
                  <select
                    v-model="gender"
                    v-bind="genderAttrs"
                    class="form-control"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="notSpecified">Not Specified</option>
                  </select>

                  <div class="error" v-if="errors.gender">
                    <span>* </span>{{ errors.gender }}
                  </div>
                </div>
              </div>

              <div class="row form-group pl-pr-15">
                <div class="col-sm-12 col-md-6">
                  <label class="control-label">
                    Height
                  </label>
                  <div class="row">
                    <div class="input-group col-6">
                      <input
                        v-model="heightFeet"
                        v-bind="heightFeetAttrs"
                        type="number"
                        min="1"
                        max="10"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2"
                          >feet</span
                        >
                      </div>
                    </div>
                    <div class="input-group col-6">
                      <input
                        v-model.number="heightInches"
                        v-bind="heightInchesAttrs"
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

                  <div class="error">
                    <span v-if="errors.heightFeet || errors.heightInches"
                      >*
                    </span>
                    {{ errors.heightFeet || errors.heightInches }}
                  </div>
                </div>

                <div class="col-sm-12 col-md-6">
                  <label class="control-label">
                    Weight
                  </label>
                  <div class="input-group">
                    <input
                      v-model.number="weightLbs"
                      v-bind="weightLbsAttrs"
                      type="number"
                      min="1"
                      max="300"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">lbs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h6>
        </div>
        <ModalFooter>
          <button
            type="submit"
            class="btn btn-primary tx-13"
            :disabled="apiLoading"
          >
            {{ typeofModal }}
            <span v-if="apiLoading">
              <BaseLoader />
            </span>
          </button>
         
          <BaseButton
            aria-label="Close"
            type="button"
            variant="modal-btn-secondary"
            @handleClick="handleClose"
          >
            Close
          </BaseButton>
        </ModalFooter>
      </form>
    </template>
    <template #bodystrictForm v-if="typeofModal == 'Delete Patient'">
      <h6>Are you sure you want to delete this patient?</h6>
    </template>
  </BaseModal>
</template>

<style>
.pl-pr-15 {
  padding-left: 15px;
  padding-right: 15px;
}

.error {
  margin-top: 9px;
  height: 7px;
  color: red;
  font-size: 14px;
}
</style>
