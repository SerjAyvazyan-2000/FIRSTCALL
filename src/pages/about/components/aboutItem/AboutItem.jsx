import React from 'react';
import "./style.scss"

const AboutItem = ({item, reverse}) => {
    return <div className="about_item">
        {reverse ? <>
                <div className="about_item_image">
                    <img src={item.img} alt=""/>
                </div>

                <div className="about_item_text">
                    <div className="about_item_text_title">{item.title}</div>
                    <div className="about_item_description">{item.description}</div>
                    <div className="about_item_subTitle">{item.subTitle}</div>

                </div>

            </> :
            <>

                <div className="about_item_text">
                    <div className="about_item_text_title">{item.title}</div>
                    <div className="about_item_description">{item.description}</div>
                    <div className="about_item_subTitle">{item.subTitle}</div>

                </div>

                <div className="about_item_image">
                    <img src={item.img} alt=""/>
                </div>


            </>


        }


    </div>
};

export default AboutItem;