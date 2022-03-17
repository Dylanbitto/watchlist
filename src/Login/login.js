import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div'
    width: 200px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba{15, 15, 0,28};
    position: relative;
    overflow: hidden;
}

const TopContainer = styled.div
    width: 100%;
    height: 250px;
}
const BackDrop = styled.div
    width: 160%;
    height: 550px;
    position: absoulute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background: rgba(230, 126, 34,1.0)
    background: linear-gradient{
        58deg,
        rgba(230, 126, 34,1.0) 20%;
        rgba(230, 126, 34,1.0) 100%;
    };
};
    false; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function AccountBox{props} {
    return <BoxContainer>
        <TopContainer>
            <BackDrop></BackDrop>
        </TopContainer>
    </BoxContainer>
}
