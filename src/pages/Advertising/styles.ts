import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1180px;
  margin: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;

  p {
    text-transform: uppercase;
    span {
      color: #2962ff;
    }
  }

  svg {
    align-self: center;

    padding-bottom: 25px;
    width: 100px;
    height: auto;

    g {
      fill: #2962ff;
    }
  }
`;

export const ContentContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 24px;
  }

  input {
    height: 50px;
    width: 350px;
    background: #312e38;
    color: #fff;
    border-radius: 5px 0 0 5px;
    border-width: 0px;
    padding-left: 10px;
  }
  div {
    button {
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: bold;
      height: 50px;
      text-transform: uppercase;
      background: #2962ff;
      border-radius: 0 5px 5px 0;
      border-width: 0px;
      transition: background 0.2s ease 0s, color 0.2s ease 0s;
      width: 220px;
    }
  }
  a {
    margin: 10px auto;
    text-decoration: none;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: bold;
      height: 50px;
      text-transform: uppercase;
      background: #2962ff;
      border-radius: 5px;
      border-width: 0px;
      transition: background 0.2s ease 0s, color 0.2s ease 0s;
      width: 220px;
      text-decoration: 0;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
