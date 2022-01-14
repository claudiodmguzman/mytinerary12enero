import React from 'react';
import img1 from './img/imgPaises/img1-SALAR-DE-UYUNI-BOLIVIA.jpg';
import img2 from './img/imgPaises/img2-MONTE-FITZ-ROY-PATAGONIA-ARGENTINA.jpg';
import img3 from './img/imgPaises/img3-PEÑÓN-DE-GUATAPE-COLOMBIA.jpg';
import img4 from './img/imgPaises/img4-ISLA-DE-PASCUA-CHILE.jpg';
import img5 from './img/imgPaises/img5-HUARAZ-PERU.jpg';
import img6 from './img/imgPaises/img6-ISLAS-GALAPAGOS-ECUADOR.jpg';

const Home = () => {
    return (

        <div className="homesweethome">

            <div className='contenedorDescrption'>

                <div className="description">
                    <p>América del Sur fue estudiada, medida y mostrada por dos de los más grandes viajeros de todos los tiempos: Alexander Humboldt y Charles Darwin. Si el primero recorrió Latinoamérica durante tres años, el segundo pasó por las costas de Brasil, Argentina, Chile y las Islas Galápagos en su recorrido de vuelta al mundo con el Beagle. Los dos observaron algunos de los paisajes más asombrosos de América del Sur.</p>

                </div>

                <div className="description">
                    <p>En la actualidad Sudamérica es atractiva por diferentes motivos. Su cultura, su gastronomía y su aún menor impacto en el turismo global la hacen un destino atractivo para muchos viajeros que quieren conocer lugares diferentes.</p>

                </div>

                <div className="description">
                    <p>Para todos aquellos que tengan en mente conocer nuevos destinos, si necesita inspiración para decidir qué viaje realizar, estos son destinos populares de América del Sur.</p>

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
                            <img className="d-block w-100" src={img1} height="600" alt="img1 SALAR DE UYUNI BOLIVIA" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>BOLIVIA</h5>
                                <p>Salar de Uyuni</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2} height="600" alt="img2 MONTE FITZ ROY PATAGONIA ARGENTINA" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ARGENTINA</h5>
                                <p>Monte Fitz Roy</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3} height="600" alt="img3 PEÑÓN DE GUATAPE COLOMBIA" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>COLOMBIA</h5>
                                <p>Peñón de Guatape</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img4} height="600" alt="img4 ISLA DE PASCUA CHILE" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CHILE</h5>
                                <p>Isla de Pascua</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img5} height="600" alt="img5 HUARAZ PERU" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>PERÚ</h5>
                                <p>Huaraz</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img6} height="600" alt="img6 ISLAS GALAPAGOS ECUADOR" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ECUADOR</h5>
                                <p>Islas Galápagos</p>
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