import styled from 'styled-components';

export const UiToggle = styled.input`
  height: 20px;
  width: 44px;
  outline: none;
  cursor: pointer;

  :before {
    content: '';
    background: #576C7D;
    border: 1px solid #576C7D;
    border-radius: 12px;
    height: 20px;
    display: block;
    transition: .8s;
  }

  :after {
    content: ' off ';
    background: #fff;
    border: 1px solid #647A8E;
    border-radius: 12px;
    height: 22px;
    width: 24px;
    position: relative;
    top: -23px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .8s;
  }

  :disabled {
    :before, :after {
      border: 1px solid #CFD7DF;
      cursor: auto;
    }

    :after {
      opacity: .5;
    }

    :before {
      background: #CFD7DF;
    }
  }

  :checked {
    :before {
      background: #2C5CC5;
    }

    :after {
      content: ' on ';
      right: -18px;
      border: 1px solid #2C5CC5;
    }
  }
`

// .attrs((props) => ( { type: 'checkbox'}))