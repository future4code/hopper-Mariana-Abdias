// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
  id: string
  user_id: string
  product_id: string
  quantity: number
  total_price: number
}

export class Purchase {
  private id: string
  private userId: string
  private productId: string
  private quantity: number
  private totalPrice: number

  constructor(
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
  ) {
      (this.id = id),
      (this.userId = userId),
      (this.productId = productId),
      (this.quantity = quantity),
      (this.totalPrice = totalPrice)
  }

  getId(): string {
    return this.id
  }

  getUserId(): string {
    return this.userId
  }
  getProductId(): string {
    return this.productId
  }
  getQuantity(): number {
    return this.quantity
  }
  getTotalPrice(): number {
    return this.totalPrice
  }

  setProductId(newProductId: string): void {
    this.productId = newProductId
  }
  setQuantity(newQuantity: number): void {
    this.quantity = newQuantity
  }

  setTotalPrice(newTotalPrice: number): void {
    this.totalPrice = newTotalPrice
  }
}
