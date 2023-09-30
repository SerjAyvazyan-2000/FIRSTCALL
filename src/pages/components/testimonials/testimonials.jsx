import React from 'react';
import "./style.scss"
import user from "../../../assets/images/user.png"
import user1 from "../../../assets/images/users1.png"
import rotateLogo from "../../../assets/images/rotateLogo.png";

const Testimonials = () => {
    return <section className="testimonials_section">
        <div className="G-container">
            <div className="testimonials_body">
                <div className="testimonials_body_title">
                    <h3>Testimonials</h3>
                    <p>See what our clients say about our services and how we helped them achieve their goals.</p>
                </div>
                <div className="testimonials_clients">
                    <span className="icon-arrow-right2 arrow_right"></span>
                    <div className="testimonials_clients_red_block">
                        <div className="testimonials_clients_red_block_img">
                            <img src={user} alt=""/>
                        </div>
                        <div className="testimonials_clients_red_block_text">
                            <h3>Sophia Murphy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc </p>
                        </div>
                    </div>
                    <div className="testimonials_clients_white_block">
                        <div className="testimonials_clients_white_block_img">
                            <img src={user1} alt=""/>
                        </div>
                        <div className="testimonials_clients_white_block_text">
                            <h3>Sophia Murphy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc </p>
                        </div>
                    </div>
                    <span className="icon-arrow-left2 arrow_left"></span>

                </div>
                <div className="testimonials_more_btn">
                    <button>Load MORE</button>
                </div>

            </div>
        </div>
    </section>
};

export default Testimonials;