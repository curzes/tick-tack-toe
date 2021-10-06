import Cell from './Cell';
import Stats from './Stats';

export default function Board(props: any): JSX.Element {

    return (
        <div className="board">
            <div className={'grid ' + props.doneString}>
                <div>
                    <Cell cell={props.cells[0]} number={0} changeTurn={props.changeTurn} />
                    <Cell cell={props.cells[1]} number={1} changeTurn={props.changeTurn} />
                    <Cell cell={props.cells[2]} number={2} changeTurn={props.changeTurn} />
                </div>
                <div>
                    <Cell cell={props.cells[3]} number={3} changeTurn={props.changeTurn} />
                    <Cell cell={props.cells[4]} number={4} changeTurn={props.changeTurn} />
                    <Cell cell={props.cells[5]} number={5} changeTurn={props.changeTurn} />
                </div>
                <div>
                    <Cell cell={props.cells[6]} number={6} changeTurn={props.changeTurn} />
                    <Cell cell={props.cells[7]} number={7} changeTurn={props.changeTurn} />
                    <Cell cell={props.cells[8]} number={8} changeTurn={props.changeTurn} />
                </div>
            </div>
            <Stats turn={props.turn} />
        </div>
    )
}
