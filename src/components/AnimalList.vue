<template>
  <div>
    <b-table
      :data="animals"
      :bordered="true"
      :focusable="false"
      :striped="true"
      :sort-icon="sortIcon"
      :checkable="true"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Name" sortable>{{props.row.name}}</b-table-column>
        <b-table-column field="img" label="Image" width="100px" height="100px">
          <img :src="props.row.img" />
        </b-table-column>
        <b-table-column field="value" label="Value" numeric sortable>{{props.row.value}}</b-table-column>
        <b-table-column field="location" label="Location" sortable>{{props.row.location}}</b-table-column>
        <b-table-column field="timeOfDay" label="Time of Day" sortable>{{props.row.timeOfDay}}</b-table-column>
        <b-table-column
          field="monthsAvailable"
          label="Months Available"
        >{{props.row.monthsAvailable.join(' ')}}</b-table-column>
        <b-table-column field="isCurrentlyAvailable" label="Currently Available" sortable>{{props.row.isCurrentlyAvailable}}</b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ["animals"]
};
</script>

<style lang="less">
.is-checked {
  opacity: 50%;
}
</style>