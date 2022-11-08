import { ComponentProps, FC, useEffect, useState } from "react";

interface DynamicFrameProps extends Omit<ComponentProps<"iframe">, "src"> {
  html: string;
  css: string;
  js: string;
}

const packToHTML = (html: string, css: string, js: string) => {
  return `<html>
  <head><style>${css}</style></head>
  <body>${html}<script>${js}</script></body>
  </html>`;
};

const DynamicFrame: FC<DynamicFrameProps> = ({ html, css, js, ...props }) => {
  const [url, seturl] = useState("");

  useEffect(() => {
    URL.revokeObjectURL(url);
    const packedHTML = packToHTML(html, css, js);
    const blob = new Blob([packedHTML], {
      type: "text/html",
    });
    seturl(URL.createObjectURL(blob));
  }, [html, css, js]);

  return <iframe src={url} {...props} />;
};

export default DynamicFrame;
