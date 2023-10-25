export interface Product {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number | string;
    currency: string;
    price_id: string,
  }[]
}

export interface ProductById {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number | string;
    description: string;
    defaultPriceId: string;
    currency: string;
  }
}
