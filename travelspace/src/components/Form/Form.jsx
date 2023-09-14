import React, { useRef } from "react";
import { TextField } from '@mui/material';
import emailjs from "@emailjs/browser";
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Grid, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';


const Form= () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_exytl5f", "template_00wfi8v", form.current, "WvurAH1-7YV2jFXYI").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div id='reserver'>
        <Typography variant="h3" xs display="flex" justifyContent="center" sx={{ mt: 3 }}>Nous contacter</Typography>
       <form ref={form} onSubmit={sendEmail}>
       <Grid xs display="flex" justifyContent="center" alignItems="center">       
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Prenom" variant="standard" name="user_name"/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                    <TextField id="input-with-sx" label="e-mail" variant="standard" name="user_email"/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                    <TextField id="input-with-sx" label="message" variant="standard" name="message"/>
                </Box>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center" name>
                <Button size="large" type="submit">Envoyer</Button>
            </Grid >
    </form>
    </div>
  );
}


export default Form;