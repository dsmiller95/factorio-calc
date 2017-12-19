import * as React from 'react';
import './RecipeLists.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {Product, Recipe} from './DataObjects/index';

interface AddRecipeState {
  addRecipeName : string;
  selectedProduct : Product;
}

interface AddRecipeProps {
  products : Product[];
  onRecipeAdded : (recipe : Recipe) => void;
}

class AddRecipe extends React.Component < AddRecipeProps, AddRecipeState > {

  constructor(props : AddRecipeProps) {
    super(props);

    this.state = {
      addRecipeName: "",
      selectedProduct: props.products[0]
    };
  }

  private addRecipe(event : {}) : void {
    if(this.state.addRecipeName && this.state.addRecipeName.trim().length > 0) {
      let newRecipe = new Recipe(this.state.addRecipeName, [], []);
      this
        .props
        .onRecipeAdded(newRecipe);
      this.setState(previousState => ({addRecipeName: ""}));
    }
  }

  private recipeNameChanged(event : {}, newValue : string) : void {
    this.setState(previousState => ({addRecipeName: newValue}));
  }

  private productSelectionChanged(event: {}, key: number, value: Product){
    this.setState(previousState => ({selectedProduct: value}));
  }

  render() {

    return (
      <div>
        <FloatingActionButton mini={true} onClick={(event) => (this.addRecipe(event))}>
          <ContentAdd/>
        </FloatingActionButton>
        <TextField
          hintText="Product Name"
          value={this.state.addRecipeName}
          onChange={(event, val) => (this.recipeNameChanged(event, val))}/>
          
        <DropDownMenu maxHeight={300} value={this.state.selectedProduct} onChange={(event, k,v) => (this.productSelectionChanged(event,k,v))}>
          {this.props.products.map((val, index) => <MenuItem value={val} key={index} primaryText={val.name} /> )}
        </DropDownMenu>
      </div>
    );
  }
}

export default AddRecipe;