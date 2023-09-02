import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
  css,
} from "styled-components";
import { ButtonType } from "./types";

export const ButtonContainer = styled.button<{
  buttonType: ButtonType;
  customStyle?: CSSObject;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 47px;

  padding-left: 18px;
  padding-right: 18px;

  column-gap: 10px;

  cursor: pointer;

  border-radius: 6px;
  font-size: 16px;

  ${({ customStyle }) => customStyle}
  ${({ buttonType }) => buttonStyle[buttonType]}
`;

const buttonStyle: Record<ButtonType, FlattenSimpleInterpolation> = {
  primary: css`
    background-color: #00c537;
    color: #ffffff;
    border: none;
  `,
  secondary: css`
    background-color: #f0f2f6;
    color: #1e202c;
    border: none;
  `,
  outline: css`
    background-color: #ffffff;
    color: #00c537;
    border: 1px solid #00c537;
  `,
  text: css`
    background-color: #ffffff;
    color: #00c537;
    border: none;
  `,
};