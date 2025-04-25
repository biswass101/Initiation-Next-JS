import { Product } from "@/components/product";
import Revies from "@/components/revies";
import { Suspense } from "react";

export default function ProductReviews() {
  return (
    <div>
        <h1>Product Reviews</h1>
        <Suspense fallback={<h1>Loading Reviews...</h1>}>
            <Revies/>
        </Suspense>
        <Suspense fallback={<h1>Loading Product...</h1>}>
            <Product/>
        </Suspense>
    </div>
  )
}
