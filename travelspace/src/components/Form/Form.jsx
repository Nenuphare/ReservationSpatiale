import React, { useRef } from "react";
import { TextField } from '@mui/material';
import emailjs from "@emailjs/browser";
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Grid, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function refreshPage() {
  window.location.reload(false);
}

const Form= () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mtvtan5", "template_mfiyh0r", form.current, "-qPnXao5vk_iU4kOk").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div class="container-xxl py-5" id='reserver'>
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Nous contacter</div>
            <h1 class="display-6 mb-5">Si vous avez une question, merci de remplir le formulaire.</h1>
                      <form ref={form} onSubmit={sendEmail}>
                      <Grid xs display="flex" justifyContent="center" alignItems="center" sx={{ mt: 3 }}>       
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField id="input-with-sx" label="Prenom" variant="standard" name="from_name"/>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                                    <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                                    <TextField id="input-with-sx" label="E-mail" variant="standard" name="from_email"/>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                                    <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                                    <TextField id="input-with-sx" label="Message" variant="standard" name="message"/>
                                </Box>
                        </Grid>
                            <Grid xs display="flex" justifyContent="center" alignItems="center" name sx={{ mt: 4 }} >
                                <Button size="large" type="submit" class="btn btn-outline-primary py-2 px-3 me-3" onClick={refreshPage}>
                                  Envoyer
                                  <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                      <i class="fa fa-arrow-right"></i>
                                  </div>
                                  </Button>
                                  <p class="please-wait"></p>
                                  <p class="error"></p>
                                  <p class="success"></p>
                            </Grid >
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
  );
}


export default Form;