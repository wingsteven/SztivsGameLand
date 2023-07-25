<script setup lang="ts">

</script>

<template>
    <div class="card">
        <div class="card-header">
            <h2>Sudoku!</h2>
        </div>
        <div class="card-body">
            <div>
                Game
            </div>
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
