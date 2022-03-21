wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'hello':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Gas Fees`,
            description:
              'Current Gas Fees from ETHGasStation.info:',
            textAreaContent:
              'TO DO TO DO TO DO',
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
});
