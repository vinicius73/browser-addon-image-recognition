<script>
import { isEmpty } from 'lodash';
import RocogImage from './Image.vue'

export default {
  components: { RocogImage },
  data () {
    return {
      url: '',
    }
  },
  computed: {
    hasImage () {
      return !isEmpty(this.url);
    }
  },
  methods: {
    getImageUrl () {
      const url = new URL(window.location.href);
      return url.searchParams.get('image');
    }
  },
  mounted () {
    this.url = this.getImageUrl()
  }
}
</script>

<template>
  <div>
    <div v-if="!hasImage">
      Waiting...
    </div>
    <RocogImage :url="url" v-if="hasImage" />
  </div>
</template>

<style>

</style>
