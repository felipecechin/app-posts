interface IMainContentProps {
    children: React.ReactNode
}

function MainContent({ children }: IMainContentProps): JSX.Element {
    return (
        <main className="py-16 h-screen">
            {children}
        </main>
    )
}

export default MainContent