# JSON to CSV Vue 3 TypeScript Converter

## Overview

JSON to CSV Vue 3 TypeScript Converter is a Vue 3.6 package that allows you to convert JSON data into CSV format. This package is designed to work seamlessly with Vue 3, utilizing the Composition API and TypeScript for a robust and type-safe development experience.

### Author

Suhaib Qudah

## Installation

Install the package using your preferred package manager:

```bash
npm install json-to-csv-vue-3-typescript --save
```

or

```bash
yarn add json-to-csv-vue-3-typescript
```

## Usage

### Importing in your Vue 3 Component

```typescript
import { defineComponent } from 'vue';
import JsonToCSV from 'json-to-csv-vue-3-typescript';

export default defineComponent({
  components: {
      JsonToCSV,
  },
  // Your component code here
});
```

### Adding the Converter to your Template

```html
<template>
  <div>
    <!-- Your existing template content -->
    <json-to-csv :data="yourJsonData"></json-to-csv>
  </div>
</template>
```

### Props

- `data` (required): The JSON data that you want to convert to CSV.

### Example

```typescript
<template>
  <div>
    <json-to-csv :data="[
      { name: 'John Doe', age: 30, city: 'New York' },
      { name: 'Jane Doe', age: 25, city: 'Los Angeles' },
      { name: 'Bob Smith', age: 40, city: 'Chicago' }
    ]"></json-to-csv>
  </div>
</template>
```

## Development

If you want to contribute to the development of this package, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/suhaibqudah/json-to-csv-vue-3-typescript.git
```

2. Install dependencies:

```bash
cd json-to-csv-vue-3-typescript
npm install
```

3. Make your changes and run the development server:

```bash
npm run serve
```

4. Open your browser and go to http://localhost:8080 to test your changes.

## License

This package is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.