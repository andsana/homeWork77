import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, styled } from '@mui/material';
import { apiURL } from '../../constants';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  author: string;
  message: string;
  image: string | null;
}

const ProductItem: React.FC<Props> = ({author, message, image}) => {
  const cardImage = apiURL + '/' + image;

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{height: '100%'}}>
        <CardHeader title={author}/>
        <ImageCardMedia
          image={cardImage}
          title={author}
        />
        <CardContent>
          <strong>
            {message}
          </strong>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;