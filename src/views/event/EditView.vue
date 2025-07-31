<script setup lang="ts">
import { toRefs } from 'vue'
import type { Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
    event: Event,
    id: String
}>()
const {event} = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = ()=>{
    store.updateDetailMessage('The data has been updated!')
    setTimeout(()=> {
        store.resetDetailMessage()
    }, 3000)
    router.push({ name:'event-detail-view' })
}
</script>

<template>
    <p>Edit event here</p>
    <button @click="edit">Edit</button>
</template>