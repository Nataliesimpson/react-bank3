var React = require('react')
var Account = require('./Account')

var AccountDisplay = React.createClass({

  propTypes: {
    accounts: React.PropTypes.array.isRequired
  },

  render: function(){
    var accountNodes = this.props.accounts.map(function(account){
      console.log(account);
      return(
        //props passing info to account//
        <Account owner={account.owner} amount={account.amount} id={account.id} key={account.id}>
        </Account>
        )
    })

    return(
      <div className='account-display'>
      {accountNodes}
      </div>
      )
    }

})

module.exports = AccountDisplay
