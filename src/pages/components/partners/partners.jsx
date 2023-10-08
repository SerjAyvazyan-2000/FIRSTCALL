import React, {useRef} from 'react';
import "./style.scss"
import  partner1 from  "../../../assets/svgIcons/meyleMuler.svg"
import  partner2 from  "../../../assets/svgIcons/humaNova.svg"
import  partner3 from  "../../../assets/svgIcons/compris.svg"
import  partner4 from  "../../../assets/svgIcons/ventori.svg"
import  partner5 from  "../../../assets/svgIcons/_Слой_1 (1).svg"
import  partner6 from  "../../../assets/svgIcons/_Слой_1.svg"
import  partner7 from  "../../../assets/svgIcons/ad-agents-logo-1 2.svg"
import  partner8 from  "../../../assets/svgIcons/globalfinanz.svg"
import  partner9 from  "../../../assets/svgIcons/apollon.svg"
import  partner10 from  "../../../assets/svgIcons/ra-micro.svg"
import  partner11 from  "../../../assets/svgIcons/webix.svg"

const Partners = () => {

    return <section  className="partners_section">
        <div className="G-container">

            <div className={"partners_title"}>
                <h3>PARTNERS</h3>
                <p>We offer more than the usual call centre routine. Our rbroad portfolio ranges from B2B cold calling
                    and
                    existing customer care, to sales assistance, creation of CRM workflows, to complex sales consulting
                    and
                    training for your team. Learn more on our detailed service page.</p>
            </div>


            <div className="partners_items">
                <div className="partners_item">
                    <img src={partner1} alt=""/>

                </div>
                <div className="partners_item">
                    <img src={partner2} alt=""/>

                </div>
                <div className="partners_item">
                    <img src={partner3} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner4} alt=""/>
                </div>

                <div className="partners_item">
                    <img src={partner5} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner6} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner7} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner8} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner9} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner10} alt=""/>


                </div>
                <div className="partners_item">
                    <img src={partner11} alt=""/>


                </div>
            </div>
        </div>
    </section>

};

export default Partners;