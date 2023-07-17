import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Head from "next/head";

export const metadata = {
  title: "printbnb",
  description: "Online 3D Printing Marketplace",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="icon" href="/app/favicon.ico" sizes="any" />{" "}
    </Head>
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
