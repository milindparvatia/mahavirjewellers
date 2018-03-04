import React from 'react';
import Aux from '../../hoc/Auxiliary';
import List from '../../components/Dashboard/List/List';

const cstyle = {
    margin: 'auto',
    padding: 10,
    textAlign: 'center',
}

export default class Coin extends React.Component {
    state = {
        heading:[
            {head:'Chain'}
        ],
        Lists : [
            {   
                id: '1',
                img: 'https://dummyimage.com/200x200/000/fff.jpg&text=hey',
                title: 'Breakfast',
                author: 'jill111',
              },
              { 
                id: '2',
                img: 'https://dummyimage.com/200x200/001/fff.jpg&text=hey',
                title: 'Tasty burger',
                author: 'pashminu',
              },
              {
                id: '3',
                img: 'https://dummyimage.com/200x200/002/fff.jpg&text=hey',
                title: 'Camera',
                author: 'Danson67',
              },
              {
                id: '4',
                img: 'https://dummyimage.com/200x200/003/fff.jpg&text=hey',
                title: 'Morning',
                author: 'fancycrave1',
              },
              { 
                id: '5',
                img: 'https://dummyimage.com/200x200/004/fff.jpg&text=hey',
                title: 'Hats',
                author: 'Hans',
              },
              { 
                id: '6',
                img: 'https://dummyimage.com/200x200/005/fff.jpg&text=hey',
                title: 'Honey',
                author: 'fancycravel',
              },
              {
                id: '7',
                img: 'https://dummyimage.com/200x200/006/fff.jpg&text=hey',
                title: 'Vegetables',
                author: 'jill111',
              },
              {
                id: '8',
                img: 'https://dummyimage.com/200x200/007/fff.jpg&text=hey',
                title: 'Water plant',
                author: 'BkrmadtyaKarki',
              },
          ]
    }

    

    render(){
        return(
            <Aux>
                <div style={cstyle}>
                    <div className="header-list">
                       <h1>{this.state.heading.values}</h1>
                    </div>
                        <div className="row">
                            <div className="box">
                                {this.state.Lists.map((list, index) => {
                                    return <List
                                    
                                    // title={list.title}
                                    // author={list.author}
                                    imageUri={list.img}
                                    />
                                })}
                            </div>
                        </div>
                </div>
            </Aux>
        )
    }
}