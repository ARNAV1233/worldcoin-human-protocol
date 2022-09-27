# Counter contract with proof of humanity and proof of person by https://id.worldcoin.org/

In this repo i'm gonna show you how you can use proof of humanity by humans protocol based on [Human Protocol counter repo](https://github.com/Human-Protocol/poh-counter-example) , integrate with proof of person by worldcoin as a plugin

## Requirements

- [rust](https://sterlingcobb.medium.com/installing-rustup-on-macosx-and-fish-shell-a6102353ee18)
- [foundry](https://getfoundry.sh/)
- [nodejs](https://nodejs.org/en/)
- [worldcoin id](https://id.worldcoin.org/)
- [wsl](https://learn.microsoft.com/en-us/windows/wsl/install) or [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

## Step by step

install using :

```bash
$ yarn
```

run anvil to create local node

```bash
$ anvil
```

open new terminal and deploy our contract

```bash
forge create Counter --contracts ./src/Counter.sol --private-key <your private key> --rpc-url <your rpc url>
```



