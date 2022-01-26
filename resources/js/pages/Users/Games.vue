<template>
  <div>
    <div class="row" v-if="$auth.isGamer()">
      <div class="col-12">
        <div class="card">
          <div class="card-header p-4">
            <div class="row">
              <div class="col-8">
                <h5 class="mb-2 col-8">All Games</h5>
                <p class="mb-0">List of all games</p>
              </div>
              <div class="col-4">
                <a
                  href="javascript:;"
                  @click.prevent="createModal()"
                  v-if="$auth.isAdmin() || $auth.can('consoles create')"
                >
                  <span class="badge bg-gradient-info ms-auto float-end">
                    Create Game
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="row">
              <div class="col-md-4 mt-3 h-25" v-for="(game, i) in games.data" :key="i">
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
                      <div class="mt-1">
                        <div class="row">Available games :</div>
                        <div class="row">
                          <div class="col-12">
                            <span v-for="(console, i) in game.types" :key="i">
                              <Tag type="dot" color="cyan" closable>
                                {{ console.name }}
                              </Tag>
                            </span>
                          </div>
                        </div>
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
            <div class="modal-body" v-show="detailMode">
              <div class="card">
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                  <a href="javascript:;" class="d-block">
                    <img :src="data.cover_image" class="img-fluid border-radius-lg" />
                  </a>
                </div>
                <div class="card-body pt-2">
                  <a href="javascript:;" class="card-title h5 d-block text-darker">
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
            <div class="modal-footer" v-show="detailMode">
              <button
                type="button"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
                @click="closeModals"
              >
                Close
              </button>
            </div>
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
        name: "",
        about_game: "",
        release_date: "",
        cover_image: "",
        players: "",
        available: "",
        category_id: [],
        type_id: [],
        category: [],
      },
      data: {
        cover_image: "",
        category_id: [],
        type_id: [],
        category: [],
      },
      games: {},
      categories: {},
      types: {},
      category: [],
      type: [],
      total: 10,
      search: "",
      selected: "",
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: "desc",
      sort_field: "created_at",
      url: "",
    };
  },
  watch: {
    total: function (value) {
      this.getGames();
    },
    search: function (value) {
      this.getGames();
    },
    selected: function (value) {
      this.getGames();
    },
    selectPage: function (value) {
      this.checked = [];
      if (value) {
        this.games.data.forEach((game) => {
          this.checked.push(game.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function (value) {
      this.url = "/api/v1/games/export/" + this.checked;
    },
  },
  mounted() {
    this.getGames();
    this.getCategories();
    this.getConsoleTypes();
  },
  methods: {
    closeModals() {
      $("#modal-default").modal("hide");
      this.resetForm();
    },
    closeModal() {
      $("#modal-default").modal("hide");
      this.resetForm();
    },
    createModal() {
      $("#modal-default").modal("show");
      this.editMode = false;
      this.detailMode = false;
    },
    showDeleteModal(game) {
      this.form = game;
      this.deleteModal = true;
    },
    showGameModal(game) {
      this.data = game;
      $("#modal-default").modal("show");
      this.detailMode = true;
      this.editMode = false;
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == "asc" ? "desc" : "asc";
      } else {
        this.sort_field = field;
      }
      this.getGames();
    },
    isChecked(game_id) {
      return this.checked.includes(game_id);
    },
    async selectAllRecords() {
      const res = await this.callApi("get", "/api/v1/games/all/");
      if (res.status === 200) {
        this.checked = res.data;
        this.selectAll = true;
      }
    },
    async getConsoleTypes() {
      const res = await this.callApi(
        "get",
        "/api/v1/admin/settings/inventories/misc/types"
      );
      if (res.status === 200) {
        this.types = res.data;
      }
    },
    async getGames(page = 1) {
      const res = await this.callApi(
        "get",
        `/api/v1/gamers/available/games?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      );
      if (res.status === 200) {
        this.games = res.data;
      } else {
        if (res.status === 401 || res.status === 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0]);
          }
        } else {
          this.swr();
        }
      }
    },
    async getCategories() {
      const res = await this.callApi(
        "get",
        "/api/v1/admin/settings/inventories/categories"
      );
      if (res.status === 200) {
        this.categories = res.data;
      }
    },
  },
};
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
