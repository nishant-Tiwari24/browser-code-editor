'use client';
import React, { useRef, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import LanguageOptions from './LanguageOptions';
import TextArea from './TextArea';
import OutputField from '@/app/components/OutputField';

const CodeEditor: React.FC = () => {
  const editorRef = useRef<any>();
  const [value, setValue] = useState<string>('//write down your code');
  const [language, setLanguage] = useState<string>('javascript');
  
  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelectLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  const handleEditorChange = (newValue: string | undefined) => {
    setValue(newValue || '');
  };

  return (
    <div className='w-full flex flex-col lg:flex-row'>
      <div className="w-full lg:w-2/3 h-[60vh] lg:h-[100vh]">
        <MonacoEditor
          onMount={onMount}
          language={language}
          value={value}
          theme="vs-dark"
          options={{ fontSize: 14, padding: { top: 12 } }}
          onChange={handleEditorChange}
        />
      </div>
      <div className='w-full lg:w-1/3 bg-[#ffffff] text-white overflow-auto'>
        <div className='flex lg:flex-row'>
          <LanguageOptions onSelectLanguage={onSelectLanguage} />
        </div>
        <TextArea />
        <OutputField editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
