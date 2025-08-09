"use client";
import { useEffect, useRef, useState } from "react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

interface MonacoEditorProps {
//   editorRef: React.RefObject<HTMLDivElement>;
//   setEditor: React.Dispatch<React.SetStateAction<any>>;
    value?: string;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ value }) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
  const [editor, setEditor] = useState<any>(null);
  const editorRef = useRef(null);

  useEffect(() => {
    console.log("Value ======== ", value);
    if (editorRef && editorRef.current) {
      const myEditor: monaco.editor.IStandaloneCodeEditor = monaco.editor.create(editorRef.current, {
        value: "{\n\t\"key\": \"value\"\n}",
        language: 'json',
        theme: 'vs-dark',
        autoIndent: 'full'
      });
      setEditor(myEditor);
    }
    return () => { editor.dispose(); }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [editorRef]);

  return <div ref={editorRef} style={{ height: '95vh' }}></div>;
};

export default MonacoEditor;
