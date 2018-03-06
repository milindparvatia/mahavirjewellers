import React from 'react';
import Aux from '../../hoc/Auxiliary';
import List from '../../components/List/List';
//import Axios from 'axios';
//import firebase from 'firebase';
import assests from '../../assets/test.png';

const cstyle = {
    margin: 'auto',
    padding: 10,
    textAlign: 'center',
}

export default class Coin extends React.Component {
    state = {
        head:'Chain',
        Lists :[
            {
                url:assests,
                id:1
            }
        ]
    }

    
    // componentWillMount (){

    //     Axios.get('https://storage.googleapis.com/azutech-19d31.appspot.com/test.png')
    //     .then(response => {
    //         this.setState({Lists:response.data});
    //         console.log(response);
    //     });

        
    // //    // Get a reference to the storage service, which is used to create references in your storage bucket
    // //     var storage = firebase.storage();

    // //     // Create a storage reference from our storage service
    // //     var storageRef = storage.ref();

    // //     //var spaceRef = storageRef.child('test/test.PNG');
    // //     storageRef.child('test/test.png').getDownloadURL().then(function(response) {
    // //     // `url` is the download URL for 'images/stars.jpg'
          
    // //     this.setState({Lists:response});

    // //          console.log(this.response)
    // //         // var img = document.getElementById('myimg');
    // //         // console.log('img');
    // //         // img.src = url;
    // //       }).catch(function(error) {
    // //         // Handle any errors
    // //       });
    // }

    // passingid = () => {

    // }

    render(){

        const Lists = this.state.Lists.map((list, index) => {
                        return <List
                        key={list.id}
                        onClick={console.log("1")}
                        imageUri={list.url }
                        />
        });
        return(
            <Aux>
                <div style={cstyle}>
                    <div className="header-list">
                        test{/* <h1>{this.state.head}</h1> */}
                    </div>
                        <div className="row">
                            <div className="box">
                                {/* <img id="myimg" alt="" src="">
                                </img> */}
                                {Lists}
                            </div>
                        </div>
                </div>
            </Aux>
        )
    }
}
