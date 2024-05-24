import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/context/auth";
import "@/styles/globals.css";
import axios from "axios";
import Axios from "axios";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;

  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);
  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };
  return (
    <>
      <Head>
        <script></script>
      </Head>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <AuthProvider>
          {!authRoute && <NavBar />}
          <div className={authRoute ? "" : "pt-16"}>
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </SWRConfig>
    </>
  );
}
