import HangmanVue from '@/components/games/Hangman.vue';
import SudokuVue from '@/components/games/Sudoku.vue';
import TicTacToeVue from '@/components/games/TicTacToe.vue';
import AboutViewVue from '@/views/AboutView.vue';
import HomeViewVue from '@/views/HomeView.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue,
    },
    {
      path: '/ticTacToe',
      name: 'ticTacToe',
      component: TicTacToeVue,
    },
    {
      path: '/hangman',
      name: 'hangman',
      component: HangmanVue,
    },
    {
      path: '/sudoku',
      name: 'sudoku',
      component: SudokuVue,
    },
  ],
});

export default router;
