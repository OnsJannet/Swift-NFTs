require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  path:{
    artifacts: './src/artifacts'
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/285f663a4683421d968d98af2f3aa0c0",
      accounts: ['0x5c9389348d7aba1a2896baa53b8ef2bbf0ab7f49087cb6d5d36487bcd56bb041']
    }
  }
};
