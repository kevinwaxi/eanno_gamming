<template>
  <div>
    <div v-if="$auth.isAdmin() || $auth.isCashier">
      <div class="container-fluid py-4">
        <div class="row">
          <div class="mt-4">
            <div class="card h-100 mb-4">
              <div class="card-header pb-0 px-3">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="mb-0">Requested Bookings</h6>
                  </div>
                  <div
                    class="
                      col-md-6
                      d-flex
                      justify-content-end
                      align-items-center
                    "
                  >
                    <i class="far fa-calendar-alt me-2"></i>
                    <small>23 - 30 March 2020</small>
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
                        v-model="search"
                        placeholder="Search email or phone"
                      />
                    </div>
                  </div>
                  <div class="col-3">
                    <label for="select">Select by:</label>
                    <select
                      v-model="selected"
                      class="form-select fmxw-200 d-none d-md-inline"
                      aria-label="Filter by status"
                    >
                      <option selected="selected" value="">Show All</option>
                      <option selected="selected" value="Registered">
                        Verified
                      </option>
                      <option selected="selected" value="Pending">
                        Pending
                      </option>
                      <option selected="selected" value="Sent">Rejected</option>
                    </select>
                  </div>
                  <div class="col-2">
                    <label for="select">Show:</label>
                    <select
                      v-model="total"
                      class="form-select fmxw-200 d-none d-md-inline"
                      aria-label="show"
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option v-if="bookings.data" :value="bookings.meta.total">
                        All {{ bookings.meta.total }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="card-body pt-4 p-3">
                <ul class="list-group">
                  <li
                    class="
                      list-group-item
                      border-0
                      bg-gray-100
                      d-flex
                      justify-content-between
                      ps-0
                      mb-2
                      border-radius-lg
                    "
                    v-for="booking in bookings.data"
                    :key="booking.id"
                  >
                    <div class="col-md-7 col-6">
                      <div
                        class="
                          border-dashed
                          border-1
                          border-secondary
                          border-radius-md
                          p-3
                        "
                      >
                        <div class="d-flex flex-column">
                          <h6 class="mb-3 text-sm">{{ booking.user.name }}</h6>
                          <span class="mb-2 text-xs">
                            Game:
                            <span class="text-dark font-weight-bold ms-2">
                              {{ booking.game.name }}
                            </span>
                          </span>
                          <span class="mb-2 text-xs">
                            Date:
                            <span class="text-dark ms-2 font-weight-bold">
                              {{ booking.date }} from {{ booking.start }} to
                              {{ booking.end }} for approx
                              <i>{{ booking.time.h }} hours</i>
                            </span>
                          </span>
                          <span class="mb-2 text-xs">
                            Recommendation:
                            <span class="text-dark ms-2 font-weight-bold">
                              Please suggest the best time and which station to
                              play on.
                            </span>
                          </span>
                          <span class="mb-2 text-xs">
                            Approx Charges:
                            <span class="text-dark ms-2 font-weight-bold">
                              {{ booking.time.h }} * 250/=.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="ms-auto text-end"
                      v-if="booking.status === 'Pending'"
                    >
                      <a
                        class="
                          btn btn-link
                          text-success text-gradient
                          px-3
                          mb-0
                        "
                        href="javascript:;"
                        @click="showApproveModal(booking)"
                      >
                        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>
                        Approve
                      </a>
                      <a
                        class="btn btn-link text-danger px-3 mb-0"
                        href="javascript:;"
                        @click.prevent="editBooking(booking)"
                      >
                        <i
                          class="fas fa-pencil-alt text-danger me-2"
                          aria-hidden="true"
                        >
                        </i>
                        Edit
                      </a>
                    </div>
                    <div
                      class="ms-auto text-end"
                      v-if="booking.status == 'Sent'"
                    >
                      <a
                        class="
                          btn btn-link
                          text-success text-gradient
                          px-3
                          mb-0
                        "
                        href="javascript:;"
                        @click="showApproveModal(booking)"
                      >
                        <i class="fa fa-plane me-2" aria-hidden="true"></i>
                        Sent
                      </a>
                    </div>
                    <div
                      class="ms-auto text-end"
                      v-if="booking.status == 'Registered'"
                    >
                      <a
                        class="btn btn-link text-info text-gradient px-3 mb-0"
                        href="javascript:;"
                        @click="showApproveModal(booking)"
                      >
                        <i class="fa fa-check me-2" aria-hidden="true"></i>
                        Registered
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modals start here -->
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
              <h5 v-if="!editMode" class="modal-title">Approve Booking</h5>
              <h5 v-else class="modal-title">Deny Booking</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >

                <span aria-hidden="true">&times;</span>
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
  components: { Notfound },
  data() {
    return {
      approveModal: false,
      deleteModal: false,
      massDeleteModal: false,
      isProcessing: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      bookings: {},
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
        this.bookings.data.forEach((bookings) => {
          this.checked.push(bookings.id)
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
  },
  methods: {
    showApproveModal(booking) {
      this.approveModal = true
      this.form = booking
    },
    async getBookings(page = 1) {
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
        this.bookings = res.data
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
    async approveRequest(booking_id) {
      this.isProcessing = true
      const res = await this.callApi(
        'get',
        `/api/v1/bookings/approve/${booking_id}`
      )
      if (res.status === 200) {
        this.approveModal = false
        this.isProcessing = false
        this.s('Sent booking link')
        this.getBookings()
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
    onCopy: function (e) {
      this.s('You just copied: ' + e.text)
    },
    onError: function (e) {
      this.e('Failed to copy texts')
    },
  },
}
</script>
