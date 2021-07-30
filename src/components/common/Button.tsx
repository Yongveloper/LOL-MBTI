import styled, { css } from 'styled-components';

type Color =
  | 'white'
  | 'whiteYellow'
  | 'yellow'
  | 'whiteBlue'
  | 'bluePuple'
  | 'lightBlue'
  | 'lightGray'
  | 'whiteGray'
  | 'darkGray'
  | 'laime'
  | 'lightRed'
  | 'pink'
  | 'red';

const SButton = styled.button<{
  bgColor: Color;
  fontColor: Color;
  borderColor: Color;
}>`
  ${({ theme, bgColor, fontColor, borderColor }) => {
    return css`
      width: 100%;
      padding: ${theme.padding.small} ${theme.padding.base};
      margin-bottom: ${theme.margin.medium};
      border: 2px solid ${theme.color[borderColor]};
      border-radius: 4px;
      color: ${theme.color[fontColor]};
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.weight.large};
      background-color: ${theme.color[bgColor]};
      cursor: pointer;
    `;
  }}
`;

interface IProps {
  children: React.ReactNode;
  bgColor: Color;
  fontColor: Color;
  borderColor: Color;
}

const Button = ({ children, ...rest }: IProps) => (
  <SButton {...rest}>{children}</SButton>
);

Button.defaultProps = {
  bgColor: 'white',
  fontColor: 'lightBlue',
  borderColor: 'whiteBlue',
};

export default Button;
