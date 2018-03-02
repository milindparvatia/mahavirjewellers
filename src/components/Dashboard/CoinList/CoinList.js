import React from 'react';
import Paper from 'material-ui/Paper';

const cstyle = {
    margin: 'auto',
    padding: 10,
}


const style = {
  height: 300,
  width: 300,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
    <div class="container" style={cstyle}>
        <div class="header-list">
            
        </div>
            <div class="row">
                <div class="box">
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