import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Grid, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const travel = [
    {
      value: '1',
      label: 'Pioneer',
    },
    {
      value: '2',
      label: 'Future astronaut',
    },
    {
      value: '3',
      label: 'Advanced',
    },
  ];

const Form = () => {
  return (
    <div id='reserver'>
        <Typography variant="h3" xs display="flex" justifyContent="center" sx={{ mt: 3 }}>Réserver</Typography>
            <Grid xs display="flex" justifyContent="center" alignItems="center">       
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Prenom" variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3 }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Nom" variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 3  }}>
                    <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                    <TextField id="input-with-sx" label="e-mail" variant="standard" />
                </Box>
                <TextField sx={{ mt: 7, ml: 3}}
                id="outlined-select-currency-native"
                select
                label="Programmes"
                defaultValue="1"
                SelectProps={{
                    native: true,
                }}
                helperText="Choisissez votre programme"
                >
                {travel.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
                <Button size="large">Envoyer</Button>
            </Grid >
    </div>
  )
}

export default Form