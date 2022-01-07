// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Router = await ethers.getContractFactory("EddaRouter");
  const router = await Router.deploy("0x3ba4aC751327B4988E3B62267949610ff6D9885e", "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270", "0x30742795F6E1d06071fa789e05a0A7432Cc5220e");

  await router.deployed();

  console.log("Eddaswap Router deployed to:", router.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
