<template>
  <div>
    <div v-if="$auth.can('station list') || $auth.isAdmin()">
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body p-3 position-relative">
              <div class="row">
                <div class="col-7 text-start">
                  <p class="text-sm mb-1 text-capitalize font-weight-bold">
                    All Stations
                  </p>
                  <h5 class="font-weight-bolder mb-0" v-if="stations.data">
                    {{ stations.data.length }}
                  </h5>
                </div>
                <div class="col-5">
                  <div class="dropdown text-end">
                    <a
                      href="javascript:;"
                      class="cursor-pointer text-secondary"
                      id="dropdownUsers1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="text-xs text-secondary">6 May - 7 May</span>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end px-2 py-3"
                      aria-labelledby="dropdownUsers1"
                    >
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          Last 7 days
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          Last week
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          Last 30 days
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 mt-sm-0 mt-4">
          <div class="card">
            <div class="card-body p-3 position-relative">
              <div class="row">
                <div class="col-7 text-start">
                  <p class="text-sm mb-1 text-capitalize font-weight-bold">
                    Customers
                  </p>
                  <h5 class="font-weight-bolder mb-0">3.200</h5>
                  <span
                    class="
                      text-sm text-end text-success
                      font-weight-bolder
                      mt-auto
                      mb-0
                    "
                    >+12%
                    <span class="font-weight-normal text-secondary"
                      >since last month</span
                    ></span
                  >
                </div>
                <div class="col-5">
                  <div class="dropdown text-end">
                    <a
                      href="javascript:;"
                      class="cursor-pointer text-secondary"
                      id="dropdownUsers2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="text-xs text-secondary">6 May - 7 May</span>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end px-2 py-3"
                      aria-labelledby="dropdownUsers2"
                    >
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Last 7 days</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Last week</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Last 30 days</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 mt-sm-0 mt-4">
          <div class="card">
            <div class="card-body p-3 position-relative">
              <div class="row">
                <div class="col-7 text-start">
                  <p class="text-sm mb-1 text-capitalize font-weight-bold">
                    Avg. Revenue
                  </p>
                  <h5 class="font-weight-bolder mb-0">$1.200</h5>
                  <span class="font-weight-normal text-secondary text-sm"
                    ><span class="font-weight-bolder">+$213</span> since last
                    month</span
                  >
                </div>
                <div class="col-5">
                  <div class="dropdown text-end">
                    <a
                      href="javascript:;"
                      class="cursor-pointer text-secondary"
                      id="dropdownUsers3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="text-xs text-secondary">6 May - 7 May</span>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end px-2 py-3"
                      aria-labelledby="dropdownUsers3"
                    >
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Last 7 days</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Last week</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          >Last 30 days</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- All Stations -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-8">
                  <h5 class="mb-2 col-8">Game Stations</h5>
                  <p class="mb-0" v-if="$auth.isAdmin()">
                    Create game stations
                  </p>
                </div>
                <div class="col-4">
                  <a
                    href="javascript:;"
                    @click.prevent="createModal()"
                    v-if="$auth.isAdmin()"
                  >
                    <span class="badge bg-gradient-info ms-auto float-end">
                      Create Station
                    </span>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-3 flex">
                  <label for="search"> Search </label>
                  <div class="input-group">
                    <input
                      name="search"
                      class="form-control"
                      type="text"
                      v-model.lazy="search"
                      placeholder="Find Station"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label for="select">Select by:</label>
                  <select
                    v-model="selected"
                    class="form-select fmxw-200 d-none d-md-inline"
                    aria-label="Fillter by role"
                  >
                    <option selected="selected" value="">Show All</option>
                    <option
                      v-for="(available, i) in availables"
                      :key="i"
                      :value="available.id"
                    >
                      {{ available.name }}
                    </option>
                  </select>
                </div>
                <div class="col-2">
                  <label for="select">Show:</label>
                  <select
                    v-model="total"
                    class="form-select fmxw-200 d-none d-md-inline"
                    aria-label="show"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option v-if="stations.data" :value="stations.meta.total">
                      All {{ stations.meta.total }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th
                        class="
                          text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Station Name
                      </th>
                      <th
                        class="
                          text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                          ps-2
                        "
                      >
                        Console
                      </th>
                      <th
                        class="
                          text-center text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        TV / Screen
                      </th>
                      <th
                        class="
                          text-center text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Status
                      </th>
                      <th
                        class="
                          text-center text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(station, i) in stations.data" :key="i">
                      <td>
                        <div class="d-flex px-3 py-1">
                          <div>
                            <img
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg"
                              class="avatar me-3"
                              alt="image"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">{{ station.name }}</h6>
                            <p
                              class="
                                text-sm
                                font-weight-bold
                                text-secondary
                                mb-0
                              "
                            ></p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">
                          <Tag :color="station.console.condition.color">
                            {{ station.console.serial_number }}
                          </Tag>
                        </p>
                        <p class="text-sm font-weight-bold text-secondary mb-0">
                          <span class="text-dark">
                            {{ station.console.type.name }}
                          </span>
                        </p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <p class="text-sm font-weight-bold mb-0">
                          <Tag :color="station.screen.condition.color">
                            {{ station.screen.serial_number }}
                          </Tag>
                          {{ station.screen.size }} "
                        </p>
                        <p class="text-sm font-weight-bold text-secondary mb-0">
                          <span class="text-dark">
                            {{ station.screen.make.name }}
                          </span>
                          {{ station.screen.model }}
                        </p>
                      </td>
                      <td class="align-middle text-end">
                        <Tag :color="station.available.color">
                          {{ station.available.name }}
                        </Tag>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- modal -->
      <!-- Create station or edit -->
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
              <h5 v-if="!editMode" class="modal-title">Create Screen</h5>
              <h5 v-else class="modal-title">Edit Screen</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" v-if="!editStatus">
              <div class="row">
                <FormulateInput
                  type="text"
                  required
                  label="Station Name"
                  validation="required"
                  v-model="form.name"
                />
              </div>
              <div class="row mt-3">
                <div class="col-5">
                  <Label>Screen / TV</Label>
                  <Select v-model="form.screen_id">
                    <Option
                      v-for="(screen, i) in screens.data"
                      :value="screen.id"
                      :key="i"
                      clearable
                      filterable
                    >
                      {{ screen.serial_number }}
                    </Option>
                  </Select>
                </div>
                <div class="col-7">
                  <Label>Console</Label>
                  <Select v-model="form.console_id">
                    <Option
                      v-for="(console, i) in consoles.data"
                      :value="console.id"
                      :key="i"
                      clearable
                      filterable
                    >
                      {{ console.serial_number }}
                    </Option>
                  </Select>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <Label>Availability</Label>
                  <Select v-model="form.available_id">
                    <Option
                      v-for="(available, i) in availables"
                      :value="available.id"
                      :key="i"
                      clearable
                      filterable
                    >
                      {{ available.name }}
                    </Option>
                  </Select>
                </div>
              </div>
            </div>
            <div class="modal-body" v-if="editStatus">
              <div class="row mt-3">
                <Label>Status / Condition</Label>
                <Select v-model="form.condition_id">
                  <Option
                    v-for="(condition, i) in conditions"
                    :value="condition.id"
                    :key="i"
                    clearable
                    filterable
                  >
                    {{ condition.name }}
                  </Option>
                </Select>
              </div>
            </div>
            <div class="modal-footer" v-if="!editStatus">
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
                @click="updateStation(form.id)"
                :disabled="processing"
              >
                {{ processing ? 'Saving ...' : 'Save Changes' }}
              </button>
              <button
                v-else
                type="button"
                class="btn bg-gradient-primary"
                @click="createStation()"
                :disabled="processing"
              >
                {{ processing ? 'Creating ...' : 'Create' }}
              </button>
            </div>
            <div class="modal-footer" v-else>
              <button
                type="button"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
                @click="closeModal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn bg-gradient-primary"
                @click="updateScreen(form.id)"
                :disabled="processing"
              >
                {{ processing ? 'Saving ...' : 'Save Changes' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <not-found></not-found>
    </div>
  </div>
</template>
<script>
import NotFound from '@/pages/Errors/notfound.vue'
export default {
  components: { NotFound },
  data() {
    return {
      deleteModal: false,
      isDeleting: false,
      isCreating: false,
      editMode: false,
      editStatus: false,
      processing: false,
      deletingItem: null,
      form: {},
      stations: {},
      screens: {},
      consoles: {},
      availables: {},
      conditions: [],
      token: '',
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
      this.getStations()
    },
    search: function (value) {
      this.getStations()
    },
    selected: function (value) {
      this.getStations()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.stations.data.forEach((station) => {
          this.checked.push(station.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/screens/export/' + this.checked
    },
  },
  mounted() {
    this.getAvailablity()
    this.getStations()
    this.getConsoles()
    this.getScreens()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form.name = ''
      this.form.console_id = ''
      this.form.screen_id = ''
    },
    createModal() {
      $('#modal-default').modal('show')
      ;(this.editStatus = false), (this.editMode = false)
    },
    editModal(screen) {
      let obj = {
        id: screen.id,
        serial_number: screen.serial_number,
        model_number: screen.model,
        make_id: screen.make.id,
        type: screen.type,
        feature: screen.feature,
        storage: screen.storage,
        size: screen.size,
        condition_id: screen.condition.id,
      }
      $('#modal-default').modal('show')
      this.editMode = true
      this.editStatus = false
      this.form = obj
    },
    changeStatusModal(screen) {
      let obj = {
        id: screen.id,
        serial_number: screen.serial_number,
        model_number: screen.model,
        make_id: screen.make.id,
        type: screen.type,
        feature: screen.feature,
        storage: screen.storage,
        size: screen.size,
        condition_id: screen.condition.id,
      }
      $('#modal-default').modal('show')
      ;(this.editMode = false), (this.editStatus = true), (this.form = obj)
    },
    showDeleteModal(screen) {
      this.form = screen
      this.deleteModal = true
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc'
      } else {
        this.sort_field = field
      }
      this.getScreens()
    },
    isChecked(screen_id) {
      return this.checked.includes(screen_id)
    },
    async selectAllRecords() {
      const res = await this.callApi('get', '/api/v1/screens/all/')
      if (res.status === 200) {
        this.checked = res.data
        this.selectAll = true
        screen.log(this.selectAll)
      }
    },
    async getScreens() {
      const res = await this.callApi('get', '/api/v1/screens')
      if (res.status === 200) {
        this.screens = res.data
      }
    },
    async getConsoles() {
      const res = await this.callApi('get', '/api/v1/consoles')
      if (res.status === 200) {
        this.consoles = res.data
      }
    },
    async getAvailablity() {
      const res = await this.callApi('get', '/api/v1/availability')
      if (res.status === 200) {
        this.availables = res.data
      }
    },
    async getStations(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/stations?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.stations = res.data
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
    async createStation() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/stations', this.form)
      if (res.status === 200) {
        this.s('Screen created successfully')
        this.closeModal()
        this.getStations()
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
    async updateScreen(screen_id) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/screens/${screen_id}`,
        this.form
      )
      if (res.status == 200) {
        this.closeModal()
        this.getScreens()
        this.s('Successfully updated screen')
        this.processing = false
      } else {
        if (res.status == 422) {
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
    async deleteScreen(screen_id) {
      this.isDeleting = true
      const res = await this.callApi('delete', `/api/v1/screens/${screen_id}`)
      if (res.status == 204) {
        this.w('Screen deleted')
        this.checked = this.checked.filter((id) => id != screen_id)
        this.isDeleting = false
        this.deleteModal = false
        this.getScreens()
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
}
</script>
