import { Product } from "../models/Product";
import { Purchase } from "../models/Purchase";
import { User } from "../models/User";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labe_Users";
  public static TABLE_PRODUCTS = "Labe_Products";
  public static TABLE_PURCHASES = "Labe_Purchases";

  public async getAllUsers() {
    const result = await BaseDatabase.connection(
      UserDatabase.TABLE_USERS
    ).select();
    return result;
  }

  public async getAllProducts() {
    const result = await BaseDatabase.connection(
      UserDatabase.TABLE_PRODUCTS
    ).select();
    return result;
  }

  public async createUser(user: User) {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  }

  public async createProduct(product: Product) {
    await BaseDatabase.connection(UserDatabase.TABLE_PRODUCTS).insert({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice()
    });
  }

  public async createPurchase(purchase: Purchase) {
    await BaseDatabase.connection(UserDatabase.TABLE_PURCHASES).insert({
      id: purchase.getId(),
      user_id: purchase.getUserId(),
      product_id: purchase.getProductId(),
      quantity: purchase.getQuantity(),
      total_price: purchase.getTotalPrice()
    });
  }

  public async getUserById(id: string) {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ id });
    return result;
  }
}
