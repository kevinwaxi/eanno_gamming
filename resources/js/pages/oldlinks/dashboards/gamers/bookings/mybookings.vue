<template>
  <div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
        <div class="col-12 col-md-10">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <div class="d-flex justify-content-between">
                <h6 class="mb-2">Previous Bookings</h6>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center">
                <tbody>
                  <tr v-for="(booking, i) in bookings.data" :key="i">
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Date:</p>
                        <h6 class="text-sm mb-0">{{ booking.date }}</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Station:</p>
                        <h6 class="text-sm mb-0">{{ booking.date }}</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Time:</p>
                        <h6 class="text-sm mb-0">{{ booking.time.h }} hour</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 class="text-sm mb-0">Kes.600</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Status:</p>
                        <h6 class="text-sm mb-0">Paid/Canceled</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Actions:</p>
                        <h6 class="text-sm mb-0">Export</h6>
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
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-header pb-0 p-3">
            <div class="row">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Your Pending Bookings</h6>
              </div>
              <div class="col-6 text-end">
                <button
                  class="btn btn-outline-primary btn-sm mb-0"
                  @click="createModal"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div class="card-body p-3 pb-0">
            <ul class="list-group">
              <li
                v-for="(booking, i) in bookings.data"
                :key="i"
                class="
                  list-group-item
                  border-0
                  d-flex
                  justify-content-between
                  ps-0
                  mb-2
                  border-radius-lg
                "
              >
                <div class="d-flex flex-column">
                  <h6 class="mb-1 text-dark font-weight-bold text-sm">
                    {{ booking.user.name }}
                  </h6>
                  <span class="text-xs">{{ booking.date }}</span>
                </div>
                <div class="d-flex align-items-center text-sm">
                  {{ booking.start }} - {{ booking.end }}
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true">
                    </i>
                    PDF
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Booking Modal -->
    <!-- Create booking -->
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
            <h5 v-if="!editMode" class="modal-title">Booking</h5>
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
            <div class="row mt-4">
              <div class="col-6">
                <Label>Game</Label>
                <Select v-model="form.game_id">
                  <Option
                    v-for="(game, i) in games"
                    :value="game.id"
                    :key="i"
                    clearable
                    filterable
                    placeholder="Choose game you would like to play"
                  >
                    {{ game.name }}
                  </Option>
                </Select>
              </div>
            </div>
            <div class="row mt-3">
              <Label> Booking Date </Label>
              <div class="col-8">
                <div class="input-group input-group-alternative mb-4">
                  <input
                    class="form-control"
                    placeholder="Pick Date"
                    type="date"
                    v-model="form.booking_date"
                  />
                  <span class="input-group-text">
                    <i class="ni ni-zoom-split-in"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <Label>Time</Label>
              <div class="row">
                <div class="col-6">
                  <Label>Start Time</Label>
                  <TimePicker
                    v-model="form.start_time"
                    type="time"
                    format="HH:mm"
                    :disabled-hours="disabledHours"
                    :steps="step"
                    placeholder="Select start time"
                  ></TimePicker>
                  <br />
                </div>
                <div class="col-6">
                  <Label>End Time</Label>
                  <TimePicker
                    v-model="form.end_time"
                    type="time"
                    format="HH:mm"
                    :disabled-hours="disabledHours"
                    :steps="step"
                    placeholder="Select end time"
                  ></TimePicker>
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
              @click="updateCategory(form.id)"
              :disabled="processing"
            >
              {{ processing ? 'Saving ...' : 'Save Changes' }}
            </button>
            <button
              v-else
              type="button"
              class="btn bg-gradient-primary"
              @click="createBooking()"
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
      disabledHours: [22, 23, 0, 1, 2, 3, 4, 5, 6, 7],
      step: [1, 15],
      deleteModal: false,
      massDeleteModal: false,
      isDeleting: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      bookings: {},
      stations: [],
      games: [],
      total: 5,
      search: '',
      selected: '',
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
      this.getBookings()
    },
    search: function (value) {
      this.getBookings()
    },
    selected: function (value) {
      this.getBookings()
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
      this.url = '/api/v1/bookings/export/' + this.checked
    },
  },
  mounted() {
    this.getBookings()
    this.getGames()
    this.getStations()
  },
  methods: {
    createModal() {
      $('#modal-default').modal('show')
      this.editMode = false
    },
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form.game_id = ''
      this.start_time = ''
      this.end_time = ''
    },

    async getStations() {
      const res = await this.callApi('get', '/api/v1/stations')
      if (res.status === 200) {
        this.stations = res.data.data
      }
    },
    async getGames() {
      const res = await this.callApi('get', '/api/v1/games')
      if (res.status === 200) {
        this.games = res.data.data
      }
    },
    async getBookings(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/bookings/mine?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.bookings = res.data
      }
    },
    async createBooking() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/bookings', this.form)
      if (res.status === 200) {
        this.processing = false
        this.closeModal()
        this.s('You have successfully made a reservation.')
        this.s('Be patient as you await to confirmation.')
        this.getBookings()
      } else {
        if (res.status === 401 || res.status === 422) {
          this.processing = false
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0])
          }
        } else {
          this.processing = false
          this.swr()
        }
      }
    },
  },
}
</script>
