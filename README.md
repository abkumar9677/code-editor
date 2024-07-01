# CodeEditor

CodeEditor is a React component designed for highlighting syntax for different programming languages using PrismJS and `prism-react-renderer`.

## Features

- Syntax highlighting for various programming languages.
- Built with React, Prism.js and HTML <textarea> for development.

## Implementation Details

It has been designed to be compatible with other components that use different syntax highlighting for different programming languages. This means that we can modify the highlighting for all languages. 
Here, I have used HTML <textarea> and <Highlight> from prism-react-renderer. To match with the requirements, I created a textarea which is later highlighted according to the text user is going to type and overlapped it with the highlighted text paragraph. Textarea uses transparent user input style so that it looks like the typing is occuring on higlighted paragraph only.