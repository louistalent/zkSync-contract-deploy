// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SafeMath.sol";
import "./ERC20.sol";
import "./SafeERC20.sol";

contract SpiralFi is ERC20 {
    constructor() ERC20("SpiralFi", "SPIRAL") {
        _mint(msg.sender, 10_000_000 * 10 ** uint256(decimals()));
    }
}