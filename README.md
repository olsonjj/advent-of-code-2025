# Advent of Code 2025 🎄

My solutions to [Advent of Code 2025](https://adventofcode.com/2025) challenges, built with Vue 3 + TypeScript and a visual interface.

## Project Overview

This project provides a modern, interactive way to solve and visualize Advent of Code puzzles. Each day's challenge is implemented as a pure TypeScript solution with comprehensive tests, then wrapped in a Vue 3 UI for easy interaction.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Vue Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Fast unit testing framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/olsonjj/advent-of-code-2025.git
cd advent-of-code-2025

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

This starts the Vite dev server, typically at `http://localhost:5173`. The app will hot-reload as you make changes.

### Running Tests

```bash
# Run tests once
npm run test:run

# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui
```

### Building for Production

```bash
# Type check
npm run typecheck

# Build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  views/
    dayN/
      solve.ts          # Pure solution functions
      solve.test.ts     # Unit tests
      DayN.vue          # UI component
      part1.md          # Problem description (Part 1)
      part2.md          # Problem description (Part 2)
      input.txt         # Puzzle input (backup)
  composables/
    useInputLoader.ts   # Composable for loading input files
  router/
    index.ts            # Vue Router configuration
public/
  DayNInput.txt         # Puzzle inputs (served via HTTP)
```

## Development Workflow

See [`.warp.md`](./.warp.md) for detailed development patterns and guidelines.

### Quick Summary:

1. **Create solution** (`src/views/dayN/solve.ts`)
   - Export `solvePart1()` and `solvePart2()` functions
   - Keep functions pure - accept input string, return result

2. **Write tests** (`src/views/dayN/solve.test.ts`)
   - Use example inputs from the problem
   - Verify both parts work correctly

3. **Wire up UI** (`src/views/dayN/DayN.vue`)
   - Load input with `useInputLoader('DayNInput.txt')`
   - Display results when user clicks "Solve"

4. **Add input file** to `public/DayNInput.txt`

## Solutions

- ✅ [Day 1: Hysteria Analysis](src/views/day1/)
- ✅ [Day 2: Security Badges](src/views/day2/)
- ✅ [Day 3: Word Search](src/views/day3/)
- ✅ [Day 4: Word Search Part 2](src/views/day4/)
- ✅ [Day 5: Arctic Station Updates](src/views/day5/)
- ✅ [Day 6: Cephalopod Math](src/views/day6/)
- ✅ [Day 7: Tachyon Manifold](src/views/day7/)
- 🔒 Days 8-25 (Coming soon!)

## License

MIT

## Acknowledgments

- [Advent of Code](https://adventofcode.com/) by Eric Wastl
- Built with [Vite](https://vitejs.dev/) and [Vue 3](https://vuejs.org/)
