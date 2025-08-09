"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default function Home() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [editor, setEditor] = useState<any>(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef && editorRef.current) {
      const myEditor: monaco.editor.IStandaloneCodeEditor = monaco.editor.create(editorRef.current, {
        value: "{\n\t\"key\": \"value\"\n}",
        language: 'json',
        theme: 'vs-dark',
        autoIndent: 'full'
      });
      setEditor(myEditor)
    }
    return () => { editor.dispose() }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [editorRef])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.editor} style={{ width: '100%' }}>
       <div ref={editorRef} style={{height: '95vh'}}></div>
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="Input 1" className={styles.input} />
          <input type="text" placeholder="Input 2" className={styles.input} />
        </div>
      </div>
    </div>
  );
}
