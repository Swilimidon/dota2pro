<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title is-size-1">
                Dota 2 Pro
              </p>
              <p class="subtitle">
                Vue.js example with
                <a href="https://api.opendota.com" target="_blank">
                  <strong>OpenDota API</strong>
                </a>
                and beautified by
                <a href="http://bulma.io" target="_blank">
                  <strong>Bulma</strong>
                </a>
                +
                <a href="https://buefy.github.io" target="_blank">
                  <strong>Buefy</strong>
                </a>
              </p>
            </div>
            <div class="column is-narrow">
              ADS
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <nav class="tabs is-boxed">
            <ul>
              <router-link to="/" replace tag="li" exact><a>Overview</a></router-link>
              <router-link to="/players" replace tag="li"><a>Players</a></router-link>
              <router-link to='/heroes' replace tag="li"><a>Heroes</a></router-link>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <div id="about" class="content">
              <strong>Dota 2 Pro</strong> <b-icon icon="code"></b-icon> by</b-icon><strong><a href="https://fb.com/kbarross" target="_blank"> Kainã Barros</a></strong>
              <div>
                <button class="button is-info">
                  <b-icon
                    icon="twitter">
                  </b-icon>
                  <span>Twitter</span>
                </button>
                <button class="button">
                  <b-icon
                    icon="github">
                  </b-icon>
                  <span>Github</span>
                </button>
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="content">
              <strong>Support</strong> and share the love>
            </div>
          </div>
          <div class="column is-4">
            <div id="sister">
              <p>
                More <strong>helpful</strong> tools:
              </p>
              <br>
              <ul>
                <li>
                  <a href="http://dotabuff.com">
                    <img style="height: 50px" src="https://cdn-images-1.medium.com/max/860/1*L7bUVdusS37qo_Gr2qEbKw.png" alt="DOTABUFF logo">
                  </a>
                </li>
                <li>
                  <a href="http://datdota.com">

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          <small>
            Source code licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            <br>
            Website content licensed <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.
          </small>
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
  import Hello from '@/components/Hello'
  import Players from '@/components/Players'
  import Teams from '@/components/Teams'
  import Heroes from '@/components/Heroes'

  export default {
    name: 'app',
    components: {
      Players,
      Teams,
      Heroes,
      Hello
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>
