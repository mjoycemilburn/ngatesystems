import React, { useState } from 'react';

import '../styles/style.css';

function Waypoint(props) {


    // Most of the html on ngatewebapp is static, but the "More" button involves user-input
    // so we need a state object to represent the "onclicked" state. In the return() below, 
    // various interesting forms of the conditional use of the state object are applied to 
    // direct the selective appearance ofe the page

    const [stateObject, updateStateObject] = useState(
        { moreButtonStillInInitialState: true }
    );

    return (

        <div className="CardContainer" style={{ cursor: "pointer" }}
            key={props.post.number}
            onClick={(e) => {
                window.open(props.post.url, "_blank")
            }}>
            <div className="CardLeft">
                <img style={{ margin: "auto auto 2rem auto" }} src={require('./thumbnails/' + props.post.thumbnail)}
                    alt="post graphic"
                    width="80%" />
                <div style={{ textAlign: "Center", marginBottom: "auto" }}>
                <button
                    onClick={(e) => {
                        window.open(props.post.url, "_blank");
                    }}>View Waypoint {props.post.number}</button>
                </div>
            </div>

            <div className="CardCenter" >
                <div className="VerticalSeparator" />
            </div>

            <div className="CardRight">

                <p className="PostTitle">{props.post.title}</p>
                <div className="HorizontalSeparator" />

                <div className="PhoneCardRightDescription">

                    {stateObject.moreButtonStillInInitialState &&
                        <div style={{textAlign: "Center"}}>
                            <button onClick={(event) => {
                                event.stopPropagation();
                                updateStateObject({ moreButtonStillInInitialState: false });
                            }}>Find out More</button>
                        </div>}
                    {!stateObject.moreButtonStillInInitialState &&
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: props.post.description }} />
                            <div style={{ textAlign: "center", justifyContent: "center" }}>
                                <button
                                    onClick={(e) => {
                                        window.open(props.post.url, "_blank");
                                    }}>View Waypoint {props.post.number}</button>
                            </div>
                        </div>}
                </div>

                <div className="LaptopCardRightDescription">
                    <div dangerouslySetInnerHTML={{ __html: props.post.description }} />
                </div>
            </div>


        </div>)
}

export { Waypoint }                