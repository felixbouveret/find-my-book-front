<template>
  <ul :class="$style.list">
    <template v-for="({ img_url, name, id }, index) in results">
      <li v-if="index < 5" :key="index" :class="$style.item">
        <a :href="`/single/${id}`">
          <img :src="img_url" :alt="name" :class="$style.image" />
          <p :class="$style.desc">{{ name }}</p>
        </a>
      </li>
      <li v-if="index === 5" :key="index" :class="$style.item">
        <a :href="`/search?s=${query}`">
          Voir les {{ results.length }} résultats
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'SearchBarResults',

  props: {
    results: {
      type: Array,
      default: () => [],
    },
    query: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.list {
  position: absolute;

  padding: 8px 0;
  border-radius: 8px;

  background-color: $light-grey;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
}

.item a {
  display: flex;
  align-items: center;
  padding: 12px 24px;

  color: black;

  text-decoration: none;

  p {
    color: black;
  }

  &:hover {
    background-color: $dark-grey;
  }
}

.image {
  width: 32px;
  height: auto;
}

.desc {
  margin-left: 16px;
}
</style>
