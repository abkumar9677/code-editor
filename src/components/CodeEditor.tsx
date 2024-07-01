import React, { useState, useEffect } from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import "./CodeEditor.css";

interface CodeEditorOptions {
  language: Language;
}

const CodeEditor: React.FC<CodeEditorOptions> = ({ language }) => {
  const [code, setCode] = useState(`
  import React, { useState } from "react";

  const App = () => (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
  `);

  // TextAreaHeightMatchToHighlighter function is designed to adjust the height of a textarea element 
  // to match the height of a pre element (which contains the highlighted code)
  const TextAreaHeightMatchToHighlighter = () => {
    const preElement =
      document.querySelector<HTMLPreElement>(".code-highlighter");
    const textarea =
      document.querySelector<HTMLTextAreaElement>(".textarea-input");
    if (preElement && textarea) {
      textarea.style.height = `${preElement.clientHeight}px`;
    }
  };

  useEffect(() => {
    TextAreaHeightMatchToHighlighter();
  }, [code]);

  return (
    <div className="w-full p-4 rounded-md highlighter-container">
      <Highlight code={code} language={language} theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`code-highlighter ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className="textarea-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onInput={TextAreaHeightMatchToHighlighter}
        placeholder="Type your code here..."
      />
    </div>
  );
};

export default CodeEditor;
