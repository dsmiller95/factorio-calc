import * as React from 'react';
import './App.css';

import { Product } from './DataObjects/index';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export interface ProductListProps {
  products: [Product, Number][];
  hasNumbers: boolean;
}

class ProductList extends React.Component<ProductListProps, any> {

  constructor(props: ProductListProps) {
    super(props);
  }

  render() {
    const products: [Product, Number][] = this.props.products;
    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
          {this.props.hasNumbers ? (
            <TableRow>
              <TableHeaderColumn>#</TableHeaderColumn>
            </TableRow>
          ) : <a></a>}
        </TableHeader>
        <TableBody>
          {products.map((prod, index) => 
            <TableRow key={index}>
              <TableRowColumn>
                {prod[0].name}
              </TableRowColumn>
              {this.props.hasNumbers ? (
                <TableRowColumn>
                  {prod[1]}
                </TableRowColumn>
              ) : <a></a>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default ProductList;
