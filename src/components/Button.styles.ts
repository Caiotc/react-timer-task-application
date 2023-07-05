import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonCOntainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonCOntainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  margin: 10px;

  background-color: ${({ theme }) => theme["green-700"]};
`;
