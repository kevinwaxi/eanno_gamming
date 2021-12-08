<template>
  <div>
    <div v-if="$auth.isAdmin()||$auth.can('consoles list')">
      <div class="row mt-4">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-8">
                  <h5 class="mb-2 col-8">Game Consoles</h5>
                  <p class="mb-0" v-if="$auth.isAdmin()">
                    Create game consoles and assign then to stations
                  </p>
                </div>
                <div class="col-4">
                  <a
                    href="javascript:;"
                    @click.prevent="createModal()"
                    v-if="$auth.isAdmin()"
                  >
                    <span class="badge bg-gradient-info ms-auto float-end">
                      Create Console
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
                      placeholder="Console"
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
                      v-for="(condition, i) in conditions"
                      :key="i"
                      :value="condition.id"
                    >
                      {{ condition.name }}
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
                    <option v-if="consoles.data" :value="consoles.meta.total">
                      All {{ consoles.meta.total }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pt-0 pb-2" v-if="consoles.data">
              <div
                class="alert alert-dark alert-dismissible fade show"
                role="alert"
                v-if="consoles.data.length <= 0"
              >
                <span class="alert-icon"><i class="ni ni-like-2"></i></span>
                <span class="alert-text text-white">
                  <strong>Not Found!</strong>
                  There are no consoles avilable!
                </span>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="table-responsive p-0" v-else>
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
                        Serial Number
                      </th>
                      <th
                        class="
                          text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                          ps-2
                        "
                      >
                        Size
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
                    <tr v-for="(console, i) in consoles.data" :key="i">
                      <td>
                        <div class="d-flex px-3 py-1">
                          <div>
                            <img
                              src="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg"
                              alt="image"
                              class="avatar me-3"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">
                              {{ console.serial_number }}
                            </h6>
                            <p
                              class="
                                text-sm
                                font-weight-bold
                                text-secondary
                                mb-0
                              "
                            >
                              <span>{{ console.type.name }}</span>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">
                          {{ console.storage_size }}
                        </p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <p class="text-sm font-weight-bold mb-0">
                          <Tag :color="console.condition.color">
                            {{ console.condition.name }}
                          </Tag>
                        </p>
                      </td>
                      <td class="align-middle text-end">
                        <div class="btn-group">
                          <button
                            class="
                              btn btn-link
                              text-dark
                              dropdown-toggle dropdown-toggle-split
                              m-0
                              p-0
                            "
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span class="icon icon-sm"
                              ><span
                                class="fas fa-ellipsis-h icon-secondary"
                              ></span> </span
                            ><span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu py-0" style="">
                            <a
                              class="dropdown-item text-default rounded-top"
                              href="#"
                              @click.prevent="changeStatusModal(console)"
                            >
                              <span
                                class="fas fa-chart-line me-2"
                                aria-hidden="true"
                              >
                              </span>
                              Change Status
                            </a>
                            <a
                              class="dropdown-item"
                              href="javacript:;"
                              @click.prevent="editModal(console)"
                            >
                              <span class="fas fa-edit me-2"></span>
                              Edit Console
                            </a>
                            <a class="dropdown-item rounded-bottom">
                              <span class="fas fa-trash-alt me-2"></span>
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer pt-0 p-3 d-flex align-items-center">
              <div class="w-60">
                <p class="text-sm" v-if="consoles.data">
                  Showing
                  <b>{{ consoles.meta.from }}</b> to
                  <b>{{ consoles.meta.to }}</b> out of
                  <b>{{ consoles.meta.total }}</b> entries
                </p>
              </div>
              <div class="w-40 text-end">
                <pagination
                  class="pagination mb-0 pagination-sm"
                  :data="consoles"
                  @pagination-change-page="getConsoles"
                >
                </pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->

      <!-- Create edit Modal -->
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
              <h5 v-if="!editMode" class="modal-title">Create Console</h5>
              <h5 v-else class="modal-title">Edit Console</h5>
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
                  label="Serial Number"
                  validation="required"
                  v-model="form.serial_number"
                />
              </div>
              <div class="row">
                <div class="col-6">
                  <Label>Console Type</Label>
                  <Select v-model="form.type_id">
                    <Option
                      v-for="(type, i) in types"
                      :value="type.id"
                      :key="i"
                      clearable
                      filterable
                    >
                      {{ type.name }}</Option
                    >
                  </Select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Label>Storage Type</Label>
                  <Select v-model="form.storage">
                    <Option
                      v-for="item in storage"
                      :value="item.value"
                      :key="item.value"
                      clearable
                      filterable
                    >
                      {{ item.name }}</Option
                    >
                  </Select>
                </div>
              </div>
              <div class="row mt-3">
                <FormulateInput
                  type="number"
                  required
                  validation="required"
                  label="Storage Size in GB"
                  v-model="form.storage_size"
                />
              </div>
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
                @click="updateConsole(form.id)"
                :disabled="processing"
              >
                {{ processing ? 'Saving ...' : 'Save Changes' }}
              </button>
              <button
                v-else
                type="button"
                class="btn bg-gradient-primary"
                @click="createConsole()"
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
                @click="updateConsole(form.id)"
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
      isCreating: false,
      editMode: false,
      editStatus: false,
      newCover: false,
      processing: false,
      deletingItem: null,
      form: {},
      consoles: {},
      conditions: [],
      types: [],
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
      storage: [
        {
          name: 'Solid State Disk',
          value: 'SSD',
        },
        {
          name: 'Hard Disk',
          value: 'HDD',
        },
      ],
    }
  },
  watch: {
    total: function (value) {
      this.getConsoles()
    },
    search: function (value) {
      this.getConsoles()
    },
    selected: function (value) {
      this.getConsoles()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.consoles.data.forEach((console) => {
          this.checked.push(console.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/consoles/export/' + this.checked
    },
  },
  mounted() {
    this.getType()
    this.getConsoles()
    this.getCondition()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form.serial_number = ''
      this.form.storage = ''
      this.form.storage_size = ''
      this.form.condition_id = ''
    },
    createModal() {
      $('#modal-default').modal('show')
      ;(this.editStatus = false), (this.editMode = false)
    },
    editModal(console) {
      let obj = {
        id: console.id,
        serial_number: console.serial_number,
        storage: console.storage,
        storage_size: console.storage_size,
        condition_id: console.condition.id,
      }
      $('#modal-default').modal('show')
      this.editMode = true
      this.editStatus = false
      this.form = obj
    },
    changeStatusModal(console) {
      let obj = {
        id: console.id,
        serial_number: console.serial_number,
        storage: console.storage,
        storage_size: console.storage_size,
        condition_id: console.condition.id,
      }
      $('#modal-default').modal('show')
      ;(this.editMode = false), (this.editStatus = true), (this.form = obj)
    },
    showDeleteModal(console) {
      this.form = console
      this.deleteModal = true
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc'
      } else {
        this.sort_field = field
      }
      this.getConsoles()
    },
    isChecked(console_id) {
      return this.checked.includes(console_id)
    },
    async selectAllRecords() {
      const res = await this.callApi('get', '/api/v1/consoles/all/')
      if (res.status === 200) {
        this.checked = res.data
        this.selectAll = true
        console.log(this.selectAll)
      }
    },
    async getCondition() {
      const res = await this.callApi('get', '/api/v1/conditions')
      if (res.status === 200) {
        this.conditions = res.data
      }
    },
    async getType() {
      const res = await this.callApi('get', '/api/v1/types')
      if (res.status === 200) {
        this.types = res.data
      }
    },
    async getConsoles(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/consoles?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.consoles = res.data
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
    async createConsole() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/consoles', this.form)
      if (res.status === 200) {
        this.s('Console created successfully')
        this.closeModal()
        this.getConsoles()
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
    async updateConsole(console_id) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/consoles/${console_id}`,
        this.form
      )
      if (res.status == 200) {
        this.closeModal()
        this.getConsoles()
        this.s('Successfully updated console')
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
    async deleteConsole(console_id) {
      this.isDeleting = true
      const res = await this.callApi('delete', `/api/v1/consoles/${console_id}`)
      if (res.status == 204) {
        this.w('Console deleted')
        this.checked = this.checked.filter((id) => id != console_id)
        this.isDeleting = false
        this.deleteModal = false
        this.getConsoles()
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
    async deleteImage(editMode = false) {
      let image
      if (editMode) {
        // for editing
        this.newCover = true
        image = this.form.cover_photo
        this.form.cover_photo = ''
        this.$refs.uploads.clearFiles()
      } else {
        image = this.form.cover_photo
        this.form.cover_photo = ''
        this.$refs.uploads.clearFiles()
      }
      const res = await this.callApi('post', '/api/v1/consoles/deleteCover', {
        image_name: image,
      })
      if (res.status !== 200) {
        this.form.cover_photo = image
        this.swr()
      }
    },
    handleSuccess(res, file) {
      if (this.isEditingItem) {
        return (this.form.cover_photo = `/uploads/games/console/${res}`)
      }
      res = `/uploads/games/console/${res}`
      this.form.cover_photo = res
    },
    handleError(res) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: `${
          file.errors.file.length ? file.errors.file[0] : 'Something went wrong'
        }`,
      })
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc:
          'File format of ' +
          file.name +
          ' is incorrect, please select jpg or png.',
      })
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.',
      })
    },
  },
  components: { Notfound },
}
</script>
<style>
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>

