import React from 'react';
import imgCity1 from './imgCity1.jpg';
import imgCity2 from './imgCity2.jpg';
import imgCity3 from './imgCity3.jpg';
import imgCity4 from './imgCity4.jpg';
import imgCity5 from './imgCity5.jpg';
import imgCity6 from './imgCity6.jpg';

const Home = () => {
    return (

        <div className="homesweethome">

            <div className='contenedorDescrption'>
                <div className="description">
                    <p>Sudamérica es atractiva por diferentes motivos. Su cultura, su gastronomía y su aún menor impacto en el turismo global la hacen un destino atractivo para muchos viajeros que quieren conocer lugares diferentes.</p>

                </div>

                <div className="description">
                    <p>Para todos aquellos que tengan en mente conocer nuevos destinos, si necesita inspiración para decidir qué viaje realizar, estos son destinos populares de América del Sur que ofrece MyTinerary.</p>

                </div>

            </div>

            <div className="carrusel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={imgCity1} height="600" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CIUDAD</h5>
                                <p>description</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={imgCity2} height="600" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CIUDAD</h5>
                                <p>description</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={imgCity3} height="600" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CIUDAD</h5>
                                <p>description</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={imgCity4} height="600" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CIUDAD</h5>
                                <p>description</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={imgCity5} height="600" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CIUDAD</h5>
                                <p>description</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={imgCity6} height="600" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CIUDAD</h5>
                                <p>description</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div>


    )
}

export default Home;