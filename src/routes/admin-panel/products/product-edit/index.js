/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//components
import SocialIcons from '../../../../components/widgets/SocialIcons';
import firebase from '../../../../firebase';
import 'firebase/database';
import ContentLoader from '../../../../components/global/loaders/ContentLoader';

class ProductEdit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pictures: [],
         age: 5,
         allProducts: [],
         productId: parseInt(this.props.match.params.id),
         productType: this.props.match.params,
         currentDataItem: null,
      };
   }

   componentDidMount() {
      this.getProducts();
   }

   //getproducts
   getProducts() {
      const allProductsRef = firebase.database().ref('products');
      allProductsRef.on('value', (snapshot) => {
         let allProducts = snapshot.val();
         let newTypeData = allProducts[this.state.productType.type];
         this.setState({
            relatedproduct: newTypeData
         })
         let newState = ((allProducts.men.concat(allProducts.women)).concat(allProducts.gadgets)).concat(allProducts.accessories);
         this.setState({
            allProducts: newState
         });
         this.getProductItem(newState);
      });
   }

   getProductItem(allProducts) {
      let { productId } = this.state;
      if (allProducts && allProducts.length > 0) {
         for (let Item of allProducts) {
            if (Item.objectID === productId) {
               this.setState({
                  currentDataItem: Item
               })
            }
         }
      }
   }

   onDrop(picture) {
      this.setState({
         pictures: this.state.pictures.concat(picture),
      });
   }

   handleChange = name => event => {
      this.setState({
         [name]: event.target.value,
      });
   };

   render() {
      const { currentDataItem } = this.state;
      return (
         <Fragment>
            {currentDataItem !== null ?
               <div className="iron-product-add-wrap iron-product-edit-wrap pt-50 px-sm-50 px-md-0">
                  <Grid container spacing={32} className="my-0">
                     <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
                        <Grid container spacing={32} className="my-0">
                           <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-30">
                              <Grid container spacing={24} className="iron-product-gallery my-0">
                                 <Grid item xs={3} sm={2} md={2} lg={2} className="py-0">
                                    <div className="product-gallery-nav">
                                       {currentDataItem.image_gallery && currentDataItem.image_gallery.map((gallery, index) => {
                                          return (
                                             <div key={index} className="product-gallery-item">
                                                <div className="image-upload">
                                                   <a href="#">
                                                      <img
                                                         src={require(`../../../../assets/images/${gallery}`)}
                                                         alt="product-item"
                                                         height="50"
                                                      />
                                                   </a>
                                                   <div className="image-content d-flex justify-content-center align-items-center">
                                                      <ImageUploader
                                                         withPreview
                                                         withIcon={false}
                                                         buttonClassName="primary-color bg-base border-circle"
                                                         buttonText=""
                                                         onChange={() => this.onDrop()}
                                                         imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                         maxFileSize={5242880}
                                                      />
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </Grid>
                                 <Grid item xs={9} sm={10} md={10} lg={10} className="py-0">
                                    <div className="preview-full-image">
                                       <div className="iron-shadow product-gallery-item ">
                                          <div>
                                             <a href="#">
                                                <img
                                                   src={require(`../../../../assets/images/${currentDataItem.image}`)}
                                                   alt="poster-image"
                                                />
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </Grid>
                              </Grid>
                           </Grid>
                           <Grid item xs={12} sm={12} md={6} lg={6} className="py-0">
                              <div className="detail-content">
                                 <Link to="/admin-panel/admin/products" className="text-14 d-inline-block font-medium py-10 mb-10">Back to products</Link>
                                 <form className="product-values">
                                    <div className="d-flex justify-content-start align-items-start mb-10">
                                       <i className="zmdi zmdi-edit mr-5 primary-color pt-10 text-h4 "></i>
                                       <Input
                                          defaultValue={currentDataItem.name}
                                          className="text-capitalize add-product-input text-h3"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                       />
                                    </div>
                                    <div className="d-flex justify-content-start align-items-start mb-10">
                                       <i className="zmdi zmdi-edit mr-5 primary-color pt-5 text-h5"></i>
                                       <Input
                                          defaultValue={`$ ${currentDataItem.price}`}
                                          className="text-capitalize add-product-input text-h4 active-input"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">availability :</h6>
                                       <Input
                                          defaultValue={currentDataItem.availablity}
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">product code :</h6>
                                       <Input
                                          defaultValue={currentDataItem.product_code}
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">tags :</h6>
                                       <Input
                                          defaultValue={currentDataItem.tags}
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">add description :</h6>
                                       <TextField
                                          fullWidth
                                          id="filled-multiline-static"
                                          multiline
                                          rows="3"
                                          defaultValue={currentDataItem.desc}
                                          className="text-capitalize add-product-input pl-30"
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">features points :</h6>
                                       <Input
                                          defaultValue={currentDataItem.features}
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">Color Varients :</h6>
                                       <FormGroup row className="pl-30">
                                          <FormControlLabel
                                             control={<Checkbox value="red" />}
                                             label="Red"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="blue" />}
                                             label="Blue"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="yellow" />}
                                             label="Yellow"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="green" />}
                                             label="Green"
                                          />
                                       </FormGroup>
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">Size Varients :</h6>
                                       <FormGroup row className="pl-30">
                                          <FormControlLabel
                                             control={<Checkbox value="36" />}
                                             label="36"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="38" />}
                                             label="38"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="40" />}
                                             label="40"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="42" />}
                                             label="42"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="44" />}
                                             label="44"
                                          />
                                          <FormControlLabel
                                             control={<Checkbox value="46" />}
                                             label="46"
                                          />
                                       </FormGroup>
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">total products :</h6>
                                       <TextField
                                          id="filled-number"
                                          value={this.state.age}
                                          onChange={this.handleChange('age')}
                                          type="number"
                                          className="iron-select-width2 pl-30"
                                          InputLabelProps={{
                                             shrink: true,
                                          }}
                                       />
                                    </div>
                                 </form>
                                 <div className="mb-sm-50 mb-20 detail-btns pl-25">
                                    <Button
                                       className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                    >
                                       save
                              </Button>
                                    <Button
                                       className="button btn-base btn-lg mb-20 mb-sm-0"
                                    >
                                       discard
                              </Button>
                                 </div>
                                 <div className="d-flex justify-content-start align-items-center pl-25">
                                    <span className="d-inline-block mr-15 text-14">Share Now</span>
                                    <div className="detail-product-share">
                                       <SocialIcons></SocialIcons>
                                    </div>
                                 </div>
                              </div>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </div >
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

export default ProductEdit;