import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
  return (
    <div class="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h1 class="id='titre' fw-bold text-primary mb-4">Travel <span class="id='titre1' text-white">Space</span></h1>
                    <p>Le voyage spatio-temporelle !</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square me-2" href="https://www.facebook.com/my.digital.schoolFR/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square me-1" href="https://www.instagram.com/mydigitalschool/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Nous Contacter</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i><a href="https://goo.gl/maps/VHYBH4TBntHqvMyB6" target="_blank">40 Rue du Chemin Vert, 75011 Paris</a></p>
                    <p><i class="fa fa-phone-alt me-3"></i><a href="tel:+33155070765" target="_blank">(+33) 1 55 07 07 65</a></p>
                    <p><i class="fa fa-envelope me-3"></i><a href="mailto:travelspace.contact@gmail.com" target="_blank">travelspace.contact@gmail.com</a></p>
                    <p id='abc'><i class="fa fa-regular text-white-50 fa-clock me-3"></i>Lundi au Vendredi : 08h30-19h00</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Aide & Informations</h5>
                    <a class="btn btn-link"><Link className ="link" to="/components/Form/Form#">Contactez-nous</Link></a>
                    <a class="btn btn-link"><Link className ="link" to="/components/Footer/mentions#">Mentions Légales</Link></a>
                    <a class="btn btn-link"><Link className ="link" to="/components/Footer/cgu#">Conditions générales d'utilisation</Link></a>
                    <a class="btn btn-link"><Link className ="link" to="/components/Footer/cgv#">Conditions générales de vente</Link></a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Un Avis Google ?</h5>
                    <p>Votre avis Google est le meilleur moyen de nous soutenir, il constitue la vitrine de notre boutique.</p>
                    <div class="position-relative col-lg-5" styles="max-width: 400px;">
                        <a href="https://goo.gl/maps/VHYBH4TBntHqvMyB6" target="_blank">
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Cliquez-ici</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">TravelSpace</a>, Tous droits réservés.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
