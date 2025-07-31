<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { Event } from '@/types'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const props = defineProps<{
    event: Event,
    id: String
}>()
const {event} = toRefs(props)
const store = useMessageStore()
const { detailMessage } = storeToRefs(store)

</script>

<template>
    <div class="animation-fade" v-if="detailMessage">
        <h4>{{ detailMessage }}</h4>
    </div>

    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{  event.description }}</p>
</template>

<style>
</style>