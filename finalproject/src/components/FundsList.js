import React from 'react';
import { Fund } from './Fund';
import { talkFundApi } from '../rest/TalkFundApi.js';


//calling CRUD methods to store and interact with data in API

export class FundsList extends React.Component {
    state = {
        funds : []
    };

    componentDidMount(){
        this.fetchFunds();
    };

    fetchFunds = async () => {
        const funds = await talkFundApi.get();
        this.setState({funds});
    };

    updateFund = async (updatedFund) => {
        await talkFundApi.put(updatedFund);
        this.fetchFunds();
    };

    createFund = async (newFund) => {
        await talkFundApi.create(newFund);
        this.fetchFunds();
        document.getElementById("create-fund").value = '';
    };

    deleteFund = async (id) => {
        await talkFundApi.delete(id);
        this.fetchFunds();
    };

    render(){
        return(
    
          <div>

                {this.state.funds.map((fund) => (
                    
                    <Fund                                //Added Session component
                        fund = {fund}
                        key={fund.id}
                        updateFund={this.updateFund} 
                        deleteFund={this.deleteFund}
                        />
                ))}
            </div>
        );
    }

}