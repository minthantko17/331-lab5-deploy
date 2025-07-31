<script setup lang="ts">
import {ref} from 'vue'
import type {Event} from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-class">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
        <span>{{ event.category }}</span>
        <br>
        <span>{{ event.organizer }}</span>
    </div>
  </div>
</template>

<style scoped>
  /* .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    text-align: right;
  } */

  /* .event-card:hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  } */
</style>
