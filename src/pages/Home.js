import React, { useState } from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import {useNavigate} from 'react-router-dom'
var beautify = require('js-beautify').html,
    fs = require('fs');

const Home = () => {
    const [code, setCode] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    }
    const handleField =(e) => {
        setCode(e.target.value);
        // console.log(e.target.value);
    }
    console.log(code);
    console.log(beautify(code, { indent_size: 2, space_in_empty_paren: true }));

    return (
        <div>
            <Container>
                <Box
                    sx={{
                        marginTop: 4,
                    }}
                >
                    <Typography variant="h3" gutterBottom component="div">
                        Find Similar Nodes
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        Paste HTML in the textbox below:
                    </Typography>
                    <TextField onChange={handleField} multiline sx={{ marginY: '2rem' }} rows={24} fullWidth required id="fullWidth" />
                    <Box 
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            style={{
                                backgroundColor: "#FFD803",
                                color: 'black',
                                marginTop: 7,
                                justifyContent: 'center'
                            }}
                            onClick={handleClick}
                            variant='contained'>Process Code</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Home