<template>
  <div>
    <div class="row" v-if="$auth.isAdmin">
      <div class="col-6">
        <h1>Calendar</h1>
        <FullCalendar
          @click="showBooking"
          :options="calendarOptions"
          :events="events"
        />
      </div>
    </div>
  </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
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
