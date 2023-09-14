import React, { useState } from 'react';

const Navbar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                <div class="col-lg-6 px-5 text-start">
                    <small><i class="fa fa-map-marker-alt me-2"></i><a href="https://goo.gl/maps/VHYBH4TBntHqvMyB6" target="_blank">40 Rue Du Chemin Vert, 75011 Paris</a></small>
                    <small class="ms-4"><i class="fa fa-envelope me-2"></i><a href="mailto:contact@travelspace.fr" target="_blank">contact@travelspace.fr</a></small>
                </div>
                <div class="col-lg-6 px-5 text-end">
                    <small>Avis Google :</small>
                    <a class="text-white-50 ms-2" href="https://goo.gl/maps/VHYBH4TBntHqvMyB6" target="_blank"><i class="fab fa-google"></i></a>
                    <small class="ps-3">Suivez-nous :</small>
                    <a class="text-white-50 ms-3" href="https://www.facebook.com/my.digital.schoolFR/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="text-white-50 ms-3" href="https://www.instagram.com/mydigitalschool/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="/" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="fw-bold text-primary m-0">Travel Space<span class="text-white"></span></h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" class="nav-item nav-link" active id="active">Accueil</a>
                        <a href="#packs" class="nav-item nav-link active" active id="lol">Nos programmes</a>
                        <a href="#reserver" class="nav-item nav-link active" active id="lol">Contactez-nous</a>
                    </div>
                    <div class="d-none d-lg-flex ms-2">
                        <a class="btn btn-outline-primary py-2 px-3" href="./pages/Login/Login">
                            Réservez ici !
                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
  );
};

export default Navbar;