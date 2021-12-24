const { expect } = require("chai");
//const { isCallTrace } = require(" chai ");
const { ethers } = require("hardhat");

describe(" Token contract ", function () {
    
    it("Deployment should asign the total supply of tokens to the owner",async function() {

        const[owner] = await ethers.getSigners();

        console.log("Signers object:", owner);
        const Token = await ethers.getContractFactory("Token"); //instance created

        const hardhatToken = await Token.deploy(); //Deploy contract

        const ownerBalance = await hardhatToken.balanceOf(owner.address); //ownerBalance = 10000
        console.log("Owner address:", owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);  //total supply = 10000
    });    
});

