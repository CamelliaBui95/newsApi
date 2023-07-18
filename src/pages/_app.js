import "../styles/index.css";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import model from "../lib/model";
import { StoreProvider, createStore, persist } from "easy-peasy";

const store = createStore(
  persist(model, {
    allow: ["articles", "currentPage", "prevDate"],
  })
);

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component className="App" {...pageProps} />
    </StoreProvider>
  );
}
