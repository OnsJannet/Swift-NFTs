import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; //comunicate with the smart contract
import Swift from '../../artifacts/contracts/Swift.sol/Swift.json';
import HeroBackground from '../../images/swift_collections.png';
import {
    HeroH1,
    HeroP,
    ImageBg,
    HeroBg,
    Count,
    Cosy,
    HeroContainer,
    HeroContent,
    Button
}
from './MintElemnts';


const TSaddress = "0xAea9477B3380845bA82A4DBB7B6D06d711c7020C";


function Mint() {

  const [error, setError] = useState('');
  const [account, setAccount] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
    getAccounts();

  }, [])

  async function fetchData() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(TSaddress, Swift.abi, provider);
      try {
        const cost = await contract.cost();
        const totalSupply = await contract.totalSupply();
        const object = {"cost": String(cost), "totalSupply": String(totalSupply)}
        setData(object);
      }
      catch(err) {
        setError(err.message);
      }
    }
  }

  async function mint() {
    if(typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(TSaddress, Swift.abi, signer);
      try {
        let overrides = {
          from: accounts[0],
          value: data.cost
        }
        const transaction = await contract.mint(accounts[0], 1, overrides);
        await transaction.wait();
        fetchData();
      }
      catch(err) {
        setError(err.message);
      }
    }
  }


  async function withdraw() {
    if(typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(TSaddress, Swift.abi, signer);
      try {
        const transaction = await contract.withdraw();
        await transaction.wait();
      }
      catch(err) {
        setError(err.message);
      }
    }
  }

  async function getAccounts() {
      if(typeof window.ethereum !== 'undefined') {
        let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      setAccount(accounts);
      console.log(accounts[0]);
    }
  }

  return (
    <HeroContainer id="mint">

                <HeroBg>
            
                <ImageBg style={{ backgroundImage: `url(${HeroBackground})`,   backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' }}
                />            
            </HeroBg>
      <HeroContent>
        {error && <p>{error}</p>}
        <HeroH1>Mint a Swift NFT !</HeroH1>
        <HeroP>
        Swifts are a species of tiny aliens;  They're earnestly driven by the desire to serve an evil boss, though they often screw up because they're selfish, easily distracted, and generally inept. They communicate using a gibberish language that's understandable to them and a few people who have longstanding relationships with them.
        They're also resilient. 
        </HeroP>
        <Count>{data.totalSupply} / 100</Count>
        <Cosy>Each Swift NFT costs {data.cost / 10**18} ETH (excluding gas fees)</Cosy>
        <Button onClick={mint}>Mint one Swift NFT</Button>
        {account[0] === '0x283967bf7828a37a3c1017118f86329a8a8a4de4' && <Button onClick={withdraw}>withdraw</Button>}
      </HeroContent>
    </HeroContainer>
  );
}

export default Mint;