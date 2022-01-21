<template>
  <div>
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
                  class="col-md-6 d-flex justify-content-end align-items-center"
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
                    <option selected="selected" value="Registered">Registered</option>
                    <option selected="selected" value="Pending">Pending</option>
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
                      v-if="invitations.data"
                      :value="invitations.meta.total"
                    >
                      All {{ invitations.meta.total }}
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
                  v-for="(invitation, i) in invitations.data"
                  :key="i"
                >
                  <div class="col-md-7 col-6">
                    <div
                      class="
                        border-dashed border-1 border-secondary border-radius-md
                        p-3
                      "
                    >
                      <p class="text-xs mb-2">
                        Generated
                        <!-- generate logic in time process -->
                        <span
                          v-if="invitation.days.i < 2 && invitation.days.d < 1"
                        >
                          a few seconds
                        </span>
                        <span
                          v-if="
                            invitation.days.i > 2 &&
                            invitation.days.d < 1 &&
                            invitation.days.h < 1
                          "
                        >
                          {{ invitation.days.i }} minuntes
                        </span>
                        <span
                          v-if="invitation.days.h >= 1 && invitation.days.d < 1"
                        >
                          {{ invitation.days.h }} hours
                        </span>
                        <span v-if="invitation.days.d >= 1">
                          {{ invitation.days.d }} day
                        </span>
                        <span v-if="invitation.days.d > 1">
                          {{ invitation.days.d }} days
                        </span>
                        ago by
                        <span class="font-weight-bolder">
                          {{ invitation.email }}
                        </span>
                      </p>
                      <p class="text-xs mb-3">
                        <span class="font-weight-bolder">
                          ({{ invitation.phone }})
                        </span>
                      </p>
                      <div class="d-flex align-items-center">
                        <div class="form-group w-70">
                          <div class="input-group bg-gray-200">
                            <input
                              class="form-control form-control-sm"
                              :value="invitation.invitation_token"
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
                          v-clipboard:copy="invitation.invitation_token"
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
                    v-if="invitation.status == 'Pending'"
                  >
                    <a
                      class="btn btn-link text-success text-gradient px-3 mb-0"
                      href="javascript:;"
                      @click="showApproveModal(invitation)"
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
                    v-if="invitation.status == 'Sent'"
                  >
                    <a
                      class="btn btn-link text-success text-gradient px-3 mb-0"
                      href="javascript:;"
                      @click="showApproveModal(invitation)"
                    >
                      <i class="fa fa-plane me-2" aria-hidden="true"></i>
                      Sent
                    </a>
                  </div>
                  <div
                    class="ms-auto text-end"
                    v-if="invitation.status == 'Registered'"
                  >
                    <a
                      class="btn btn-link text-info text-gradient px-3 mb-0"
                      href="javascript:;"
                      @click="showApproveModal(invitation)"
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
    <!-- Approve Modal -->
    <Modal v-model="approveModal" width="400">
      <p slot="header" style="'color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>Approve Confirmation</span>
      </p>
      <div style="text-align: center">
        <p>
          By accepting this, you are confirming
          <Tag color="blue">{{ form.email }}'s </Tag>
          request
        </p>
        <p>This process is irriversible</p>
      </div>
      <div slot="footer">
        <Button
          type="info"
          size="large"
          long
          :loading="isProcessing"
          :disabled="isProcessing"
          @click="approveRequest(form.id)"
        >
          {{ isProcessing ? 'Processing...' : 'Accept' }}
        </Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
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
      invitations: {},
      roles: {},
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
      this.getInvitations()
    },
    search: function (value) {
      this.getInvitations()
    },
    selected: function (value) {
      this.getInvitations()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.invitations.data.forEach((invitations) => {
          this.checked.push(invitations.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/invitations/export/' + this.checked
    },
  },
  mounted() {
    this.getInvitations()
  },
  methods: {
    showApproveModal(invitation) {
      this.approveModal = true
      this.form = invitation
    },
    async getInvitations(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/invitations?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.invitations = res.data
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
    async approveRequest(invitation_id) {
      this.isProcessing = true
      const res = await this.callApi(
        'get',
        `/api/v1/invitations/approve/${invitation_id}`
      )
      if (res.status === 200) {
        this.approveModal = false
        this.isProcessing = false
        this.s('Sent invitation link')
        this.getInvitations()
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
