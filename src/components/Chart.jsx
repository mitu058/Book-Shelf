
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','#23BE0A','#59C6D2'];


const Chart = () => {
    const [chart,setChart] = useState([])
    useEffect(()=>{
  fetch('booksData.json')
  .then(res => res.json())
  .then(data => setChart(data))
    },[])

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className=' justify-items-center my-20'>
          <div className='bg-gray-100 p-10 rounded-lg'>
<BarChart
      width={800}
      height={400}
      data={chart}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#23BE0A"  shape={<TriangleBar />} label={{ position: 'top' }}>
        {chart.map((entry ,index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>


          </div>
        </div>
    );
};

export default Chart;