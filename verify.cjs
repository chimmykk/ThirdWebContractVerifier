const { getContract } = require("thirdweb/contract");
const { verifyContract } = require("thirdweb/contract");
const { createThirdwebClient } = require("thirdweb");


const apechain = {
  name: "ApeChain",
  chainId: 33111,  // apechain for example
  rpc: ['https://apechain.calderachain.xyz/http'],  

}



const client = createThirdwebClient({
  clientId: 'replace your clientid',
});
const contractAddress = "replace your contract address";
const explorerAPIUrl = "replace api endpoint of the explorer";
const explorerAPIKey = "api key from explorer";

const contract = getContract({
  client,
  chain: apechain,
  address: contractAddress,
});

async function verifyContractFunc() {
  try {
    const verificationResult = await verifyContract({
      contract,
      explorerApiUrl: explorerAPIUrl,
      explorerApiKey: explorerAPIKey,
    });
    console.log(verificationResult);
  } catch (error) {
    console.error("Error during contract verification:", error);
  }
}

verifyContractFunc();
