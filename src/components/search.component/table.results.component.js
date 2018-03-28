import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import Star from 'material-ui-icons/Star';
import StarBorder from 'material-ui-icons/StarBorder';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import GetCurrencyValue from './get.currency.value.component';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const check = (e, isChecked) => {
    if(isChecked) {
        console.log(`${e.target.value} dodane do ulubionych`);
    }else {
        console.log(`${e.target.value} usunięte z ulubionych`);
    }
};

class TableResults extends Component {

    state = {
        open: false,
        currencyName: '',
        currencyCode: '',
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Zamknij"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
                style={{color: '#FF8619'}}
            />,
        ];

        return (
            <div>
                <Table
                    onCellClick={(row, col, event) => {

                        if (!event.target.value) {
                            this.setState({
                                currencyName: this.props.tableData[row].currency,
                                currencyCode: this.props.tableData[row].code,
                            });
                            this.handleOpen();
                        }
                    }}
                    height={'65vh'}
                    fixedHeader={true}
                    fixedFooter={true}
                    selectable={true}
                    multiSelectable={false}
                    style={{
                        marginLeft: '256px',
                        width: '70%',
                    }}
                >
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                        enableSelectAll={false}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                                {this.props.tableName}
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>Nazwa</TableHeaderColumn>
                            <TableHeaderColumn style={{textAlign: 'center'}}>Kod</TableHeaderColumn>
                            <TableHeaderColumn style={{textAlign: 'center'}}>Wartość (PLN)</TableHeaderColumn>
                            <TableHeaderColumn>Ulubione</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={true}
                        showRowHover={true}
                        stripedRows={false}
                    >
                        {this.props.tableData.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.currency}</TableRowColumn>
                                <TableRowColumn style={{textAlign: 'center'}}>{row.code}</TableRowColumn>
                                <TableRowColumn style={{textAlign: 'center'}}>{row.mid}</TableRowColumn>
                                <TableRowColumn style={{paddingLeft: '48px'}}>
                                    <Checkbox
                                        // defaultChecked={false}
                                        checkedIcon={<Star style={{fill: '#FF8619'}}/>}
                                        uncheckedIcon={<StarBorder />}
                                        onCheck={check}
                                        value={row.code}
                                    />
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Dialog
                    title={this.state.currencyName}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <GetCurrencyValue currencyCode={this.state.currencyCode}/>
                </Dialog>
            </div>
        );
    };
}

export default TableResults;
