// ErrorBoundary.jsx
import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="text-red-500 text-sm">Chart failed to render.</div>;
        }

        return this.props.children;
    }
}
