import { OnRpcRequestHandler } from '@metamask/snap-types';

async function getFees() {
  const response = await fetch('https://www.etherchain.org/api/gasPriceOracle'); 
  return response.text(); 
}

/**
 * Get a message from the origin. For demonstration purposes only.
 *
 * @param originString - The origin string.
 * @returns A message based on the origin.
 */
export const getMessage = (originString: string): string =>
  `Hello, ${originString}!`;

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns `null` if the request succeeded.
 * @throws If the request method is not valid for this snap.
 * @throws If the `snap_confirm` call failed.
 */
export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'fees':
      return getFees().then(fees => {
        const feesObject = JSON.parse(fees); 
        const baseFee = parseFloat(feesObject.currentBaseFee); 
        const safeLow = Math.ceil(baseFee + parseFloat(feesObject.safeLow)); 
        const standard = Math.ceil(baseFee + parseFloat(feesObject.standard)); 
        const fastest = Math.ceil(baseFee + parseFloat(feesObject.fastest)); 
        return wallet.request({
          method: 'snap_confirm', 
          params: [
            {
              prompt: getMessage(origin),
              description:
                'Current gas fees from etherchain.org:',
              textAreaContent:
                `Low: ${safeLow}\n`+
                `Average: ${standard}\n`+
                `High: ${fastest}\n`
            }
          ]
        }); 
      }); 
    default:
      throw new Error('Method not found.');
  }
};
