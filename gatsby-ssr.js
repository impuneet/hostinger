import { JssProvider } from "react-jss";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import React from "react";

require("dotenv").config();
import getPageContext from "./src/getPageContext";
import createStore from "./src/state/store";
import theme from "./src/styles/theme";

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const pageContext = getPageContext();
  const store = createStore();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <JssProvider
          registry={pageContext.sheetsRegistry}
          generateClassName={pageContext.generateClassName}
        >
          {React.cloneElement(bodyComponent, {
            pageContext
          })}
        </JssProvider>
      </Provider>
    )
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
    />
  ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <script
      key={`webfontsloader-setup`}
      dangerouslySetInnerHTML={{
        __html: `
        WebFontConfig = {
          google: {
            families: ["${theme.base.fonts.styledFamily}:${theme.base.fonts.styledFonts}"]
          }
        };

        (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);`
      }}
    />,
    <script
      key="3"
      type="text/javascript"
      src="https://js.convertflow.co/production/websites/9359.js"
    />,
    <script
      key="5"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://cdn.popt.in/pixel.js?id=235e82e90e2eb';
        wf.async = true;
        s.parentNode.insertBefore(wf, s);
    })(document);`
      }}
    />,
    <script
      key="6"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(d) {
          var qs,js,q,s, gi=d.getElementById, ce=d.createElement,gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) }
        })(document);`
      }}
    />,
    <script
      key="4"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `!function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };
        }}();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('ub6dh8nrstad');`
      }}
    />,
    <script
      key="4"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-155135587-2');`
      }}
    />
  ]);
};
