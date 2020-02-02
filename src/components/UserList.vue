<template>
  <ul class="users-list">
    <li v-for="user in usersList" :key="user.id">
      <span>{{user.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    usersList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
ul {
  margin: 0;
}
</style>