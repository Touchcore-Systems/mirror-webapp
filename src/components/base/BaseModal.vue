<template>
  <teleport to=".modals">
    <div>
      <div
        tabindex="-1"
        role="dialog"
        class="modal fade"
        :class="{ show: showModal }"
        @click.self="emit('closeClick')"
      >
        <component :is="centered ? CenteredModalLayout : BaseModalLayout">
          <ModalHeader :header="submitType">
            <BaseButton
              variant="close"
              aria-label="Close"
              @handleClick="emit('closeClick')"
            >
              <span aria-hidden="true">×</span>
            </BaseButton>
          </ModalHeader>
          <slot name="strictForm">
          <form>
            <div class="modal-body">
              <slot name="bodystrictForm" />
            </div>

            <ModalFooter>
              <BaseButton
              :loading="apiLoading"
                type="button"
                variant="modal-btn-primary" 
                @handleClick="emit('submitClick')"
              >
                {{ submitType }}
              </BaseButton>
              <BaseButton
                aria-label="Close"
                type="button"
                variant="modal-btn-secondary"
                @handleClick="emit('closeClick')"
              >
                Close
              </BaseButton>
            </ModalFooter>
          </form>
          </slot>
        </component>
      </div>
      <div
        :class="{ 'modal-backdrop fade show': showModal }"
        @click.self="emit('closeClick')"
      ></div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted } from "vue";
import ModalFooter from "../modal/ModalFooter.vue";
import ModalHeader from "../modal/ModalHeader.vue";
import BaseModalLayout from "../modal/layout/BaseModalLayout.vue";
import CenteredModalLayout from "../modal/layout/CenteredModalLayout.vue";
import BaseButton from "./BaseButton.vue";
import { useApiStore } from "@/store/apiStore";
import { storeToRefs } from "pinia";

const { showModal, submitType } = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  submitType: String,
  centered: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["closeClick", "submitClick"]);
const apiStore = useApiStore();
const { apiLoading } = storeToRefs(apiStore);

onMounted(() => {
  const modalElement = document.getElementById("reusemodal");

  if (modalElement) {
    modalElement.addEventListener("show.bs.modal", (event) => {
      const animation = event.relatedTarget.dataset.animation;
      modalElement.classList.add(animation);
    });

    modalElement.addEventListener("hidden.bs.modal", () => {
      modalElement.classList.remove(
        ...(modalElement.className.match(/(^|\s)effect-\S+/g) || [])
      );
    });
  }
});
</script>
<style>
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 0.25s ease all;
}

.show {
  display: block;
}
</style>

      
    
    