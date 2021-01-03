import React from 'react'
import { Chart } from "react-google-charts";

export default function Screen1() {
    return (
        <div className="center">
        <h1>Components used for Slide Screen</h1>
        <div className='background'>
        <div className="chart">
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'ReactJs'],
              ['JavaScript', 74],
              ['HTML', 20],
              ['CSS', 6],
            ]}
            options={{
              title: 'Coding',
              fillOpacity: 0.5,
              dataOpacity: 0.2,
              backgroundColor: "aliceblue",
              // Just add this option
              pieHole: 0.3,
            }}
        />
        </div>
        <div className="chart">
            <ul>
                <li><h3>ReactJs</h3></li>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes, you can easily pass rich data through your app and keep state out of the DOM.</p>
                <li><h3>JavaScript</h3></li>
                <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
                <li><h3>HTML</h3></li>
                <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
                <li><h3>CSS</h3></li>
                <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
            </ul>
        </div>
        </div>
        </div>
    )
}
