<template>
  <transition name="el-zoom-in-center">
    <div
      v-show="modelValue"
      ref="dragWrapperRef"
      class="drag-wrapper"
      :style="offset"
    >
      <template v-if="showClose">
        <div
          class="close"
          @click="close"
        >
          <Icon
            icon="material-symbols:close"
            color="white"
          />
        </div>
      </template>
      <slot />
    </div>
  </transition>
</template>
<script setup>
import interact from "interactjs";
const emits = defineEmits(['close', 'update:modelValue'])
defineOptions({
  name: "dragWrapper",
})
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Object,
    default: () => ({
      left: '30px',
      top: '30px'
    })
  },
  restriction: {
    type: String,
    default: 'parent'
  },
  showClose: {
    type: Boolean,
    default: true
  }
})

const dragWrapperRef = ref()
function dragMoveListener (event) {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
onMounted(() => {
  interact(dragWrapperRef.value).draggable({
    allowFrom: '.drag-handle',
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: props.restriction,
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,
    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  });
})

function close() {
  emits('close')
  emits('update:modelValue', false)
}
</script>
<style lang="scss" scoped>
.drag-wrapper {
  position: fixed;
  box-sizing: border-box;
  touch-action: none;
  user-select: none;

  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 4px;
  }
}
</style>
