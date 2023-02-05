import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dec',
    pv: 4800,
    amt: 2181,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 60,
            left: 20,
            bottom: 10,
          }}
          className="bg-teal-100 rounded-xl"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#0D9488" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
