import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <BrowserRouter basename="/react-typescript-cocktails/">
      <App />
    </BrowserRouter>
  </AppProvider>
);
