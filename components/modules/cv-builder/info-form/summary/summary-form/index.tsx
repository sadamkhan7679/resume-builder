import React from "react";
import TextEditor from "@/components/shared/rich-text-editor";

type SummaryFormProps = {};

const SummaryForm: React.FC<SummaryFormProps> = () => {
  return (
    <div>
      <h2 className="heading-2">Edit Summary</h2>
      <TextEditor />
    </div>
  );
};

export default SummaryForm;
