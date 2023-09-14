import React from 'react';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Grid, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#212F3D',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FormBooking = () => {
  return (
    <div id='reserver'>
      <Typography variant="h3" xs display="flex" justifyContent="center" sx={{ mt: 3 }}>Réserver</Typography>
       <form>
       <Grid xs display="flex" justifyContent="center" alignItems="center" sx={{ mt: 3 }}>      
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Prenom" variant="standard" name="firstname"/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Nom" variant="standard" name="name"/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                    <TextField id="input-with-sx" label="e-mail" variant="standard" name="=email"/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                    <TextField id="input-with-sx" label="téléphone" variant="standard" name="telephone"/>
                </Box>
        </Grid>

        <div id='packs'>       
        <Grid container spacing={0} sx={{ mt: 10, mr: 2 }} >
            <Grid xs display="flex" justifyContent="center" alignItems="center">
                <Item>
                    <Card sx={{ width: 410, height: 270 }}>
                        <CardContent>
                            <Typography variant="h5" color="text.primary" gutterBottom>
                                Voyage #1
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} component="div">
                                Programme Pioneer
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                125000$
                            </Typography>
                            <Typography variant="body2">
                            <ul>
                                    <li>Vol spatial avec l’avion fusée Lynx Mark I</li>
                                    <li>Contôle médical</li>
                                    <li>Entrainement Vol acrobatique</li>
                                    <li>Tenue de vol avec badges</li>
                            </ul>                           
                            </Typography>
                        </CardContent>
                    </Card>
                </Item>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
                <Item>
                    <Card sx={{ width: 410, height: 270  }}>
                        <CardContent>
                            <Typography variant="h5" color="text.primary" gutterBottom>
                                Voyage #2
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} component="div">
                                Programme futur astronaut
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                175000$
                            </Typography>
                            <Typography variant="body2">
                                <ul>
                                    <li>Vol spatial avec l’avion fusée Lynx Mark II</li>
                                    <li>Contrôle médical</li>
                                    <li>Entrainement Vol acrobatique</li>
                                    <li>Séjour de 3 nuits dans un hôtel de luxe pour 2</li>
                                    <li>Tenue de vol avec badges</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Item>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
                <Item>
                    <Card sx={{ width: 410, height: 270  }}>
                        <CardContent>
                            <Typography variant="h5" color="text.primary" gutterBottom>
                                Voyage #3
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} component="div">
                            Programme advanced
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                200000$
                            </Typography>
                            <Typography variant="body2">
                                <ul>
                                    <li>Tous les éléments compris dans le programme basique ou avancé</li>
                                    <li>Production d’un montage vidéo personnalisé: documentaire.</li>
                                    <li>Tenue d’astronaute</li>
                                    <li>Entrainement Simulateur de mouvement et de force G</li>
                                    <li>Rencontre avec le pilote</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Item>
            </Grid>
    </Grid>
    </div>
    <Box xs display="flex" justifyContent="center" sx={{ maxWidth: 170, mt: 5, ml: 88 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Programme
        </InputLabel>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            
            name: 'programme',
            id: 'program',
          }}
        >
          <option value={1}>Pioneer</option>
          <option value={2}>futur astronaut</option>
          <option value={3}>advanced</option>
        </NativeSelect>
      </FormControl>
    </Box>
    <Box xs display="flex" justifyContent="center" sx={{ maxWidth: 170, mt: 5, ml: 88 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Date de départ
        </InputLabel>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: 'date',
            id: 'date',
          }}
        >
          <option value={1}>12 janvier 2024</option>
          <option value={2}>15 avril 2024</option>
          <option value={3}>16 septembre 2024</option>
        </NativeSelect>
      </FormControl>
    </Box>

        <Grid xs display="flex" justifyContent="center" alignItems="center" name sx={{ mt: 4 }} >
            <Button size="large" type="submit">Envoyer</Button>
        </Grid >
    </form>    
    </div>
  )
}


export default FormBooking