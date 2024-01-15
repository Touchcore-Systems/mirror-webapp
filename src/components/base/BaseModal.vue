<template>
  <teleport to=".modals">
   
      <div>
        <div
          tabindex="-1"
          role="dialog"
          class="modal fade"
          :class="{ show: showModal }"
          :style="{ display: showModal ? 'block' : 'none' }"
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

            <form>
              <div class="modal-body">
                <slot />
              </div>

              <ModalFooter>
                <BaseButton
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
import BaseButton from "./BaseButton.vue";
import ModalHeader from "../modal/ModalHeader.vue";
import ModalFooter from "../modal/ModalFooter.vue";
import BaseModalLayout from "../modal/layout/BaseModalLayout.vue";
import CenteredModalLayout from "../modal/layout/CenteredModalLayout.vue";
import { ref, toRef,onMounted } from "vue";
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

onMounted(() => {
  const modalElement = document.getElementById('reusemodal');

  if (modalElement) {
    modalElement.addEventListener('show.bs.modal', (event) => {
      const animation = event.relatedTarget.dataset.animation;
      modalElement.classList.add(animation);
    });

    modalElement.addEventListener('hidden.bs.modal', () => {
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
</style>

      
    
    