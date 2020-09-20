pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;

contract RecipeRegistry {
  event NewRecipe(uint id, address owner, string displayName, string imageUrl, string[] ingredients, string[] steps);
  event UpdatedRecipe(uint id, address owner, string displayName, string imageUrl);

  struct Recipe {
    address owner;
    string displayName;
    string imageUrl;
    string[] ingredients;
    string[] steps;
  }

  Recipe[] public recipes;

  mapping (uint => address) public recipeToOwner;
  mapping (address => uint[]) public ownerToRecipe;

  function createRecipe(string _displayName, string _imageUrl, string[] _ingredients, string[] _steps) public {
    uint id = recipes.push(Recipe(msg.sender, _displayName, _imageUrl, _ingredients, _steps)) - 1;

    recipeToOwner[id] = msg.sender;
    ownerToRecipe[msg.sender].push(id);

    emit NewRecipe(id, msg.sender, _displayName, _imageUrl, _ingredients, _steps);
  }

  function getRecipeIds() public view returns (uint[]) {
    return ownerToRecipe[msg.sender];
  }

  function getRecipe(uint id) public view returns (string, string, string[], string[]) {
    require(recipeToOwner[id] == msg.sender, "Recipe and owner does not match.");
    return (recipes[id].displayName, recipes[id].imageUrl, recipes[id].ingredients, recipes[id].steps);
  }

  function updateRecipeName(uint id, string _displayName) public {
    require(msg.sender == recipes[id].owner);

    recipes[id].displayName = _displayName;
    emit UpdatedRecipe(id, msg.sender, _displayName, recipes[id].imageUrl);
  }

  function updateRecipeImage(uint id, string _imageUrl) public {
    require(msg.sender == recipes[id].owner);

    recipes[id].imageUrl =  _imageUrl;
    emit UpdatedRecipe(id, msg.sender, recipes[id].displayName, _imageUrl);
  }

}
