import React from 'react'
import Card from '../components/Card'


function Products1() {
  return (
    <div className='flex-col'>

    <div  className='flex m-10 justify-between items-center'>
    <Card product="Product_4" description='Write Descrription for your Product' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SRuA-pdVmq86RWwhYzAVCM-sa6ROtYovfE8EZ4AKkw&s' />
    <Card product="Product_5" description='Write Descrription for your Product' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SRuA-pdVmq86RWwhYzAVCM-sa6ROtYovfE8EZ4AKkw&s' />
    <Card product="Product_6" description='Write Descrription for your Product' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SRuA-pdVmq86RWwhYzAVCM-sa6ROtYovfE8EZ4AKkw&s' />
    </div>


    </div>
  )
  
}

export default Products1
