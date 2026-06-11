import ReactDOMserver from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";

// asset-manifest.json 에서 파일 경로 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8"),
);

function createPage(root) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />

    <title>React App</title>

    <link href="${manifest.files["main.css"]}" rel="stylesheet" />
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app ...</noscript>
    <div id="root">{root}</div>
    <script src="${manifest.files["main.js"]}"></script>
  </body>
</html> `;
}

const app = express();

const serverRender = (req, res, next) => {
  // 404가 떠야 하는 상황에서 404를 띄우지 않고 렌더링을 해주도록 함.

  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMserver.renderToString(jsx);
  res.send(createPage(root));
};

const serve = express.static(path.resolve("./build"), {
  index: false, // "/"경로에서 index.html을 보여 주지 않도록 설정
});

app.use(serve);
app.use(serverRender);

// 5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
