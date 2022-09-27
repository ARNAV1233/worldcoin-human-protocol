# Counter contract with proof of humanity and proof of personhood by worldcoin

In this repo i'm gonna show you how you can use proof of humanity by humans protocol based on [Human Protocol counter repo](https://github.com/Human-Protocol/poh-counter-example) , integrate with proof of person by worldcoin as a plugin to prevent sybil attack

# Link to react plugn and how to use 

https://github.com/spiritbro1/worldcoin-human-protocol/tree/main/packages/poh-validator-worldcoin-react

# What is worldcoin identity

World ID uses iris imaging to identify someone is a unique human. The orb which is responsible for this verification is a custom-built device with multiple sensors which take pictures of the iris in a way that later allows those pictures to be encoding into an Iris code (a numeric representation of the iris). The multitude of sensors in the orb are used to remove uncertainties and enable the required pictures to be as expected (i.e. positioning lenses correctly, ensuring correct pupil dilation, identifying shadows, eyelashes or other obstructions, etc.) and for fraud prevention (e.g. ensuring it's a human in front of the orb, aliveness, etc.) taken from https://id.worldcoin.org/docs/advanced/proof-of-personhood#the-orb-iris-image

# Video demo

[untitled.webm](https://user-images.githubusercontent.com/62529025/192582985-904b7e4c-8e4d-4416-b5fd-5eb9918b7829.webm)

# Web demo

https://panda-hazel.vercel.app/

# Contract deployed 

https://mumbai.polygonscan.com/address/0xA6D71B8cb9e36CfC8251d8a9fEE438D64869618C

# How it works

1. When we click on `increment` button we will see a box like this:

![image](https://user-images.githubusercontent.com/62529025/192584802-f09495c3-baa5-4871-92a2-4154b1ecc2c7.png)

2. When we click on that we will see a box with QR code to verify if we are real human or no, usually we need an [orb](https://id.worldcoin.org/docs/advanced/proof-of-personhood#the-orb-iris-image) to do this but worldcoin team did a great job by making a simulator for developer to use so that we can mimic how it works in real world after you click `Copy QR code` go to https://simulator.worldcoin.org/

![image](https://user-images.githubusercontent.com/62529025/192585356-de93ec6d-8705-4324-94be-f68d717d79e7.png)

3. After that you need to click temporary identity in order for you to create a unique identity just like when you create identity in worldcoin mobile app

![image](https://user-images.githubusercontent.com/62529025/192585892-98cb425d-1eec-4d4b-b520-712c5ad69cea.png)

4. After that you need to verify your identity this is imitating how we use orb to scan our retina so that worldcoin protocol knew we are real human

![image](https://user-images.githubusercontent.com/62529025/192586147-7ff3e01c-9c3e-4d23-89d9-945398735ed1.png)

5. After that you copy paste the code that we get earlier

![image](https://user-images.githubusercontent.com/62529025/192586454-bc9e64af-f7e2-401a-82f1-23229314fed0.png)

6. Wait until there is verify button then click it 

![image](https://user-images.githubusercontent.com/62529025/192586575-abd6912b-629f-4977-9743-6f26f20b728a.png)

7. Go back to main window and click continue

![image](https://user-images.githubusercontent.com/62529025/192586675-8789a591-7e79-48eb-9361-7832006ef8b0.png)

8. Sign the transaction and wait until the number incremented

![image](https://user-images.githubusercontent.com/62529025/192586799-09aa768b-b8d7-424b-91d2-d83819071c3a.png)

9. After that wait until the transaction confirmed and voila we are successfully implemented worldcoin anti sybil attack with human protocol proof of humanity

![image](https://user-images.githubusercontent.com/62529025/192587144-56529c46-1c17-4a26-ac55-7d2643e1fb24.png)

10. Notice that if we try to verify again it wont work that prove that worldcoin id is pretty unique and in order to increment again you need to be real human being

![image](https://user-images.githubusercontent.com/62529025/192587411-c160c0a1-1dfd-45ff-80fd-9b474c5a84f5.png)




