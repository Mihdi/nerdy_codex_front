import * as React from 'react';

import Markdown from 'markdown-to-jsx';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const articles = [
  {
    uid: 0,
    metadata: {
      title: `title #0`,
      publish_time: Date.now(),
      last_edit_time: Date.now(),
      author: "arcanite",
    }, 
    main_data: {
      content: "# Hello there \n ## I am \n ` here `"
    },
  } 
];

function Article(props) {
  const article = articles.filter((a) => a.uid === props.uid)[0];
  if(!article){
    return(
      <p> 404 article not found. </p>
    );
  }
  return (
      <Container>
        <Markdown>{article.main_data.content}</Markdown>
      </Container>
  );
}

export default Article;