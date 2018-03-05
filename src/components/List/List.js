import React from 'react';
import Aux from '../../hoc/Auxiliary';


const style = {
  height: 200,
  width: 200,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

export default class PaperExampleSimple extends React.Component{
    render(){
        return(
            <Aux>
                    <img  ref="image" style={style} alt={1} src={this.props.imageUri} />                
            </Aux>
        )
    }
}