import { Connected } from "../components/Connected";
import { SendTransaction } from "../components/SendTransaction";

import { Web3Button } from "../components/Web3Button";

export function Page() {

  return (
    <>
        <Web3Button />
        <Connected>
          <SendTransaction />
        </Connected>
    </>
  );
}

export default Page;
