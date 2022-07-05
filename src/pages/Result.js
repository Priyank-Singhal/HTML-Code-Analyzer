import React, { useContext } from 'react'
import { DataContext } from './Home'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button } from '@mui/material'
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';

const Result = () => {

    const navigate = useNavigate();
    const map = useContext(DataContext);
    const tags = [...map.keys()]
    const freq = [...map.values()]

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
                                // marginTop: '1rem',
                                marginBottom: '1rem'
                            }}
                            onClick={handleClick}
                            variant='contained'
                        >Run Again</Button>
                    </Box>
                    {tags && tags.map((item, ind) => {
                        return <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Name
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                                    {item}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Occurances
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {freq[ind]}
                                </Typography>
                            </CardContent>
                        </Card>
                    })}

                </Box>
            </Container>
        </div>
    )
}

export default Result