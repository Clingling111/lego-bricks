<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">{{
    text
    }}</component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import useComponentCommon from '@/hooks/useComponentCommon'
import { textDefaultProps, transformToComponentProps, textStylePropNames } from '@/defaultProps'


defineOptions({
  name: 'LText',
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  ...transformToComponentProps(textDefaultProps),
})

const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}

button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}

.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
