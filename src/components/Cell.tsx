
export default function Cell(props: any): JSX.Element {

    return (
        <button onClick={() => { props.changeTurn(props.number) }}>{props.cell !== null ? props.cell : ''}</button>
    )
}
