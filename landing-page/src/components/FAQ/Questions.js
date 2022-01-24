import React, { useState } from 'react';
import FAQBackground from '../../images/Group9.png';
import FAQ from './FAQ';
import {
    FAQContainer,
    FAQBg,
    ImageBg,
    FAQContent,
    FAQH1,
    FAQP,
    FAQBtnWrapper,
    ArrowForward,
    ArrowRight
}
    from './FAQElements';


    const Questions = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <FAQContainer id="FAQ">

            <FAQBg>
            
                <ImageBg style={{ backgroundImage: `url(${FAQBackground})`,   backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' }}
                />            
            </FAQBg>
		
            <FAQContent>
 			<FAQ/>
            </FAQContent>
        </FAQContainer>
    );
};

export default Questions;
