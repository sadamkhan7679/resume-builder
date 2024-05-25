import React, { useState } from "react";
import ReactQuill from "react-quill";

type TextEditorProps = {};

const TextEditor: React.FC<TextEditorProps> = () => {
  const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={setConvertedText}
        style={{ minHeight: "600px" }}
        className="min-h-[600px]"
      />
    </div>
  );
};

export default TextEditor;
