const Select = (props) => {
    console.log("PROPS DE SELECT", props);

    // Desestructuración corregida
    const { TotalPaginas, pagina, setPagina } = props;

    // Generación de opciones
    const options = (num) => {
        let opts = [];
        for (let i = 1; i <= num; i++) {
            opts.push(<option value={i} key={i}>Página {i}</option>);
        }
        console.log("OPTS: ", opts);
        return opts;
    };

    // Return corregido (sintaxis JSX válida)
    return (
        <>
            <select
                value={pagina}
                onChange={(evento) => setPagina(+evento.target.value)}
            >
                {options(TotalPaginas)}
            </select>
        </>
    );
};
