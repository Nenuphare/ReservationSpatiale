import React from 'react'

const Contact = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Nous contacter</div>
                        <h1 class="display-6 mb-5">Si vous avez une question, merci de remplir le formulaire.</h1>
                        <form name="contact-form" action="" method="post" autocomplete="off">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" name="firstname" placeholder="Enter votre prénom" required />
                                        <label for="firstname">Votre Prénom</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" name="lastname" placeholder="Enter votre nom" required />
                                        <label for="lastname">Votre Nom</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" name="email" placeholder="Entrer votre email" required />
                                        <label for="email">Votre Email</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control" name="tel" placeholder="Entrer votre numéro de téléphone" required />
                                        <label for="tel">Votre N° De Téléphone</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea name="message" class="form-control" style= {{height: "100px"}} placeholder="Entrer votre message" required ></textarea>
                                        <label for="message">Écrivez un message</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" required="required" />
                                        <label class="form-check-label" for="gridCheck">
                                        J'accepte les conditions générales d'utilisation
                                        </label>
                                    </div>
                            </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary py-2 px-3 me-3">
                                    Envoyez
                                    <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                        <i class="fa fa-arrow-right"></i>
                                    </div>
                                    </button>
                                    <p class="please-wait"></p>
                                    <p class="error"></p>
                                    <p class="success"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style= {{minHeight: "450px"}}>
                        <div class="position-relative rounded overflow-hidden h-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.89077274784!2d2.374321!3d48.8587311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c2d53f8d0cd%3A0xa8fabcd7afba85d!2sMyDigitalSchool%20Paris!5e0!3m2!1sfr!2sfr!4v1694721320372!5m2!1sfr!2sfr" 
                        width="600" height="450" style= {{border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
