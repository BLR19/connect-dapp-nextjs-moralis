import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_favoriteNumber",
          type: "uint256",
        },
      ],
      name: "addPerson",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "nameToFavoriteNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "people",
      outputs: [
        {
          internalType: "uint256",
          name: "favoriteNumber",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "retrieve",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_favoriteNumber",
          type: "uint256",
        },
      ],
      name: "store",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const {runContractFunction} = useWeb3Contract({
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "store",
    params: {
      _favoriteNumber: 42,
    }
  })
  return (
    <div>
      Hey everybody ! 
      <br/><br/>

      {isWeb3Enabled ? (
        <>
        "Connected! "
        <br/>
        <button onClick={() => runContractFunction()}>Execute</button>
        </>
      ) : (
        <button onClick={() => enableWeb3()}>Connect</button>
      )}
    </div>
  );
}
