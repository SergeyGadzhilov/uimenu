import { LocalStorage } from "./LocalStorage";
import { Product } from "./Product";

export class ShoppingCart {
  private _place: string = "";
  private _db = new LocalStorage();
  private _products = new Map<string, Product>();
  private static _instance: ShoppingCart = null;

  private constructor(place: string) {
    this._place = place;
    this._products = this._db.load(place);
  }

  public static instance(place: string): ShoppingCart {
    if (
      ShoppingCart._instance == null ||
      ShoppingCart._instance._place != place
    ) {
      ShoppingCart._instance = new ShoppingCart(place);
    }

    return ShoppingCart._instance;
  }

  add(product: Product) {
    if (!product) return;
    const item = this._products.get(product.id) || product;
    item.quantity = item.quantity ? item.quantity + 1 : 1;

    this._products.set(item.id, item);
    this._db.save(this._place, this._products);
  }

  remove(id: string) {
    const item = this._products.get(id);
    if (item) {
      item.quantity = item.quantity - 1;
      if (item.quantity <= 0) {
        this._products.delete(id);
        this._db.save(this._place, this._products);
        return;
      }
      this._products.set(item.id, item);
      this._db.save(this._place, this._products);
    }
  }

  getProduct(id: string): Product {
    if (this._products.has(id)) {
      return this._products.get(id);
    }
    return null;
  }

  public clear() {
    if (this.isEmpty()) {
      return;
    }

    for (let product of this._products.values()) {
      product.quantity = 0;
      this._products.delete(product.id);
    }
    this._db.remove();
  }

  public isEmpty() {
    return this._products.size == 0;
  }

  get products() {
    return Array.from(this._products.values());
  }

  get total() {
    let total = 0;
    for (let product of this._products?.values()) {
      if (product) {
        total += product?.quantity || 0;
      }
    }
    return total;
  }

  get price(): number {
    let price = 0;
    for (let product of this._products.values()) {
      price += product.price * product.quantity;
    }
    return parseFloat(price.toFixed(2));
  }
}
