import React from 'react';

import '../styles/style.css';

function Example(props) {

    return (

        <div className="CardContainer" style={{ cursor: "pointer" }}
            key={props.post.number}
            onClick={(e) => {
                window.open(props.post.gitCodeUrl, "_blank")
            }}>
            <div className="CardLeft">
                <img style={{ margin: "auto auto 2rem auto" }} src={require('./thumbnails/' + props.post.thumbnail)}
                    alt="post graphic"
                    width="80%" />
                <p style={{ textAlign: "center", color: "white", marginBottom: "auto" }} >{props.post.imageTitle}</p>
            </div>

            <div className="CardCenter" >
                <div className="VerticalSeparator" />
            </div>

            <div className="CardRight">

                <p className="PostTitle">{props.post.postTitle}</p>

                <div className="HorizontalSeparator" />

                <div dangerouslySetInnerHTML={{ __html: props.post.description }} />

                {props.post.number === "1" &&
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <button
                            onClick={(e) => {
                                window.open(props.post.gitTutorial, "_blank");
                            }}>Learn about Git</button>

                        <button
                            onClick={(e) => {
                                window.open(props.post.markdownTutorial, "_blank");
                            }}>Learn about Markdown</button>
                    </div>
                }



                {props.post.number !== "1" &&
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <button
                            onClick={(e) => {
                                window.open(props.post.webappUrl, "_blank");
                            }}>Run Webapp</button>

                        <button
                            onClick={(e) => {
                                window.open(props.post.gitCodeUrl, "_blank");
                            }}>View Code</button>
                    </div>
                }

            </div>


        </div>)
}

export { Example }                