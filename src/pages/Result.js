import React from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import Card from '@mui/material/Card';
import {useNavigate} from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Result = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <Container>
                <Box
                    sx={{
                        marginTop: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '3rem'
                        }}
                    >
                        <Typography variant="h3" gutterBottom component="div">
                            Results
                        </Typography>
                        <Button
                            style={{
                                backgroundColor: "#FFD803",
                                color: 'black',
                                marginTop: 7,
                                justifyContent: 'center',
                                marginTop: '1rem',
                                marginBottom: '1rem'
                            }}
                            onClick={handleClick}
                            variant='contained'
                        >Run Again</Button>
                    </Box>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                                H1
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Occurances
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                5
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default Result