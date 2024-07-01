import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [editorLanguage, setEditorLanguage] = useState<string>("javascript");

  return (
    <>
      <div className="flex flex-col gap-5 p-4 md:p-8">
        <LanguageSelector setEditorLanguage={setEditorLanguage} />
        <div className="w-full mt-5">
          <CodeEditor language={editorLanguage} />
        </div>
      </div>
    </>
  );
}

export default App;
