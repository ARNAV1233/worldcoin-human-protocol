import React from 'react';
import { WorldIDWidget } from "@worldcoin/id";

function WorldcoinValidator({
  data,
  onVerify,
  validatorApiUrl,
  signal,
  actionId,
  ...rest
}) {
  const handleVerification = async (worldcoinProof) => {
    try {
      const proof={signal,...worldcoinProof}
      const response = await fetch(validatorApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data,
          worldcoinProof:proof
        })
      });
      if (response.ok) {
        const { proof } = await response.json();
        onVerify({ error: false, errorMessage: null, proof });
      } else {
        const err=await response.text();
        const errorMessage = `${response.status} ${err}`;
        onVerify({ error: true, errorMessage, proof: null });
      }
    } catch (error) {
      onVerify({ error: true, errrorMessage: String(error), proof: null });
    }
  };

  // Main validator component
  return (
    <WorldIDWidget
  actionId={actionId} // obtain this from developer.worldcoin.org
  signal={signal}
  enableTelemetry
  onSuccess={(verificationResponse) => {
    handleVerification(verificationResponse)
  }} // you'll actually want to pass the proof to the API or your smart contract
  onError={(error) => console.error(error)}
{...rest}
/>
  );
}

export default WorldcoinValidator;
