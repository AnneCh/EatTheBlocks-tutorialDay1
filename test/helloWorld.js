const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWrold", () => {
    it ("Should return hello world", async () => {
        const helloWorld = await HelloWorld.deployed();
        // the contract instance usually takes a lower case, and the contract Artifact takes 2 upperCase
        const result = await helloWorld.hello(); // we call the hello function from the Hello World contract instance
        // now we need to make sure the result is what we are expecting 
        assert(result === "Hello world!");
    });
    // assertion worked, test passed
});