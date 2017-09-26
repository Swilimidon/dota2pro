<template>
  <section class="container">
    <div class="title"><p>Heroes</p></div>
    <div class="subtitle"><p>heroes bla bla</p></div>
    <hr>
    <div class="columns is-multiline">
      <div v-for="hero in heroes" class="column  is-3-desktop">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by3">
              <progressive-img :src="'https://api.opendota.com' + hero.img" :placeholder="'https://api.opendota.com' + hero.img" alt="Image"></progressive-img>
              <div class="top-left">
                <figure class="icon is-medium">
                  <img :src="'https://api.opendota.com' + hero.icon" alt="Image">
                </figure>
              </div>
            </figure>
          </div>
          <div class="card-content">
            <router-link :to="{ name: 'hero', params: {localized_name: hero.localized_name, id: hero.id} }" append>
              <p class="title is-4">  {{ hero.localized_name }}</p>
            </router-link>
            <div class="top-right">
              <div v-if="hero.primary_attr == 'agi'">
                <b-tooltip label="Agility">
                  <figure class="icon is-medium">
                  <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png">
                </figure>
                </b-tooltip>
              </div>
              <div v-else-if="hero.primary_attr == 'int'">
                <b-tooltip label="Intelligence">
                  <figure class="icon is-medium">
                  <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png">
                </figure>
                </b-tooltip>
              </div>
              <div v-else="hero.primary_attr == 'str'">
                <b-tooltip label="Strength">
                  <figure class="icon is-medium">
                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png">
                  </figure>
                </b-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex'

  export default {
    name: 'heroes',
    data: function () {
      return {
      }
    },
    methods: {
    },
    computed: mapState([
      'heroes'
    ]),
    mounted: function () {
      this.$store.dispatch('LOAD_HEROES')
    }
  }
</script>

<style>

</style>
