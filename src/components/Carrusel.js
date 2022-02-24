import React from 'react';
import img1City from './img/imgCiudades/citiesAfrica/img1City-Sudafrica-Ciudad-del-Cabo.jpg';
import img2City from './img/imgCiudades/citiesAmericaNorte/img2City-EEUU-Chicago.jpg';
import img3City from './img/imgCiudades/citiesAmericaSur/img3City-Bolivia-La-Paz.png';
import img4City from './img/imgCiudades/citiesAsia/img4City-Japon-Tokio.jpg';
import img5City from './img/imgCiudades/citiesEuropa/img5City-Paises-Bajos-Amsterdam.jpg';
import img6City from './img/imgCiudades/citiesOceania/img6City-Australia-Perth.jpg';



function Carrusel() {

    return (

        <div className="carrusel">

            <img className="carruselImage" src={img1City} alt="" />

            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
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
                        <img className="carruselImage" src={img1City} alt="" />
                        <div className="carousel-caption d-none d-md-block carruselTexto">
                            <h5>CAPE TOWN</h5>
                            <p>South Africa</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carruselImage" src={img2City} alt="" />
                        <div className="carousel-caption d-none d-md-block carruselTexto">
                            <h5>CHICAGO</h5>
                            <p>U.S</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carruselImage" src={img3City} alt="" />
                        <div className="carousel-caption d-none d-md-block carruselTexto">
                            <h5>LA PAZ</h5>
                            <p>Bolivia</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carruselImage" src={img4City} alt="" />
                        <div className="carousel-caption d-none d-md-block carruselTexto">
                            <h5>TOKYO</h5>
                            <p>Japan</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carruselImage" src={img5City} alt="" />
                        <div className="carousel-caption d-none d-md-block carruselTexto">
                            <h5>AMSTERDAM</h5>
                            <p>Netherlands</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carruselImage" src={img6City} alt="" />
                        <div className="carousel-caption d-none d-md-block carruselTexto">
                            <h5>PERTH</h5>
                            <p>Australia</p>
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
            </div> */}
        </div>
    )
}

export default Carrusel;

