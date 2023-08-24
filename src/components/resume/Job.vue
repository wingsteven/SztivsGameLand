<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">
                <div class="row">
                    <div class="col">
                        {{ jobTitle }}
                    </div>
                    <div class="col">
                        {{ companyName }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div v-for="detail of details" class="row">
                <div class="col">{{ detail }}</div>
                <div class="col">{{ `${startDate} - ${endDate}` }}</div>
            </div>
        </div>
        <div class="card-footer"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    jobTitle: string,
    companyName: string,
    startDate: string,
    endDate: string,
    details: Array<String>
}>();
</script>