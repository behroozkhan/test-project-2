import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.rootRef = React.createRef();
    }

    componentDidMount() {
        // TODO test, clean them after test finished
        window.addEventListener("keydown",(e) =>{
            e = e || window.event;
            let key = e.which || e.keyCode; // keyCode detection
            let ctrl = e.ctrlKey ? e.ctrlKey : (key === 17); // ctrl detection

            if ( key === 88 && ctrl ) {
                e.preventDefault();
                console.log("ctrl + X");
                let start = new Date().getTime();
                let rect = this.rootRef.current.getBoundingClientRect();
                let end = new Date().getTime();
                console.log("rect", rect, end - start);

            }
        });
    }

    render() {
        return (
            <>
                <iframe src={`http://localhost:3000/`} style={{
                    width: "80vw",
                    height: "80vh"
                }}>

                </iframe>
                <div ref={this.rootRef}>
                    Behrooz
                </div>
            </>
        )
    }
}
