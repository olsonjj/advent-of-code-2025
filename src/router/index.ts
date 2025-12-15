import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Day1 from '../views/day1/Day1.vue'
import Day2 from '../views/day2/Day2.vue'
import Day3 from '../views/day3/Day3.vue'
import Day4 from '../views/day4/Day4.vue'
import Day5 from '../views/day5/Day5.vue'
import Day6 from '../views/day6/Day6.vue'
import Day7 from '../views/day7/Day7.vue'
import Day8 from '../views/day8/Day8.vue'
import Day9 from '../views/day9/Day9.vue'
import Day10 from '../views/day10/Day10.vue'
import Day11 from '../views/day11/Day11.vue'
import Day12 from '../views/day12/Day12.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/day1',
      name: 'day1',
      component: Day1
    },
    {
      path: '/day2',
      name: 'day2',
      component: Day2
    },
    {
      path: '/day3',
      name: 'day3',
      component: Day3
    },
    {
      path: '/day4',
      name: 'day4',
      component: Day4
    },
    {
      path: '/day5',
      name: 'day5',
      component: Day5
    },
    {
      path: '/day6',
      name: 'day6',
      component: Day6
    },
    {
      path: '/day7',
      name: 'day7',
      component: Day7
    },
    {
      path: '/day8',
      name: 'day8',
      component: Day8
    },
    {
      path: '/day9',
      name: 'day9',
      component: Day9
    },
    {
      path: '/day10',
      name: 'day10',
      component: Day10
    },
    {
      path: '/day11',
      name: 'day11',
      component: Day11
    },
    {
      path: '/day12',
      name: 'day12',
      component: Day12
    }
  ]
})

export default router
