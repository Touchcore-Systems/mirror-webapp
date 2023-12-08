<template>
    <!-- btn btn-xs action-btn mg-r-3 btn-primary -->
    <button :type="type" @click="emit('handleClick')" class=" btn btn-block " :class="styles" :disabled="loading">
        <slot />
    </button>
</template>
<script setup>
import { computed } from "vue";

const { loading, type, variant } = defineProps([
    "loading",
    "type",
    "variant"
]);
const emit = defineEmits(['handleClick']);

const styles = computed(() => {
    switch (variant) {
        case 'primary': return "gradient-bg btn-info"
          break;
        case 'outline': return "outline-bg mg-r-3 "
          break;
        default: return "gradient-bg btn-info"
            break;
    }
})
</script>

<style scoped>
.gradient-bg {
    background: linear-gradient(90deg,
            #424bb2 0%,
            rgba(52, 134, 154, 1) 53%,
            rgba(60, 204, 175, 1) 100%) !important;
    border: none;
}

.outline-bg{
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    border-radius: 0.25rem;
    border-color: #0168fa;
}

</style>