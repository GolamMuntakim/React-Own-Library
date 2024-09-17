import React from './React' 
import { render } from './react-dom'



const div = (
    <div className='container' id='App' title='Hello World'>
        {'hello'} <b className='hii'>Hii</b>
    </div>
)
function Card(){
    return (
        <div className='container' id='App' title='Hello World'>
        {'hello'} <b className='hii'>Hii</b>
        {
            props.children
        }
    </div>
    )
}
console.log(<Card name={'siam'}><h1>hi</h1></Card>)
render(div, document.getElementById('root'))
