<template>
    <div class="card">
        <div class="card-header">
            <h2>Hangman!</h2>
        </div>
        <div class="card-body">
            <span>{{ `${theWord}` }}</span>
            <input type="text" v-model="guess" />
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col">
                    <RouterLink :to="{ name: 'home' }" class="btn btn-secondary">Go Home</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

const theWord = ref<string>('');
const guess = ref<string>('');

onBeforeMount(() => {
    axios.get('https://random-word-api.herokuapp.com/word').then((response) => {
        theWord.value = response.data;
    })
});
</script>