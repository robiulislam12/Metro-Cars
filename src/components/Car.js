import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Car({car}) {
    const { _id ,car_name, car_img, car_description, car_price} = car;
    const shortDes = car_description.slice(0, 120) + '[...]';

    return (
        <div>
            
            <Card>
                <CardMedia
                    component="img"
                    height="240"
                    image={car_img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {car_name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    $ {car_price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {shortDes}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/car/${_id}`}>
                    <Button size="small" color='error' variant='contained'>Buy Now</Button>
                    </Link>
                </CardActions>
                </Card>
        </div>
    )
}
