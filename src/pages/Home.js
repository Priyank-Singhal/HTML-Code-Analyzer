import React, { useState, createContext } from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
var beautify = require('js-beautify').html

export const map = new Map();
const Home = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleField = (e) => {
        setCode(() => {
            return beautify(e.target.value, { indent_size: 2, space_in_empty_paren: true });
        });
    }

    const getTag = (str) => {
        let i = 0;
        let j = 0;
        while (j < str.length) {
            if (str[j] === '<') break;
            j++;
        }
        i = j;
        while (i < str.length) {
            if (str[i] === '>' || str[i] === ' ') break;
            i++;
        }
        return str.slice(j + 1, i);
    }


    let m;
    const RunRegx = () => {
        let numspace = '';
        while (true) {
            const openingTagLine = new RegExp(`^(${numspace}<[^\/]).*(>)`, "gm");
            const newMap = new Map();
            do {
                m = openingTagLine.exec(code);
                if (m) {
                    const w = m[0];
                    const word = getTag(w);
                    if (newMap.get(word)) {
                        let wordCount = newMap.get(word);
                        newMap.set(word, ++wordCount);
                    }
                    else newMap.set(word, 1)
                }
            } while (m);

            for (const [k, v] of newMap) {
                if (v > 1) {
                    map.set(k, v);
                    // console.log(k, v)
                }
            }

            numspace = numspace + '  ';
            // console.log(newMap);
            // console.log(map);
            if (!newMap.size) {
                navigate('/result');
                break;
            }
        }
    }

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
                    <TextField
                        onChange={handleField}
                        multiline sx={{ marginY: '2rem' }} rows={24} fullWidth required id="fullWidth" />
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
                            onClick={RunRegx}
                            variant='contained'>
                            Process Code
                        </Button>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Home

export const DataContext = createContext(map);
