/**
 * product add page
*/
/* eslint-disable */
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';

//components
import SocialIcons from '../../../../components/widgets/SocialIcons';

const data = {
   Preview_Image: "https://via.placeholder.com/625x800",
   image_gallery: [
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800"
   ]
}
class ProductAdd extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pictures: [],
         age: ''
      };
      this.onDrop = this.onDrop.bind(this);
   }

   //function for upload image
   onDrop(picture) {
      this.setState({
         pictures: this.state.pictures.concat(picture),
      });
   }

   //function for change variation type
   handleChange = name => event => {
      this.setState({
         [name]: event.target.value,
      });
   };

   render() {
      return (
         <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
            <Grid container spacing={32} className="my-0">
               <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
                  <Grid container spacing={32} className="my-0">
                     <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-30">
                        <Grid container spacing={24} className="iron-product-gallery my-0">
                           <Grid item xs={3} sm={2} md={2} lg={2} className="py-0">
                              <div className="product-gallery-nav">
                                 {data.image_gallery && data.image_gallery.map((gallery, index) => {
                                    return (
                                       <div key={index} className="product-gallery-item">
                                          <div className="image-upload">
                                             <a href="javascript:void(0)">
                                                <img
                                                   src={gallery}
                                                   alt="product-item"
                                                   height="50"
                                                />
                                             </a>
                                             <div className="image-content d-flex justify-content-center align-items-center">
                                                <ImageUploader
                                                   withPreview
                                                   withIcon={false}
                                                   buttonClassName="primary-color bg-base border-circle add-Button"
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
                                       <a href="javascript:void(0)">
                                          <img
                                             src={data.Preview_Image}
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
                                 <i className="zmdi zmdi-plus mr-10 primary-color pt-10 text-h4 "></i>
                                 <Input
                                    defaultValue="Add Product Name"
                                    className="text-capitalize add-product-input text-h3"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                 />
                              </div>
                              <div className="d-flex justify-content-start align-items-start mb-10">
                                 <i className="zmdi zmdi-plus mr-10 primary-color pt-5 text-h5"></i>
                                 <Input
                                    defaultValue="Add price"
                                    className="text-capitalize add-product-input text-h4 active-input"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">availability :</h6>
                                 <Input
                                    defaultValue=""
                                    className="text-capitalize add-product-input pl-30"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">product code :</h6>
                                 <Input
                                    defaultValue=""
                                    className="text-capitalize add-product-input pl-30"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">tags :</h6>
                                 <Input
                                    defaultValue=""
                                    className="text-capitalize add-product-input pl-30"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">add description :</h6>
                                 <TextField
                                    id="filled-multiline-static"
                                    multiline
                                    rows="2"
                                    defaultValue=""
                                    className="text-capitalize add-product-input pl-30"
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">features points :</h6>
                                 <Input
                                    defaultValue=""
                                    className="text-capitalize add-product-input pl-30"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">total products :</h6>
                                 <TextField
                                    fullWidth
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
                                 create
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
      )
   }
}

export default ProductAdd;