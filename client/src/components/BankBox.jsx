var React = require('react')
var AccountDisplay = require('./AccountDisplay')
var Bank = require('../models/bank/bank')

var BankBox = React.createClass ({

  getInitialState: function(){
    console.log("bank", this.props.bank)
    return{accounts: this.props.bank.accounts}
  },

  render: function(){
    console.log('Rendering...')
    return(
      <div className='bank-box'>
      <h4>Accounts</h4>
      <AccountDisplay accounts={this.state.accounts} />
      </div>
      )
  }

})

module.exports = BankBox