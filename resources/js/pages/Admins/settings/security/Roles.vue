<template>
  <div>
    <div v-if="$auth.isAdmin() || $auth.can('role list')">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-8 d-flex">
                  <h6 class="mb-0">Roles List</h6>
                </div>
                <div class="col-4">
                  <a
                    href="javascript:;"
                    @click.prevent="createModal()"
                    v-if="$auth.isAdmin()"
                  >
                    <span class="badge bg-gradient-info ms-auto float-end">
                      Create Role
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
                      placeholder="permission or role name"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label for="select">Roles can:</label>
                  <select
                    v-model="selected"
                    class="form-select fmxw-200 d-none d-md-inline"
                    aria-label="Fillter by role"
                  >
                    <option selected="selected" value="">Show All</option>
                    <option
                      v-for="(permission, i) in permissions"
                      :key="i"
                      :value="permission.id"
                    >
                      {{ permission.name }}
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
                    <option v-if="roles.data" :value="roles.meta.total">
                      All {{ roles.meta.total }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-body pt-4 p-3">
              <ul class="list-group">
                <li
                  class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
                  v-for="(role, i) in roles.data"
                  :key="i"
                  :class="isChecked(role.id) ? 'card-selected' : ''"
                >
                  <div class="d-flex flex-column">
                    <h6 class="mb-3 text-sm">{{ role.name }}</h6>
                    <span class="mb-2 text-xs">
                      Permissions:
                      <span
                        v-for="(p, i) in role.permissions"
                        :key="i"
                        class="fw-normal text-gray"
                      >
                        <Tag color="geekblue">{{ p.name }}</Tag>
                      </span>
                    </span>
                    <span class="mb-2 text-xs">
                      Users:
                      <div class="avatar-group mt-2">
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Nick Daniel"
                        >
                          <img alt="Image placeholder" src="/assets/img/team-3.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Peterson"
                        >
                          <img alt="Image placeholder" src="/assets/img/team-4.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Elena Morison"
                        >
                          <img alt="Image placeholder" src="/assets/img/team-1.jpg" />
                        </a>
                        <a
                          href="javascript:;"
                          class="avatar avatar-xs rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Ryan Milly"
                        >
                          <img alt="Image placeholder" src="/assets/img/team-2.jpg" />
                        </a>
                      </div>
                    </span>
                    <span class="text-xs">
                      Date Created:
                      <span class="text-dark ms-sm-2 font-weight-bold">
                        {{ role.created_at }}
                      </span>
                    </span>
                  </div>
                  <div class="ms-auto text-end col-2">
                    <a
                      v-if="$auth.isAdmin()"
                      class="btn btn-link text-danger text-gradient px-3 mb-0"
                      href="javascript:;"
                      @click="showDeleteModal(role)"
                    >
                      <i class="far fa-trash-alt me-2" aria-hidden="true"></i>
                      Delete
                    </a>
                    <a
                      v-if="$auth.isAdmin()"
                      class="btn btn-link text-dark px-3 mb-0"
                      href="javascript:;"
                      @click="editModal(role)"
                    >
                      <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"> </i>
                      Edit
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Create/Edit/Assign roles modal -->
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
              <h5 v-if="!editMode" class="modal-title">Create Role</h5>
              <h5 v-else class="modal-title">Edit Role</h5>
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
                  label="Role Name"
                  validation="required"
                  v-model="form.name"
                />
              </div>
              <div>
                <Select v-model="form.permissions" multiple :max-tag-count="5">
                  <Option v-for="p in permissions" :value="p.id" :key="p.id">
                    {{ p.name }}
                  </Option>
                </Select>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
                @click="resetForm()"
              >
                Close
              </button>
              <button
                v-if="editMode"
                type="button"
                class="btn bg-gradient-primary"
                @click="updateRole(form.id)"
                :disabled="processing"
              >
                {{ processing ? "Saving ..." : "Save Changes" }}
              </button>
              <button
                v-else
                type="button"
                class="btn bg-gradient-primary"
                @click="createRole()"
              >
                {{ processing ? "Creating ..." : "Create" }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Modal -->
      <Modal v-model="deleteModal" width="400">
        <p slot="header" style="'color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>Delete Confirmation</span>
        </p>
        <div style="text-align: center">
          <p>
            Are you sure you would like to delete
            <span>
              <Tag color="volcano">{{ form.name }} role</Tag>
            </span>
            ?
          </p>
          <p>This process is irreversible</p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="isDeleting"
            :disabled="isDeleting"
            @click="deleteRole(form.id)"
          >
            Delete
          </Button>
        </div>
      </Modal>

      <Modal v-model="massDeleteModal" width="400">
        <p slot="header" style="'color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>Delete Confirmation</span>
        </p>
        <div style="text-align: center">
          <p>Are you sure you would like to delete selected records?</p>
          <p>This process is irreversible</p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="isDeleting"
            :disabled="isDeleting"
            @click="deleteRecords(checked)"
          >
            Delete
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
      form: {
        name: "",
        permissions: [],
      },
      assignForm: {
        name: "",
        user: [],
      },
      roles: {},
      permissions: [],
      users: [],
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
      this.getRoles();
    },
    search: function (value) {
      this.getRoles();
    },
    selected: function (value) {
      this.getRoles();
    },
    selectPage: function (value) {
      this.checked = [];
      if (value) {
        this.roles.data.forEach((role) => {
          this.checked.push(role.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function (value) {
      this.url = "/api/v1/roles/export/" + this.checked;
    },
  },
  mounted() {
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    createModal() {
      $("#modal-default").modal("show");
      this.editMode = false;
    },
    editModal(role) {
      for (let p of role.permissions) {
        this.form.permissions.push(p.id);
      }
      let obj = {
        id: role.id,
        name: role.name,
        permissions: this.form.permissions,
      };
      console.log(this.form.permissions);
      $("#modal-default").modal("show");
      this.editMode = true;
      this.form = obj;
    },
    closeModal() {
      $("#modal-default").modal("hide");
      this.resetForm();
    },
    resetForm() {
      (this.form.name = ""), (this.form.permissions = []);
    },
    showDeleteModal(role) {
      let obj = {
        id: role.id,
        name: role.name,
      };
      this.form = obj;
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
      this.getRoles();
    },
    isChecked(role_id) {
      return this.checked.includes(role_id);
    },
    async selectAllRecords() {
      const res = await this.callApi("get", "api/v1/admin/settings/security/roles ");
      if (res.status === 200) {
        this.checked = res.data;
        this.selectAll = true;
        console.log(this.selectAll);
      }
    },
    async getRoles(page = 1) {
      const res = await this.callApi(
        "get",
        `/api/v1/admin/settings/security/roles?page=${page}
        &total=${this.total}
        &q=${this.search}
        &select=${this.selected}
        &sort_direction=${this.sort_direction}
        &sort_field=${this.sort_field}`
      );
      if (res.status === 200) {
        this.roles = res.data;
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
    async getPermissions() {
      const res = await this.callApi(
        "get",
        "/api/v1/admin/settings/security/permissions"
      );
      if (res.status == 200) {
        this.permissions = res.data.data;
      }
    },
    async createRole() {
      this.processing = true;
      const res = await this.callApi(
        "post",
        "api/v1/admin/settings/security/roles ",
        this.form
      );
      if (res.status === 201) {
        this.s("Role created successfully");
        this.closeModal();
        this.getRoles();
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
    async updateRole(role) {
      this.processing = true;
      const res = await this.callApi(
        "put",
        `api/v1/admin/settings/security/roles/${role}`,
        this.form
      );
      if (res.status == 200) {
        this.closeModal();
        this.getRoles();
        this.s("Successfully updated role");
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
    async deleteRole(role_id) {
      const res = await this.callApi("delete", `/api/v1/roles/${role_id}`);
      if (res.status == 204) {
        this.s("Role deleted successfully");
        this.checked = this.checked.filter((id) => id != role_id);
        this.deleteModal = false;
        this.getRoles();
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
      const res = await this.callApi("delete", `/api/v1/roles/massDestroy/${checked}`);
      if (res.status === 204) {
        this.s("Role deleted successfully");
        this.massDeleteModal = false;
        this.getRoles();
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
