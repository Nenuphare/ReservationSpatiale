import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Packs() {
  return (
    <Grid container spacing={0} id='packs'>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Item>
                <Card sx={{ maxWidth: 450,  }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" gutterBottom>
                            Voyage #1
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                            Programme basique
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
                <Card sx={{ maxWidth: 500,  }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" gutterBottom>
                            Voyage #2
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                            Programme avancé 
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
                <Card sx={{ maxWidth: 500,  }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" gutterBottom>
                            Voyage #3
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                           Programme premium
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
    
  );
}
