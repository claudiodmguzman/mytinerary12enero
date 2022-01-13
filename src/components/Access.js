import React, { Component } from 'react';
import imgCity1 from './imgCity1.jpg'

const Access = () => {
    return (
        <div className="access">

            <div className="accessGroupImg">

                <div className="accessGroup">

                    <div className="accessCyCo">
                        <div className="accessCity">City</div>
                        <div className="accessCountry">Country</div>
                    </div>

                    <div className="accessDesDet">

                        <div className="accessDescription">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt obcaecati atque voluptas repudiandae in totam ipsum odio voluptatem nobis
                            necessitatibus,
                            doloremque velit ad ipsa architecto dolore deserunt expedita eius amet.</div>

                        <div className="accessDetail">
                            Expand Detail
                        </div>
                    </div>

                    <div className="accessComLik">
                        <div className="accessComment">User comments</div>
                        <div className="accessLike">Likes</div>
                    </div>
                </div>

                <div className="accessImage">
                    <img className="d-block w-100 accessImage" src={imgCity1} height="600" alt="First slide" />
                </div>

            </div>

        </div>
    )
}

export default Access;