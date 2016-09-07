var React = require('react')

propTypes: {
  owner: React.PropTypes.string.isRequired
}

var Account = React.createClass({

render: function(){
  return(
      <div className='account'>
      <h2 className='account-owner'>{this.props.owner}</h2>
      <h2 className='account-amount'>{this.props.amount}</h2>
      
      </div>      
    )
}



})

module.exports = Account