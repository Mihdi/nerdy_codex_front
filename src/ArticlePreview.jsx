import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function gotoArticle(uid){
  console.log(`going to ${uid}`);
}

function ArticlePreview(props) {
  const {uid, title, description, imglink, altimg} = props.article;
  return (
    <Card 
      sx={{ maxWidth: 345 }} 
      onClick={() => gotoArticle(uid)} 
      style={{backgroundColor: props.theme.palette.background.default, borderColor: props.theme.palette.primary.main}}
    >
      <CardMedia
        component="img"
        alt={altimg}
        height="140"
        image={imglink}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.phrases.share}</Button>
        <Button size="small">{props.phrases.read}</Button>
      </CardActions>
    </Card>
  );
}


export default ArticlePreview;