<template>
  <div>
    <b-button id="show-btn" @click="showModal">Show details</b-button>

    <b-modal ref="my-modal" hide-footer>
      <template slot="modal-title">{{name}}</template>

      <div class="d-block text-center">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="2" class="text-left">
              <label>Department:</label>
            </b-col>
            <b-col sm="4" class="text-left">
              <label>{{selectedItem.department}}</label>
            </b-col>
            <b-col sm="2" class="text-left">
              <label>Title:</label>
            </b-col>
            <b-col sm="4" class="text-left">
              <label>{{selectedItem.job_title}}</label>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2" class="text-left">
              <label>Experience:</label>
            </b-col>
            <b-col sm="4" class="text-left">
              <label>{{selectedItem.experience}}</label>
            </b-col>
            <b-col sm="2" class="text-left">
              <label>Joined on:</label>
            </b-col>
            <b-col sm="4" class="text-left">
              <label>{{selectedItem.join_date}}</label>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <b-row class="my-1">
        <b-col sm="6" class="float-left">
          <b-button class="mt-3" variant="outline-danger" block @click="deleteEmployee">Delete</b-button>
        </b-col>
        <b-col sm="6" class="float-right">
          <b-button class="mt-3 btn-close" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "employeeDetails",
  props: {
    id: Number,
    name: String
  },
  data() {
    return {
      selectedItem: {},
      fields: ["id", "isActive", "age", "first_name", "last_name"],
      items: [
        {
          id: 1,
          department: "Development",
          experience: 4,
          job_title: "Software Engineer",
          join_date: "01/08/2017"
        },
        {
          id: 2,
          department: "IT",
          experience: 2,
          job_title: "Network Engineer",
          join_date: "15/03/2018"
        },
        {
          id: 3,
          department: "Finance",
          experience: 8,
          job_title: "Finance",
          join_date: "08/12/2013"
        },
        {
          id: 4,
          department: "HR",
          experience: 5,
          job_title: "HR",
          join_date: "25/06/2015"
        }
      ],
      selectMode: "single",
      selected: []
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    deleteEmployee() {
      this.$emit("delete-employee", this.selectedItem.id);
      this.$refs["my-modal"].hide();
    },
    getEmployeeDetails() {
      this.selectedItem = this.items.find(x => x.id === this.id);
    }
  },
  watch: {
    id: function() {
      this.getEmployeeDetails();
    }
  }
};
</script>

<style>
.modal-content {
  width: 130% !important;
}
.btn-block {
  width: 30% !important;
}
.btn-close {
  float: right;
}
</style>