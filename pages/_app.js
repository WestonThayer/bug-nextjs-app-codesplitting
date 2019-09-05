import React from "react";
import App from "next/app";
import * as Sentry from "@sentry/browser";

Sentry.init();

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

export default MyApp;