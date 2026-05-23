import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonType={
    children:ReactNode
    className:string
}& ButtonHTMLAttributes<HTMLButtonElement>