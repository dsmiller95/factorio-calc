import Product from './Product';

export default class Recipe {
  name : String;
  inputs : [Product, Number][];
  outputs : [Product, Number][];

  constructor(name: String, inputs: [Product, Number][], outputs: [Product, Number][]){
    this.name = name;
    this.inputs = inputs;
    this.outputs = outputs;
  }
}