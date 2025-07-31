<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventCard2 from '@/components/EventCard2.vue';
import type { Event } from '@/types';
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventService from '@/services/EventService';

const events= ref<Event[] | null>()
const totalEvents = ref(0)
const props = defineProps({
  perPage: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  }
})

const perPage = ref(props.perPage)
const page = computed(()=> props.page)
const hasNextPage = computed(()=>{
  const totalPages = Math.ceil(totalEvents.value/perPage.value)
  return page.value<totalPages
})

onMounted(()=>{
  watchEffect(()=>{
    // events.value=null
    EventService.getEvents(perPage.value, page.value)
      .then((response)=>{
        // console.log(response.data)
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error)=>{
        console.error('There was an error! ', error);
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>

  <span>Items per page: </span>
  <input type="number" min="1" max="3" v-model="perPage" />
  <br><br>
  
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <br><br><br><br>
    <EventCard2 v-for="event in events" :key="event.id" :event="event" />

    <div class="flex w-[290px]">
      <RouterLink
        class="flex-1 text-left text-[#2c3e50] no-underline"
        :to="{name:'event-list-view', query: {page: page - 1}}"
        rel="prev"
        v-if="page !=1"
        >&#60;
        Prev Page
      </RouterLink>
      
      <RouterLink
        class="flex-1 text-right text-[#2c3e50] no-underline"
        :to="{name:'event-list-view', query:{page: page + 1}}"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
</style>