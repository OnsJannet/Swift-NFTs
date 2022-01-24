import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (FREQUENTLY ASKED QUESTIONS)",
    rows: [
        {
            title: "What is the total supply?",
            content: `A Total of 13,000 unique Alien Frens NFTs will be created.`,
        },
        {
            title: "WHY ALIEN Swift?",
            content:
                "When you join the Swift, you are securing a life long frenship with 13,000 swifties. We created this community based project with the intent of making the biggest group of swifties possible. The community comes first, which in turns drives value. Come be Swift ",
        },
        {
            title: "Buying NFT for the first time?",
            content: `Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button "MINT" on the  banner to connect your wallet and approve the transaction on Metamask. That’s it ! `,
        },

    ],
};

const styles = {
     bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "white",
     rowContentColor: 'white',
     arrowColor: "white",
};

const config = {
     animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FAQ = () => {

    return (
        <div id="faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default FAQ;
