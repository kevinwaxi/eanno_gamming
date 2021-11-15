<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header p-4">
          <div class="row">
            <div class="col-8">
              <h5 class="mb-2 col-8">All Games</h5>
              <p class="mb-0">List of all games</p>
            </div>
            <div class="col-4">
              <a href="javascript:;" @click.prevent="createModal()">
                <span class="badge bg-gradient-info ms-auto float-end">
                  Create Game
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="card-body p-4">
          <div class="row">
            <div
              class="col-md-4 mt-3 h-25"
              v-for="(game, i) in games.data"
              :key="i"
            >
              <a href="javascript:;" @click.prevent="showGameModal(game)">
                <div class="card card-background move-on-hover">
                  <div
                    class="full-background"
                    :style="{ backgroundImage: `url(${game.cover_image})` }"
                  ></div>
                  <div class="card-body pt-12">
                    <h4 class="text-white">{{ game.name }}</h4>
                    <p>{{ game.about_game }}</p>
                    <div class="mt-3">
                      <span
                        v-for="(c, i) in game.categories"
                        :key="i"
                        class="fw-normal text-gray"
                      >
                        <Tag :color="c.color">{{ c.name }}</Tag>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Create , Edit or show details -->
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
            <h5 v-if="!editMode" class="modal-title">Create game</h5>
            <h5 v-else class="modal-title">Edit game</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-show="!detailMode">
            <div class="row">
              <FormulateInput
                type="text"
                required
                label="Game Name"
                validation="required"
                v-model="form.name"
              />
            </div>
            <div class="row mt-3">
              <div class="col-8">
                <Label>Choose Categories</Label>
                <Select v-model="form.category_id" multiple :max-tag-count="2">
                  <Option
                    v-for="(category, i) in categories.data"
                    :value="category.id"
                    :key="i"
                  >
                    {{ category.name }}
                  </Option>
                </Select>
              </div>
            </div>
            <div class="row mt-3">
              <FormulateInput
                type="textarea"
                required
                validation="required|max:100,length"
                label="Game Details"
                v-model="form.about_game"
              />
            </div>
            <div class="row mt-3">
              <Label>Upload Cover Image</Label>
              <Upload
                v-show="!editMode || newCover"
                ref="uploads"
                type="drag"
                action="/api/v1/games/upload"
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
              <div class="demo-upload-list" v-if="form.cover_image">
                <img :src="`${form.cover_image}`" alt="" />
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
            <div class="row mt-3">
              <div class="col-6">
                <Label>Release Date</Label>
                <DatePicker
                  type="date"
                  placeholder="Select date"
                  v-model="form.release_date"
                ></DatePicker>
              </div>
              <div class="col-6">
                <FormulateInput
                  type="number"
                  required
                  validation="required"
                  label="Game Number Of players"
                  v-model="form.players"
                />
              </div>
            </div>
          </div>
          <div class="modal-body" v-show="detailMode">
            <div class="card">
              <div
                class="card-header p-0 mx-3 mt-3 position-relative z-index-1"
              >
                <a href="javascript:;" class="d-block">
                  <img
                    :src="data.cover_image"
                    class="img-fluid border-radius-lg"
                  />
                </a>
              </div>
              <div class="card-body pt-2">
                <a
                  href="javascript:;"
                  class="card-title h5 d-block text-darker"
                >
                  {{ data.name }}
                </a>
                <span
                  v-for="(c, i) in data.categories"
                  :key="i"
                  class="fw-normal text-gray"
                >
                  <Tag :color="c.color">{{ c.name }}</Tag>
                </span>
                <p class="card-description mb-4">
                  {{ data.about }}
                </p>
                <div class="author align-items-center">
                  <img
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                    alt="..."
                    class="avatar shadow"
                  />
                  <div class="name ps-3">
                    <span>Mathew Glock</span>
                    <div class="stats">
                      <small>{{ data.created_at }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer" v-show="!detailMode">
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
              @click="updateGame(form.id)"
              :disabled="processing"
            >
              {{ processing ? 'Saving ...' : 'Save Changes' }}
            </button>
            <button
              v-else
              type="button"
              class="btn bg-gradient-primary"
              @click="createGame()"
              :disabled="processing"
            >
              {{ processing ? 'Creating ...' : 'Create' }}
            </button>
          </div>
          <div class="modal-footer" v-show="detailMode">
            <button
              type="button"
              class="btn bg-gradient-secondary"
              data-bs-dismiss="modal"
              @click="closeModals"
            >
              Close
            </button>
            <button
              type="button"
              class="btn bg-gradient-primary"
              @click="showEditModal(data)"
            >
              {{ processing ? 'Saving ...' : 'Edit Game' }}
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
      detailMode: false,
      newCover: false,
      processing: false,
      deletingItem: null,
      form: {
        cover_image: '',
        category_id: [],
        category: [],
      },
      data: {
        cover_image: '',
        category_id: [],
        category: [],
      },
      games: {},
      categories: {},
      category: [],
      token: '',
      total: 10,
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
      this.getGames()
    },
    search: function (value) {
      this.getGames()
    },
    selected: function (value) {
      this.getGames()
    },
    selectPage: function (value) {
      this.checked = []
      if (value) {
        this.games.data.forEach((game) => {
          this.checked.push(game.id)
        })
      } else {
        this.checked = []
        this.selectAll = false
      }
    },
    checked: function (value) {
      this.url = '/api/v1/games/export/' + this.checked
    },
  },
  mounted() {
    this.token = window.Laravel.csrfToken
    this.getGames()
    this.getCategories()
  },
  methods: {
    closeModals() {
      $('#modal-default').modal('hide')
      this.resetForm()
    },
    closeModal() {
      $('#modal-default').modal('hide')
      this.resetForm()
    },
    resetForm() {
      this.form.name = ''
      this.form.about_game = ''
      this.form.cover_image = ''
      this.form.release_date = ''
      this.form.players = ''
      this.form.category_id = []
      this.category = []
    },
    createModal() {
      $('#modal-default').modal('show')
      this.editMode = false
      this.detailMode = false
    },
    showEditModal(form) {
      this.editMode = true
      this.detailMode = false
      for (let c of form.categories) {
        this.category.push(c.id)
      }
      let obj = {
        id: form.id,
        name: form.name,
        about_game: form.about_game,
        cover_image: form.cover_image,
        release_date: form.release_date,
        players: form.players,
        category_id: this.category,
      }
      this.form = obj
    },
    showDeleteModal(game) {
      this.form = game
      this.deleteModal = true
    },
    showGameModal(game) {
      this.data = game
      $('#modal-default').modal('show')
      this.detailMode = true
      this.editMode = false
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc'
      } else {
        this.sort_field = field
      }
      this.getGames()
    },
    isChecked(game_id) {
      return this.checked.includes(game_id)
    },
    async selectAllRecords() {
      const res = await this.callApi('get', '/api/v1/games/all/')
      if (res.status === 200) {
        this.checked = res.data
        this.selectAll = true
      }
    },
    async getGames(page = 1) {
      const res = await this.callApi(
        'get',
        `/api/v1/games?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      )
      if (res.status === 200) {
        this.games = res.data
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
    async getCategories() {
      const res = await this.callApi('get', '/api/v1/categories')
      if (res.status === 200) {
        this.categories = res.data
      }
    },
    async createGame() {
      this.processing = true
      const res = await this.callApi('post', '/api/v1/games', this.form)
      if (res.status === 200) {
        this.s('Game created successfully')
        this.closeModal()
        this.getGames()
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
    async updateGame(game_id) {
      this.processing = true
      const res = await this.callApi(
        'put',
        `/api/v1/games/${game_id}`,
        this.form
      )
      if (res.status == 200) {
        this.closeModal()
        this.getGames()
        this.s('Successfully updated game')
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
    async deleteGame(game_id) {
      this.isDeleting = true
      const res = await this.callApi('delete', `/api/v1/games/${game_id}`)
      if (res.status == 204) {
        this.w('Game deleted')
        this.checked = this.checked.filter((id) => id != game_id)
        this.isDeleting = false
        this.deleteModal = false
        this.getGames()
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
        image = this.form.cover_image
        this.form.cover_image = ''
        this.$refs.uploads.clearFiles()
      } else {
        image = this.form.cover_image
        this.form.cover_image = ''
        this.$refs.uploads.clearFiles()
      }
      const res = await this.callApi('post', '/api/v1/games/deleteCover', {
        image_name: image,
      })
      if (res.status !== 200) {
        this.form.cover_image = image
        this.swr()
      }
    },
    handleSuccess(res, file) {
      if (this.isEditingItem) {
        return (this.form.cover_image = `/uploads/games/all_games/${res}`)
      }
      res = `/uploads/games/all_games/${res}`
      this.form.cover_image = res
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
