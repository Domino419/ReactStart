import ReactDOMserver from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga';

import rootReducer , { rootSaga } from "./modules";

import PreloadContext from "./lib/PreloadContext";

import { END } from 'redux-saga' ; 

// asset-manifest.json 에서 파일 경로 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8"),
);

function createPage(root, stateScript ) {
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
    ${stateScript}
    <script src="${manifest.files["main.js"]}"></script>
  </body>
</html> `;
}

const app = express();

const serverRender = async (req, res, next) => {
  // 404가 떠야 하는 상황에서 404를 띄우지 않고 렌더링을 해주도록 함.

  const context = {};
  const sagaMiddleware = createSagaMiddleware() ; 

  const store = createStore(rootReducer, applyMiddleware(thunk , sagaMiddleware ));

  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise() ; 
  sagaMiddleware.run(rootSaga ) ; 

  const preloadContext = {
    done: false,
    promises: [],
  };

  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  ReactDOMserver.renderToStaticMarkup(jsx); // 한번 더 랜더링
  
  store.dispatch(END) ; // redux-saga의 END 액션을 발생 시키면 액션을 모니터링하는 사가들이 모두 종료됨. 

  try {
    await sagaPromise ; // 기존에 진행 중인 사가들이 모두 끝날 때까지 기다림. 
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMserver.renderToString(jsx);
  const stateString = JSON.stringify(store.getState()).replace(/</g,`\\u003c`) ;
  const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`;

  res.send(createPage(root, stateScript ));
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



// 586page 