import React, { useState, useRef } from 'react'
import Screen1 from './screen/Screen1'
import Screen2 from './screen/Screen2'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Screen3 from './screen/Screen3';
import Screen4 from './screen/Screen4';
import ShareScreen from './screen/ShareScreen';
import { FileDrop } from 'react-file-drop'

export default function App() {
    const [nav, setNav] = useState(1);
    const [pdfs, setPdfs] = useState(new jsPDF('l', 'mm', 'a4'));
    const [loading, setLoading] = useState('');
    const [shareScreen, setShareScreen] = useState(false);
    const [file, setFile] = useState('');

    const fileInputRef = useRef(null);

    const onFileInputChange  = (event) => {
        /* ************* For Future Use **************** */
        const { files } = event.target;
        setFile(files);
        //console.log(files);
        
    }
    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function print(a) {
        let size = 4;
        if (a === 1) {
            setLoading("Wait till download completes.....")
        } else {
            setLoading('Downloading........');
        }
        for (let i = 1; i <= size; i++) {
            setNav(i);
            await timeout(500);
            const input = document.getElementById('print')
            await html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            var width = pdfs.internal.pageSize.getWidth();
            var height = pdfs.internal.pageSize.getHeight();
            pdfs.addImage(imgData, 'JPEG', 0, 0, width, height);
            if (i < size) {
                pdfs.addPage();
            }
            });
        }
        pdfs.save('pdf');
        setLoading('');
        setNav(1);
        if (a === 1) {
            setShareScreen(true);
        }
        setPdfs(new jsPDF('l', 'mm', 'a4'));
    };

    function headerScreen() {
        if (shareScreen) {
            return (
                <div style={{paddingBottom:10}} className="headerButton">
                <button onClick={() => {setShareScreen(false);}} style={{position:'absolute', fontSize:20, marginUp:10}} className="buttonClick"><i className="fa fa-arrow-left"></i></button>
                <div className="center">
                    <input
                        onChange={onFileInputChange}
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                    />
                    <FileDrop
                        onTargetClick={onTargetClick} style={{position:'absolute',fontSize:40}}/>
                </div>
                </div>
            )
        } else {
            return (
                <div className='headerButton'>
                    <button onClick={print} className="buttonClick"><i class="fa fa-print" style={{fontSize: 40}}></i></button>
                    <button onClick={() => {print(1)}} className="buttonClick"><i class="fa fa-share" style={{fontSize: 40}}></i></button>
                </div>
            )
        }
    }

    function screen() {
        if (shareScreen) {
            return <ShareScreen setShareScreen={setShareScreen} file={file}/>;
        } else {
            switch (nav) {
                case 1: return (<Screen1/>);
                case 2: return (<Screen2/>);
                case 3: return (<Screen3/>);
                case 4: return (<Screen4/>)
                default:
                    break;
            }
        }
    }

    function left() {
        if (nav > 1) {
            setNav(a => {
                a = a - 1;
                return a;
            })
        }
    }

    function right () {
        if (nav < 4) {
            setNav(a => {
                a = a + 1;
                return a;
            })
        }
    }
    if (pdfs) {
        return (
            <div className='grid-container'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <header>
            
                <h2>Slide Screen</h2>
                <h2>{loading}</h2>
                {headerScreen()}
            </header>
            <main> 
                <div className="button">
                    <button className="buttonClick" onClick={left}><i class="fa fa-angle-double-left" style={{fontSize: 40}}></i></button>
                    <button className="buttonClick" onClick={right}><i class="fa fa-angle-double-right" style={{fontSize: 40}}></i></button>
                </div>
                <div className="backgroundContainer" id="print">
                    {screen()}
                </div>
            </main>
            <footer>
                <h3>All Rights Reserved!!</h3>
            </footer>
            </div>
        )
    }
}
