<template>
  <div>
    <div class="container-fluid py-4" v-if="$auth.can('update users')">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div
                class="card"
                style="
                  background-image: url('/assets/img/curved-images/white-curved.jpeg');
                "
              >
                <span
                  class="mask bg-gradient-dark opacity-9 border-radius-xl"
                ></span>
                <div class="card-body p-3 position-relative">
                  <div class="row">
                    <div class="col-8 text-start">
                      <div
                        class="
                          icon icon-shape
                          bg-white
                          shadow
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="
                            ni ni-circle-08
                            text-dark text-gradient text-lg
                            opacity-10
                          "
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h5
                        class="text-white font-weight-bolder mb-0 mt-3"
                        v-if="users.data"
                      >
                        {{ users.data.length }}
                      </h5>
                      <span class="text-white text-sm">All Users</span>
                    </div>
                    <div class="col-4">
                      <div class="dropdown text-end mb-6">
                        <a
                          href="javascript:;"
                          class="cursor-pointer"
                          id="dropdownUsers1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            class="fa fa-ellipsis-h text-white"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul
                          class="dropdown-menu px-2 py-3"
                          aria-labelledby="dropdownUsers1"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Another action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                      <p
                        class="
                          text-white text-sm text-end
                          font-weight-bolder
                          mt-auto
                          mb-0
                        "
                      >
                        +55%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
              <div
                class="card"
                style="
                  background-image: url('/assets/img/curved-images/white-curved.jpeg');
                "
              >
                <span
                  class="mask bg-gradient-dark opacity-9 border-radius-xl"
                ></span>
                <div class="card-body p-3 position-relative">
                  <div class="row">
                    <div class="col-8 text-start">
                      <div
                        class="
                          icon icon-shape
                          bg-white
                          shadow
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="
                            ni ni-active-40
                            text-dark text-gradient text-lg
                            opacity-10
                          "
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h5 class="text-white font-weight-bolder mb-0 mt-3">
                        357
                      </h5>
                      <span class="text-white text-sm">Active Stations</span>
                    </div>
                    <div class="col-4">
                      <div class="dropdown text-end mb-6">
                        <a
                          href="javascript:;"
                          class="cursor-pointer"
                          id="dropdownUsers2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            class="fa fa-ellipsis-h text-white"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul
                          class="dropdown-menu px-2 py-3"
                          aria-labelledby="dropdownUsers2"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Another action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                      <p
                        class="
                          text-white text-sm text-end
                          font-weight-bolder
                          mt-auto
                          mb-0
                        "
                      >
                        +124%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-6 col-md-6 col-12">
              <div
                class="card"
                style="
                  background-image: url('/assets/img/curved-images/white-curved.jpeg');
                "
              >
                <span
                  class="mask bg-gradient-dark opacity-9 border-radius-xl"
                ></span>
                <div class="card-body p-3 position-relative">
                  <div class="row">
                    <div class="col-8 text-start">
                      <div
                        class="
                          icon icon-shape
                          bg-white
                          shadow
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="
                            ni ni-cart
                            text-dark text-gradient text-lg
                            opacity-10
                          "
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h5
                        class="text-white font-weight-bolder mb-0 mt-3"
                        v-if="users.data"
                      >
                        {{ users.data.length }}
                      </h5>
                      <span class="text-white text-sm">Banned Users</span>
                    </div>
                    <div class="col-4">
                      <div class="dropdown text-end mb-6">
                        <a
                          href="javascript:;"
                          class="cursor-pointer"
                          id="dropdownUsers3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            class="fa fa-ellipsis-h text-white"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul
                          class="dropdown-menu px-2 py-3"
                          aria-labelledby="dropdownUsers3"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Another action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                      <p
                        class="
                          text-white text-sm text-end
                          font-weight-bolder
                          mt-auto
                          mb-0
                        "
                      >
                        +15%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
              <div
                class="card"
                style="
                  background-image: url('/assets/img/curved-images/white-curved.jpeg');
                "
              >
                <span
                  class="mask bg-gradient-dark opacity-9 border-radius-xl"
                ></span>
                <div class="card-body p-3 position-relative">
                  <div class="row">
                    <div class="col-8 text-start">
                      <div
                        class="
                          icon icon-shape
                          bg-white
                          shadow
                          text-center
                          border-radius-md
                        "
                      >
                        <i
                          class="
                            ni ni-like-2
                            text-dark text-gradient text-lg
                            opacity-10
                          "
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h5 class="text-white font-weight-bolder mb-0 mt-3">
                        940
                      </h5>
                      <span class="text-white text-sm">All Users</span>
                    </div>
                    <div class="col-4">
                      <div class="dropdown text-end mb-6">
                        <a
                          href="javascript:;"
                          class="cursor-pointer"
                          id="dropdownUsers4"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            class="fa fa-ellipsis-h text-white"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul
                          class="dropdown-menu px-2 py-3"
                          aria-labelledby="dropdownUsers4"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Another action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                      <p
                        class="
                          text-white text-sm text-end
                          font-weight-bolder
                          mt-auto
                          mb-0
                        "
                      >
                        +90%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 mt-4 mt-lg-0">
          <div class="card h-100">
            <div class="card-header pb-0 p-3">
              <h6 class="mb-0">Reviews</h6>
            </div>
            <div class="card-body pb-0 p-3">
              <ul class="list-group">
                <li
                  class="
                    list-group-item
                    border-0
                    d-flex
                    align-items-center
                    px-0
                    mb-0
                  "
                >
                  <div class="w-100">
                    <div class="d-flex mb-2">
                      <span
                        class="me-2 text-sm font-weight-bold text-capitalize"
                        >Positive reviews</span
                      >
                      <span class="ms-auto text-sm font-weight-bold">80%</span>
                    </div>
                    <div>
                      <div class="progress progress-md">
                        <div
                          class="progress-bar bg-gradient-info w-80"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="
                    list-group-item
                    border-0
                    d-flex
                    align-items-center
                    px-0
                    mb-2
                  "
                >
                  <div class="w-100">
                    <div class="d-flex mb-2">
                      <span
                        class="me-2 text-sm font-weight-bold text-capitalize"
                        >Neutral reviews</span
                      >
                      <span class="ms-auto text-sm font-weight-bold">17%</span>
                    </div>
                    <div>
                      <div class="progress progress-md">
                        <div
                          class="progress-bar bg-gradient-dark w-10"
                          role="progressbar"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="
                    list-group-item
                    border-0
                    d-flex
                    align-items-center
                    px-0
                    mb-2
                  "
                >
                  <div class="w-100">
                    <div class="d-flex mb-2">
                      <span
                        class="me-2 text-sm font-weight-bold text-capitalize"
                        >Negative reviews</span
                      >
                      <span class="ms-auto text-sm font-weight-bold">3%</span>
                    </div>
                    <div>
                      <div class="progress progress-md">
                        <div
                          class="progress-bar bg-gradient-danger w-5"
                          role="progressbar"
                          aria-valuenow="5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-footer pt-0 p-3 d-flex align-items-center">
              <div class="w-60">
                <p class="text-sm">
                  More than <b>1,500,000</b> developers used Creative Tim's
                  products and over <b>700,000</b> projects were created.
                </p>
              </div>
              <div class="w-40 text-end">
                <a
                  class="btn bg-gradient-dark mb-0 text-end"
                  href="javascript:;"
                  >View all reviews</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-3 flex">
                  <label for="search"> Search </label>
                  <div class="input-group">
                    <input
                      name="search"
                      class="form-control"
                      type="text"
                      v-model.lazy="search"
                      placeholder="User details"
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
                      v-for="(role, i) in roles.data"
                      :key="i"
                      :value="role.id"
                    >
                      {{ role.name }}
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
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option v-if="users.data" :value="users.meta.total">
                      All {{ users.meta.total }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="border-bottom">
                      <div class="form-check dashboard-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkAllRecords"
                          v-model="selectPage"
                        />
                        <label
                          class="form-check-label"
                          for="checkAllRecords"
                        ></label>
                      </div>
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      <a
                        href="#"
                        class="text-gray-900"
                        @click.prevent="change_sort('name')"
                      >
                        Name
                      </a>
                      <span
                        v-if="sort_direction == 'desc' && sort_field == 'name'"
                      >
                        &uarr;
                      </span>
                      <span
                        v-if="sort_direction == 'asc' && sort_field == 'name'"
                      >
                        &darr;
                      </span>
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                        ps-2
                      "
                    >
                      Roles
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                        ps-2
                      "
                    >
                      <a
                        href="#"
                        class="text-gray-900"
                        @click.prevent="change_sort('phone')"
                      >
                        Phone
                      </a>
                      <span
                        v-if="sort_direction == 'desc' && sort_field == 'phone'"
                      >
                        &uarr;
                      </span>
                      <span
                        v-if="sort_direction == 'asc' && sort_field == 'phone'"
                      >
                        &darr;
                      </span>
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                        ps-2
                      "
                    >
                      <a
                        href="#"
                        class="text-gray-900"
                        @click.prevent="change_sort('username')"
                      >
                        username
                      </a>
                      <span
                        v-if="
                          sort_direction == 'desc' && sort_field == 'username'
                        "
                      >
                        &uarr;
                      </span>
                      <span
                        v-if="
                          sort_direction == 'asc' && sort_field == 'username'
                        "
                      >
                        &darr;
                      </span>
                    </th>
                    <th></th>
                    <th
                      v-if="$auth.can('update users')"
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(user, i) in users.data"
                    :key="i"
                    :class="isChecked(user.id) ? 'table-secondary' : ''"
                  >
                    <td>
                      <div class="form-check dashboard-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="userCheck1"
                          v-model="checked"
                          :value="user.id"
                        />
                        <label
                          class="form-check-label"
                          for="userCheck1"
                        ></label>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div>
                          <img
                            :src="user.avatar"
                            class="avatar me-3"
                            :alt="user.username"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ user.name }}</h6>
                          <p
                            class="text-sm font-weight-bold text-secondary mb-0"
                          >
                            {{ user.email }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        v-for="(r, i) in user.roles"
                        :key="i"
                        class="text-sm text-secondary mb-0"
                      >
                        <Tag color="geekblue">{{ r.name }}</Tag>
                      </p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">{{ user.phone }}</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">
                        {{ user.username }}
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">
                        {{ user.member }}
                      </span>
                    </td>
                    <td>
                      <div
                        class="ms-auto text-end"
                        v-if="$auth.can('update users')"
                      >
                        <a
                          v-if="
                            user.banned_until === null &&
                            user.roles.name !== 'admin'
                          "
                          class="
                            btn btn-link
                            text-danger text-gradient
                            px-3
                            mb-0
                          "
                          href="javascript:;"
                          @click.prevent="showBanModal(user)"
                        >
                          <i class="far fa-trash-alt me-2" aria-hidden="true">
                          </i>
                          Ban
                        </a>
                        <a
                          v-else
                          class="
                            btn btn-link
                            text-warning text-gradient
                            px-3
                            mb-0
                          "
                          href="javascript:;"
                          @click.prevent="restoreUser(user.id)"
                        >
                          <i
                            class="fas fa-trash-restore me-2"
                            aria-hidden="true"
                          >
                          </i>
                          Restore
                        </a>
                        <a
                          v-if="user.banned_until === null"
                          class="btn btn-link text-info text-gradient px-3 mb-0"
                          href="javascript:;"
                          @click.prevent="showAssignRoleModal(user)"
                        >
                          <i class="fa fa-user-shield me-2" aria-hidden="true">
                          </i>
                          Assign Role
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Ban modal -->

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
              <h5 v-if="banMode" class="modal-title">Ban {{ form.name }}</h5>
              <h5 v-else class="modal-title">Assign role to {{ form.name }}</h5>
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
              <div>
                <h4 v-if="banMode" class="h5 text-black-50">
                  Banning {{ form.name }}
                </h4>
                <h4 v-else class="h5 text-black-50">
                  Assigning role to {{ form.name }}
                </h4>
              </div>
              <div v-if="banMode">
                <DatePicker
                  type="date"
                  :options="option1"
                  placeholder="Select date"
                  style="width: 200px"
                  v-model="form.banned_until"
                ></DatePicker>
              </div>
              <div v-else>
                <Select v-model="form.roles" multiple :max-tag-count="5">
                  <Option
                    v-for="(role, i) in roles.data"
                    :value="role.id"
                    :key="i"
                  >
                    {{ role.name }}
                  </Option>
                </Select>
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
                v-if="banMode"
                type="button"
                class="btn bg-gradient-primary"
                @click="banUser(form)"
                :disabled="processing"
              >
                {{ processing ? 'Banning ...' : 'Ban User' }}
              </button>
              <button
                v-else
                type="button"
                class="btn bg-gradient-primary"
                @click="assignRole(form)"
                :disabled="processing"
              >
                {{ processing ? 'Assigning ...' : 'Assign Role' }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Ban Confirmation modal -->
      <Modal v-model="banConfirmationModal" width="400">
        <p slot="header" style="'color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>Ban Confirmation</span>
        </p>
        <div style="text-align: center">
          <p>Are you sure you would like to ban this user ?</p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="processing"
            :disabled="processing"
            @click="banUser(form.id)"
          >
            {{ processing ? 'Please wait ...' : 'Ban' }}
          </Button>
        </div>
      </Modal>
    </div>
    <div v-else>
      <not-found></not-found>
    </div>
  </div>
</template>
<script>
import NotFound from '@pages/Errors/notfound.vue'
export default {
  components: {
    NotFound,
  },
  data() {
    return {
      banModal: false,
      banMode: false,
      banConfirmationModal: false,
      massDeleteModal: false,
      isProcessing: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {
        roles: [],
      },
      role: [],
      users: {},
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
      option1: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000
        },
      },
    }
  },
  watch: {
    total: function (value) {
      this.getUsers()
    },
    search: function (value) {
      this.getUsers()
    },
    selected: function (value) {
      this.getUsers()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.users.data.forEach((user) => {
          this.checked.push(user.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/users/export/' + this.checked
    },
  },
  mounted() {
    this.getUsers()
    this.getRoles()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.resetForm()
    },
    resetForm() {
      this.form.name = ''
      this.role = []
      this.form.roles = []
    },
    createModal() {
      $('#modal-default').modal('show')
      this.editMode = false
    },
    editModal(user) {
      let obj = {
        id: user.id,
        name: user.name,
      }
      $('#modal-default').modal('show')
      this.editMode = true
      this.form = obj
    },
    showBanModal(user) {
      let obj = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        banned_until: user.banned_until,
      }
      $('#modal-default').modal('show')
      this.form = obj
      this.banMode = true
    },
    showAssignRoleModal(user) {
      this.resetForm()
      for (let r of user.roles) {
        this.role.push(r.id)
      }
      let obj = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        banned_until: user.banned_until,
        roles: this.role,
      }
      $('#modal-default').modal('show')
      this.form = obj
      this.banMode = false
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
      this.getUsers()
    },
    isChecked(user_id) {
      return this.checked.includes(user_id)
    },
    async selectAllRecords() {
      const res = await this.callApi('get', '/api/v1/users/all/')
      if (res.status === 200) {
        this.checked = res.data
        this.selectAll = true
        console.log(this.selectAll)
      }
    },
    async getUsers(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/users?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.users = res.data
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
    async getRoles() {
      const res = await this.callApi('get', '/api/v1/roles')
      if (res.status === 200) {
        this.roles = res.data
      }
    },
    async createUser() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/users', this.form)
      if (res.status === 201) {
        this.s('User created successfully')
        this.closeModal()
        this.getUsers()
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
    async updateUser(user_id) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/users/${user_id}`,
        this.form
      )
      if (res.status == 200) {
        this.closeModal()
        this.getUsers()
        this.s('Successfully updated user')
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
    async banUser(user) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/users/ban/${user.id}`,
        this.form
      )
      if (res.status === 200) {
        this.banMode = false
        this.closeModal()
        this.getUsers()
        this.w('Banned user: ' + user.username)
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

    async assignRole(user) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/users/assignRole/${user.id}`,
        this.form
      )
      if (res.status === 200) {
        this.banMode = false
        this.closeModal()
        this.getUsers()
        this.s('Assigned role to: ' + user.username)
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

    async restoreUser(user_id) {
      const res = await this.callApi(
        'put',
        `/api/v1/users/restore/${user_id}`,
        this.form
      )
      if (res.status === 200) {
        this.getUsers()
        this.s('Successfully restored user')
      }
    },

    async deleteUser(user_id) {
      this.isDeleting = true
      const res = await this.callApi('delete', `/api/v1/users/${user_id}`)
      if (res.status == 204) {
        this.w('User deleted')
        this.checked = this.checked.filter((id) => id != user_id)
        this.isDeleting = false
        this.deleteModal = false
        this.getUsers()
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
        `/api/v1/users/massDestroy/${checked}`
      )
      if (res.status == 204) {
        this.s('User deleted successfully')
        this.massDeleteModal = false
        this.getUsers()
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
