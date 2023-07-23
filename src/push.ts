import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = process.env.PRIVATE_KEY // channel private key
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

export const sendNotification = async(hash:string) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `Acid `,
        body: `more info`
      },
      payload: {
        title: `A new transaction was sent `,
        body: `check out the transaction : ${hash}`,
        cta: '',
        img: ''
      },
      channel: 'eip155:5:0x82349D3f9EBEF4b1Fc288B8882DD64fa808Bf070', // your channel address
      env: 'staging'
    });
  } catch (err) {
    console.error('Error: ', err);
  }
}
