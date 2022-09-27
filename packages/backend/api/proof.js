import axios from 'axios';
import {ethers} from 'ethers';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  if(req.method === 'OPTIONS') {
    return res.status(200).json(({
        body: "OK"
    }))
}
  const { data,worldcoinProof } = req.body;
 const action_id=process.env.action_id;
      try{
        const wallet = new ethers.Wallet(process.env.private_key);     
        const verify=await axios.post('https://developer.worldcoin.org/api/v1/verify',{action_id,...worldcoinProof} )
        const result=verify.data
      
        const { success, created_at } = result;
        if (!success) {
          res.status(400);
          return;
        }
      
        const timestamp = ethers.utils.hexZeroPad(
          ethers.utils.hexlify(
            Math.floor(new Date(created_at).getTime() / 1000)
          ),
          4
        );
      
        const hash = ethers.utils.keccak256(
          ethers.utils.hexConcat([data, timestamp])
        );
        const validatorSignature = await wallet.signMessage(
          ethers.utils.arrayify(hash)
        );
      
        const proof = ethers.utils.hexConcat([
          data,
          timestamp,
          validatorSignature
        ]);
      
        return res.status(200).json({ proof, timestamp: new Date(created_at).getTime() });
      }catch(e){
        console.log(e.response.data)
        return res.status(500).send(e.response.data.detail)
      }

}