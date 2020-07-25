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
    box-sizing: border-box;

    @media screen and (max-width: 1023px) {
      min-height: calc(100vh - 77px);
    }
  }

  .holder + .holder {
    border-top: 1px rgb(202, 202, 202) solid;
  }
</style>
