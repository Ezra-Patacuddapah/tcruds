interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className="border rounded-xl bg-slate-900"
        >
            {children}
        </button>
    )
}