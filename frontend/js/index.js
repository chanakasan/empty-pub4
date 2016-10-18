console.log('frontend entry loaded!')

_.times(3, function(i) {
    console.log(`Hello from Lodash ${i+1}`)
})


import ReactDOM from 'react-dom'
import Hello from './components/Hello'

$(function () {
  console.log('rendering react component')
  ReactDOM.render(<Hello />, document.getElementById('frontend_app'))
})
