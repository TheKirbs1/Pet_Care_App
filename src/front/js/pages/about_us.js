import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const About_us = () => {

    return (
        <div className="pt-4">

            <div className="d-flex justify-content-center align-items-center vstack px-3">
                <h1 className="text-warning">Mission Statement</h1>

                <p className="
                
                w-50">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <div className="row flex-row flex-nowrap overflow-auto " style={{ width: '80%' }} >
                    <img src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid mx-3" alt="..." style={{ width: '100%' }} />
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" className="img-fluid mx-3" alt="..." style={{ width: '100%' }} />
                    <img src="https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid mx-3" alt="..." style={{ width: '100%' }} />
                    <img src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid mx-3" alt="..." style={{ width: '100%' }} />
                    <img src="https://images.pexels.com/photos/2607541/pexels-photo-2607541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid mx-3" alt="..." style={{ width: '100%' }} />
                </div>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                        </div>
                    </div>
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
                        <h3>DUTERVIL YVENER</h3>
                        <img src="https://via.placeholder.com/300x200?text=Placeholder+Image&bg=666666&color=ffffff" alt="Placeholder Image" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center  vstack">
                    <h1 className="text-warning">CONTACT US!</h1>
                    <a href="mailto:noemail@gmail.com?subject=Hello&body=This is the email body.">noemail@gmail.com</a>
                </div>

            </div>


        </div>
    )
};

