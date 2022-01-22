<template>
  <div>
    <div v-if="$auth.can('permission list') || $auth.isAdmin()">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-8 d-flex">
                  <h6 class="mb-0">Permissions List</h6>
                </div>
                <div class="col-4">
                  <a
                    v-if="$auth.isAdmin()"
                    href="javascript:;"
                    @click.prevent="createModal()"
                  >
                    <span class="badge bg-gradient-info ms-auto float-end">
                      Create Permission
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
                      placeholder="permission name"
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
                    <option v-for="(role, i) in roles.data" :key="i" :value="role.id">
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
                    <option v-if="permissions.data" :value="permissions.meta.total">
                      All {{ permissions.meta.total }}
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
                        <label class="form-check-label" for="checkAllRecords"></label>
                      </div>
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      <a
                        href="#"
                        class="text-gray-900"
                        @click.prevent="change_sort('name')"
                      >
                        Name
                      </a>
                      <span v-if="sort_direction == 'desc' && sort_field == 'name'">
                        &uarr;
                      </span>
                      <span v-if="sort_direction == 'asc' && sort_field == 'name'">
                        &darr;
                      </span>
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Roles associated
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      <a
                        href="#"
                        class="text-gray-900"
                        @click.prevent="change_sort('created_at')"
                      >
                        Created At
                      </a>
                      <span v-if="sort_direction == 'desc' && sort_field == 'created_at'">
                        &uarr;
                      </span>
                      <span v-if="sort_direction == 'asc' && sort_field == 'created_at'">
                        &darr;
                      </span>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(permission, i) in permissions.data"
                    :key="i"
                    :class="isChecked(permission.id) ? 'table-secondary' : ''"
                  >
                    <td>
                      <div class="form-check dashboard-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="userCheck1"
                          v-model="checked"
                          :value="permission.id"
                        />
                        <label class="form-check-label" for="userCheck1"></label>
                      </div>
                    </td>
                    <td>
                      <h6 class="mb-0 text-sm">{{ permission.name }}</h6>
                    </td>
                    <td>
                      <span v-for="(r, i) in permission.roles" :key="i">
                        <Tag color="geekblue">{{ r.name }}</Tag>
                      </span>
                    </td>
                    <td>
                      <span class="text-secondary text-sm">
                        {{ permission.created_at }}
                      </span>
                    </td>
                    <td>
                      <div class="ms-auto text-end">
                        <a
                          v-if="$auth.isAdmin()"
                          class="btn btn-link text-danger text-gradient px-3 mb-0"
                          href="javascript:;"
                          @click.prevent="showDeleteModal(permission)"
                        >
                          <i class="far fa-trash-alt me-2" aria-hidden="true"> </i>
                          Delete
                        </a>
                        <a
                          v-if="$auth.isAdmin()"
                          class="btn btn-link text-dark px-3 mb-0"
                          href="javascript:;"
                          @click.prevent="editModal(permission)"
                        >
                          <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true">
                          </i>
                          Edit
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer pt-0 p-3 d-flex align-items-center">
              <div class="w-60">
                <p class="text-sm" v-if="permissions.data">
                  Showing
                  <b>{{ permissions.meta.from }}</b> to
                  <b>{{ permissions.meta.to }}</b> out of
                  <b>{{ permissions.meta.total }}</b> entries
                </p>
              </div>
              <div class="w-40 text-end">
                <pagination
                  class="pagination mb-0 pagination-sm"
                  :data="permissions"
                  @pagination-change-page="getPermissions"
                >
                </pagination>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <h5 v-if="!editMode" class="modal-title">Create permission</h5>
              <h5 v-else class="modal-title">Edit permission</h5>
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
                <FormulateInput
                  type="text"
                  required
                  label="Permission Name"
                  validation="required"
                  v-model="form.name"
                />
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
                @click="updatePermission(form.id)"
                :disabled="processing"
              >
                {{ processing ? "Saving ..." : "Save Changes" }}
              </button>
              <button
                v-else
                type="button"
                class="btn bg-gradient-primary"
                @click="createPermission()"
                :disabled="proccessing"
              >
                {{ processing ? "Creating ..." : "Create" }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <!-- Delete Modal -->
      <Modal v-model="deleteModal" width="400">
        <p slot="header" style="'color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>Delete Confirmation</span>
        </p>
        <div style="text-align: center">
          <p>Are you sure you would like to delete this permission ?</p>
          <p>This process is irriversible</p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="isDeleting"
            :disabled="isDeleting"
            @click="deletePermission(form.id)"
          >
            {{ isDeleting ? "Deleting ..." : "Delete" }}
          </Button>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deleteModal: false,
      massDeleteModal: false,
      isDeleting: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      permissions: {},
      roles: {},
      total: 20,
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
      this.getPermissions();
    },
    search: function (value) {
      this.getPermissions();
    },
    selected: function (value) {
      this.getPermissions();
    },
    selectPage: function (value) {
      this.checked = [];
      if (value) {
        this.permissions.data.forEach((permission) => {
          this.checked.push(permission.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function (value) {
      this.url = "/api/v1/permissions/export/" + this.checked;
    },
  },
  mounted() {
    this.getPermissions();
    this.getRoles();
  },
  methods: {
    closeModal() {
      $("#modal-default").modal("hide");
      this.restForm();
    },
    restForm() {
      this.form.name = "";
    },
    createModal() {
      $("#modal-default").modal("show");
      this.editMode = false;
    },
    editModal(permission) {
      let obj = {
        id: permission.id,
        name: permission.name,
      };
      $("#modal-default").modal("show");
      this.editMode = true;
      this.form = obj;
    },
    showDeleteModal(permission) {
      this.form = permission;
      this.deleteModal = true;
    },
    showMassDeleteModal(checked) {
      this.checked = checked;
      this.massDeleteModal = true;
    },
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == "asc" ? "desc" : "asc";
      } else {
        this.sort_field = field;
      }
      this.getPermissions();
    },
    isChecked(permission_id) {
      return this.checked.includes(permission_id);
    },
    async selectAllRecords() {
      const res = await this.callApi("get", "/api/v1/permissions/all/");
      if (res.status === 200) {
        this.checked = res.data;
        this.selectAll = true;
        console.log(this.selectAll);
      }
    },
    async getPermissions(page = 1) {
      const res = await this.callApi(
        "get",
        `/api/v1/admin/settings/security/permissions?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      );
      if (res.status === 200) {
        this.permissions = res.data;
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
    async getRoles() {
      const res = await this.callApi("get", "/api/v1/admin/settings/security/roles");
      if (res.status === 200) {
        this.roles = res.data;
      }
    },
    async createPermission() {
      this.processing = true;
      const res = await this.callApi("post", "/api/v1/permissions", this.form);
      if (res.status === 201) {
        this.s("Permission created successfully");
        this.closeModal();
        this.getPermissions();
        this.processing = false;
      } else {
        if (res.status === 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0]);
          }
          this.processing = false;
        } else {
          this.swr();
          this.processing = false;
        }
      }
    },
    async updatePermission(permission_id) {
      this.processing = true;
      const res = await this.callApi(
        "put",
        `/api/v1/permissions/${permission_id}`,
        this.form
      );
      if (res.status == 200) {
        this.closeModal();
        this.getPermissions();
        this.s("Successfully updated permission");
        this.processing = false;
      } else {
        if (res.status == 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0]);
          }
          this.processing = false;
        } else {
          this.swr();
          this.processing = false;
        }
      }
    },
    async deletePermission(permission_id) {
      this.isDeleting = true;
      const res = await this.callApi("delete", `/api/v1/permissions/${permission_id}`);
      if (res.status == 204) {
        this.w("Permission deleted");
        this.checked = this.checked.filter((id) => id != permission_id);
        this.isDeleting = false;
        this.deleteModal = false;
        this.getPermissions();
      } else {
        if (res.status !== 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0]);
          }
        } else {
          this.swr();
        }
      }
    },
    async deleteRecords(checked) {
      const res = await this.callApi(
        "delete",
        `/api/v1/permissions/massDestroy/${checked}`
      );
      if (res.status == 204) {
        this.s("Permission deleted successfully");
        this.massDeleteModal = false;
        this.getPermissions();
      } else {
        if (res.status !== 422) {
          for (let i in res.data.errors) {
            this.e(res.data.errors[i][0]);
          }
        } else {
          this.swr();
        }
      }
    },
  },
};
</script>
