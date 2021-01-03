import React, { useState } from 'react'

export default function ShareScreen(props) {
    
    function openWindow() {
        const mail = document.getElementById('mail').value
        if (mail === 'gmail') {
            window.open("https://mail.google.com/mail");
        } else if (mail === 'ymail') {
            window.open("https://login.yahoo.com/?.src=ym&.lang=en-GB&.intl=gb&.done=https%3A%2F%2Fmail.yahoo.com%2Fd");
        } else if (mail === 'hotmail') {
            window.open("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1609677175&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dbdd4bf47-5627-0ad9-3ef4-db82e5275ee8&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
        } else if (mail === 'rediff') {
            window.open("https://mail.rediff.com/cgi-bin/login.cgi");
        }
    }

    return (
        <div className="container" >
            <h2>Download Completed</h2>
            <label for="mail">Choose an email server then Click below to open mail</label>

            <select name="mail" id="mail" style={{position:'absolute', fontsize:120}}>
              <option value="gmail">gmail</option>
              <option value="ymail">ymail</option>
              <option value="hotmail">hotmail</option>
              <option value="rediff">rediff</option>
            </select>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="center">
                <button style={{position:'absolute',fontSize:100}} className="buttonClickSent"  onClick={openWindow}><i className='fa fa-send'></i></button>
            </div>
        </div>

    )
}
