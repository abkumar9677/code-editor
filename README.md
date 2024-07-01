# CodeEditor

CodeEditor is a React component designed for highlighting syntax for different programming languages using PrismJS and `prism-react-renderer`.

## Features

- Syntax highlighting for various programming languages.
- Built with React, Prism.js, and HTML <textarea> for development.

## Implementation Details

It has been designed to be compatible with other components that use different syntax highlighting for various programming languages. This means that we can modify the highlighting for all languages. 
Here, I have used HTML <textarea> and <Highlight> from prism-react-renderer. To match the requirements, I created a textarea that is later highlighted according to the text the user will type and overlapped with the highlighted text paragraph. Textarea uses a transparent user input style so that it looks like the typing is occurring on highlighted paragraphs only.

## Installation details
- Run `npm install `
- After installation is done, run `npm run start`
