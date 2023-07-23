"use client";

import { parseEther, parseUnits } from "viem";
import { useSendTransaction, useWaitForTransaction } from "wagmi";

import { stringify } from "../utils/stringify";
import { use, useEffect, useState } from "react";
interface Transaction {
  hash: string;
  nonce: string;
  blockHash: string | null;
  blockNumber: number | null;
  transactionIndex: number | null;
  from: string;
  to: string;
  value: string;
  gasPrice: string;
  gas: string;
  input: string;
  raw: string;
  creates: string | null;
  publicKey: string;
  condition: string | null;
  r: string;
  s: string;
  v: string;
  standardV: string;
}
// interface JsonRpcRequest {
//   method: string;
//   params: any[] | object;
//   id: number | string;
//   jsonrpc: string;
// }

export function SendTransaction() {
  const [txResult, setTxResult] = useState<string>("");
  const { data, error, isLoading, isError, sendTransaction } =
    useSendTransaction();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });
  // async function postVal(data:string) {
  //   return await axios.post(
  //     "https://smart-still-county.quiknode.pro/1e9cd4d09a863c271e1535ac0b39e51a14057de7",
  //     {
  //       method: "parity_pendingTransactions",
  //       params: [{data}],
  //       id: 1,
  //       jsonrpc: "2.0",
  //     }
  //   );
  // }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target as HTMLFormElement);
          const num1 = formData.get("num1") as string;
          const value = formData.get("value") as `${number}`;

          const data = `${num1}+${value}`;
          const dataHex = Buffer.from(data).toString("hex");
          sendTransaction({
            to: "0x82349D3f9EBEF4b1Fc288B8882DD64fa808Bf070",
            value: parseEther("0"),
            data: `0x${dataHex}`,
            gasPrice: parseUnits("1", 9),
          });
          console.log(receipt)
          // postVal(`0x${dataHex}`).then((res) => console.log(res));
        }}
      >
        <input name="num1" placeholder="num 1" />
        <input name="num2" placeholder="num2" />
        <button type="submit">Send</button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>Error: {error?.message}</div>}
    </>
  );
}
