import React, { useState } from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
var beautify = require('js-beautify').html
// fs = require('fs');

const Home = () => {
    const [code, setCode] = useState('');
    const [arr, setArr] = useState({});
    const [tags, setTags] = useState([]);
    const [freq, setFreq] = useState([]);
    // let tags = [];
    // let freq = [];
    const [loop, setLoop] = useState(true);
    const map = new Map();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    }

    const handleField = (e) => {
        setCode(() => {
            return beautify(e.target.value, { indent_size: 2, space_in_empty_paren: true });
            // return e.target.value
        });
    }

    const getTag = (str) => {
        let i = 0;
        let j = 0;
        // while(str[i] != ' ' || str[i] != '>'){
        //     i++;
        // }
        while (j < str.length) {
            if (str[j] === '<') break;
            // console.log(str[i])
            j++;
        }
        i = j;
        while (i < str.length) {
            if (str[i] === '>' || str[i] === ' ') break;
            // console.log(str[i])
            i++;
        }
        return str.slice(j + 1, i);
    }

    const addTags = (k) => {
        // setArr(oldArray => [...oldArray, word]);
        setTags(prev => [...prev, k]);
    }

    const addFreq = (v) => {
        setFreq(prev => [...prev, v])
    }

    let m;
    const RunRegx = () => {
        let count = 1;
        let numspace = '';
        while (loop) {
            const openingTagLine = new RegExp(`^(${numspace}<[^\/]).*(>)`, "gm");
            map.clear();
            do {
                m = openingTagLine.exec(code);
                if (m) {
                    const w = m[0];
                    // console.log(w)
                    const word = getTag(w);
                    if (map.get(word)) {
                        let wordCount = map.get(word);
                        map.set(word, ++wordCount);
                    }
                    else map.set(word, 1)
                    // addWord(word);
                }
            } while (m);

            for (const [k, v] of map) {
                if (v > 1) {
                    addTags(k);
                    addFreq(v);

                    console.log(k, v)
                    // tags = [...map.keys()]
                    // freq = [...map.values()]
                    // setLoop(false);
                }
            }

            numspace = numspace + '  ';
            //while map not empty
            // console.log(map);
            // ++count;
            // console.log(count);
            console.log(tags);
            console.log(freq);
            // console.log(map.size)
            if (!map.size) break;
            // if(count>5) break;
        }
    }


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
                    <TextField
                        onChange={handleField}
                        // onChange={e => handleField(e)}
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
                            onClick={handleClick}
                            variant='contained'>
                            Process Code
                        </Button>
                        <Button
                            style={{
                                backgroundColor: "#FFD803",
                                color: 'black',
                                marginTop: 7,
                                justifyContent: 'center'
                            }}
                            onClick={RunRegx}
                            variant='contained'>
                            Run Regx
                        </Button>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Home