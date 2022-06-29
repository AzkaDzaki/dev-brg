<!-- for documentation purposes, will remove later -->
<template>
  <v-container>
    <!-- typography -->
    <div class="mb-10">
      <h4 class="mb-3">TYPOGRAPHY</h4>
      <h1>Header 1: 48px</h1>
      <h2>Header 2: 32px</h2>
      <h3>Header 3: 28px</h3>
      <h4>Header 4: 24px</h4>
      <h5>Header 5: 20px</h5>
      <h6>Header 6: 18px</h6>
      <p class="body-3">Body 3: 16px</p>
    </div>

    <!-- vuetify component -->

    <!-- Label -->
    <div class="mb-10">
      <h4 class="mb-3">LABEL</h4>
      <v-chip class="mx-2 my-1" color="bg_error_light" text-color="error" label>
        Error
      </v-chip>
      <v-chip
        class="mx-2 my-1"
        color="bg_warning_light"
        text-color="warning"
        label
      >
        Warning
      </v-chip>
      <v-chip
        class="mx-2 my-1"
        color="bg_secondary_light"
        text-color="secondary"
        label
      >
        Primary
      </v-chip>
      <v-chip
        class="mx-2 my-1"
        color="bg_success_light"
        text-color="success"
        label
      >
        Success
      </v-chip>
    </div>

    <!-- Dialog -->
    <div class="mb-10">
      <h4 class="mb-3">DIALOG</h4>
      <v-btn color="accent" large @click="isDialogOpen = true">
        Open Dialog
      </v-btn>
      <v-dialog
        v-model="isDialogOpen"
        persistent
        scrollable
        @keydown.esc="isDialogOpen = false"
      >
        <v-card>
          <v-card-title class="">
            Judul Modal
            <v-spacer></v-spacer>
            <v-btn text fab small @click="isDialogOpen = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="">
            <v-spacer></v-spacer>
            <v-btn class="outline-black" outlined> Button </v-btn>
            <v-btn color="accent"> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- Snackbars -->
    <div class="mb-10">
      <h4 class="mb-3">SNACKBARS</h4>
      <!-- <v-btn color="accent" large @click="snackbar = true"> Timeout </v-btn>
      <v-snackbar v-model="snackbar" top :timeout="2000">
        Hello, I'm Timeout snackbar
      </v-snackbar>
      <v-btn color="accent" large @click="snackbarError = true"> Error </v-btn>
      <v-snackbar v-model="snackbarError" color="bg_error" top :timeout="2000">
        Hello, I'm Error snackbar
      </v-snackbar>
      <v-btn color="accent" large @click="snackbarBtn = true"> Default </v-btn>
      <v-snackbar v-model="snackbarBtn" class="default" top>
        Hello, I'm Default snackbar
        <template #action="{ attrs }">
          <v-btn color="error" text v-bind="attrs" @click="snackbarBtn = false">
            Tutup
          </v-btn>
        </template>
      </v-snackbar> -->
      <v-btn color="accent" large @click="snackbarGeneralComponentTimeout">
        Default Global Snackbar Timeout
      </v-btn>
      <v-btn color="accent" large @click="snackbarGeneralComponentButton">
        Default Global Snackbar Button
      </v-btn>
    </div>

    <!-- switch -->
    <div class="mb-10">
      <h4 class="mb-3">SWITCH</h4>
      <div class="d-flex">
        <v-switch></v-switch>
        <v-switch disabled></v-switch>
      </div>
    </div>

    <!-- Radiobutton -->
    <div class="mb-10">
      <h4 class="mb-3">RADIOBUTTON</h4>
      <v-radio-group v-model="radiobox">
        <v-radio label="selected" value="selected"></v-radio>
        <v-radio label="not-selected" value="not-selected"></v-radio>
        <v-radio label="selected disabled" disabled value="selected"></v-radio>
        <v-radio
          label="not-selected disabled"
          disabled
          value="not-selected"
        ></v-radio>
      </v-radio-group>
    </div>

    <!-- Checkbox -->
    <div class="mb-10">
      <h4 class="mb-3">CHECKBOX</h4>
      <div class="d-flex justify-between">
        <v-checkbox
          v-model="checkbox"
          label="selected"
          value="selected"
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          label="not-selected"
          value="not-selected"
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          disabled
          label="selected disabled"
          value="selected"
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          disabled
          label="not-selected disabled"
          value="not-selected"
        ></v-checkbox>
      </div>
    </div>

    <!-- button -->
    <div class="mb-10">
      <h4 class="mb-3">BUTTON</h4>
      <v-btn color="accent" x-large> X Large </v-btn>
      <v-btn color="accent" large> Large </v-btn>
      <v-btn color="accent"> Normal </v-btn>

      <div class="mb-5"></div>

      <v-btn color="accent" x-large>
        X Large Right
        <v-icon right> mdi-plus </v-icon>
      </v-btn>
      <v-btn color="accent" large>
        Large Right
        <v-icon right> mdi-plus </v-icon>
      </v-btn>
      <v-btn color="accent">
        Normal Right
        <v-icon right> mdi-plus </v-icon>
      </v-btn>

      <div class="mb-5"></div>

      <v-btn color="accent" x-large>
        <v-icon left> mdi-plus </v-icon>
        X Large Right
      </v-btn>
      <v-btn color="accent" large>
        <v-icon left> mdi-plus </v-icon>
        Large Right
      </v-btn>
      <v-btn color="accent">
        <v-icon left> mdi-plus </v-icon>
        Normal Right
      </v-btn>

      <div class="mb-5"></div>

      <v-btn color="accent" fab>
        <v-icon> mdi-plus </v-icon>
      </v-btn>
      <v-btn color="accent" small fab>
        <v-icon> mdi-plus </v-icon>
      </v-btn>
      <v-btn color="accent" x-small fab>
        <v-icon> mdi-plus </v-icon>
      </v-btn>

      <div class="mb-5"></div>

      <v-btn color="accent"> Accent </v-btn>
      <v-btn color="primary"> Primary </v-btn>
      <v-btn color="primary" outlined> Primary Outlined </v-btn>
      <v-btn class="outline-black" outlined> Black Outlined </v-btn>
      <v-btn disabled> Disabled </v-btn>

      <div class="mb-5"></div>

      <v-btn class="w-full" color="accent" large> Full width </v-btn>
      <div class="w-half">
        <v-btn class="outline-black" outlined> Half Width </v-btn>
        <v-btn color="accent"> Half Width </v-btn>
      </div>
    </div>

    <!-- table -->
    <div class="mb-10">
      <h4 class="mb-3">TABLE</h4>
      <v-simple-table class="mt-5">
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
              <td>{{ item }}</td>
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <!-- Input -->
    <div class="mb-10">
      <h4 class="mb-3">INPUT</h4>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Fillable*"
            value="Fillable Value"
            required
            outlined
          />
        </v-col>
        <v-col cols="6">
          <v-textarea
            outlined
            label="Fillable"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            outlined
            hide-details
            :clearable="true"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
          />
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            :items="items"
            label="Autocomplete Icon"
            outlined
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-chevron-down"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            :items="items"
            label="Autocomplete Multiple"
            outlined
            multiple
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-chevron-down"
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            :items="items"
            label="Autocomplete Chips"
            outlined
            multiple
            small-chips
            deletable-chips
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-chevron-down"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            :items="items"
            label="Autocomplete Without Icon"
            outlined
            append-icon="mdi-chevron-down"
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-menu offset-y>
            <template #activator="{ on: { click } }">
              <v-text-field
                hide-details
                :clearable="true"
                placeholder="Search Dropdown"
                outlined
                prepend-inner-icon="mdi-magnify"
                class="search-dropdown"
                @click:prepend-inner="click"
              />
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in searchDropdownList"
                :key="index"
              >
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-select
            :items="items"
            label="Select"
            outlined
            append-icon="mdi-chevron-down"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            disabled
            :items="items"
            label="Select"
            outlined
            append-icon="mdi-chevron-down"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <!-- Card -->
    <div class="mb-10">
      <h4 class="mb-3">CARD</h4>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title class=""> Judul Modal </v-card-title>
            <v-card-text class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="">
              <v-spacer></v-spacer>
              <v-btn class="outline-black" outlined> Button </v-btn>
              <v-btn color="accent"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class="">
              Judul Modal
              <v-spacer></v-spacer>
              <v-btn text fab small
                ><v-icon>mdi-close</v-icon></v-btn
              ></v-card-title
            >
            <v-card-text class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="w-full">
              <v-btn class="outline-black" outlined> Button </v-btn>
              <v-btn color="accent"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title class=""> Judul Modal </v-card-title>
            <v-card-text class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <v-text-field
                class="mt-5"
                label="Fillable*"
                value="Fillable Value"
                required
                outlined
              />
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="">
              <v-spacer></v-spacer>
              <v-btn class="outline-black" outlined> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class=""> Judul Modal </v-card-title>
            <v-card-text class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <v-checkbox
                label="Perbendaharaan kata"
                value="Perbendaharaan kata"
              ></v-checkbox>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="">
              <v-spacer></v-spacer>
              <v-btn class="outline-black" outlined> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Tabs -->
    <div class="mb-10">
      <h4 class="mb-3">TABS</h4>
      <v-tabs v-model="active_tab">
        <v-tab v-for="tab of tabs" :key="tab.id" :disabled="tab.disabled">
          {{ tab.name }}
        </v-tab>
        <v-tabs-items v-model="active_tab">
          <v-tab-item>1</v-tab-item>
          <v-tab-item>2</v-tab-item>
          <v-tab-item disabled>3</v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </div>

    <!-- Accordion -->
    <div class="mb-10">
      <h4 class="mb-3">ACCORDION</h4>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header>Accordion {{ i }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <!-- Sidebar -->
    <div class="mb-10">
      <h4 class="mb-3">SIDEBAR</h4>
      <v-navigation-drawer permanent>
        <v-list nav>
          <v-list-item link class="sidebar" to="/docs">
            <i class="icon-calendar mr-2"></i>
            <v-list-item-content>
              <v-list-item-title>Docs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link class="sidebar" to="/">
            <i class="icon-calendar mr-2"></i>
            <v-list-item-content>
              <v-list-item-title>Menu 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link class="sidebar" to="/">
            <i class="icon-calendar mr-2"></i>
            <v-list-item-content>
              <v-list-item-title>Docs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: '',
    checkbox: ['selected'],
    radiobox: 'selected',
    items: [1, 2, 3, 4],
    searchDropdownList: [
      { label: 'Nama Kelas', key: 'service' },
      { label: 'Nama Tutor', key: 'tutor' },
    ],
    tabs: [
      { id: 1, name: ' First Tab ', disabled: false },
      { id: 2, name: ' Second Tab ', disabled: false },
      { id: 3, name: ' Disabled ', disabled: true },
    ],
    active_tab: 0,
    isDialogOpen: false,
    snackbar: false,
    snackbarError: false,
    snackbarBtn: false,
    itemsDrawer: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    right: null,
    success: false,
  }),
  methods: {
    snackbarGeneralComponentTimeout() {
      this.$store.dispatch('general/showSnackbar', {
        message: 'Terjadi kesalahan',
        data: '',
        color: this.success ? '#4a4b4d' : '#f33c3c',
        closeButton: false,
      })
    },
    snackbarGeneralComponentButton() {
      this.$store.dispatch('general/showSnackbar', {
        message: 'Sukses',
        data: '',
        color: this.success ? '#4a4b4d' : '#209150',
        appendIcon: 'mdi-close',
        prependIcon: 'mdi-check-circle',
      })
    },
  },
}
</script>
