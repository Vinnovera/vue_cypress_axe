<template>
  <div>
    <h1>The users list</h1>
    <user-list :users-list="users" />
    <div class="error-message" v-if="displayErrorMessage">Sorry, but something went bananas</div>
  </div>
</template>

<script>
import UserList from '../components/UserList'
import { JsonPlaceholderService } from '../services/jsonPlaceholderService'
const jsonPlaceholderService = new JsonPlaceholderService()

export default {
  components: {
    UserList
  },
  data() {
    return {
      users: [],
      displayErrorMessage: false
    }
  },
  async mounted() {
    try {
      const users = await jsonPlaceholderService.getUsers()
      if (users && users.data) {
        this.users = users.data
      }
      if (users.error) {
        this.displayErrorMessage = true
      }
    } catch (error) {}
  }
}
</script>

<style lang="scss">
h1 {
  color: teal;
}
</style>
