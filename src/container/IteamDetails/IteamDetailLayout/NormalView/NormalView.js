import React from 'react';
import Aux from '../../../../hoc/Auxiliary';
import TC from '../../../../components/Tc/Tc';
import RaisedButton from 'material-ui/RaisedButton';
import DetailPrice from '../DetailPrice/DetailPrice';

const normalview = () => (
    <Aux>
        <div className="row">
            <div className="col-12">
                <div className="box">
                    <DetailPrice ItemDetail={this.state}/>
                </div>
            </div>
        </div>
        <br></br>
        <div className="row">
            <RaisedButton label="Add To Cart" fullWidth={true} /> 
        </div>
        <br></br>
        <div className="row">
            <div className="col-12">
                <div className="box">
                    <TC/ >
                </div>
            </div> 
        </div>
    </Aux>
)

export default normalview;