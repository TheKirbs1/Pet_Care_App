import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image from "../../img/image.png"


export const About_us = () => {

    return (
        <div className="">

            <>
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{ width: '100%', height: '100%' }}>
                        <div className="carousel-inner" style={{ height: '100%' }}>
                            <div className="carousel-item active">
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fwhite-background-c&psig=AOvVaw1N472tdH_32wm8PWU_XNtP&ust=1721349769811000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICM-t2tr4cDFQAAAAAdAAAAABAS" className="d-block w-100 h-100" alt="..." style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>


                </div>


                <div style={{ position: 'relative', zIndex: 1 }}>

                </div>
            </>

            <div className="d-flex justify-content-center align-items-center vstack px-3">
                <h1 className="text-dark">Mission Statement</h1>

                <b className="w-50 my-3">
                    PetPal's mission is to empower pet lovers with comprehensive information about dog breeds, enabling them to make informed decisions when considering adoption or purchase. Our app serves as a valuable resource for users to care for their beloved pets, offering insights to ensure their dogs' health and well-being. With PetPal, users can learn fascinating facts about different breeds and easily track their dog's health, fostering a community of informed and responsible pet owners.
                </b>
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

            <div>
                <h1 className="d-flex justify-content-center align-items-center text-dark my-3">MEET THE DEVELOPERS</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <h3 className="d-flex justify-content-center align-items-center curved-text" >My'Lik Kerley</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocLzTptQA_T__1LX_YK7V_ekNkzNmEzlltIo22ZK5cndGJiUjvKE=s360-c-no" alt="Mylik Image" className="rounded-circle" />
                        </div>
                        <div className="border-top border-4 border-dark my-2 w-100 mx-auto"></div>

                        <p className="mt-2"><b>DISSERTATION: </b>As a devoted pet owner, I firmly believe that dogs and other pets are essential companions that enrich our lives in countless ways. I have a deep fondness for dogs in particular, as they offer unwavering loyalty, unconditional love, and a unique connection that transcends words. A dog's companionship is truly invaluable, providing comfort, joy, and a sense of purpose that can be difficult to find elsewhere. However, it is crucial that dogs receive the love, care, and attention they deserve from their owners. Ensuring a dog's health and well-being should be a top priority, as their needs go beyond just providing food and shelter. Responsible pet ownership involves attending to their medical needs, offering ample exercise and mental stimulation, and creating a nurturing environment where they can thrive. By fulfilling these essential requirements, we can foster a deep and meaningful bond with our companions, and in turn, enrich our own lives in ways we may have never imagined.</p>
                        <div className="mt-auto">
                            <p>
                                <b>Certifications: </b>
                                4Geeks Academy, Miami, FL
                                Full-Stack Web Development Bootcamp, March 2024 - July 2024.
                            </p>
                        </div>
                    </div>

                    <div className="col-6 d-flex flex-column">
                        <h3 className="d-flex justify-content-center align-items-center">Andrea Martínez</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src="https://ca.slack-edge.com/T0BFXMWMV-U06N1ABE38Q-b08429e4c040-512" alt="Andrea Image" className="rounded-circle" />
                        </div>
                        <div className="border-top border-4 border-dark my-2 w-100 mx-auto"></div>
                        <p className="mt-2"><b>DISSERTATION: </b>I am deeply committed to animal welfare, having adopted and rescued numerous dogs over the years. My background in veterinary medicine, combined with my experience as a dog groomer and pet sitter, has equipped me with a comprehensive understanding of pet care. Transitioning into coding, my goal is to create innovative tools and build a supportive community that empowers pet lovers to better understand and meet their dogs' needs.</p>
                        <div className="mt-auto">
                            <p>
                                <b>Certifications: </b>
                                4Geeks Academy, Miami, FL
                                Full-Stack Web Development Bootcamp, March 2024 - July 2024.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <h3 className="d-flex justify-content-center align-items-center">Matt Kirby</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src="https://ca.slack-edge.com/T0BFXMWMV-U06K7V223U2-931e0f6fd554-512" alt="Matt Image" className="rounded-circle" />
                        </div>
                        <div className="border-top border-4 border-dark my-2 w-100 mx-auto"></div>
                        <a href="https://www.linkedin.com/in/matthew-kirby-22b22b22aab2sdf2/"><i className="fa-brands fa-linkedin"></i></a>
                        <p className="mt-2"><b>DISSERTATION: </b>Hey, I'm Kirby and welcome to petPal where my passion for dogs meets my dedication to coding for a greater purpose. My wife and I rescued a VERY large dog as a puppy, sparking my journey into creating this site with a group of pet loving coders. Here, I aim to empower fellow dog owners with essential care information and breed-specific insights. Through technology and heartfelt dedication, I strive to make a real difference in the world of pet care, offering tools and knowledge to enhance the lives of dogs and their owners everywhere.</p>
                        <div className="mt-auto">
                            <p>
                                <b>Certifications: </b>
                                4Geeks Academy, Miami, FL
                                Full-Stack Web Development Bootcamp, March 2024 - July 2024.
                            </p>
                        </div>
                    </div>

                    <div className="col-6 d-flex flex-column">
                        <h3 className="d-flex justify-content-center align-items-center">Dutervil Yvener</h3>
                        <div className="d-flex justify-content-center align-items-center" >
                            <img src={image} alt="Dutervil Image" className="rounded-circle" />
                        </div>
                        <div className="border-top border-4 border-dark my-2 w-100 mx-auto"></div>
                        <p className="mt-2"><b>DISSERTATION: </b>I have a passion for playing video games, listening to music, coding, and singing. I find joy in helping those in need, and this drive to assist others has inspired my journey into tech.
                            My first project, a pet care app, reflects my love for both technology and animals. This app allows users to save personal information about their dogs, search for various dog breeds, and more. It's designed to make pet care easier and more organized for pet owners.
                            I am excited to continue my journey in tech, combining my skills and passions to create innovative solutions and help others through technology.</p>
                        <div className="mt-auto">
                            <p>
                                <b>Certifications: </b>
                                4Geeks Academy, Miami, FL
                                Full-Stack Web Development Bootcamp, March 2024 - July 2024.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center  vstack">
                    <h6 className="text-dark">CONTACT US</h6>
                    <a href="mailto:pal4Pets@doglover.com?subject=Hello&body=This is the email body."><i className="fa-solid fa-envelope text-dark rounded-circle border border-warning p-3"></i></a>
                </div>

            </div>


        </div>
    )
};

