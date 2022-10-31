const Migration = artifacts.require("AuctionSimple");

module.exports  = function  (deployer){
    deployer.deploy(Migration) 
};