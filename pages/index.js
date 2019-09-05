import React from 'react'
import * as Sentry from "@sentry/browser";

const Home = ({ thing }) => {
  if (thing) {
    Sentry.captureException(new Error("blah"));
  }

  return (
    <h1>Home</h1>
  );
}

export default Home
