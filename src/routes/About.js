import { Link } from "react-router-dom";
import React, { useState } from 'react';

import '../styles/style.css';

function About(props) {

    // Most of the html on ngatewebapp is static, but the "More" button involves user-input
    // so we need a state object to represent the "onclicked" state. In the return() below, 
    // various interesting forms of the conditional use of the state object are applied to 
    // direct the selective appearance ofe the page

    const [stateObject, updateStateObject] = useState(
        {
            moreButtonStillInInitialState: true
        }
    );

    return (

        <div className="CardsContainer">
            <div className="CardContainer">
                <div className="CardLeft">
                    <img style={{ margin: "auto" }} src={require('./thumbnails/about.jpg')}
                        alt="North Gate"
                        width="60%" />
                    <p style={{ textAlign: "center", color: "white", fontSize: ".8rem", fontStyle: "italic" }}>
                        The 'Royal Road' to IT Success<br />
                        Milburn Jubilee weekend: June 2022
                    </p>
                </div>

                <div className="CardCenter" >
                    <div className="VerticalSeparator" />
                </div>

                <div className="CardRight" style=
                    {stateObject.moreButtonStillInInitialState ? {} : { overflow: "auto" }}>

                    <p className="PostTitle">{props.postTitle}</p>
                    <div className="HorizontalSeparator" />

                    {stateObject.moreButtonStillInInitialState &&
                        <div style={{textAlign: "center"}}>
                            <p>This site introduces a training series that will enable anyone with a keen mind and a determined spirit to
                                develop software that could change the world.</p>

                            <p>And it won't cost them a penny/dime/renminbi!{stateObject.moreButtonStillInInitialState ? <span> ...</span> : <span />}</p>

                            <div style={{ textAlign: "Center" }}>
                                <button onClick={() => updateStateObject(
                                    { moreButtonStillInInitialState: false }
                                )}>Find out More</button>

                                <p style={{ marginTop: "5vh", fontSize: ".8rem", fontStyle: "italic" }}>Design credits to :&nbsp;&nbsp;
                                    <a href="https://karenying.com/projects" style= {{padding: ".25rem", borderRadius: "5px"}}>Karen Ying</a>
                                </p>
                            </div>
                        </div>}

                    {!stateObject.moreButtonStillInInitialState &&
                        <div>
                            <p>In recent years, the tools and techniques used to develop and implement computer systems
                                have undergone enormous change. These new tools are dramatically more powerful and easier to use than
                                their predecessors but, remarkably, they are also largely free of charge. It is now perfectly possible
                                for a bright but penniless individual to leverage the power of the internet to make a fortune at the
                                expense of nothing more than the investment of their own time and ingenuity.
                            </p>
                            <p>But there are one or two snags - aren't there always? For "certain amount", you should obviously read "quite
                                a lot". Serious IT is demanding - there's a lot to learn and some of the concepts are quite hard to
                                absorb. Also, while everything is documented in mind-bending detail on the web, this documentation is
                                generally written for people who are already IT experts - there is little sympathy for beginners. Finally, since the IT world is a jungle of competing technologies, it change be difficult
                                for an IT novice to pick a route through the numerous overlapping options that are available.
                            </p>
                            <p>This site is an attempt to carve a path through this jungle. It assumes no previous experience and describes
                                a route that I firmly believe will enable anybody with a good brain and some persistence to achieve some
                                surprisingly useful results. I think you'll find it's also, quite a lot of fun!
                            </p>
                            <div style={{ textAlign: "Center" }}>
                                <button>
                                    <Link
                                        to={`/waypoints`}
                                    >
                                        Start Your Journey
                                    </Link>
                                </button>
                            </div>
                            <p style={{ marginTop: "2rem", textAlign: "right", fontStyle: "italic", color: "rgb(255, 124, 12)" }}>MartinJ: June 2022&nbsp;&nbsp;</p>
                        </div>}
                </div>
            </div>
        </div >

    );
}

export { About } 