import React from 'react'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Product.css'
import * as actionTypes from '../../../redux/actions'
import { connect } from 'react-redux';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:'5%'
    },
    media: {
      height: '40vh',
    },
  });

function Product2({ product, addToCart, loadCurrentItem }) {
  console.log("product",product);
  const Navigate = useNavigate();
    const classes = useStyles();
    const handleOnClick = ()=>{
      loadCurrentItem(product);
      Navigate(`/product/${product.id}`)
      
    }
    return (
        <Card className={classes.root}>
      
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
            
          />
          <CardContent className={classes.cardstyle}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{maxHeight:"600px"}}>
              {product.description}
            </Typography>
            <br/>
            <Typography variant="h5" align='center' color="textPrimary" style={{marginTop:"1rem"}} >
              {product.price}&nbsp;₹
            </Typography>
          </CardContent>
       
        <CardActions >
      
          <Button  size="small" color="primary" onClick={handleOnClick}>
            View Item
          </Button>
          
          <Button size="small" color="primary" onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>

        </CardActions>
      </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return{
    loadCurrentItem : (item) => dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item}}),
    addToCart : (id) => dispatch({type:actionTypes.ADD_TO_CART,payload:{id}}),
  }
}

export default connect(null,mapDispatchToProps)(Product2)