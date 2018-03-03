import React from 'react';
import Paper from 'material-ui/Paper';


const cstyle = {
    margin: 'auto',
    padding: 10,
    textAlign: 'center',
}


const style = {
  height: 200,
  width: 200,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
    <div style={cstyle}>
        <div className="header-list">
            Title
        </div>
            <div className="row">
                <div className="box">
                    <Paper style={style} zDepth={5} />
                </div>
            </div>
    </div>
);

export default PaperExampleSimple;  