import * as React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ArticlePreview from './ArticlePreview';

const mockArticles = [
  {uid: 0, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "lena.png", altimg: "logo"},
  {uid: 1, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: 'lena.png', altimg: "logo"},
  {uid: 2, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "old_lena.png", altimg: "logo"},
  {uid: 3, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "old_lena.png", altimg: "logo"},
  {uid: 4, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "old_lena.png", altimg: "logo"},
  {uid: 5, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "lena.png", altimg: "logo"},
  {uid: 6, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "lena.png", altimg: "logo"},
  {uid: 7, title: "Hello, WOrld", description: "Lorem Ipsum Dolores sit amet", imglink: "old_lena.png", altimg: "logo"},

];

function Articles(props) {
  return (
      <Container>
        <Grid sx={{ flexGrow: 1 }} container spacing={3}>
          {mockArticles.map((article) => (
            <Grid item xs={12} md={4} lg={3} key={article.uid}>
              <ArticlePreview  article ={article} phrases={props.phrases} theme={props.theme} />
            </Grid>
          ))
        }
        </Grid>
      </Container>
  );
}

export default Articles;