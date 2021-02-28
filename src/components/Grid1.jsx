import React from 'react';

export default function Grid1() {
    return (
        <div className="gridcontainer">
            <div className="topcontainer">
                <div>
                    <img src="logo2.svg" alt="logo"/>
                    <p>Lorem Ipsum<br />Lorem Ipsum to make type book</p>
                </div>
                <p className="paragraph">
                <span style={{ color: '#C2FF01' }}>Lorem Ipsum</span> to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
                </p>
            </div>
            <div className="middlecontainer">
                <p className="paragraph">
                to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of<strong> Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                <br/><br/>
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong>
                </p>
                <div>
                    <p>specimen book. It has survived not only fiver...</p>
                    <img src="montanha.svg" alt="montanha"/>
                </div>
            </div>
        </div>
    )
}