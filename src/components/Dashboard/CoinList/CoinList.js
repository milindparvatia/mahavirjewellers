import React from 'react';
import Paper from 'material-ui/Paper';

const cstyle = {
    margin: 'auto',
    padding: 10,
    textAlign: 'center',
}


const style = {
  height: 300,
  width: 300,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
    <div className="container" style={cstyle}>
        <div className="header-list">
            
        </div>
            <div className="row">
                <div className="box">
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                    <Paper style={style} zDepth={5} />
                </div>
            </div>
        
    </div>
);

export default PaperExampleSimple;  