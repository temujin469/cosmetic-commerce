import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { useAppSelector } from "../store/store";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Fetcher, SWRConfig } from "swr";
import { Product } from "../typings";
import axios from "axios";



function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // const override: CSSProperties = {
  //   position:"absolute",
  //   left:"50%",
  //   top:"50%",
  //   zIndex:"100",
  //   backgroundColor:"black",
  //   width:"100%",
  //   height:"100%"
  // };

  const fetcher:Fetcher = async (url:string) =>{
    const res = await axios.get(url)
    if(res.statusText != "OK"){
    throw new Error('An error occurred while fetching the data.')
    }
  
    return res.data
  } 

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Provider store={store}>
        <div
          className={`w-full h-full absolute z-50 justify-center items-center bg-black/30 ${
            loading ? "flex" : "hidden"
          }`}
        >
          <HashLoader loading={loading} color="#54d2d2" />
        </div>
        <Component {...pageProps} />
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
