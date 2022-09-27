//SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;

import "../lib/poh-contracts/contracts/HumanOnly.sol";


contract Counter is HumanOnly {
    
    event Increment(uint256 currentCounter);
 uint256 public counter;
    address private validatorAddr = owner();
    constructor(){
setHumanityValidator(owner());        
    }

    function increment(bytes calldata proof) public basicPoH(proof) {
        counter++;

        if (counter > 99) {
          counter = 1;
        }

        emit Increment(counter);
    }
}
