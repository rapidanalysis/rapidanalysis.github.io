<!-- .vitepress/theme/components/MyButton.vue -->
<template>
  <button @click="handleClick" class="my-custom-button">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Click Me'
  }
});

const handleClick = () => {
  alert(`You clicked the "${props.text}" button!`);
};
</script>

<style scoped>
.my-custom-button {
  /* Add your custom styles here */


    background-color: rgb(62, 99, 221);
    border-bottom-color: rgba(0, 0, 0, 0);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    color-scheme: dark;
    cursor: auto;
    direction: ltr;
    display: inline-block;
    font-family: "Chinese Quotes", "Inter var", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 14px;
    font-synthesis-small-caps: none;
    font-synthesis-style: auto;
    font-synthesis-weight: none;
    font-weight: 600;
    height: 40px;
    line-height: 38px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    text-align: center;
    text-decoration-color: rgb(255, 255, 255);
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-rendering: optimizelegibility;
    text-wrap-mode: nowrap;
    touch-action: manipulation;
    transition-behavior: normal, normal, normal;
    transition-delay: 0s, 0s, 0s;
    transition-duration: 0.25s, 0.25s, 0.25s;
    transition-property: color, border-color, background-color;
    transition-timing-function: ease, ease, ease;
    white-space-collapse: collapse;
    width: 146.046875px;
    -webkit-font-smoothing: antialiased;
  }
</style>