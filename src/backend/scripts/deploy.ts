const {ethers} = require("hardhat")

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Ballot = await ethers.getContractFactory("Ballot");
  const ballot = await Ballot.deploy(unlockTime, { value: lockedAmount });

  await ballot.deployed();

  console.log(`deployed to ${ballot.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(()=> process.exit(0))
  .catch((error)=>{
  console.error(error);
  process.exit(1);
});
export {};