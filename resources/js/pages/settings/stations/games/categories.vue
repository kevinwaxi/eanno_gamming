<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header p-4">
          <div class="row">
            <div class="col-8">
              <h5 class="mb-2 col-8">Game Categories</h5>
              <p class="mb-0">
                Create game categories and assign then to games
              </p>
            </div>
            <div class="col-4">
              <a href="javascript:;" @click.prevent="createModal()">
                <span class="badge bg-gradient-info ms-auto float-end">
                  Create Category
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="card-body p-4">
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-12 mt-3"
              v-for="(category, i) in categories.data"
              :key="i"
            >
              <div class="card text-center">
                <div
                  class="
                    overflow-hidden
                    position-relative
                    border-radius-lg
                    bg-cover
                    p-3
                  "
                  :style="{ backgroundImage: `url(${category.cover})` }"
                >
                  <span class="mask bg-gradient-dark opacity-6"></span>
                  <div
                    class="
                      card-body
                      position-relative
                      z-index-1
                      d-flex
                      flex-column
                      mt-5
                    "
                  >
                    <p class="text-white font-weight-bolder">
                      {{ category.description }}
                    </p>
                    <a
                      class="
                        text-white text-sm
                        font-weight-bold
                        mb-0
                        icon-move-right
                        mt-4
                      "
                      href="javascript:;"
                      @click.prevent="editModal(category)"
                    >
                      Edit
                      <i class="fas fa-pen text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Create or edit -->
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
            <h5 v-if="!editMode" class="modal-title">Create category</h5>
            <h5 v-else class="modal-title">Edit category</h5>
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
              <FormulateInput
                type="text"
                required
                label="Category Name"
                validation="required"
                v-model="form.name"
              />
            </div>
            <div class="row mt-3">
              <FormulateInput
                type="textarea"
                required
                validation="required|max:100,length"
                label="Category Details"
                v-model="form.description"
                :help="`Keep it under 50 characters. ${
                  50 - value.length
                } left.`"
              />
            </div>
            <div class="row mt-3">
              <Label>Upload Cover Image</Label>
              <Upload
                v-show="!editMode || newCover"
                ref="uploads"
                type="drag"
                action="/api/v1/categories/upload"
                :headers="{
                  'x-csrf-token': token,
                  'X-Requested-With': 'XMLHttpRequest',
                }"
                :on-success="handleSuccess"
                :on-error="handleError"
                :format="['jpg', 'jpeg', 'png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
              >
                <div style="padding: 20px 0">
                  <Icon
                    type="ios-cloud-upload"
                    size="52"
                    style="color: #3399ff"
                  ></Icon>
                  <p>Click or drag files here to upload</p>
                </div>
              </Upload>
              <div class="demo-upload-list" v-if="form.cover_photo">
                <img :src="`${form.cover_photo}`" alt="" />
                <div class="demo-upload-list-cover">
                  <Icon
                    v-if="editMode"
                    type="ios-trash-outline"
                    @click="deleteImage(true)"
                  ></Icon>
                  <Icon
                    v-else
                    type="ios-trash-outline"
                    @click="deleteImage"
                  ></Icon>
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
              @click="createCategory()"
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
      deleteModal: false,
      isDeleting: false,
      isCreating: false,
      editMode: false,
      newCover: false,
      processing: false,
      deletingItem: null,
      form: {
        cover_photo: '',
      },
      categories: {},
      token: '',
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
      value: {
        length: 0,
      },
    }
  },
  watch: {
    total: function (value) {
      this.getCategories()
    },
    search: function (value) {
      this.getCategories()
    },
    selected: function (value) {
      this.getCategories()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.categories.data.forEach((category) => {
          this.checked.push(category.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/categories/export/' + this.checked
    },
  },
  mounted() {
    this.token = window.Laravel.csrfToken
    this.getCategories()
  },
  methods: {
    closeModal() {
      $('#modal-default').modal('hide')
      this.restForm()
    },
    restForm() {
      this.form.name = ''
      this.form.description = ''
      this.form.cover_photo = ''
    },
    createModal() {
      $('#modal-default').modal('show')
      this.editMode = false
    },
    editModal(category) {
      let obj = {
        id: category.id,
        name: category.name,
        description: category.description,
        cover_photo: category.cover,
      }
      $('#modal-default').modal('show')
      this.editMode = true
      this.form = obj
    },
    showDeleteModal(category) {
      this.form = category
      this.deleteModal = true
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc'
      } else {
        this.sort_field = field
      }
      this.getCategories()
    },
    isChecked(category_id) {
      return this.checked.includes(category_id)
    },
    async selectAllRecords() {
      const res = await this.callApi('get', '/api/v1/categories/all/')
      if (res.status === 200) {
        this.checked = res.data
        this.selectAll = true
        console.log(this.selectAll)
      }
    },
    async getCategories(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/categories?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.categories = res.data
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
    async createCategory() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/categories', this.form)
      if (res.status === 200) {
        this.s('Category created successfully')
        this.closeModal()
        this.getCategories()
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
    async updateCategory(category_id) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/categories/${category_id}`,
        this.form
      )
      if (res.status == 200) {
        this.closeModal()
        this.getCategories()
        this.s('Successfully updated category')
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
    async deleteCategory(category_id) {
      this.isDeleting = true
      const res = await this.callApi(
        'delete',
        `/api/v1/categories/${category_id}`
      )
      if (res.status == 204) {
        this.w('Category deleted')
        this.checked = this.checked.filter((id) => id != category_id)
        this.isDeleting = false
        this.deleteModal = false
        this.getCategories()
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
      const res = await this.callApi('post', '/api/v1/categories/deleteCover', {
        image_name: image,
      })
      if (res.status !== 200) {
        this.form.cover_photo = image
        this.swr()
      }
    },
    handleSuccess(res, file) {
      if (this.isEditingItem) {
        return (this.form.cover_photo = `/uploads/games/category/${res}`)
      }
      res = `/uploads/games/category/${res}`
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
