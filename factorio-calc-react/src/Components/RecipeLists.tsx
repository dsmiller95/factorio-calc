import * as React from 'react';
import './RecipeLists.css';

import { Tabs, Tab } from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import { Product, Recipe } from '../DataObjects/index';

import RecipeList from './RecipeList';
import ProductList from './ProductList';
import AddRecipe from './AddRecipe';
import { Paper } from 'material-ui';

interface RecipeListsState{
  products: Product[];
  recipes: Recipe[];
  addProductName: string;
}

class RecipeLists extends React.Component<any, RecipeListsState> {

  constructor(props: {}) {
    super(props);

    var products: Product[] = [
      /*{
        name: 'iron ore'
      }, {
        name: 'copper ore'
      }, {
        name: 'iron plates'
      }, {
        name: 'copper plates'
      }, {
        name: 'gears'
      }, {
        name: 'copper wire'
      }, {
        name: 'green circuits'
      }, {
        name: 'inserter'
      }*/
    ];

    this.state = 
      {
        products: products,
        recipes: [
          /*{
            name: 'iron smelting',
            inputs: [
              [products[0], 1]
            ],
            outputs: [
              [products[2], 1]
            ]
          }, {
            name: 'copper smelting',
            inputs: [
              [products[1], 1]
            ],
            outputs: [
              [products[3], 1]
            ]
          }, {
            name: 'gears',
            inputs: [
              [products[2], 2]
            ],
            outputs: [
              [products[4], 1]
            ]
          }, {
            name: 'copper wire',
            inputs: [
              [products[3], 1]
            ],
            outputs: [
              [products[5], 2]
            ]
          }, {
            name: 'circuits',
            inputs: [
              [
                products[5], 3
              ],
              [products[2], 1]
            ],
            outputs: [
              [products[6], 1]
            ]
          }, {
            name: 'inserter',
            inputs: [
              [
                products[6], 1
              ],
              [
                products[4], 1
              ],
              [products[2], 1]
            ],
            outputs: [
              [products[7], 2]
            ]
          }*/
        ],
        addProductName: "",
      };
  }

  private addProduct(event: {}): void{
    if(this.state.addProductName && this.state.addProductName.trim().length > 0){
      this.setState(previousState => ({
        products: [...previousState.products, new Product(this.state.addProductName) ],
        addProductName: ""
      }));
    }
  }

  private productNameChanged(event: {}, newValue: string) : void{
    this.setState(previousState => ({
      addProductName: newValue
    }));
  }

  private addRecipe(recipe: Recipe): void{
    this.setState(previousState => ({
      recipes: [...previousState.recipes,recipe ]
    }));
  }

  render() {
    const products = this.state.products;
    const recipes = this.state.recipes;

    const paperStyle = {
      margin: 20,
      'justify-content': 'flex-start',
      display: 'flex',
    };

    return (
      <div>
        <Tabs>
          <Tab label="Producs">
            <FloatingActionButton mini={true}
              onClick={(event) => (this.addProduct(event))}>
              <ContentAdd />
            </FloatingActionButton>
            <TextField
              hintText="Product Name"
              value={this.state.addProductName}
              onChange={(event, val) => (this.productNameChanged(event, val))}
            />
            <ProductList
              products={
                products.map((val) : [Product, Number] => [val, 0])
              }
              hasNumbers={false}
            />
          </Tab>
          <Tab label="Recipes">
            <Paper style={paperStyle}>
              <AddRecipe
                onRecipeAdded={(r)=>this.addRecipe(r)}
                products={products} />
            </Paper>
            <RecipeList recipes={recipes}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default RecipeLists;
