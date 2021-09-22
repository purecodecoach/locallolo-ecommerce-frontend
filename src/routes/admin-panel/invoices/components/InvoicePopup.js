//Invoice popup
/* eslint-disable */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CurrencyIcon from '../../../../components/global/currency/CurrencyIcon';

class InvoicePopup extends React.Component {
   state = {
      open: false,
   };

   //Define function for open confirmation dialog box
   handleClickOpen = () => {
      this.setState({
         open: true,
      });
   };

   //Define function for close confirmation dialog box and callback for delete item 
   closeDialog() {
      this.setState({ open: false });
   };

   render() {

      return (
         <Fragment>
            <Button
               className="action-btn"
               onClick={this.handleClickOpen}
            >
               <i className="material-icons primary-color">remove_red_eye</i>
            </Button>
            <Dialog
               className="admin-invoice-wrap"
               open={this.state.open}
               onClose={() => this.closeDialog()}
               aria-labelledby="responsive-dialog-title"
            >
               <DialogContent className="p-20 text-center">
                  <div className="iron-invoice-wrap bg-base">
                     <div id="payment-receipt">
                        <div className="text-center bg-secondary px-sm-50 px-15 py-sm-50 py-20">
                           <h4 className="mb-sm-20 mb-10">Payment Status</h4>
                           <h5 className="mb-sm-25 mb-10">Payment is successfully processsed and your order delivred</h5>
                           <h6 className="mb-sm-25 mb-10">Transaction ID:267676GHERT105467</h6>
                           <img
                              src={require("../../../../assets/images/checked.png")} alt="success"
                           />
                        </div>
                        <div className="p-sm-30 p-15">
                           <div className="pt-sm-20 pb-sm-40 pb-15">
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={6} md={6} lg={6} >
                                    <div className="mb-md-0 mb-20 text-left">
                                       <h6>Summary</h6>
                                       <p className="mb-5">Order ID: 2563883628932</p>
                                       <p className="mb-5">Order Date: April 9, 2019 </p>
                                       <p className="mb-5">Order Total: <CurrencyIcon /> 888.00</p>
                                    </div>
                                 </Grid>
                                 <Grid item xs={12} sm={6} md={6} lg={6} >
                                    <div className="text-sm-right text-left">
                                       <h6>Ship To</h6>
                                       <p className="mb-5 text-capitalize">
                                          Nitin Goyal
                                    </p>
                                       <p className="mb-5 text-capitalize">Hyderabad</p>
                                       <p className="mb-5 text-capitalize">India-500 002</p>
                                       <p className="mb-5 text-capitalize">Contact No. 202-555-0185</p>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                           <div className="py-25 px-15  text-center bg-secondary mb-sm-50 mb-30">
                              <h4 className="mb-sm-15 mb-0">Expected Date of Delivery</h4>
                              <h3 className="mb-sm-15 mb-0">April 30, 2019</h3>
                           </div>
                           <div>
                              <h4 className="pt-5">Your Ordered Details</h4>
                              <Grid container spacing={24} className="my-0">
                                 <Grid item xs={12} sm={12} md={3} lg={3} className="py-0  d-flex justify-content-center align-items-center mb-md-0 mb-20">
                                    <img
                                       src={require('../../../../assets/images/gadgets/g-2-b.jpg')}
                                       alt='cart-item'
                                       width="100"
                                    />
                                 </Grid>
                                 <Grid item xs={6} sm={6} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                    <div className="text-center">
                                       <h6 className="mb-5">Product Name</h6>
                                       <p className="mb-sm-0 mb-15 font-bold text-capitalize">Black Smartphone</p>
                                    </div>
                                 </Grid>
                                 <Grid item xs={6} sm={6} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                    <div className="text-center">
                                       <h6 className="mb-5">Quantity</h6>
                                       <p className="mb-0">1</p>
                                    </div>
                                 </Grid>
                                 <Grid item xs={12} sm={12} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                    <div className="text-center">
                                       <h6 className="mb-5">price</h6>
                                       <p className="mb-0"><CurrencyIcon /> 847.63</p>
                                    </div>
                                 </Grid>
                              </Grid>
                              <Divider className="my-20" />
                           </div>
                           <div>
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={12} md={12} lg={12} className="pt-10" >
                                    <div className="d-flex justify-content-between align-items-center mb-15">
                                       <span className="d-inline-block text-capitalize text-14">subtotal
                                                        </span>
                                       <span className=" text-14"><CurrencyIcon /> 847.63 </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-15">
                                       <span className="d-inline-block text-capitalize text-14">Shipping
                                                        </span>
                                       <span className=" text-14"><CurrencyIcon /> 12.95</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                       <span className="d-inline-block text-capitalize text-14">Tax(GST)
                                                        </span>
                                       <span className=" text-14"><CurrencyIcon /> 27.95</span>
                                    </div>
                                    <Divider className="my-sm-30 my-15"></Divider>
                                    <div className="d-flex justify-content-between align-items-center mb-sm-50 mb-0">
                                       <h4>Total</h4>
                                       <h4><CurrencyIcon /> 888.53</h4>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                        </div>
                     </div>
                     <div className="p-sm-30 p-15 d-sm-flex justify-content-between align-items-center">
                        <Button className="button btn-active btn-lg mb-20 mr-20">download PDF</Button>
                        <Button className="button btn-active btn-lg  mb-20 ">go to home</Button>
                     </div>
                  </div>
               </DialogContent>
            </Dialog >
         </Fragment>
      );
   }
}

export default InvoicePopup;