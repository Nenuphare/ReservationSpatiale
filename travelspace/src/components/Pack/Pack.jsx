import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
    <Grid container spacing={10}>
        <Item>
                <Card sx={{ maxWidth: 200 }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" gutterBottom>
                            Pack #1
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                            100000$
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Wahou !
                        </Typography>
                        <Typography variant="body2">
                            A propos de...
                        </Typography>
                    </CardContent>
                </Card>
        </Item>
        <Item>
        <Card sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h5" color="text.primary" gutterBottom>
                Pack #1
                </Typography>
                <Typography sx={{ fontSize: 14 }} component="div">
                100000$
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Wahou !
                </Typography>
                <Typography variant="body2">
                    A propos de...
                </Typography>
            </CardContent>
        </Card>
        </Item>
        <Item>
        <Card sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h5" color="text.primary" gutterBottom>
                Pack #1
                </Typography>
                <Typography sx={{ fontSize: 14 }} component="div">
                100000$
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Wahou !
                </Typography>
                <Typography variant="body2">
                    A propos de...
                </Typography>
            </CardContent>
        </Card>
        </Item>
    </Grid>
    
  );
}
