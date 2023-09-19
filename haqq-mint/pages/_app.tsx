import type { AppProps } from "next/app";
import { HaqqChainTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chain your dApp will work on.
const activeChain = "HaqqChainTestnet ";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={HaqqChainTestnet}
    clientId={process.env.TW_API_KEY}
    >
      
      <Head>
        <title>HAQQ Network - ERC-1155 Edition Drop Minting Pages</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Using HAQQ Network and Thirdweb's Edition Drop contract to create customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Haqq Network, Islamic Coin, ISLM, Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
