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
                    <h6 class="mb-0">Requested Accounts</h6>
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
                      aria-label="Fillter by role"
                    >
                      <option selected="selected" value="">Show All</option>
                      <option selected="selected" value="Registered">
                        Registered
                      </option>
                      <option selected="selected" value="Pending">
                        Pending
                      </option>
                      <option selected="selected" value="Sent">Sent</option>
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
                      <option
                        v-if="bookings.data"
                        :value="bookings.meta.total"
                      >
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
                    v-for="(booking, i) in bookings.data"
                    :key="i"
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
                        <p class="text-xs mb-2">
                          Generated
                          <!-- generate logic in time process -->
                          <span
                            v-if="
                              booking.days.i < 2 && booking.days.d < 1
                            "
                          >
                            a few seconds
                          </span>
                          <span
                            v-if="
                              booking.days.i > 2 &&
                              booking.days.d < 1 &&
                              booking.days.h < 1
                            "
                          >
                            {{ booking.days.i }} minuntes
                          </span>
                          <span
                            v-if="
                              booking.days.h >= 1 && booking.days.d < 1
                            "
                          >
                            {{ booking.days.h }} hours
                          </span>
                          <span v-if="booking.days.d >= 1">
                            {{ booking.days.d }} day
                          </span>
                          <span v-if="booking.days.d > 1">
                            {{ booking.days.d }} days
                          </span>
                          ago by
                          <span class="font-weight-bolder">
                            {{ booking.email }}
                          </span>
                        </p>
                        <p class="text-xs mb-3">
                          <span class="font-weight-bolder">
                            ({{ booking.phone }})
                          </span>
                        </p>
                        <div class="d-flex align-items-center">
                          <div class="form-group w-70">
                            <div class="input-group bg-gray-200">
                              <input
                                class="form-control form-control-sm"
                                :value="booking.booking_token"
                                type="text"
                                disabled=""
                                onfocus="focused(this)"
                                onfocusout="defocused(this)"
                              />
                              <span
                                class="input-group-text bg-transparent"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Referral code expires in 24 hours"
                                aria-label="Referral code expires in 24 hours"
                              >
                                <i class="ni ni-key-25"> </i>
                              </span>
                            </div>
                          </div>
                          <a
                            href="javascript:;"
                            class="btn btn-sm btn-outline-secondary ms-2 px-3"
                            v-clipboard:copy="booking.booking_token"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                          >
                            Copy
                          </a>
                        </div>
                        <p class="text-xs mb-1">You cannot generate codes.</p>
                      </div>
                    </div>
                    <div
                      class="ms-auto text-end"
                      v-if="booking.status == 'Pending'"
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
                      >
                        <i
                          class="fas fa-pencil-alt text-danger me-2"
                          aria-hidden="true"
                        >
                        </i>
                        Deny
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
}
</script>
