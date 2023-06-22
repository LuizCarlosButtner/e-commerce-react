import React from 'react';

class Jequiti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostre: false
    };
  }

  componentDidMount() {
    this.tempozizador = setInterval(() => {
      this.setState({ mostre: true });
      setTimeout(() => {
        this.setState({ mostre: false });
      }, 100);
    }, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.tempozizador);
  }

  render() {
    const { mostre } = this.state;

    return (
      <div className="image-popup">
        {mostre && (
          <div className="image-container">
            <img src="https://i.pinimg.com/originals/9c/7b/41/9c7b4124b53d90094f20bd42abe8bd09.jpg" />
          </div>
        )}
      </div>
    );
  }
}

export default Jequiti;
