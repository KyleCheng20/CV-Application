function Section({ heading, children }) {
    return (
        <div className={`${heading} section`}>
            <h1>{heading}</h1>
            {children}
        </div>
    )
}

export default Section;