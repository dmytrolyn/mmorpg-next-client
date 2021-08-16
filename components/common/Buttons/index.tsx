import * as Buttons from './styled/components';

interface ButtonProps {
    text: string
}

export const GreenButton = ({ text } : ButtonProps) => {
    return <Buttons.ButtonGreen>{text}</Buttons.ButtonGreen>
}