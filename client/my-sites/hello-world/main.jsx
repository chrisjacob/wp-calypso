/**
 * External dependencies 
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Main from 'components/main';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <Main className="hello-world">
        <h1 className="hello-world__title">Hello, World!</h1>
      </Main>
    );
  }
};