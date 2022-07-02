import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import React from 'react'
import '../index.css'

const Home = () => {
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
                    <TextField multiline sx={{  marginY: '2rem' }} rows={24} fullWidth label="fullWidth" id="fullWidth" />
                    <Button
                        style={{
                            backgroundColor: "#FFD803",
                            color: 'black',
                            marginTop: 7
                        }}
                        className='button' variant='contained'>Process Code</Button>
                </Box>
            </Container>
        </div>
    )
}

export default Home