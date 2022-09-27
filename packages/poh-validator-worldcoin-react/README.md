# Proof-of-Humanity Validator Plugin React Component for worldcoin identity

## Live dApp demo

https://panda-hazel.vercel.app/ ([source code](https://github.com/spiritbro1/worldcoin-human-protocol))

## Required props

You have to provide these props:

`validatorApiUrl` _(string)_ – URL of validator API. Validator API for use with this component: [Proof-of-Humanity worldcoin Validator API](https://github.com/spiritbro1/worldcoin-human-protocol/tree/main/packages/backend)

`actionId` _(string)_ – [worldcoin action id](https://developer.worldcoin.org/action) action-id you get from https://developer.worldcoin.org/actions

`signal` _(string)_ – random unique string example: your wallet address

## Returned object

- `error` _(boolean)_ – `true` in case of error; otherwise `false`

- `errorMessage` _(string)_ – in case of error; otherwise `null`

- `proof` _(string)_: proof-of-humanity (a hex string); `null` in case of error

## Usage with `poh-react`

```jsx
import WorldcoinValidator from 'poh-validator-worldcoin-react'
import { useProofOfHumanity } from 'poh-react';

 const validator = (
    <WorldcoinValidator
    actionId={"wid_staging_"}
      validatorApiUrl={"https://backend-phi-plum.vercel.app/api/proof"}
      signal={"0xA6D71B8cb9e36CfC8251d8a9fEE438D64869618C"}
      debug={true}
    />
  );
  const { getProofOfHumanity } = useProofOfHumanity(validator);
```

## Hidden props

These props are used internally by `poh-react`. Normally you don't bother working with them.

These props are used internally by `poh-react`. Normally you don't bother working with them.

`data` _(string)_ – data (a hex string) to be included in signed proof-of-humanity. Can be a random hex challenge, or a random hex challenge along with the address owner's signature

`onVerify` _(function)_ – will be called from the component once validation is complete with the returned object as the only parameter


## Author

spiritbro1

## License

MIT
