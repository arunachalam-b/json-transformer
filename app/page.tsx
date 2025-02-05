"use client";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.editor} style={{ width: '100%' }}>
          <CodeEditor
            value={code}
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              height: '100%',
              overflow: 'auto'
            }}
          />
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="Input 1" className={styles.input} />
          <input type="text" placeholder="Input 2" className={styles.input} />
        </div>
      </div>
    </div>
  );
}
