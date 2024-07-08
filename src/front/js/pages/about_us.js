import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const About_us = () => {

    return (
        <div className="pt-4">

            <div className="d-flex justify-content-center align-items-center vstack px-3">
                <h1 className="text-warning">Mission Statement</h1>

                <p className="w-50 my-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <div id="carouselExampleSlidesOnly" className="carousel slide my-3" data-bs-ride="carousel" data-bs-interval="2000" style={{ width: '70%', height: '500px' }} >
                    <div className="carousel-inner" style={{ height: '100%' }} >
                        <div className="carousel-item active">
                            <img src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-100" alt="..." style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" className="d-block w-100 h-100" alt="..." style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-100" alt="..." style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-100" alt="..." style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/2607541/pexels-photo-2607541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-100" alt="..." style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>


            <h1 className="d-flex justify-content-center align-items-center text-warning my-3">MEET THE DEVELOPERS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="d-flex justify-content-center align-items-center" >My'Lik Kerley</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocLzTptQA_T__1LX_YK7V_ekNkzNmEzlltIo22ZK5cndGJiUjvKE=s360-c-no" alt="Mylik Image" className="rounded-circle" />
                        </div>
                        <p className="mt-2"><b>DISSERTATION: </b>As a devoted pet owner, I firmly believe that dogs and other pets are essential companions that enrich our lives in countless ways. I have a deep fondness for dogs in particular, as they offer unwavering loyalty, unconditional love, and a unique connection that transcends words. A dog's companionship is truly invaluable, providing comfort, joy, and a sense of purpose that can be difficult to find elsewhere. However, it is crucial that dogs receive the love, care, and attention they deserve from their owners. Ensuring a dog's health and well-being should be a top priority, as their needs go beyond just providing food and shelter. Responsible pet ownership involves attending to their medical needs, offering ample exercise and mental stimulation, and creating a nurturing environment where they can thrive. By fulfilling these essential requirements, we can foster a deep and meaningful bond with our companions, and in turn, enrich our own lives in ways we may have never imagined.</p>
                        <p>
                            <b>EDUCATION: </b>
                            Texas A&M University, College Station, TX
                            Bachelor of Science in Kinesiology, December 2018
                            <br></br>
                            <b>Certifications: </b>
                            4Geeks Academy, Miami, FL
                            Full-Stack Web Development Bootcamp, March 2024 - Present
                        </p>
                    </div>

                    <div className="col-6">
                        <h3 className="d-flex justify-content-center align-items-center">Andrea Martínez</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src="https://ca.slack-edge.com/T0BFXMWMV-U06N1ABE38Q-b08429e4c040-512" alt="Andrea Image" className="rounded-circle" />
                        </div>
                        <p className="mt-2"><b>DISSERTATION: </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>
                            <b>EDUCATION: </b>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            <br></br>
                            <b>Certifications: </b>
                            4Geeks Academy, Miami, FL
                            Full-Stack Web Development Bootcamp, March 2024 - Present
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h3 className="d-flex justify-content-center align-items-center">Matt Kirby</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src="https://ca.slack-edge.com/T0BFXMWMV-U06K7V223U2-931e0f6fd554-512" alt="Matt Image" className="rounded-circle" />
                        </div>
                        <p className="mt-2"><b>DISSERTATION: </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>
                            <b>EDUCATION: </b>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            <br></br>
                            <b>Certifications: </b>
                            4Geeks Academy, Miami, FL
                            Full-Stack Web Development Bootcamp, March 2024 - Present
                        </p>
                    </div>

                    <div className="col-6">
                        <h3 className="d-flex justify-content-center align-items-center">Dutervil Yvener</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src="https://ca.slack-edge.com/T0BFXMWMV-U06L4T9UHHR-9bde317dfa1b-512" alt="Dutervil Image" className="rounded-circle" />
                        </div>
                        <p className="mt-2"><b>DISSERTATION: </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>
                            <b>EDUCATION: </b>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            <br></br>
                            <b>Certifications: </b>
                            4Geeks Academy, Miami, FL
                            Full-Stack Web Development Bootcamp, March 2024 - Present
                        </p>
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

