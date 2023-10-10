import React from 'react';
import AnimationHeader from "../components/animationHeader/animationHeader";
import animationSvg from "../../assets/svgIcons/1 (5).svg"
import "./style.scss"
import useInformation from "../hooks/useInformation";
import RolesItem from "./components/rolesItem/rolesItem";
const Career = () => {
    const {rolesList} = useInformation()
    return <section className="career_section">
          <AnimationHeader
              title={'CAREERS CENTER'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit HOME'}
              image={animationSvg}
          />
        <div className="careers_open_roles">
            <div className="G-container">
                <div className="open_roles_title">Open roles</div>
                <div className="open_roles_list">
                    {rolesList.length ? rolesList.map(item=>(
                        <RolesItem key={item.id} item={item}/>

                    )):<div>Empty List</div>}
                </div>
            </div>

        </div>
    </section>
};

export default Career;