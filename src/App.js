import React from 'react';
import './App.scss';


class App extends React.Component {
  state = {
    leftOpen: true,
    rightOpen: true,
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
      <div id='layout'>
        <div id='left' className={leftOpen} >
          <div className='icon' onClick={this.toggleSidebar}>
            &equiv;
          </div>
          <div className={`sidebar ${leftOpen}`} >
            <div className='header'>
              <h3 className='title'>
                Left header
              </h3>
            </div>
            <div className='content'>
              <h3>Left content</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              </p>
            </div>
          </div>
        </div>

        <div id='main'>
          <div className='header'>
            <h3 className={`title ${'left-' + leftOpen} ${'right-' + rightOpen}`}>
                Main header
            </h3>
          </div>
          <div className='content'>
            <h3>Main content</h3><br/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p><br/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p><br/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p>
          </div>
        </div>

        <div id='right' className={rightOpen} >
          <div className='icon' onClick={this.toggleSidebar} >
            &equiv;
          </div>
          <div className={`sidebar ${rightOpen}`} >
            <div className='header'>
              <h3 className='title'>
                Right header
              </h3>
            </div>
            <div className='content'>
                <h3>Right content</h3><br/>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;