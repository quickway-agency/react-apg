# React AUTOPG — Auto Page Generator

A small library for generating page content in a React project from JSON format.

## Installation

Install `react-autopg` with npm or yarn:

#### Yarn

```bash
  yarn add react-autopg
```

#### NPM

```bash
  npm i react-autopg
```

## Basic usage

`yourProject/app/sample-page.js`:

```jsx
import { Page } from 'react-autopg';
import content from './content.json';

function getClassNames(tag) {
  switch (tag) {
    case 'h1':
      return 'text-lg';
    default:
      return 'text-black';
  }
}

export function SamplePage() {
  return <Page content={content} getClassNames={getClassNames} />;
}
```

## Example content.json

```json
{
  "content": {
    "tag": "main",
    "children": [
      {
        "tag": "h1",
        "children": "Heading 1"
      },
      {
        "tag": "section",
        "children": [
          {
            "tag": "h2",
            "children": "Heading 2"
          },
          {
            "tag": "p",
            "children": "Paragraph"
          }
        ]
      }
    ]
  }
}
```

## Authors

- [@brightskki](https://github.com/brightskki)
