import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TicTacToe from '@/components/TicTacToe.vue';
import Hangman from '@/components/Hangman.vue';
import Sudoku from '@/components/Sudoku.vue';
import About from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/ticTacToe',
      name: 'ticTacToe',
      component: TicTacToe,
    },
    {
      path: '/hangman',
      name: 'hangman',
      component: Hangman,
    },
    {
      path: '/sudoku',
      name: 'sudoku',
      component: Sudoku,
    },
  ],
});

export default router;
