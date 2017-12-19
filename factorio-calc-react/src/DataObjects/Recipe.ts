import Product from './Product';

export default class Recipe {
  name : String;
  inputs : [Product, Number][];
  outputs : [Product, Number][];
}