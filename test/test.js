// test/Box.test.js
// Load dependencies
const { expect } = require("chai");

// Load compiled artifacts
const PermissionsUpgradable = artifacts.require("PermissionsUpgradable");
const PermissionsInterface = artifacts.require("PermissionsInterface");
const OrgManager = artifacts.require("OrgManager");
const AccountManager = artifacts.require("AccountManager");
const NodeManager = artifacts.require("NodeManager");
const RoleManager = artifacts.require("RoleManager");
const VoterManager = artifacts.require("VoterManager");
const PermissionsImplementation = artifacts.require(
  "PermissionsImplementation"
);
// Start test block
contract("PermissionsUpgradable", function ([owner, account1, account2]) {
  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.permissionsUpgradable = await PermissionsUpgradable.new(owner);
    this.permissionsInterface = await PermissionsInterface.new(
      this.permissionsUpgradable.address
    );
    this.orgManager = await OrgManager.new(this.permissionsUpgradable.address);
    this.accountManager = await AccountManager.new(
      this.permissionsUpgradable.address
    );
    this.nodeManager = await NodeManager.new(
      this.permissionsUpgradable.address
    );
    this.roleManager = await RoleManager.new(
      this.permissionsUpgradable.address
    );
    this.voterManager = await VoterManager.new(
      this.permissionsUpgradable.address
    );
    this.permissionsImplementation = await PermissionsImplementation.new(
      this.permissionsUpgradable.address,
      this.orgManager.address,
      this.roleManager.address,
      this.accountManager.address,
      this.voterManager.address,
      this.nodeManager.address
    );
  });

  // Test case
  it("check getGuardian", async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect(await this.permissionsUpgradable.getGuardian()).to.equal(owner);
    console.log("2");
  });
});
