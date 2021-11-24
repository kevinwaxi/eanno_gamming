<template>
  <div>
    <div class="row">
      <div class="col-lg-7 position-relative z-index-2">
        <div class="card card-plain mb-4">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <h2 class="font-weight-bolder mb-0">General Statistics</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5 col-sm-5">
            <div class="card mb-4">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        Today's Bookings
                      </p>
                      <h5 class="font-weight-bolder mb-0">
                        {{ bookings.length }}
                        <span class="text-success text-sm font-weight-bolder">
                          +55%
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div
                      class="
                        icon icon-shape
                        bg-gradient-primary
                        shadow
                        text-center
                        border-radius-md
                      "
                    >
                      <i class="ni ni-money-coins text-lg opacity-10"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        All Users
                      </p>
                      <h5 class="font-weight-bolder mb-0">
                        {{ users.length }}
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <router-link :to="{ name: 'all_users' }">
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-primary
                          shadow
                          text-center
                          border-radius-md
                        "
                      >
                        <i class="ni ni-world text-lg opacity-10"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-sm-5 mt-sm-0 mt-4">
            <div class="card mb-4">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        New Requests
                      </p>
                      <h5 class="font-weight-bolder mb-0">
                        {{ requests.length }}
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <router-link :to="{ name: 'all_requests' }">
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-primary
                          shadow
                          text-center
                          border-radius-md
                        "
                      >
                        <i class="ni ni-paper-diploma text-lg opacity-10"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        Sales
                      </p>
                      <h5 class="font-weight-bolder mb-0">
                        $103,430
                        <span class="text-success text-sm font-weight-bolder"
                          >+5%</span
                        >
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div
                      class="
                        icon icon-shape
                        bg-gradient-primary
                        shadow
                        text-center
                        border-radius-md
                      "
                    >
                      <i class="ni ni-cart text-lg opacity-10"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-10">
            <div class="card">
              <div class="card-header pb-0 p-3">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">Todays bookings</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(booking, i) in allBookings.data" :key="i">
                      <td class="w-30">
                        <div class="px-2 py-1 align-items-center">
                          <div class="ms-4">
                            <p class="text-xs font-weight-bold mb-0">name:</p>
                            <h6 class="text-sm mb-0">
                              {{ booking.user.name }}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="text-xs font-weight-bold mb-0">date:</p>
                          <h6 class="text-sm mb-0">
                            {{ booking.booking_date }}
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="text-xs font-weight-bold mb-0">time:</p>
                          <h6 class="text-sm mb-0">$230,900</h6>
                        </div>
                      </td>
                      <td class="align-middle text-sm">
                        <div class="col text-center">
                          <p class="text-xs font-weight-bold mb-0">status:</p>
                          <div class="ms-auto text-end">
                            <a
                              v-if="booking.status === 'Pending'"
                              href="javascript:;"
                              @click="approveBookingModal(booking)"
                              class="
                                btn btn-link
                                text-success text-gradient
                                px-3
                                mb-0
                              "
                            >
                              <i
                                aria-hidden="true"
                                class="far fa-trash-alt me-2"
                              >
                              </i>
                              Approve
                            </a>
                            <a
                              v-else
                              href="javascript:;"
                              class="
                                btn btn-link
                                text-success text-gradient
                                px-3
                                mb-0
                              "
                              ><i
                                aria-hidden="true"
                                class="far fa-trash-alt me-2"
                              >
                              </i>
                              Change time
                            </a>
                            <a
                              href="javascript:;"
                              class="btn btn-link text-danger px-3 mb-0"
                            >
                              <i
                                aria-hidden="true"
                                class="fas fa-pencil-alt text-danger me-2"
                              >
                              </i>
                              Deny
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- approve modal -->
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
            <h5 v-if="!editMode" class="modal-title">Accept Booking</h5>
            <h5 v-else class="modal-title">Edit Booking</h5>
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
              <div class="col-3">Current Booking</div>
              <div class="col-9">
                <div class="card h-100">
                  <div class="card-header pb-0 p-3">
                    <div class="row">
                      <div class="col-md-8 d-flex align-items-center">
                        <h6 class="mb-0">Booking Information</h6>
                      </div>
                      <div class="col-md-4 text-end">
                        <a href="javascript:;">
                          <i
                            class="fas fa-user-edit text-secondary text-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit Profile"
                            aria-label="Edit Profile"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-3">
                    <hr class="horizontal gray-light my-4" />
                    <ul class="list-group">
                      <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                        <strong class="text-dark">Full Name:</strong> &nbsp;
                        {{ form.user }}
                      </li>
                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark">Status:</strong> &nbsp;
                        <Tag color="red">{{ form.status }}</Tag>
                      </li>
                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark">Date:</strong> &nbsp;
                        {{ form.date }}
                      </li>
                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark">Start time:</strong> &nbsp;
                        {{ form.start }}
                      </li>
                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark">End time:</strong> &nbsp;
                        {{ form.end }}
                      </li>
                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark">Station:</strong> &nbsp;
                        <Tag color="blue">{{ form.station }}</Tag>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <Col span="12">
                <Label>Date</Label>
                <DatePicker
                  type="date"
                  :options="fromToday"
                  v-model="form.date"
                  placeholder="Select date"
                ></DatePicker>
              </Col>
            </div>
            <div class="row">
              <div class="col-6">
                <Label>Station</Label>
                <Select v-model="form.station_id">
                  <Option
                    v-for="(station, i) in stations"
                    :value="station.id"
                    :key="i"
                    clearable
                    filterable
                  >
                    {{ station.name }}
                  </Option>
                </Select>
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
              v-if="!editMode"
              type="button"
              class="btn bg-gradient-primary"
              @click="updateBooking(form.id)"
              :disabled="processing"
            >
              {{ processing ? 'Saving ...' : 'Approve Booking' }}
            </button>
            <button
              v-else
              type="button"
              class="btn bg-gradient-primary"
              @click="createPermission()"
              :disabled="processing"
            >
              {{ processing ? 'Creating ...' : 'Create' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      processing: false,
      editMode: false,
      users: [],
      income: [],
      requests: [],
      bookings: [],
      stations: [],
      allBookings: {},
      form: {},
      selected: 'Approved',
      total: 20,
      search: '',
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: 'desc',
      sort_field: 'created_at',
      url: '',
      fromToday: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000
        },
      },
    }
  },
  watch: {
    total: function (value) {
      this.getAllBookings()
    },
    search: function (value) {
      this.getAllBookings()
    },
    selected: function (value) {
      this.getAllBookings()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.allBookings.data.forEach((booking) => {
          this.checked.push(booking.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/bookings/export/' + this.checked
    },
  },
  mounted() {
    this.getAllRequests()
    this.getAllUsers()
    this.getTodaysBookings()
    this.getAllBookings()
    this.getAllStations()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form.name = ''
    },
    approveBookingModal(booking) {
      let obj = {
        id: booking.id,
        user: booking.user.name,
        start: booking.start,
        end: booking.end,
        status: booking.status,
        date: booking.date,
      }
      this.form = obj
      $('#modal-default').modal('show')
      this.editMode = false
    },
    editModal(permission) {
      let obj = {
        id: permission.id,
        name: permission.name,
      }
      $('#modal-default').modal('show')
      this.editMode = true
      this.form = obj
    },
    async getAllRequests() {
      const res = await this.callApi('get', '/api/v1/invitations/pending')
      if (res.status === 200) {
        this.requests = res.data
      }
    },
    async getAllUsers() {
      const res = await this.callApi('get', '/api/v1/users/all')
      if (res.status === 200) {
        this.users = res.data
      }
    },
    async getTodaysBookings() {
      const res = await this.callApi('get', '/api/v1/bookings/today')
      if (res.status === 200) {
        this.bookings = res.data
      }
    },
    async getAllBookings(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/bookings?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.allBookings = res.data
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
    async getAllStations() {
      const res = await this.callApi('get', '/api/v1/stations')
      if (res.status === 200) {
        this.stations = res.data.data
      }
    },
  },
}
</script>
