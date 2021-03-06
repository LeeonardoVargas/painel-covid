import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const Chart = styled.div`
  flex: 1;
  max-width: 100%;
  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    height: auto;
    margin-top: 8px;
  `}
`;

export const ItemPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.gray};

  padding: 12px 22px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  transition-duration: 1s;

  & + div {
    margin-top: 15px;
  }

  svg {
    width: 60px;
    height: 60px;
    color: ${(props) => props.color};
    padding-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${(props) => props.color};
      letter-spacing: 1px;
      font-weight: bold;
      margin: 0;
      font-size: 50px;
      line-height: 45px;
    }

    span {
      color: ${({ theme }) => theme.secondary};
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 15px;
      text-transform: uppercase;
      padding-left: 4px;
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateX(-15px);
    background: ${(props) => props.color};

    svg, strong, span {
      color: #FFF;
    }
  }

  ${media.lessThan('large')`
    margin: 2px 0;
    padding: 5px 25px;

    & + div {
      margin-top: 0;
    }

    svg {
      width: 35px;
      height: 35px;
      padding-right: 5px;
    }

    div {
      strong {
        letter-spacing: 1px;
        font-size: 34px;
        line-height: 28px;
      }

      span {
        letter-spacing: 2px;
        font-size: 12px;
        padding-left: 2px;
      }
    }

    &:hover {
      transform: translateY(2px);
    }
  `}
`;
