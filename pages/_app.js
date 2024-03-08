import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { store } from "@/redux/store";
import { ReduxProvider } from "@/redux/StoreProvider";

export const metadata = {
  title: "vieo.io",
  description: "Artificial intelligence",
};

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </ReduxProvider>
  );
}

// Use Sidebar

{
  /* <Sidebar>
<Component {...pageProps} />
</Sidebar> */
}
