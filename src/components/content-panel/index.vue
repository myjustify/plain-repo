<template>
  <div class="content-panel">
    <template v-if="header">
      <header class="header drag-handle">
        {{ header }}
      </header>
    </template>
    <slot name="header" />
    <div
      v-if="content.length"
      class="content"
    >
      <template
        v-for="(son, index) in content"
        :key="index"
      >
        <div class="item">
          <div
            class="label"
            :style="{ flexBasis: labelWidth + 'px' }"
          >{{ son.label }}</div>
          <div class="value" v-html="son.value"></div>
        </div>
      </template>
    </div>
    <slot />
  </div>
</template>
<script setup>
defineOptions({
  name: 'content-panel'
})
defineProps({
  header: {
    type: String,
    default: '',
  },
  content: {
    type: Array,
    default: () => [],
  },
  labelWidth: {
    type: Number,
    default: 100,
  }
})
</script>

<style lang="scss" scoped>
.content-panel {
  width: 100%;
  min-width: 250px;
  //height: 100%;
  background-color: rgba(63, 72, 84, 0.9);
  padding: 14px;
  box-sizing: border-box;
  color: #fff;
  .header {
    border-radius: 3px 0 0 3px;
    height: 40px;
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    border-bottom: 1px solid #3ea6ff;
  }

  .content {
    padding-top: 10px;

    .item {
      display: flex;
      font-size: 14px;

      .label {
        flex-shrink: 0;
        margin-right: 6px;
        white-space: normal;
        word-break: break-all;
      }

      .value {
        flex: 1;
        word-break: break-all;
        max-width: 200px;
        white-space: normal;
      }
    }
  }
}
</style>
