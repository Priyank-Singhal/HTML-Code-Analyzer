import React, { useState } from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
var beautify = require('js-beautify').html
// fs = require('fs');

const Home = () => {
    const [code, setCode] = useState('');
    const [arr, setArr] = useState([]);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    }

    const handleField = (e) => {
        setCode(() => {
            return beautify(e.target.value, { indent_size: 2, space_in_empty_paren: true });
        });
    }

    const getTag = (str) => {
        const n = str.lenght;
        let i = 0;
        while(str[i] != ' ' || str[i] != '>'){
            i++;
        }
        return str.slice(1, i);
    }

    var m;
    console.log(m);

    const openingTagLine = new RegExp("^(<[^\/]).*(>)", "gm");
        do {
            m = openingTagLine.exec(code);
            if (m) {
                console.log(m[0]);
                const word = getTag(m[0]);
                setArr([...arr, word]);
            }
        } while (m);
        console.log(arr);
    // while(false){
    // }


    // do {
    //     var regex = `/^(${numspace}<).*>$/gm`;
    //     // var re = /^( <).*>$/gm; 
    //     const re = /(<\/).*>$/gm;
    //     const validEmail = new RegExp(`/^(${numspace}<).*>$/gm`);
    //     const reg = new RegExp('(<).*>$', 'gm');
    //     const openingTagLine = new RegExp("^(<[^\/]).*(>)", "gm");
    //     do {
    //         m = reg.exec(code);
    //         if (m) {
    //             // console.log(m[0], m[1]);
    //             console.log(m);
    //         }
    //     } while (m);
    // }
    // while (m)

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