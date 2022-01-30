import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import * as s from "../../styles/globalStyles";
import styled from "styled-components";
import i1 from "../../assets/images/gif1.gif";
import metamaskLogo from '../../assets/images/metamaskLogo.png'

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #fffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 300px;
  cursor: pointer;
  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);
  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 300px;
    height: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledMetamaskLogo = styled.img`
  width: 130
  height: 130
  @media (min-width: 767px) {
    width: 150px;
    height: 150px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`

function Purchase() {
  const dispatch = useDispatch();
  const initialFeedback = "The party's just getting started! Tap the fox to connect your wallet before purchasing your Stoner."
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState(initialFeedback);
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);

  const claimNFTs = () => {
    if (mintAmount <= 0) {
      return;
    }
    setFeedback("Minting your Stoner");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: "285000",
        to: "0x6427Bb7C2d94bfB501b981f5E7cF1a596Cc0b89c",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((.08 * mintAmount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("It seems the transaction was cancelled.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Welcome to the Party"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
      <s.Container flex={1} ai={"center"} style={{ padding: 12 }}>
        <ResponsiveWrapper flex={1} style={{ padding: 12 }}>
          <div style={{ justifyContent: 'center', flexDirection: 'column', alignSelf: 'center' }}>
            <StyledImg alt={"examples"} src={i1} />
            <s.SpacerMedium />
            <p style={{
              fontFamily: 'Kanit',
              fontSize: '22px',
              fontWeight: '300',
              lineHeight: '33px',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
              {data.totalSupply}/10,000 sold
            </p>
          </div>
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ padding: 12 }}
          >
            {Number(data.totalSupply) === 10000 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  You can still buy and trade TBC NFTs on{" "}
                  <a
                    style={{ color: '#FFFFFF' }}
                    target={""}
                    href={"https://opensea.io/collection/the-bee-collaborative"}
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <div style={{ maxWidth: '647px', height: '135px' }}>
                  <p style={{
                    fontFamily: 'Kanit',
                    fontWeight: 500,
                    fontSize: '28px',
                    lineHeight: '42px',
                    color: '#FFFFFF',
                  }}>
                    {feedback}
                  </p>
                </div>
                <s.SpacerLarge />
                {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                  <>
                    <button
                      style={{
                        background: 'none',
                        color: 'inherit',
                        border: 'none',
                        padding: '0px',
                        font: 'inherit',
                        cursor: 'pointer',
                        outline: 'inherit',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                      disabled={!!blockchain.account && blockchain.smartContract}
                    >
                      <StyledMetamaskLogo alt={metamaskLogo} src={metamaskLogo} />
                    </button>
                    <s.Container ai={"center"} jc={"center"}>
                      <s.SpacerLarge />
                      <button
                        style={{
                          border: '1.5px solid #979797',
                          width: '460px',
                          height: '105px',
                          borderRadius: '20px',
                          color: '#979797',
                          fontSize: '30px',
                          fontWeight: '600',
                          fontFamily: 'Kanit',
                          textTransform: 'uppercase'
                        }}
                        disabled={true}
                      >
                        Purchase
                      </button>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <s.SpacerSmall />
                          <s.TextDescription style={{ textAlign: "center" }}>
                            {blockchain.errorMsg}
                          </s.TextDescription>
                        </>
                      ) : null}
                    </s.Container>
                  </>
                ) : (

                  <>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <button
                        style={{
                          width:"36px",
                          background: 'none',
                          border: 'none',
                          color: 'inherit',
                          font: 'inherit',
                          cursor: 'pointer',
                          outline: 'inherit',
                          fontSize: '56px',
                          color: '#FFFFFF',
                          fontFamily: 'Kanit',
                          fontWeight: '600',
                          lineHeight: '84px',
                        }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </button>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        <p style={{
                          fontFamily: 'Kanit',
                          fontWeight: '600',
                          fontSize: '48px',
                          lineHeight: '84px',
                          color: '#FFFFFF',
                          marginRight: '105px',
                          marginLeft: '105px',
                        }}>{mintAmount} </p>
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <p
                        style={{
                          width:"36px",
                          background: 'none',
                          border: 'none',
                          color: 'inherit',
                          font: 'inherit',
                          cursor: 'pointer',
                          outline: 'inherit',
                          fontSize: '56px',
                          color: '#FFFFFF',
                          fontFamily: 'Kanit',
                          fontWeight: '600',
                          lineHeight: '84px',
                        }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >+
                      </p>
                    </s.Container>
                    <s.SpacerLarge />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <p style={{
                          fontFamily: 'Kanit',
                          fontWeight: '600',
                          fontSize: '38px',
                          lineHeight: '84px',
                          color: '#FFFFFF',
                      }}>{mintAmount * .08} ETH</p>

                    </s.Container>
                    <s.SpacerLarge />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>

                      <button
                      style={{
                        backgroundColor: '#FC48D4',
                        width: '460px',
                        height: '105px',
                        borderRadius: '20px',
                        color: '#FFFFFF',
                        fontSize: '30px',
                        fontWeight: '600',
                        fontFamily: 'Kanit',
                        textTransform: 'uppercase'
                      }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs(1);
                          getData();
                        }}
                      >
                        {claimingNft ? "Pending..." : "Purchase"}
                      </button>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container flex={1} ai={"center"} style={{ padding: 12 }}>
                      <p style={{
                        fontFamily: 'Kanit',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '30px',
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}>Gas fees not inluded</p>
                    </s.Container>
                  </>
                )}
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
      </s.Container>
    </>
  );
}

export default Purchase;
