var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(new import_node.Response(body, {
          headers: responseHeaders,
          status: didError ? 500 : responseStatusCode
        })), pipe(body);
      },
      onShellError: (err) => {
        reject(err);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// app/routes/test.jsx
var test_exports = {};
__export(test_exports, {
  default: () => Index
});
var import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_Home = __toESM(require("@mui/icons-material/Home")), import_EmojiFoodBeverage = __toESM(require("@mui/icons-material/EmojiFoodBeverage")), import_Subscriptions = __toESM(require("@mui/icons-material/Subscriptions")), import_ListAlt = __toESM(require("@mui/icons-material/ListAlt")), import_Search = __toESM(require("@mui/icons-material/Search")), import_Box = __toESM(require("@mui/material/Box")), import_BottomNavigation = __toESM(require("@mui/material/BottomNavigation")), import_BottomNavigationAction = __toESM(require("@mui/material/BottomNavigationAction"));
function Index() {
  let [value, Setvalue] = (0, import_react4.useState)(0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Box.default, {
    sx: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      bgcolor: "primary.main"
    }
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_BottomNavigation.default, {
    showLabels: !0,
    value,
    onChange: (_event, newValue) => {
      console.log("new value", newValue), Setvalue(newValue);
    }
  }, /* @__PURE__ */ React.createElement(import_BottomNavigationAction.default, {
    component: import_react3.Link,
    to: "/test/home",
    label: "home",
    icon: /* @__PURE__ */ React.createElement(import_Home.default, null)
  }), /* @__PURE__ */ React.createElement(import_BottomNavigationAction.default, {
    label: "tea",
    component: import_react3.Link,
    to: "/test/incall",
    icon: /* @__PURE__ */ React.createElement(import_EmojiFoodBeverage.default, null)
  }), /* @__PURE__ */ React.createElement(import_BottomNavigationAction.default, {
    label: "media",
    icon: /* @__PURE__ */ React.createElement(import_Subscriptions.default, null)
  }), /* @__PURE__ */ React.createElement(import_BottomNavigationAction.default, {
    label: "incall",
    icon: /* @__PURE__ */ React.createElement(import_ListAlt.default, null)
  }), /* @__PURE__ */ React.createElement(import_BottomNavigationAction.default, {
    label: "search",
    icon: /* @__PURE__ */ React.createElement(import_Search.default, null)
  }))));
}

// app/routes/test/incall.jsx
var incall_exports = {};
__export(incall_exports, {
  default: () => IncallSection
});
var import_react5 = require("@remix-run/react");
function IncallSection() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "btnTest"
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("h1", null, "This Incall Section"));
}

// app/routes/test/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeSection
});
function HomeSection() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "This Home Section"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b0161ba5", entry: { module: "/build/entry.client-5UZP6RGT.js", imports: ["/build/_shared/chunk-KHMOV2UA.js", "/build/_shared/chunk-LDOLHXLV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PZEOWHT3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-KDFNUQPO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test/home": { id: "routes/test/home", parentId: "routes/test", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/test/home-J7BQCVP4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test/incall": { id: "routes/test/incall", parentId: "routes/test", path: "incall", index: void 0, caseSensitive: void 0, module: "/build/routes/test/incall-YIPAOEJW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B0161BA5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  },
  "routes/test/incall": {
    id: "routes/test/incall",
    parentId: "routes/test",
    path: "incall",
    index: void 0,
    caseSensitive: void 0,
    module: incall_exports
  },
  "routes/test/home": {
    id: "routes/test/home",
    parentId: "routes/test",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
