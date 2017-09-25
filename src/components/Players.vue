<template>
  <div>
    <div class="title"><p>Players</p></div>
    <div class="subtitle"><p>Table which show pro players.</p></div>
    <hr>

    <div class="level">
      <div class="level-left">
        <button class="button is-info" @click="getMMR()">Toggle</button>
        <b-field>
          <b-input placeholder="Search..." type="search" icon="search" expanded>
          </b-input>
          <p class="control">
            <button class="button is-primary">Search</button>
          </p>
        </b-field>
      </div>
      <div class="level-right">
        <b-field label="Players per page">
          <b-select v-model="perPage">
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="50">50 per page</option>
          </b-select>
        </b-field>
      </div>
    </div>

    <b-table
      :data="proplayers"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :checkable="isCheckable"
      :loading="isLoading"
      :mobile-cards="hasMobileCards"
      :paginated="isPaginated"
      :per-page="perPage"
      :pagination-simple="isPaginationSimple"
      default-sort="name"
      :selected.sync="selected"
      :detailed="isDetailed"
      :checked-rows.sync="checkedRows">

      <template scope="props">
        <!-- add a sortable country if country is null receive 'NONE' -->
        <b-table-column field="loccountrycode" label="Country" width="20">
          <p v-if="props.row.loccountrycode === null">--</p>
          <p v-else>{{ props.row.loccountrycode }}</p>

        </b-table-column>

        <b-table-column field="name" label="Name" sortable widht="50">
          <p v-if="props.row.name === ' '">--</p>
          <p v-else>{{ props.row.name }}</p>
        </b-table-column>

        <b-table-column field="personaname" label="Persona Name" sortable>
          {{ props.row.personaname }}
        </b-table-column>

        <b-table-column field="fantasy_role" label="Fantasy Role" sortable>
          {{ props.row.fantasy_role }}
        </b-table-column>

        <b-table-column field="team_name" label="Team Name" sortable>
          <a class="button is-small is-success" @click="{isCardModalActive = true, getMMR()}">
            {{ props.row.team_name }}
          </a>
        </b-table-column>

      </template>

      <template slot="detail" scope="props">
        <article class="media">
          <figure class="media-left ">
              <p class="image is-64x64">
                <a :href="props.row.profileurl" target="_blank">
                  <img v-bind:src="props.row.avatarfull">
                </a>

              </p>
            </figure>
          <div class="media-content ">
            <div class="content">
              <p>
                <strong>{{ props.row.team_tag }}.{{ props.row.name }}</strong>
                <br>
                <small>
                  <a :href="props.row.profileurl" target="_blank">
                    @{{ props.row.personaname }}
                  </a>
                </small>
                <br>
                <small>
                  AccountID:
                  <a :href="props.row.profileurl" target="_blank">
                    {{ props.row.account_id }}
                  </a>
                </small>
                <br>
              </p>
            </div>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <small>MMR Solo: {{ mmr.solo_competitive_rank }}</small>
                <br>
                <small>MMR Party: </small>
              </p>
            </div>
          </div>
        </article>
      </template>

      <div slot="empty">
        <div class="has-text-centered">
          Loading...
        </div>
      </div>

    </b-table>

    <b-modal :active.sync="isCardModalActive" :width="640">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{ selected.team_tag }}.{{ selected.name }}
          </p>
          <p class="subtitle">
            {{ selected.personaname }}
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
      <span>
        MMR: {{ mmr.solo_competitive_rank }}
      </span>
          </p>
          <p class="card-footer-item">
      <span>
        MMR: {{ mmr.competitive_rank }}
      </span>
          </p>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'

  let OPENDOTA_API_URI = 'https://api.opendota.com/api'

  export default {
    name: 'players',
    data: function () {
      return {
        proplayers: [],
        mmr: [],
        teams: [],
        checkedRows: [],
        selected: {},
        isBordered: false,
        isStriped: false,
        isNarrowed: false,
        isCheckable: false,
        isEmpty: false,
        isLoading: true,
        isDetailed: true,
        hasMobileCards: true,
        isPaginated: true,
        isPaginationSimple: false,
        perPage: 10,
        isCardModalActive: false
      }
    },
    methods: {
      getPlayers () {
        let self = this

        axios.get(OPENDOTA_API_URI + '/proPlayers', {
          validateStatus: function (status) {
            return status < 500 // Reject only if the status code is greater than or equal to 500
          }
        })
          .then((resp) => {
            self.proplayers = resp.data
            self.success()
          })
          .catch((err) => {
            err.response ? (console.log(err.response.data),
                console.log(err.response.status),
                console.log(err.response.headers)
            ) : err.request ? console.log(err.request) : console.log('Error', err.message)
            self.danger(err.message)
            console.log(err.config)
          })
      },
      getMMR () {
        let self = this
        let accountID = self.selected.account_id

        // accountID ? !undefined : ()

        axios.get(OPENDOTA_API_URI + '/players/' + accountID, {
          validateStatus: function (status) {
            return status < 500 // Reject only if the status code is greater than or equal to 500
          }
        })
          .then((resp) => {
            self.mmr = resp.data
            self.success()
          })
          .catch((err) => {
            err.response ? (
              console.log(err.response.status),
              console.log(err.response.headers)
            ) : err.request
              ? console.log(err.request)
              : console.log('Error', err.message)
            self.danger(err.message)
            console.log(err.config)
          })
        console.log(self.mmr)
      },
      getPLayerMMR () {
      },
      danger (err) {
        this.$toast.open({
          duration: 3000,
          message: err,
          position: 'is-bottom',
          type: 'is-danger'
        })
      },
      success () {
        this.$toast.open({
          duration: 3000,
          message: `Dados carregados`,
          position: 'is-bottom',
          type: 'is-success'
        })
      }
    },
    created: function () {
      this.getPlayers()
    },
    updated: function () {
      this.isLoading = false
    },
    per_page: function (itemsPerPage) {
      this.perPage = itemsPerPage
    }
  }
</script>

<style>

</style>
