<template>
  <section class="container">
    <b-loading :active.sync="isLoading" :canCancel="false"></b-loading>
    <div class="title"><p>Heroes</p></div>
    <div class="subtitle"><p>heroes bla bla</p></div>
    <hr>
    <div class="columns is-multiline">
      <div v-for="hero in heroes" class="column  is-3-desktop">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by3">
              <img :src="'https://api.opendota.com' + hero.img" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <span class="is-inline-flex">
              <figure class="icon is-2by2">
                <img :src="'https://api.opendota.com' + hero.icon" alt="Image">
              </figure>
              <router-link :to="{ name: 'hero', params: {localized_name: hero.localized_name, id: hero.id} }" append>
                <p class="title is-4">  {{ hero.localized_name }}</p>
              </router-link>

            </span>
            <div v-if="hero.primary_attr == 'agi'">
              <span class="is-inline-flex">
                <p>Agility</p>
                <figure class="icon is-2by2">
                  <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png">
                </figure>
              </span>
            </div>
            <div v-else-if="hero.primary_attr == 'int'">
              <span class="is-inline-flex">
                <p>Intelligence</p>
                <figure class="icon is-2by2">
                  <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png">
                </figure>
              </span>
            </div>
            <div v-else="hero.primary_attr == 'str'">
              <span class="is-inline-flex">
                <p>Strength</p>
                <figure class="icon is-2by2">
                  <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png">
                </figure>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>




  </section>
</template>

<script type="text/javascript">
  import axios from 'axios'

  let OPENDOTA_API_URI = 'https://api.opendota.com/api'

  export default {
    name: 'heroes',
    data: function () {
      return {
        heroes: [],
        isLoading: true
      }
    },
    methods: {
      getHeroes () {
        let self = this

        axios.get(OPENDOTA_API_URI + '/heroStats', {
          validateStatus: function (status) {
            return status < 500 // Reject only if the status code is greater than or equal to 500
          }
        })
          .then((resp) => {
            self.heroes = resp.data
//            self.success()
          })
          .catch((err) => {
            err.response ? (console.log(err.response.data),
                console.log(err.response.status),
                console.log(err.response.headers)
            ) : err.request ? console.log(err.request) : console.log('Error', err.message)
//            self.danger(err.message)
            console.log(err.config)
          })
      }
    },
    created: function () {
      this.getHeroes()
    },
    mounted: function () {
      const vm = this
      vm.isLoading = false
    }
  }
</script>

<style>

</style>
