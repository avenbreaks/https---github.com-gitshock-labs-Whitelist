async function main() {
  // update the name here
  const Arnhemia = await ethers.getContractFactory("Arnhemia")

  // Start deployment, returning a promise that resolves to a contract object
  const arnhemia = await Arnhemia.deploy(
    "https://gateway.pinata.cloud/ipfs/QmapKEPakiuEAzYP2UXP4RYHP8c4dBUdTb12SvcSAeafgm/", // baseURI include the /
    "" // collectionURI
  );
  console.log("Contract deployed to address:", arnhemia.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })