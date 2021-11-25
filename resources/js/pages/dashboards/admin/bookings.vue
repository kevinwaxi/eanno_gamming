<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h1>Calendar 1</h1>
        <FullCalendar
          @click="showBooking"
          :header="{
            left: 'title',
            center: 'dayGridMonth',
            right: 'prev today next',
          }"
          :options="calendarOptions"
        />
      </div>
    </div>
  </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: 'timeGridDay',
        weekends: false,
        selectable: true,
      },
      events: '',
      newEvents: {
        event_name: '',
        start_date: '',
        end_date: '',
      },
      addingMode: true,
      indexToUpdate: '',
    }
  },
}
</script>
