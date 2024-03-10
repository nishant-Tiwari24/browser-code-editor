import React, { useRef } from 'react';
import Select from 'react-select';
import { languageOptions } from '@/constants/language';

interface LanguageOptionsProps {
  onSelectLanguage: (selectedLanguage: string) => void;
}

const LanguageOptions: React.FC<LanguageOptionsProps> = ({ onSelectLanguage }) => {
  const editorRef = useRef<any>();

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const formatOptions = languageOptions.map((option) => ({
    value: option.value,
    label: `${option.value} (${option.label})`,
  }));

  const handleLanguageChange = (selectedOption: any) => {
    const selectedLanguage = selectedOption.value;
    onSelectLanguage(selectedLanguage);
  };

  return (
    <div className="flex items-center mr-8 px-6 py-5 space-x-4">
      <Select
        options={formatOptions}
        placeholder="javascript (18.15.0)"
        className="w-[36em] text-gray-500 text-[14px] rounded-md p-2 focus:outline-none focus:border-green-500"
        onChange={handleLanguageChange}
      />
    </div>
  );
};

export default LanguageOptions;
