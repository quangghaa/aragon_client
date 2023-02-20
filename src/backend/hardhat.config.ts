// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.9",
// };

// export default config;

import "@nomicfoundation/hardhat-toolbox";

export default {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      ChainId: 31337,
    },
  },
};