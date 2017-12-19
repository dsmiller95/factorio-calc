import * as React from 'react';
import './App.css';

import {Recipe} from './DataObjects/index';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

export interface RecipeListProps {
    recipes : Recipe[];
}

class RecipeList extends React.Component < RecipeListProps,
any > {

    constructor(props : RecipeListProps) {
        super(props);
    }

    render() {
        const recipes : Recipe[] = this.props.recipes;

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Inputs</TableHeaderColumn>
                        <TableHeaderColumn>Outputs</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recipes.map((val, index) =>
                    <TableRow key={index}>
                        <TableRowColumn>
                            {val.name}
                        </TableRowColumn>
                        <TableRowColumn>
                            {val
                                .inputs
                                .reduce((previous, current) => {
                                    return previous + current[1] + ' ' + current[0].name + '; ';
                                }, '')}
                        </TableRowColumn>
                        <TableRowColumn>
                            {val
                                .outputs
                                .reduce((previous, current) => {
                                    return previous + current[1] + ' ' + current[0].name + '; ';
                                }, '')}
                        </TableRowColumn>
                    </TableRow>)}
                </TableBody>
            </Table>
        );
    }
}

export default RecipeList;
