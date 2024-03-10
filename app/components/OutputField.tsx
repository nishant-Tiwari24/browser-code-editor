import { executeCode } from "@/api";
import React, { useState } from "react";
import Button from '@mui/joy/Button';

interface OutputFieldProps {
  editorRef: React.MutableRefObject<any>;
  language: string;
}

const OutputField: React.FC<OutputFieldProps> = ({ editorRef, language }) => {

  const [output, setOutput] = useState(null);
  const runCode = async () => {
    const sourceCode =  editorRef.current.getValue();
    if (!sourceCode) return alert("Source code cannot be empty");
    try {
      const {run:result} = await executeCode(language, editorRef)
      setOutput(result.output)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="w-full p-4">
      <div className="p-2 text-gray-600 text-sm">Executed Output:</div>
      <div className="bg-gray-100 h-80 rounded-md w-full overflow-y-scroll">
        <div className="p-2 font-mono text-xs text-gray-700">
        {output
          ? output
          : 'Click "Run Code" to see the output here'}
        </div>
      </div>
      <div className="py-4">
      <Button
        color="neutral"
        className='bg-gray-800 w-[12em] text-white font-sans font-light h-10 hover:bg-gray-700'
        onClick={runCode}
        variant="soft">Complie and Execute </Button>
    </div>
    </div>
  );
};

export default OutputField;
