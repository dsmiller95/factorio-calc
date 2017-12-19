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
  products: Product[];
}

class ProductList extends React.Component<ProductListProps, any> {

  constructor(props: ProductListProps) {
    super(props);
  }

  render() {
    const products: Product[] = this.props.products;
    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((prod, index) => 
            <TableRow key={index}>
              <TableRowColumn>
                {prod.name}
              </TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default ProductList;
