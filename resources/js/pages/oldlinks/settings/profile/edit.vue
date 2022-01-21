<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <form-wizard
          @on-complete="onComplete(form.id)"
          title="Edit your profile"
          shape="circle"
          color="#cb0c9f"
        >
          <tab-content title="Personal Info">
            <div
              class="card p-3 border-radius-xl bg-white js-active"
              data-animation="FadeIn"
            >
              <h5 class="font-weight-bolder mb-0">About me</h5>
              <p class="mb-0 text-sm">Mandatory informations</p>
              <div class="multisteps-form__content">
                <div class="row mt-3">
                  <div class="col-12">
                    <FormulateInput
                      type="text"
                      label="Full Name"
                      validation="required"
                      placeholder="Enter full name: John Doe"
                      v-model="form.name"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-12 col-sm-6">
                    <FormulateInput
                      type="text"
                      disabled
                      label="@username"
                      validation="required"
                      placeholder="Enter @username: masteryoda67"
                      v-model="form.username"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="max-width-200">
                    <file-pond
                      name="avatar"
                      :files="avatar"
                      class="filepond"
                      ref="pond"
                      max-files="1"
                      label-idle="Drag and Drop your picture or <span class='filepond--label-action'>Browse</span>"
                      allow-file-type-validation="true"
                      allow-multiple="false"
                      instantUpload="false"
                      accepted-file-types="image/png, image/jpeg, image/gif"
                      allowImagePreview="true"
                      allowImageCrop="true"
                      allowImageEdit="true"
                      allowImageResize="true"
                      allowImageTransform="true"
                      allowReplace="true"
                      allowProcess="true"
                      allowImageExifOrientation="true"
                      checkValidity="true"
                      imagePreviewHeight="170"
                      imageCropAspectRatio="1:1"
                      imageResizeTargetWidth="100"
                      imageResizeTargetHeight="100"
                      stylePanelLayout="compact circle"
                      styleLoadIndicatorPosition="center bottom"
                      styleProgressIndicatorPosition="left bottom"
                      styleButtonProcessItemPosition="left bottom"
                      styleButtonRemoveItemPosition="center bottom"
                      :init="handleFilePondInit"
                      :server="{
                        url: '/api/v1/uploads/avatar',
                        process: {
                          headers: {
                            'X-CSRF-TOKEN': token,
                          },
                        },
                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Additional Info">
            <div
              class="card p-3 border-radius-xl bg-white js-active"
              data-animation="FadeIn"
            >
              <h5 class="font-weight-bolder mb-0">Contact Info</h5>
              <p class="mb-0 text-sm">Import details</p>
              <div class="multisteps-form__content">
                <div class="row mt-3">
                  <div class="col-12">
                    <FormulateInput
                      type="email"
                      disabled
                      label="Email Address"
                      validation="required"
                      placeholder="Enter @email: name@mail.domain"
                      v-model="form.email"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-12 col-sm-6">
                    <FormulateInput
                      type="text"
                      disabled
                      label="Mobile Number"
                      validation="required"
                      placeholder="Enter Mobile: 07XX-XXX-X07"
                      v-model="form.phone"
                    />
                  </div>
                  <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                    <FormulateInput
                      type="text"
                      label="Alternate Mobile Number"
                      placeholder="Enter Alternate Mobile: 07XX-XXX-X70"
                      v-model="form.alt_phone"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-12 col-sm-6">
                    <FormulateInput
                      type="text"
                      label="Location"
                      placeholder="Enter Location: Nairobi, Kenya"
                      v-model="form.location"
                    />
                  </div>
                  <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                    <FormulateInput
                      type="text"
                      label="Physical Address"
                      placeholder="Enter physcical address: P.O Box 31XX Nairobi"
                      v-model="form.physcal_address"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Security">
            <div
              class="card p-3 border-radius-xl bg-white js-active"
              data-animation="FadeIn"
            >
              <h5 class="font-weight-bolder mb-0">Password</h5>
              <p class="mb-0 text-sm">Update or leave blank</p>
              <div class="multisteps-form__content">
                <div class="row mt-3">
                  <div class="col-12 col-sm-6">
                    <FormulateInput
                      type="password"
                      label="Password"
                      placeholder="Password"
                      error-behavior="live"
                      validation="^required|min:4,length|matches:/[0-9]/"
                      :validation-messages="{
                        matches: 'Passwords require at least one number.',
                      }"
                      v-model="form.password"
                    />
                  </div>
                  <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                    <FormulateInput
                      type="password"
                      label="Password Confirmation"
                      error-behavior="live"
                      placeholder="confirm password"
                      validation="^required|min:4,length|matches:/[0-9]/"
                      :validation-messages="{
                        matches: 'Passwords require at least one number.',
                      }"
                      v-model="form.confim_password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
        </form-wizard>
      </div>
    </div>
  </div>
</template>
<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageExifOrientation
)
export default {
  components: {
    FilePond,
  },
  data() {
    return {
      form: {
        password: '',
        confim_password: '',
      },
      avatar: [],
      token: '',
    }
  },
  mounted() {
    this.getProfile()
    this.token = window.Laravel.csrfToken
  },
  methods: {
    async getProfile() {
      const res = await this.callApi('get', '/api/v1/users/profile')
      if (res.status === 200) {
        this.form = res.data
      }
    },
    onComplete() {
      this.updateProfile()
    },
    handleFilePondInit: function () {
      console.log('FilePond has initialized')
    },
    async updateProfile() {
      const res = await this.callApi(
        'put',
        '/api/v1/users/profile/update',
        this.form
      )
      if (res.status === 200) {
        this.s('Profile details updated successfully')
      } else {
        if (res.status === 422) {
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
