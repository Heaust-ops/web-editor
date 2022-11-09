import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import DynamicFrame from "./DynamicFrame/DynamicFrame";

const editorProps = {
  theme: "monokai",
  fontSize: 18,
  height: "100%",
  showGutter: false,
  width: "100%",
  useWrapMode: true,
  wrapEnabled: true,
  showPrintMargin: false,
  highlightActiveLine: false,
  setOptions: {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    showLineNumbers: false,
    tabSize: 2,
    indentedSoftWrap: false,
  },
};

export const getPagesNavigation = () => {
  const [html, sethtml] = useState("<h1>HTML : )</h1>");
  const [css, setcss] = useState(`body {
  background: #1E1E1E;
  color: white;
}`);
  const [js, setjs] = useState("console.log('hello world!')");
  return [
    {
      color: "#FF9090",
      icon: faCode,
      element: (
        <AceEditor
          {...editorProps}
          mode="html"
          value={html}
          onChange={sethtml}
          name="htmleditor"
        />
      ),
    },
    {
      color: "#9CFCFF",
      icon: faCss3Alt,
      element: (
        <AceEditor
          mode="css"
          value={css}
          onChange={setcss}
          name="csseditor"
          {...editorProps}
        />
      ),
    },
    {
      color: "#FDFFA4",
      icon: faJsSquare,
      element: (
        <AceEditor
          mode="javascript"
          value={js}
          onChange={setjs}
          name="jseditor"
          {...editorProps}
        />
      ),
    },
    {
      color: "#D1D1D1",
      icon: faEye,
      element: (
        <DynamicFrame
          html={html}
          css={css}
          js={js}
          style={{
            width: "101%",
            height: "100%",
            border: "none",
            outline: "none",
          }}
        />
      ),
    },
  ];
};
