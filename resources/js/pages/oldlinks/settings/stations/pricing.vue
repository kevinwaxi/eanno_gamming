<template>
  <div>
    <div v-if="$auth.isAdmin() || $auth.can('price list')">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="row">
            <div class="col-lg-4 col-12">
              <div
                class="
                  card card-background card-background-mask-info
                  h-100
                  tilt
                "
                data-tilt=""
                style="
                  will-change: transform;
                  transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
                    scale3d(1, 1, 1);
                "
              >
                <div
                  class="full-background"
                  style="
                    background-image: url('/assets/img/curved-images/white-curved.jpeg');
                  "
                ></div>
                <div class="card-body pt-4 text-center">
                  <h2 class="text-white mb-0 mt-2 up">Earnings</h2>
                  <h1 class="text-white mb-0 up">$15,800</h1>
                  <span class="badge badge-lg d-block bg-gradient-dark mb-2 up">
                    +15% since last week
                  </span>
                  <a
                    href="javascript:;"
                    @click.prevent="createModal"
                    class="btn btn-outline-white mb-2 px-5 up"
                  >
                    Create Price
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0">
              <div class="card">
                <div class="card-body p-3">
                  <div class="d-flex">
                    <div>
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-dark
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div class="ms-3">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          Today's Money
                        </p>
                        <h5 class="font-weight-bolder mb-0">$53,000</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-4">
                <div class="card-body p-3">
                  <div class="d-flex">
                    <div>
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-dark
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="ni ni-planet text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div class="ms-3">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          Sessions
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          9,600
                          <span class="text-success text-sm font-weight-bolder"
                            >+15%</span
                          >
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0">
              <div class="card">
                <div class="card-body p-3">
                  <div class="d-flex">
                    <div>
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-dark
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div class="ms-3">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          Today's Users
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          2,300
                          <span class="text-success text-sm font-weight-bolder">
                            +3%
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-4">
                <div class="card-body p-3">
                  <div class="d-flex">
                    <div>
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-dark
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="ni ni-shop text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div class="ms-3">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          Sign-ups
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          348
                          <span class="text-success text-sm font-weight-bolder"
                            >+12%</span
                          >
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 mt-4 mt-lg-0">
          <div class="card">
            <div class="card-header p-3 pb-0">
              <div class="row">
                <div class="col-8 d-flex">
                  <div>
                    <img
                      src="/assets/img/team-3.jpg"
                      class="avatar avatar-sm me-2"
                      alt="avatar image"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Lucas Prila</h6>
                    <p class="text-xs">2h ago</p>
                  </div>
                </div>
                <div class="col-4">
                  <span class="badge bg-gradient-info ms-auto float-end"
                    >Recommendation</span
                  >
                </div>
              </div>
            </div>
            <div class="card-body p-3 pt-1">
              <h6>I need a Ruby developer for my new website.</h6>
              <p class="text-sm">
                The website was initially built in PHP, I need a professional
                ruby programmer to shift it.
              </p>
              <div class="d-flex bg-gray-100 border-radius-lg p-3">
                <h4 class="my-auto">
                  <span class="text-secondary text-sm me-1">$</span>3,000<span
                    class="text-secondary text-sm ms-1"
                    >/ month
                  </span>
                </h4>
                <a href="javascript:;" class="btn btn-outline-dark mb-0 ms-auto"
                  >Apply</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-lg-4 mt-2">
        <div class="col-6 mb-4" v-for="(price, i) in prices.data" :key="i">
          <div class="card">
            <div class="card-body p-3">
              <div class="d-flex">
                <div
                  class="avatar avatar-xl bg-gradient-dark border-radius-md p-2"
                >
                  <img
                    src="/assets/img/small-logos/logo-slack.svg"
                    alt="slack_logo"
                  />
                </div>
                <div class="ms-3 my-auto">
                  <h6>{{ price.price }} per Hour</h6>
                </div>
                <div class="ms-auto">
                  <div class="dropdown">
                    <button
                      class="btn btn-link text-secondary ps-0 pe-2"
                      id="navbarDropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        class="fa fa-ellipsis-v text-lg"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a
                        class="dropdown-item"
                        href="javascript:;"
                        @click.prevent="editModal(price)"
                      >
                        Edit Package
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        Delete action
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        Totally Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-sm mt-3">
                {{ price.details }}
              </p>
              <hr class="horizontal dark" />
              <div class="row">
                <div class="col-6">
                  <h6 class="text-sm mb-0">{{ price.players }}</h6>
                  <p class="text-secondary text-sm font-weight-bold mb-0">
                    Participants
                  </p>
                </div>
                <div class="col-6 text-end">
                  <span v-for="(p, i) in price.station" :key="i">
                    <Tag color="geekblue">{{ p.name }}</Tag>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- create and edit modal -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="modal-default"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-default"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 v-if="!editMode" class="modal-title">Create Price</h5>
              <h5 v-else class="modal-title">Edit Price</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <Select v-model="form.station_id" multiple :max-tag-count="5">
                    <Option
                      v-for="(station, i) in stations.data"
                      :value="station.id"
                      :key="i"
                    >
                      {{ station.name }}
                      <span
                        style="float: right; color: rgb(228, 196, 196)"
                        v-if="station.console"
                      >
                        {{ station.console.type.name }}
                      </span>
                    </Option>
                  </Select>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <FormulateInput
                    type="number"
                    required
                    label="Price per Hour"
                    v-model="form.price"
                    validation="required|number|between:50,500"
                    min="50"
                    max="500"
                    error-behavior="submit"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <FormulateInput
                    type="textarea"
                    v-model="form.details"
                    label="Enter a details about your pricing"
                    validation="required|max:100,length"
                    validation-name="details"
                    error-behavior="live"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <FormulateInput
                    type="number"
                    required
                    label="Number of Players"
                    v-model="form.number_of_players"
                    validation="required|number|between:0,5"
                    min="0"
                    max="5"
                    error-behavior="submit"
                  />
                </div>
                <div class="col-12">
                  <div class="form-check form-switch my-auto">
                    <input
                      class="form-check-input"
                      checked=""
                      v-model="form.is_available"
                      type="checkbox"
                      id="flexSwitchCheckDefault1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
                @click="closeModal"
              >
                Close
              </button>
              <button
                v-if="editMode"
                type="button"
                class="btn bg-gradient-primary"
                @click="updatePrice(form.id)"
                :disabled="processing"
              >
                {{ processing ? 'Saving ...' : 'Save Changes' }}
              </button>
              <button
                v-else
                type="button"
                class="btn bg-gradient-primary"
                @click="createPrice()"
                :disabled="processing"
              >
                {{ processing ? 'Creating ...' : 'Create' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Notfound />
    </div>
  </div>
</template>
<script>
import Notfound from '@/pages/Errors/notfound.vue'
export default {
  data() {
    return {
      deleteModal: false,
      isDeleting: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {
        station_id: [],
        is_available: true,
      },
      prices: {},
      stations: {},
      station: [],
      total: 20,
      search: '',
      selected: '',
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: 'desc',
      sort_field: 'created_at',
      url: '',
    }
  },
  watch: {
    total: function (value) {
      this.getPriceList()
    },
    search: function (value) {
      this.getPriceList()
    },
    selected: function (value) {
      this.getPriceList()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.prices.data.forEach((price) => {
          this.checked.push(price.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/price/export/' + this.checked
    },
  },
  mounted() {
    this.getPriceList()
    this.getStations()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form = {}
    },
    createModal() {
      $('#modal-default').modal('show')
      this.editMode = false
    },
    editModal(price) {
      let obj = {
        id: price.id,
        package_name: price.package,
        details: price.details,
        price: price.price,
        number_of_players: price.players,
        is_available: price.is_available,
      }
      $('#modal-default').modal('show')
      this.editMode = true
      this.form = obj
    },
    showDeleteModal(price) {
      this.form = price
      this.deleteModal = true
    },
    showMassDeleteModal(checked) {
      this.checked = checked
      this.massDeleteModal = true
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc'
      } else {
        this.sort_field = field
      }
      this.getPriceList()
    },
    isChecked(price_id) {
      return this.checked.includes(price_id)
    },
    async selectAllRecords() {
      const res = await this.callApi('get', '/api/v1/prices/all/')
      if (res.status === 200) {
        this.checked = res.data
        this.selectAll = true
        console.log(this.selectAll)
      }
    },
    async getStations() {
      const res = await this.callApi('get', '/api/v1/stations')
      if (res.status === 200) {
        this.stations = res.data
      }
    },
    async getPriceList(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/prices?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.prices = res.data
      } else {
        if (res.status === 401 || res.status === 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0])
          }
        } else {
          this.swr()
        }
      }
    },
    async createPrice() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/prices', this.form)
      if (res.status === 200) {
        this.s('Price created successfully')
        this.closeModal()
        this.getPriceList()
        this.processing = false
      } else {
        if (res.status === 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0])
          }
          this.processing = false
        } else {
          this.swr()
          this.processing = false
        }
      }
    },
    async updatePrice(price_id) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/prices/${price_id}`,
        this.form
      )
      if (res.status === 200) {
        this.closeModal()
        this.getPriceList()
        this.s('Successfully updated price list')
        this.processing = false
      } else {
        if (res.status === 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0])
          }
          this.processing = false
        } else {
          this.swr()
          this.processing = false
        }
      }
    },
    async deletePrice(price_id) {
      this.isDeleting = true
      const res = await this.callApi('delete', `/api/v1/prices/${price_id}`)
      if (res.status == 204) {
        this.w('Price deleted')
        this.checked = this.checked.filter((id) => id != price_id)
        this.isDeleting = false
        this.deleteModal = false
        this.getPriceList()
      } else {
        if (res.status !== 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0])
          }
        } else {
          this.swr()
        }
      }
    },
    async deleteRecords(checked) {
      const res = await this.callApi(
        'delete',
        `/api/v1/prices/massDestroy/${checked}`
      )
      if (res.status == 204) {
        this.s('Price deleted successfully')
        this.massDeleteModal = false
        this.getPriceList()
      } else {
        if (res.status !== 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0])
          }
        } else {
          this.swr()
        }
      }
    },
  },
  components: { Notfound },
}
</script>
