

# React App Text

The React App Text component allows for easy integration of customizable text elements within your React applications, leveraging `styled-components` for dynamic styling. This component supports various text styles and configurations, making it a versatile choice for any project.

## Features

- Customizable text styles including font size, color, and alignment
- Supports heading levels `h1` to `h6`, paragraph, and custom text types
- Easy integration with `styled-components`

## Installation

First, you need to install the package using npm:

```bash
npm install react-app-text
```

This package has peer dependencies on `react` and `styled-components`. If you haven't already installed these in your project, you will need to add them as well:

```bash
npm install react styled-components
```

## Usage

Here's a quick guide to get you started with using the React App Text component in your project.

First, import the component:

```javascript
import AppText from 'react-app-text';
```

Then, you can use it in your React components like so:

```jsx
<AppText
  text="Hello, world!"
  headingType="h1"
  textColor="blue"
  textAlign="center"
/>
```

### Props

The component accepts the following props:

- `text`: The text you want to display.
- `headingType`: The style of text, e.g., `"h1"`, `"h2"`, `"p"` for paragraph, etc. Defaults to "normal text".
- `textColor`: The color of the text. Defaults to "black".
- `textAlign`: Alignment of the text. Options include `"start"`, `"end"`, `"center"`, `"justify"`, `"left"`, and `"right"`. Defaults to "start".
- `textTransform`: Transformation applied to the text. Options are `"none"`, `"capitalize"`, `"uppercase"`, and `"lowercase"`. Defaults to "none".
- `className`: Additional CSS class for custom styling.

## Contributing

Contributions are always welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcomed.

## License

This project is licensed under the ISC License - see the LICENSE.md file for details.
