/**
 * Sign in form
 */
import React from 'react';

// Material ui
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {

    render() {
        return (
            <div>
                <h4>user sign in</h4>
                <form>
                    <div>
                        <TextField
                            required
                            id="standard-email"
                            label="email"
                            className="iron-form-input-wrap"
                            type="email"
                            autoComplete="current-email"
                        />
                    </div>
                    <div className="mb-15">
                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            className="iron-form-input-wrap"
                            type="password"
                        //autoComplete="current-password"
                        />
                    </div>
                    <div className="d-sm-flex justify-content-between align-items-center mb-sm-10 mb-20">
                        <FormGroup >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedA"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                        </FormGroup>
                        <span className="d-inline-block"><Link to="/forget-password">Forgot Password?</Link></span>
                    </div>
                    <Button type="submit" component={Link} to="/payment" className="button btn-active btn-lg mb-25">
                        sign in
                    </Button>
                    <p className="mb-0">Don't have an account? <Link to="/sign-up">Click here to create one</Link></p>
                </form>
            </div>
        )
    }
}