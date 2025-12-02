# Input Loader Composable

## Usage

The `useInputLoader` composable automatically loads input files from the `public` directory when a component mounts.

### Setup for Each Day

1. **Place your input file in the `public` directory:**
   ```
   public/Day1Input.txt
   public/Day2Input.txt
   etc.
   ```

2. **Use the composable in your day component:**
   ```typescript
   import { useInputLoader } from '@/composables/useInputLoader'
   
   const { input, loading, error } = useInputLoader('Day2Input.txt')
   ```

3. **The input will be automatically loaded** when the component mounts and available in the textarea.

### Example

```vue
<template>
  <textarea v-model="input" />
  <p v-if="loading">Loading input...</p>
  <p v-if="error" class="text-red-500">{{ error }}</p>
</template>

<script setup lang="ts">
import { useInputLoader } from '@/composables/useInputLoader'

// Automatically loads Day2Input.txt from /public
const { input, loading, error } = useInputLoader('Day2Input.txt')

// Use input.value in your solution functions
function solve() {
  console.log(input.value)
}
</script>
```

### Return Values

- `input` - Reactive reference containing the file contents
- `loading` - Boolean indicating if the file is currently loading
- `error` - String containing error message if loading failed, null otherwise
- `loadInput()` - Function to manually reload the input if needed
