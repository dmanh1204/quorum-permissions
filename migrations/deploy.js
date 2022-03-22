const Box = artifacts.require("Box");
const PermissionsUpgradable = artifacts.require("PermissionsUpgradable");
const PermissionsInterface = artifacts.require("PermissionsInterface");
const PermissionsImplementation = artifacts.require(
  "PermissionsImplementation"
);
const OrgManager = artifacts.require("OrgManager");
const RoleManager = artifacts.require("RoleManager");
const NodeManager = artifacts.require("NodeManager");
const AccountManager = artifacts.require("AccountManager");
const VoterManager = artifacts.require("VoterManager");
module.exports = function (deployer) {
  deployer.deploy(Box);
  deployer.deploy(PermissionsUpgradable);
  deployer.deploy(PermissionsInterface);
  deployer.deploy(PermissionsImplementation);
  deployer.deploy(OrgManager);
  deployer.deploy(RoleManager);
  deployer.deploy(NodeManager);
  deployer.deploy(AccountManager);
  deployer.deploy(VoterManager);
};
