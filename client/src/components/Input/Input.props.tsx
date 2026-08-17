import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

export interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  placeholder: string;
}