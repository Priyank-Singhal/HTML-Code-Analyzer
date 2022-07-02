import React, { useState } from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
var beautify = require('js-beautify').html,
    fs = require('fs');

const Home = () => {
    const [code, setCode] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    }
    const handleField = (e) => {
        setCode(() => {
            return beautify(e.target.value, { indent_size: 2, space_in_empty_paren: true });
        });
    }
    // console.log(code);
    // beautify(code, { indent_size: 2, space_in_empty_paren: true });

    // const m = re.exec(code);
    
   

    var m;
    var numspace = '';
    const regex = "^(" + numspace + "<).*>$";
    var re = /^(  <).*>$/gm;
    const out = code.match(re);
    do {
        m = re.exec(code);
        if (m) {
            // console.log(m[0], m[1]);
            console.log(m);
        }
    } while (m);
    console.log(m);
    console.log(code)
    // do{

    // }
    // while(m)

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