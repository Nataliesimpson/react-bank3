var React = require('react')
var ReactDOM = require('react-dom')
var BankBox = require('./components/BankBox')
var Bank = require('./models/bank/bank')


window.onload = function(){

  var sampleData = [
    {id: 1, owner: 'Renwick', amount: 1000, type: 'business'},
    {id: 2, owner: 'Nat', amount: 80, type: 'personal'},
    {id: 3, owner: 'Marie', amount: 3500, type: 'business'},
    {id: 4, owner: 'Iain', amount: 8000, type: 'personal' }
  ]

  var NatRen = new Bank()

  for (var account of sampleData){
    NatRen.addAccount(account)
  }
  
  ReactDOM.render(
  <BankBox bank={NatRen}/>,
  document.getElementById('app')
  )
}  
