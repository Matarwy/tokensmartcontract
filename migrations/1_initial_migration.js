const Migrations = artifacts.require("BUSDFactory");

module.exports = function (deployer) {
  deployer.deploy(Migrations,"0x10ED43C718714eb63d5aA57B78B54704E256024E");
};
