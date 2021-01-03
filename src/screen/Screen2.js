import React from 'react'
import { Chart } from "react-google-charts";

export default function Screen2() {
    return (
      <div className="center">
        <h1>Usage: ReactJS Vs AngularJS Vs Vue</h1>
      <div className='background'>
        <div className="chart">
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Name', 'Value'],
              ['ReactJs', 78.1],
              ['Angular', 21],
              ['Vue', 0.8],
            ]}
            options={{
              title: 'Framework',
              backgroundColor: "aliceblue",
              // Just add this option
              pieHole: 0.3,
              opacity: 0.2
            }}
        />
        </div>
        <div className="chart">
            <ul>
                <li><h3>ReactJs</h3></li>
                <p>Developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). The current stable version is 16.X, released in November 2018 (with smaller incremental updates since then)</p>
                <li><h3>Angular</h3></li>
                <p>Developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. The latest stable version is Angular 10, which was released in June 2020.</p>
                <li><h3>Vue</h3></li>
                <p>Also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last three years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The current stable version is 2.6, released in February 2019 (with some small incremental releases since then)</p>
            </ul>
      </div>
    </div>
    </div>
    )
}
