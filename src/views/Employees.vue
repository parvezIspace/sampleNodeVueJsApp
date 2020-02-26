<template>

<div class="employees">
   

    <b-table
      selectable
      :select-mode="selectMode"
      selectedVariant="success"
      :items="items"
      :fields="fields"
      @row-selected="rowSelected"
    >
      
    </b-table>

    <div class="text-center">
<employeeDetails :id="selectedEmployeeId" :name="selectedEmpployeeName" v-on:delete-employee="deleteEmployee" />
  </div>
  </div>
</template>


<script>

import employeeDetails from './../components/EmployeeDetails'
export default {
  name: 'employees',
  components: {
    employeeDetails
  },
  data() {
      return {
          selectedEmployeeId: 0,
          selectedEmpployeeName: '',
        fields: ['id', 'isActive', 'age', 'first_name', 'last_name'],
        items: [
          { id: 1, isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { id: 2, isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { id: 3, isActive: false, age: 29, first_name: 'Geneva', last_name: 'Wilson' },
          { id: 4, isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        selectMode: 'single'
      }
    },
    methods: {
      rowSelected(items) {
        this.selectedEmployeeId = items[0].id
        this.selectedEmpployeeName = items[0].first_name + " " + items[0].last_name
      },
      deleteEmployee(empId){
          this.items.splice(this.items.findIndex(x => x.id === empId), 1)
      }
    }
  
}
</script>

<style>
.employees{
    width: 60%;
    margin: auto;
    padding: 40px;
    margin-top: 20px;
    background: white;
}
</style>
