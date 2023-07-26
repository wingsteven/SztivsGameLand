<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="card-header">
      <h1>Welcome to Sztiv's Game Land!</h1>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h2>Choose a game to play!</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <RouterLink :to="{ name: 'ticTacToe' }" class="btn btn-primary">Tic Tac Toe</RouterLink>
        </div>
        <div class="col">
          <RouterLink :to="{ name: 'hangman' }" class="btn btn-primary">Hangman</RouterLink>
        </div>
        <div class="col">
          <RouterLink :to="{ name: 'sudoku' }" class="btn btn-primary">Sudoku</RouterLink>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <RouterLink class="btn btn-secondary float-end" to="/about">About</RouterLink>
    </div>
  </div>
</template>
