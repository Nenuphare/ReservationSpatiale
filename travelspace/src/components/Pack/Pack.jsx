import {React, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import VizSensor from 'react-visibility-sensor';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#212F3D',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Packs() {
    let [active, setActive] = useState(false);
  return (
    <div id='packs'>
        <Typography variant="h3" xs display="flex" justifyContent="center" sx={{ mt: 3 }}>Nos programmes</Typography>
        <Grid container spacing={0} sx={{ mt: 10, mr: 2 }}>
            <VizSensor onChange={(isVisible) => {
                    setActive(isVisible);
                }}
            >
            <Grow in={active} timeout={2000}>
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
            </Grow>
            </VizSensor>
            <VizSensor>
            <Grow in={active} timeout={3000}>
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
            </Grow>
            </VizSensor>
            <VizSensor>
            <Grow in={active} timeout={3500}>
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
            </Grow>
            </VizSensor>
    </Grid>
    </div>
  );
}
