<template>
  <div class="card">
    <div class="card-header">
      <h1>Steven Wing</h1>
    </div>
    <div class="card-body">
      <Job jobTitle="IT Specialist 2 (Programmer)" companyName="NYSED" startDate="06/2022" endDate="Present"
        :details="detailsArray"></Job>
    </div>
    <div class="card-footer">
      <RouterLink :to="{ name: 'home' }" class="btn btn-secondary">Home</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Job from '../components/resume/Job.vue';
const detailsArray = ['Replaced an outdated library implementation that processes PDFs for long term digital archiving',
  'Modernize applications to use more capable and secure frameworks',
  'Implement solutions for feature requests and bug fixes',
  'Maintain application security and efficacy by keeping software libraries up-to-date'];
</script>