import React, {Component} from 'react';
import {connect} from 'react-redux';
import PageTitle from "../../../components/widgets/PageTitle";
import {Button, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import {isProductExist, productExitsInWishlist} from "../../../helpers";
import CardContent from "@material-ui/core/CardContent";
import CurrencyIcon from "../../../components/global/currency/CurrencyIcon";
import RatingStar from "../../../components/widgets/RatingStar";
import IconButton from "@material-ui/core/IconButton";
import swell from "swell-js";

function mapStateToProps(state) {
    return {};
}

function ProductItem(props) {

    const { data, onProductAddToCart, onProductAddToWhislist, onPostDetail } = props;
    console.log(data)
    return (
        <Card>
            <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
                <Link to={`/products/${data.id}`} className='d-block'>
                    <CardMedia
                        height="140"
                        component="img"
                        image={data.images[0].file.url}
                        onClick={onPostDetail}
                        style={{
                            height: 260,
                            objectFit: 'contain'
                        }}
                    />
                </Link>
                <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                    <div className="iron-overlay-holder">
                        {!productExitsInWishlist(data.id) ?
                            <Button
                                onClick={onProductAddToWhislist}
                            >
                                <i className="material-icons">favorite</i>
                            </Button>
                            :
                            <Button
                                className="active"
                            >
                                <i className="material-icons">favorite</i>
                            </Button>
                        }
                    </div>
                </div>
            </div>
            <CardContent className="iron-product-content p-20 border">
                <h5 className="text-truncate" ><Link to={`/products/${data.type}/${data.objectID}`} >{data.name}</Link></h5>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="price-wrap">
                        <span> <CurrencyIcon /> {data.price}</span>
                    </div>
                    <RatingStar />
                </div>
                <div className="iron-btn-grp">
                    {!isProductExist(data.id) ?
                        (
                            <IconButton className="btn-wrap" onClick={onProductAddToCart}>
                                <i className="material-icons">shopping_cart</i>
                            </IconButton>
                        )
                        :
                        (
                            <Link to='/cart'>
                                <IconButton className="btn-wrap">
                                    <i className="material-icons">visibility</i>
                                </IconButton>
                            </Link>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    );
}

class Accessories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filters: []
        }
    }

    componentDidMount() {
        swell.products.list({

        }).then((res)=>{
            this.setState({
                ...this.state,
                products: res.results
            })
        })
    }

    render() {
        return (
            <div>
                <PageTitle
                    title="Accessories"
                    desc="Choose the wide range of best accessories."
                />
                <div className="product-list section-pad iron-shop-wrapper">
                    <div className="container">
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid container spacing={16}>
                                    {
                                        this.state.products.map((productData, key)=>(
                                            <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
                                                <div className="iron-product-item post-rounded">
                                                    <ProductItem
                                                        data={productData}
                                                        onProductAddToCart={() => this.onAddToCart(productData)}
                                                        onProductAddToWhislist={() => this.addProductToWishList(productData)}
                                                    />
                                                </div>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Accessories);