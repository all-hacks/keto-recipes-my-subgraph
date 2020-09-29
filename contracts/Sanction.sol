pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;

contract SanctionRegistry {
  event NewSanction(uint id, address owner, Sanction sanction); 
  event UpdatedSanction(uint id, address owner, string referenceNum);

  struct Sanction {
    address owner;
    string referenceNum;
    string dataId;
    string versionNum;
    string unListType;
    string listType;
    string listedOn;
    string otherInformation;
    string nationality;
    string[] name;
    string[] designation;
    string[] passportNum;
    string[] nationalIdentificationNo;
    string[] dob;
    string[] pob;
    string[] aDdress;
    string[] goodQualityAka;
    string[] lowQualityAka;
  }

  Sanction[] public sanctions;

  mapping (uint => address) public sanctionToOwner;
  mapping (address => uint[]) public ownerToSanction;

  function createSanction(Sanction sanction) public {
    uint id = sanctions.push(sanction) - 1;

    sanctionToOwner[id] = msg.sender;
    ownerToSanction[msg.sender].push(id);

    emit NewSanction(id, msg.sender, sanction);
  }

  function getSanctionIds() public view returns (uint[]) {
    return ownerToSanction[msg.sender];
  }

  function getSanction(uint id) public view returns (Sanction sanction) {
    require(sanctionToOwner[id] == msg.sender, "Sanction and owner does not match.");
    return (sanctions[id]);
  }

  function updateReferenceNum(uint id, string _referenceNum) public {
    require(msg.sender == sanctions[id].owner);

    sanctions[id].referenceNum = _referenceNum;
    emit UpdatedSanction(id, msg.sender, _referenceNum);
  }

}
