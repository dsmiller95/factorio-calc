import * as React from 'react';
import './AddRecipe.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {Product, Recipe} from './DataObjects/index';

import ProductList from './ProductList';

interface AddRecipeState {
  addRecipeName : string;
  productInput : Product;
  inputCount: Number;
  productOutput : Product;
  outputCount: Number;
  inputs: [Product, Number][];
  outputs: [Product, Number][];
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
      productInput: props.products[0],
      inputCount: 0,
      productOutput: props.products[0],
      outputCount: 0,
      inputs: [],
      outputs: []
    };
  }

  private addRecipe(event : {}) : void {
    if(this.state.addRecipeName && this.state.addRecipeName.trim().length > 0) {
      let newRecipe = new Recipe(this.state.addRecipeName, this.state.inputs, this.state.outputs);
      this
        .props
        .onRecipeAdded(newRecipe);
      this.setState(previousState => ({
        addRecipeName: "",
        inputs: [],
        outputs: []
      }));
    }
  }

  private addInput(event : {}) : void {
    if(this.state.productInput && this.state.inputCount > 0) {
      let productCount : [Product, Number] = [this.state.productInput, this.state.inputCount];
      this.setState(previousState => ({
        inputs: [...previousState.inputs, productCount],
        inputCount: 0
      }));
    }
  }
  private addOutput(event : {}) : void {
    if(this.state.productOutput && this.state.outputCount > 0) {
      let productCount : [Product, Number] = [this.state.productOutput, this.state.outputCount];
      this.setState(previousState => ({
        outputs: [...previousState.outputs, productCount],
        outputCount: 0
      }));
    }
  }

  private inputCountChanged(event : {}, newValue : string) : void {
    this.setState(previousState => ({inputCount: Number(newValue)}));
  }
  private outputCountChanged(event : {}, newValue : string) : void {
    this.setState(previousState => ({outputCount: Number(newValue)}));
  }

  private recipeNameChanged(event : {}, newValue : string) : void {
    this.setState(previousState => ({addRecipeName: newValue}));
  }

  private productInputChanged(event: {}, key: number, value: Product){
    this.setState(previousState => ({productInput: value}));
  }
  private productOutputChanged(event: {}, key: number, value: Product){
    this.setState(previousState => ({productOutput: value}));
  }

  render() {
    const buttonStyle = {
      margin: 12,
    };

    return (
      <div>
        <div>
          <RaisedButton label="Add Recipe" style={buttonStyle} onClick={(event) => (this.addRecipe(event))}/>
          <TextField
            hintText="Product Name"
            value={this.state.addRecipeName}
            onChange={(event, val) => (this.recipeNameChanged(event, val))}/>
        </div>
        <div className="componentsContainer">
          <div className="componentsDiv">
            <DropDownMenu maxHeight={300} value={this.state.productInput} onChange={(event, k,v) => (this.productInputChanged(event,k,v))}>
              {this.props.products.map((val, index) => <MenuItem value={val} key={index} primaryText={val.name} /> )}
            </DropDownMenu>
            <TextField
              hintText="Input quantity"
              value={this.state.inputCount.toString()}
              onChange={(event, val) => (this.inputCountChanged(event, val))}/>
            <FloatingActionButton mini={true} onClick={(event) => (this.addInput(event))}>
              <ContentAdd/>
            </FloatingActionButton>
            <ProductList
              products={this.state.inputs}
              hasNumbers={true}
            />
          </div>
          <div className="componentsDiv">
            <DropDownMenu maxHeight={300} value={this.state.productOutput} onChange={(event, k,v) => (this.productOutputChanged(event,k,v))}>
              {this.props.products.map((val, index) => <MenuItem value={val} key={index} primaryText={val.name} /> )}
            </DropDownMenu>
            <TextField
              hintText="Output quantity"
              value={this.state.outputCount.toString()}
              onChange={(event, val) => (this.outputCountChanged(event, val))}/>
            <FloatingActionButton mini={true} onClick={(event) => (this.addOutput(event))}>
              <ContentAdd/>
            </FloatingActionButton>
            <ProductList
              products={this.state.outputs}
              hasNumbers={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipe;