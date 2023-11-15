import React, {forwardRef} from 'react';
import "./style.scss"
import {motion} from "framer-motion";

const AboutItem = forwardRef(({item, reverse},ref) => {
    return <div  ref={ ref} className="about_item">
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
});
const MAboutItem = motion(AboutItem)
export default MAboutItem;