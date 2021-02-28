import React from 'react';

export default function Profile() {
    return(
        <div className="profilecontainer">
            <div className="profilerightcontainer">
                <img src="imagem02.png" alt="Lorem Ipsum" className="profileimg" />
                <div className="media">
                    <button><img src="face.svg" alt="face"/></button>
                    <button><img src="insta.svg" alt="insta"/></button>
                    <button><img src="twitter.svg" alt="twitter"/></button>
                </div>
            </div>

            <div className="profileleftcontainer">
                <span>Meu nome é <strong>Lorem Ipsum</strong></span>
                <p className="title2">
                    Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum
                </p>
                <p className="paragraph">
                    to make a type specimen book.
                    It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more 
                    recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker <br/><br/><strong>more recently with deskto</strong>
                 </p>
            </div>
        </div>
    )
}