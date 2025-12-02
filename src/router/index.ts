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
import Day13 from '../views/day13/Day13.vue'
import Day14 from '../views/day14/Day14.vue'
import Day15 from '../views/day15/Day15.vue'
import Day16 from '../views/day16/Day16.vue'
import Day17 from '../views/day17/Day17.vue'
import Day18 from '../views/day18/Day18.vue'
import Day19 from '../views/day19/Day19.vue'
import Day20 from '../views/day20/Day20.vue'
import Day21 from '../views/day21/Day21.vue'
import Day22 from '../views/day22/Day22.vue'
import Day23 from '../views/day23/Day23.vue'
import Day24 from '../views/day24/Day24.vue'
import Day25 from '../views/day25/Day25.vue'

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
    },
    {
      path: '/day13',
      name: 'day13',
      component: Day13
    },
    {
      path: '/day14',
      name: 'day14',
      component: Day14
    },
    {
      path: '/day15',
      name: 'day15',
      component: Day15
    },
    {
      path: '/day16',
      name: 'day16',
      component: Day16
    },
    {
      path: '/day17',
      name: 'day17',
      component: Day17
    },
    {
      path: '/day18',
      name: 'day18',
      component: Day18
    },
    {
      path: '/day19',
      name: 'day19',
      component: Day19
    },
    {
      path: '/day20',
      name: 'day20',
      component: Day20
    },
    {
      path: '/day21',
      name: 'day21',
      component: Day21
    },
    {
      path: '/day22',
      name: 'day22',
      component: Day22
    },
    {
      path: '/day23',
      name: 'day23',
      component: Day23
    },
    {
      path: '/day24',
      name: 'day24',
      component: Day24
    },
    {
      path: '/day25',
      name: 'day25',
      component: Day25
    }
  ]
})

export default router
