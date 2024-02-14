  <script setup >
import BaseInput from "@/components/base/BaseInput.vue";
import BaseModal from "@/components/base/BaseModal.vue";

import { useModalStore } from "@/store/modalStore.js";
import { storeToRefs } from "pinia";
import { editOrDeletePatient } from "../../../services/provider/dashboard";
const store = useModalStore();
const { showModal, modalStyle, patient, typeofModal } = storeToRefs(store);
const { handleClose } = store;

const handleSubmit = () => {
  switch (typeofModal.value) {
    case "Add Patient":
      console.log(typeofModal.value);
      handleClose();
      break;
    case "Edit Patient":
      editOrDeletePatient(true,patient.value);
      console.log(typeofModal.value);
      handleClose();
      break;
    case "Delete Patient":
     editOrDeletePatient(false,patient.value);
      console.log(typeofModal.value);
      handleClose();
      break;
    default:
      console.error(`Unexpected typeofModal value: ${typeofModal.value}`);
  }
};
</script>
  <template>
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
          class="row form-group pl-pr-15"
         
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
          class="row form-group pl-pr-15"
         
        >
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Email"
            :disabled="typeofModal == 'Edit Patient'"
            required
            label="Email"
            type="email"
            v-model="patient.email"
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
          class="row form-group pl-pr-15"
         
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
            placeholder="Gender"
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
          class="row form-group pl-pr-15"
          
        >
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            label="Height"
            labelClass="control-label"
          >
            <template #others>
              <div class="row" >
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

<style scoped>
.pl-pr-15{
  padding-left: 15px;
   padding-right: 15px
}
</style>