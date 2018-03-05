import React from 'react';
import Aux from '../../hoc/Auxiliary';
import List from '../../components/List/List';
import Axios from 'axios';
import firebase from 'firebase';

const cstyle = {
    margin: 'auto',
    padding: 10,
    textAlign: 'center',
}

export default class Coin extends React.Component {
    state = {
        head:'Chain',
        Lists : []
    }

    componentWillMount (){
        // Points to the root reference
        const storageRef = firebase.storage().ref();

        // Points to 'images'
        const imagesRef = storageRef.child('test');

        var fileName = 'test.PNG';
        var spaceRef = imagesRef.child(fileName);

        Axios.get(spaceRef)
        .then(response => {
            this.setState({Lists:response.data});
            console.log(response);
        });
    }

    passingid = () => {

    }

    render(){

        const Lists = this.state.Lists.map((list, index) => {
                        return <List
                        key={list.id}
                        //onClick={console.log('1')}
                        imageUri={list.img}
                        />
        });
        return(
            <Aux>
                <div style={cstyle}>
                    <div className="header-list">
                        <h1>{this.state.head}</h1>
                    </div>
                        <div className="row">
                            <div className="box">
                                {Lists}
                            </div>
                        </div>
                </div>
            </Aux>
        )
    }
}