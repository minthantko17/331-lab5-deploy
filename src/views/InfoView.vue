<script setup lang="ts">
import StudentInfoCard from '@/components/StudentInfoCard.vue';
import type { Student } from '@/types';
import { ref, onMounted } from 'vue';
import StudentService from '@/services/StudentService';

const students= ref<Student[]>()

onMounted(()=>{
  StudentService.getStudents()
    .then((response)=>{
      // console.log(response.data)
      students.value = response.data;
    })
    .catch((error)=>{
      console.error('There was an error! ', error);
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  
  <div class="flex flex-col items-center">
    <StudentInfoCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
</style>