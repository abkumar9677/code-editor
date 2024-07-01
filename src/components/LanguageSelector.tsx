import React from "react";

interface LanguageSelectorProps {
  setEditorLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  setEditorLanguage,
}) => {
  // handling language selection for code editor
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEditorLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium text-white text-center">
        Your Code syntax highlighter is available now.
      </h1>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex items-center gap-4 justify-center">
          <p className="text-lg font-bold">Choose your language:</p>
          <div>
            <select
              className="px-4 py-2 text-slate-600 bg-gray-200 rounded-md"
              onChange={handleLanguageChange}
            >
              <option value="javascript">JavaScript</option>
              <option value="markup">XML</option>
              <option value="css">CSS</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
