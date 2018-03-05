import React from 'react';
import Aux from '../../hoc/Auxiliary';
import IteamDetailLayout from './IteamDetailLayout/IteamDetailLayout';
import Paper from 'material-ui/Paper';


const idstyle = {
    margin: 'auto',
    textAlign: 'left',
}

const style = {
  height: 300,
  width: 30,
  margin: 40,
  display: 'inline-block',
};

export default class iteamdetails extends React.Component {
    state = {
        ItemDetail:{
            Type:"Chain",
            Code:1,
            Weight:3.5,
            Metal:18,
            Price:"22,222",
        }
    }

    render(){
        return(
            <Aux>
                <div className="row">
                    <div className="col-xs-12 col-sm-12
                                col-md-9 col-lg-9">
                        <div className="box">
                            <Paper style={style} zDepth={0} />
                        </div>
                    </div>
                
                     <div className="col-xs-12 col-sm-12
                                col-md-3 col-lg-3">
                        <div className="box" style={idstyle} >
                        <IteamDetailLayout ItemDetail={this.state}/>   
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}