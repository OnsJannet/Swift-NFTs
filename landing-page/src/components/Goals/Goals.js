import React from 'react'
import {GoalsContainer,
        GoalsH1,
        GoalsH2,
        GoalsWrapper,
        GoalsP,
        GoalsCard}
from './GoalsElements'
import 'react-vertical-timeline-component/style.min.css';

const Goals = () => {
    return (

        <GoalsContainer id="goals">

            <GoalsH1> Future Goals </GoalsH1>
                <GoalsWrapper>
                <GoalsCard>
                    <GoalsH2>25%</GoalsH2>
                    <GoalsP> We will giveaway 10 Swifts to our Discord members and 1 ETH to a random TS Swift owner from the pre-sale whitelist.
		          </GoalsP>
                </GoalsCard>
                <GoalsCard>
                    <GoalsH2>50%</GoalsH2>
                    <GoalsP> We will giveaway 15 Swifts to our Discord members and 1 ETH to a random TS Swift owner from the pre-sale whitelist.
		    </GoalsP>
                </GoalsCard>
                <GoalsCard>
                    <GoalsH2>75%</GoalsH2>
                    <GoalsP> We will launch a new Swift Theme which is only accessible to verified owners of Swift NFT. And a giveaway of 1 Special Edition Swift
		    </GoalsP>
                </GoalsCard>
                <GoalsCard>
                    <GoalsH2>100%</GoalsH2>
                    <GoalsP> We will giveaway 13 ETH to our Discord members and 1 Special Edition Swift to a TS Swift owner from the pre-sale whitelist.
		    </GoalsP>
                </GoalsCard>
            </GoalsWrapper>           
        </GoalsContainer>
    )
}

export default Goals
