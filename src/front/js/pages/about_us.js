import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const About_us = () => {

    return (
        <div className="pt-4">

            <div className="d-flex justify-content-center align-items-center vstack px-3">
                <h1 className="text-warning">Mission Statement</h1>
                <p className="my-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="d-flex justify-content-center align-items-center "><img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" className="img-fluid" alt="..." style={{ width: '60%' }} /></div>


            </div>

            <div className="d-flex justify-content-center align-items-center hstack">
                <div className="d-flex p-2 vstack col-5">
                    <div>EMAIL:</div>
                    <input type="text" placeholder="ENTER EMAIL" style={{ width: '60%', height: '30px' }}></input>
                    <div>SUBJECT:</div>
                    <input type="text" placeholder="SUBJECT" style={{ width: '60%', height: '30px' }}></input>
                    <div>MESSAGE:</div>
                    <input type="text" placeholder="Write your message here" style={{ width: '60%', height: '120px' }}></input>
                    <button className="d-flex justify-content-center mt-2" style={{ width: '25%', height: '30px' }}>SUBMIT</button>
                </div>
                <h4 className="mx-3 col-1 d-flex align-items-center">OR</h4>
                <div className="col-4">
                    <a href="mailto:noemail@gmail.com?subject=Hello&body=This is the email body.">noemail@gmail.com</a>
                </div>

            </div>
            <h1 className="d-flex justify-content-center align-items-center text-warning mt-3">MEET THE DEVELOPERS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>MYLIK KERLEY</h3>
                        <img src="https://via.placeholder.com/300x200?text=Placeholder+Image&bg=666666&color=ffffff" alt="Placeholder Image" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-6">
                        <h3>ANDREA MARTINEZ</h3>
                        <img src="https://via.placeholder.com/300x200?text=Placeholder+Image&bg=666666&color=ffffff" alt="Placeholder Image" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>MATT KIRBY</h3>
                        <img src="https://via.placeholder.com/300x200?text=Placeholder+Image&bg=666666&color=ffffff" alt="Placeholder Image" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-6">
                        <h3>YVNER DEVRIL</h3>
                        <img src="https://via.placeholder.com/300x200?text=Placeholder+Image&bg=666666&color=ffffff" alt="Placeholder Image" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

            </div>


        </div>
    )
};

