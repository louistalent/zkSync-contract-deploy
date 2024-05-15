import { deployContract } from "./utils";

// An example of a basic deploy script
// It will deploy a Greeter contract to selected network
// as well as verify it on Block Explorer if possible for the network
export default async function () {
  // const contractArtifactName = "SpiralFi";
  // const SpiralFi = await deployContract(contractArtifactName);
  // const SpiralFiAddress = await SpiralFi.getAddress();

  const contractArtifactName1 = "SPIRALPrivateSale";
  const constructorArguments1 = ['0xAd393E183eF06EDD7d55c2B5084fa2E156a62697'];
  const SpiralPresale = await deployContract(contractArtifactName1, constructorArguments1);
}
