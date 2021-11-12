<template>
  <div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-8">
                <h5 class="mb-2 col-8">Game Screens</h5>
                <p class="mb-0">
                  Create game screens and assign then to stations
                </p>
              </div>
              <div class="col-4">
                <a href="javascript:;" @click.prevent="createModal()">
                  <span class="badge bg-gradient-info ms-auto float-end">
                    Create Screen
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
                    placeholder="Find Screen"
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
                  <option v-if="screens.data" :value="screens.meta.total">
                    All {{ screens.meta.total }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2" v-if="screens.data">
            <div
              class="alert alert-dark alert-dismissible fade show"
              role="alert"
              v-if="screens.data.length <= 0"
            >
              <span class="alert-icon"><i class="ni ni-like-2"></i></span>
              <span class="alert-text text-white">
                <strong>Not Found!</strong>
                There are no screens avilable!
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
                  <tr v-for="(screen, i) in screens.data" :key="i">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div>
                          <img
                            src="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg"
                            alt="image"
                            class="avatar me-3"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">
                            {{ screen.serial_number }}
                          </h6>
                          <p
                            class="text-sm font-weight-bold text-secondary mb-0"
                          >
                            <span class="text-success">8.232</span> orders
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">
                        {{ screen.storage_size }}
                      </p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-sm font-weight-bold mb-0">
                        <Tag :color="screen.condition.color">
                          {{ screen.condition.name }}
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
                            @click.prevent="changeStatusModal(screen)"
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
                            @click.prevent="editModal(screen)"
                          >
                            <span class="fas fa-edit me-2"></span>
                            Edit Screen
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
              <p class="text-sm" v-if="screens.data">
                Showing
                <b>{{ screens.meta.from }}</b> to
                <b>{{ screens.meta.to }}</b> out of
                <b>{{ screens.meta.total }}</b> entries
              </p>
            </div>
            <div class="w-40 text-end">
              <pagination
                class="pagination mb-0 pagination-sm"
                :data="screens"
                @pagination-change-page="getScreens"
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
                label="Serial Number"
                validation="required"
                v-model="form.serial_number"
              />
            </div>
            <div class="row">
              <div class="col-6">
                <Label>Screen Type</Label>
                <Select v-model="form.type">
                  <Option
                    v-for="item in type"
                    :value="item.value"
                    :key="item.value"
                    clearable
                    filterable
                  >
                    {{ item.name }}</Option
                  >
                </Select>
              </div>
              <div class="col-6">
                <Label>Screen Generation</Label>
                <Select v-model="form.gen">
                  <Option
                    v-for="item in gen"
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
              @click="updateScreen(form.id)"
              :disabled="processing"
            >
              {{ processing ? 'Saving ...' : 'Save Changes' }}
            </button>
            <button
              v-else
              type="button"
              class="btn bg-gradient-primary"
              @click="createScreen()"
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
</template>
<script>
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
      screens: {},
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
      type: [
        {
          name: 'Play Station 5',
          value: 'ps5',
        },
        {
          name: 'Play Station 4',
          value: 'ps4',
        },
        {
          name: 'Play Station 3',
          value: 'ps3',
        },
        {
          name: 'Play Station 2',
          value: 'ps2',
        },
        {
          name: 'X-Box 360',
          value: 'xbox360',
        },
      ],
      gen: [
        {
          name: 'First Generation',
          value: 'First',
        },
        {
          name: 'Second Generation',
          value: 'Second',
        },
        {
          name: 'Third Generation',
          value: 'Third',
        },
      ],
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
      this.getScreens()
    },
    search: function (value) {
      this.getScreens()
    },
    selected: function (value) {
      this.getScreens()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.screens.data.forEach((screen) => {
          this.checked.push(screen.id)
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
    this.getScreens()
    this.getCondition()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form.serial_number = ''
      this.form.type = ''
      this.form.gen = ''
      this.form.storage = ''
      this.form.storage_size = ''
      this.form.condition_id = ''
    },
    createModal() {
      $('#modal-default').modal('show')
      ;(this.editStatus = false), (this.editMode = false)
    },
    editModal(screen) {
      let obj = {
        id: screen.id,
        serial_number: screen.serial_number,
        type: screen.type,
        gen: screen.generation,
        storage: screen.storage,
        storage_size: screen.storage_size,
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
        type: screen.type,
        gen: screen.generation,
        storage: screen.storage,
        storage_size: screen.storage_size,
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
    async getCondition() {
      const res = await this.callApi('get', '/api/v1/conditions')
      if (res.status === 200) {
        this.conditions = res.data
      }
    },
    async getScreens(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/screens?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.screens = res.data
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
    async createScreen() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/screens', this.form)
      if (res.status === 200) {
        this.s('Screen created successfully')
        this.closeModal()
        this.getScreens()
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
      const res = await this.callApi('post', '/api/v1/screens/deleteCover', {
        image_name: image,
      })
      if (res.status !== 200) {
        this.form.cover_photo = image
        this.swr()
      }
    },
    handleSuccess(res, file) {
      if (this.isEditingItem) {
        return (this.form.cover_photo = `/uploads/games/screen/${res}`)
      }
      res = `/uploads/games/screen/${res}`
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

