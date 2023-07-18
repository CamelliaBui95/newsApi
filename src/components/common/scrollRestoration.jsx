import React, { Component } from 'react';

class ScrollRestoration extends Component {

    componentDidMount() {
        if (this.props.clear) {
            localStorage.removeItem("lastDocumentHeight");
            localStorage.removeItem("lastScrollYposition");
            return;
        }
        
        const lastDocumentHeight = parseInt(
            localStorage.getItem("lastDocumentHeight")
        );
        const lastScrollYposition = parseInt(
            localStorage.getItem("lastScrollYposition")
        );

        const currentDocumentHeight = document.body.scrollHeight;

        if (lastScrollYposition) {
            window.scrollTo(
                0,
                lastScrollYposition - (lastDocumentHeight - currentDocumentHeight)
            );
        }
    }

    componentWillUnmount() {
        localStorage.setItem("lastScrollYposition", window.scrollY);
        localStorage.setItem(
            "lastDocumentHeight",
            document.body.scrollHeight
        );
    }

    render() {
        return null;
    }
}
 
export default ScrollRestoration;

