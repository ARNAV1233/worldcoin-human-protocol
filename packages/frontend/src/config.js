const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const networkId = import.meta.env.VITE_NETWORK_ID;
const networkName = import.meta.env.VITE_NETWORK_NAME;
const validatorApiUrl = import.meta.env.VITE_VALIDATOR_API_URL;
const actionId = import.meta.env.VITE_ACTION_ID;

export {
  networkId,
  networkName,
  contractAddress,
  validatorApiUrl,
  actionId
};
