<template>
  <VDatePicker
  @dayclick="emit('choosedDate',dateInfo)"
    :attributes="attributes"
    :disabled-dates="disabledDates"
    :max-date="new Date() + 1"
    v-model="dateInfo"
    :popover="popover"
    :select-attribute="selectAttribute"
  >
    <template #default="{ inputValue, inputEvents }">
      <BaseInput
        :value="inputValue"
        required
        v-on="inputEvents"
        outerdivClass="col-sm-12 col-md-6"
        placeholder="Choose Date Of Birth"
        label="Date of Birth"
        labelClass="control-label"
        @input="emit('choosedDate',$event.target.value)"
        name="datepicker"

      />
    </template>
  </VDatePicker>
</template>

<script setup>
import { ref, watch, computed, toRefs } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
const popover = ref({
  visibility: "click",
  placement: "right",
});
const emit = defineEmits(["choosedDate"]);

const attributes = ref([
  {
    highlight: {
      color: "#2BA58D",
      fillMode: "light",
    },
  },
]);

const selectAttribute = ref({
  highlight: {
    color: "#2BA58D",
    fillMode: "light",
  },
});


const { date,disabledDates } = defineProps(['disabledDates','date']);
const dateInfo =ref(date);
</script>

<style scoped>
.vc-container .vc-weekday-1,
.vc-container .vc-weekday-1,
.vc-container .vc-weekday-2,
.vc-container .vc-weekday-3,
.vc-container .vc-weekday-4,
.vc-container .vc-weekday-6,
.vc-container .vc-weekday-7,
.vc-container .vc-weekday-5 {
  color: #2ba58d;
}


/* vc-container:focus,
.vc-container *:focus {
  outline: none;
  background-color: #2ba58d;
} */
</style> 
