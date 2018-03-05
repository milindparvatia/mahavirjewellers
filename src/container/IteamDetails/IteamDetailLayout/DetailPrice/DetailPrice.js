import React from 'react';
import Aux from '../../../../hoc/Auxiliary';

export default class DetailPrice extends React.Component {
    render(){
        return(
            <Aux>
                <table>
                    <tr>
                        <th>Code:</th>
                        <td> PE G 1109</td>
                    </tr>
                    <tr>
                        <th>Weight:</th>
                        <td> 7.1 Gr.</td>
                    </tr>
                    <tr>
                        <th>Metal:</th>
                        <td>18K Gold</td>
                    </tr>
                    <tr>
                        <th>Price:</th>
                        <td>€ 567,00:</td>
                    </tr>
                </table>
            </Aux>
        )
    }
}