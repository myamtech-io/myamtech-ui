import { FaArrowRight } from "react-icons/fa/";
import { FaCalendar } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // width: "100px",
    // height: "500px",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " + "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

const Item = props => {
  const classes = useStyles();
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        featured,
        cover: {
          children: [{ fluid }]
        }
      }
    }
  } = props;

  const isFeatured = featured === "true" ? true : false;
  console.log(fluid);

  return (
    <React.Fragment>
      <GridListTile key={slug} cols={isFeatured ? 2 : 1} rows={isFeatured ? 2 : 1}>
        <img src={fluid.src} alt={title} />
        <GridListTileBar
          title={title}
          titlePosition="top"
          actionIcon={
            <IconButton aria-label={`star ${title}`} className={classes.icon}>
              <StarBorderIcon />
            </IconButton>
          }
          actionPosition="left"
          className={classes.titleBar}
        />
      </GridListTile>
    </React.Fragment>
  );
};

//   return (
//     <React.Fragment>
//       <li>
//         <Link to={slug} key={slug} className="link">
//           <div className="gatsby-image-outer-wrapper">
//             <Img fluid={fluid} />
//           </div>
//           <h1>
//             {title} <FaArrowRight className="arrow" />
//           </h1>
//           <p className="meta">
//             <span>
//               <FaCalendar size={18} /> {prefix}
//             </span>
//             <span>
//               <FaUser size={18} /> {author}
//             </span>
//             {category && (
//               <span>
//                 <FaTag size={18} /> {category}
//               </span>
//             )}
//           </p>
//           <p>{excerpt}</p>
//         </Link>
//       </li>
//
//       {/* --- STYLES --- */}
//       <style jsx>{`
//         :global(.link) {
//           width: 100%;
//           color: ${theme.text.color.primary};
//         }
//
//         li {
//           border: 1px solid transparent;
//           border-radius: ${theme.size.radius.default};
//           margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};
//           padding: ${theme.space.inset.s};
//           position: relative;
//           transition: all ${theme.time.duration.default};
//           background: transparent;
//
//           :global(.gatsby-image-outer-wrapper) {
//             border-radius: ${theme.size.radius.default};
//             border: 1px solid ${theme.line.color};
//             overflow: hidden;
//           }
//           :global(.gatsby-image-outer-wrapper img) {
//             z-index: -1;
//           }
//
//           &::after {
//             border-top: 1px solid ${theme.line.color};
//             content: "";
//             height: 0;
//             position: absolute;
//             bottom: ${`calc(${theme.space.default} * -1.5)`};
//             left: 50%;
//             transform: translateX(-50%);
//             transition: all ${theme.time.duration.default};
//             width: 50%;
//           }
//
//           &:first-child {
//             &::before {
//               border-top: 1px solid ${theme.line.color};
//               content: "";
//               height: 0;
//               position: absolute;
//               top: ${`calc(${theme.space.default} * -1.5)`};
//               left: 50%;
//               transform: translateX(-50%);
//               transition: all ${theme.time.duration.default};
//               width: 50%;
//             }
//           }
//         }
//
//         h1 {
//           padding: ${theme.space.m} ${theme.space.s} 0;
//           line-height: ${theme.blog.h1.lineHeight};
//           font-size: ${theme.blog.h1.size};
//           text-remove-gap: both;
//
//           :global(.arrow) {
//             display: none;
//             position: relative;
//             top: 7px;
//           }
//         }
//
//         .meta {
//           display: flex;
//           flex-flow: row wrap;
//           font-size: 0.8em;
//           padding: ${theme.space.m} ${theme.space.s};
//           background: transparent;
//
//           :global(svg) {
//             fill: ${theme.icon.color};
//             margin: ${theme.space.inline.xs};
//           }
//           span {
//             align-items: center;
//             display: flex;
//             text-transform: uppercase;
//             margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
//           }
//         }
//
//         p {
//           line-height: 1.5;
//           padding: 0 ${theme.space.s};
//           text-remove-gap: both;
//         }
//
//         @from-width tablet {
//           li {
//             margin: ${`calc(${theme.space.default} * 3) 0 calc(${theme.space.default} * 4)`};
//             padding: ${theme.space.default};
//
//             &::after {
//               bottom: ${`calc(${theme.space.default} * -2)`};
//             }
//
//             &:first-child {
//               &::before {
//                 top: ${`calc(${theme.space.default} * -1.75)`};
//               }
//             }
//           }
//
//           h1 {
//             font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
//             padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
//             transition: all 0.5s;
//           }
//           .meta {
//             padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
//           }
//           p {
//             padding: 0 ${theme.space.default};
//           }
//         }
//         @from-width desktop {
//           li {
//             margin: ${`calc(${theme.space.default} * 4) 0 calc(${theme.space.default} * 5)`};
//             padding: 0 0 ${`calc(${theme.space.default} * 2)`};
//
//             &::after {
//               bottom: ${`calc(${theme.space.default} * -1.5)`};
//             }
//
//             &:first-child {
//               &::before {
//                 top: ${`calc(${theme.space.default} * -2.75)`};
//               }
//             }
//           }
//
//           :global(.blogItemLink:first-child) > li::before {
//             top: ${`calc(${theme.space.default} * -2.75)`};
//           }
//           h1 {
//             font-size: 2.5em;
//             padding: ${`calc(${theme.space.default} * 1.2) calc(${theme.space.default} * 2) 0`};
//           }
//           .meta {
//             padding: ${`calc(${theme.space.default} * 1.5) calc(${theme.space.default} * 2)
//               calc(${theme.space.default} * 0.5)`};
//           }
//           p {
//             padding: ${`0 calc(${theme.space.default} * 2)`};
//           }
//           li {
//             &:hover {
//               border: 1px solid ${theme.line.color};
//               box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);
//
//               &:after {
//                 bottom: ${`calc(${theme.space.default} * -2.5)`};
//               }
//               :global(.gatsby-image-wrapper) {
//                 transform: scale(1.1);
//               }
//               h1 {
//                 color: ${theme.blog.h1.hoverColor};
//               }
//               :global(.arrow) {
//                 opacity: 1;
//                 stroke: ${theme.color.special.attention};
//                 transform: translateX(0);
//               }
//             }
//             :global(.gatsby-image-wrapper) {
//               transition: all ${theme.time.duration.default};
//             }
//             :global(.arrow) {
//               display: inline-block;
//               fill: ${theme.color.special.attention};
//               stroke: ${theme.color.special.attention};
//               stroke-width: 40;
//               stroke-linecap: round;
//               opacity: 0;
//               transition: all 0.5s;
//               transform: translateX(-50%);
//             }
//           }
//         }
//       `}</style>
//     </React.Fragment>
//   );
// };

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Item;
