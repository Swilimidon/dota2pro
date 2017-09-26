 <template>
    <div>
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <figure class="image is-2by2">
              <progressive-img :placeholder="'https://api.opendota.com' + hero.img" :src="'https://api.opendota.com' + hero.img"></progressive-img>
              <div class="top-right">
                <div v-if="hero.primary_attr == 'agi'">
                  <figure class="icon is-2by2">
                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png">
                  </figure>
                </div>
                <div v-else-if="hero.primary_attr == 'int'">
                  <figure class="icon">
                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png">
                  </figure>
                </div>
                <div v-else="hero.primary_attr == 'str'">
                  <figure class="icon is-2by2">
                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png" alt="Streght">
                  </figure>
                </div>
              </div>
            </figure>

          </div>
          <div class="column is-5">
            <span class="title is-3">{{ $route.params.localized_name }}</span>
            <span class="tags is-pulled-right">
                <span class="tag is-dark" v-for="roles in hero.roles">{{ roles }}</span>
            </span>
            <hr>
            <p>Suspendisse sodales metus justo, ullamcorper iaculis purus interdum in. Sed ultricies enim felis, in interdum urna malesuada a. Morbi id ligula vel leo elementum dignissim quis vel purus. Donec iaculis, est ac maximus vestibulum, sapien mi lacinia urna, at laoreet felis lectus nec urna. Fusce egestas, neque vitae blandit scelerisque, leo arcu pellentesque risus, et volutpat neque nunc id massa. Aenean dapibus leo vel purus malesuada, eu ultrices nulla consequat. Duis erat orci, lobortis sed dictum id, pretium a nibh. Mauris pharetra ligula consequat gravida ornare.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <b-tabs>
          <b-tab-item label="Overview">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam id quis voluptatum! Commodi corporis dolor doloremque dolores ducimus eaque ex harum illo, necessitatibus nisi numquam obcaecati praesentium repellat totam, vitae?
          </b-tab-item>
          <b-tab-item label="Statistics">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ex explicabo ipsa iusto non numquam quas sapiente totam veritatis voluptatem? Deleniti dolorem earum excepturi ipsa iste? Illum impedit quaerat tenetur!
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'

  let OPENDOTA_API_URI = 'https://api.opendota.com/api'

  export default {
    data: function () {
      return {
        hero: {}
      }
    },
    methods: {
      getHeroes () {
        let self = this
        let id = self.$route.params.id

        axios.get(OPENDOTA_API_URI + '/heroStats', {
          validateStatus: function (status) {
            return status < 500
          }
        })
          .then((resp) => {
            self.hero = resp.data.find((hero) => hero.id === id)
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
    }
  }
</script>

<style>

</style>
