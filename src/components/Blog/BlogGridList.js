import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Item from "./Item";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into its own layer on chrome. This cost memory but helps keep high FPS
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

const BlogGridList = props => {
  const classes = useStyles();
  const { posts, theme } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {posts.map(post => {
          const {
            node,
            node: {
              fields: { slug }
            }
          } = post;
          return <Item key={slug} post={node} theme={theme} />;
        })}
      </GridList>
    </div>
  );
};

BlogGridList.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default BlogGridList;
