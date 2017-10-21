<script>
import recognize from '../recognize';
import ImageData from './ImageData.vue';
import { get } from 'lodash'

export default {
  components: { ImageData },
  props: {
    url: String,
  },
  data () {
    return {
      loading: true,
      error: false,
      imageData: []
    }
  },
  computed: {
    showData () {
      return this.loading === false && this.error === false;
    }
  },
  methods: {
    loadData () {
      this.loading = true;
      this.error = false;
      this.imageData = {};

      recognize(this.url)
        .then(({ outputs }) => {
          this.loading = false;
          this.imageData = get(outputs, '0.data.concepts', {});
        })
        .catch (e => {
          this.error = get(e, 'data.outputs.0.status.description', 'Sorry, deu bad!');
          this.loading = false;
          console.error(e);
        })
    }
  },
  mounted () {
    this.loadData()
  }
};
</script>

<template>
  <div>
    <img :src="url">
    <p class="error" v-if="error">{{ error }}</p>
    <p class="loading" v-if="loading">Loading...</p>
    <image-data :data="imageData" v-if="showData"></image-data>
  </div>
</template>

<style scoped>
  img {
    width: 100%;
  }
</style>
