import { Product } from "./Product";

export class LocalStorage {
  private _storage = {};

  load(place: string): Map<string, Product> {
    let products = new Map<string, Product>();
    this._storage = JSON.parse(localStorage.getItem("UIMenuCart")) || {};
    if (this._storage[place]) {
      for (let item of this._storage[place]) {
        products.set(item.id, item);
      }
    }
    return products;
  }

  save(place: string, products: Map<string, Product>) {
    localStorage.removeItem("UIMenuCart");
    this._storage[place] = Array.from(products.values());
    localStorage.setItem("UIMenuCart", JSON.stringify(this._storage));
  }

  remove() {
    localStorage.removeItem("UIMenuCart");
  }
}
