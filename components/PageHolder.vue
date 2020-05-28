<template>
  <div class="holder">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .holder {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
