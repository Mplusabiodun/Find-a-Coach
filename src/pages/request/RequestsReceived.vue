<template>
  <div>
  <base-dialog :show="!!error" title="An Error occured!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isloading"></base-spinner>
      <ul v-else-if="hasRequests && !loading">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.email"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>Yo havn't received any request yet.</h3>
    </base-card>
  </section>
</div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isloading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isloading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed!';
      }
      this.isloading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
