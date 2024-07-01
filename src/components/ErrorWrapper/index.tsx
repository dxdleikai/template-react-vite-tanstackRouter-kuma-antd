import React from 'react';
export type ErrorWrapperProps = {
  children?: React.ReactNode;
  // renderError?: ()=>React.ReactNode;
};
interface IState {
  error: boolean;
}
/** 错误浅显处理 */
class ErrorWrapper extends React.Component<ErrorWrapperProps, IState> {
  constructor(props: ErrorWrapperProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return null;
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorWrapper;
