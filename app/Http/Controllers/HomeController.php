<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json([ //объект response
            'categories' => $categories,
        ], 200);
    }

    public function category(Category $category)
    {
        $products = Product::where('category_id', $category->id)->get();

        return response()->json([
            'category' => $category->name,
            'products' => $products,
        ], 200);
    }

    public function product(Product $product)
    {
        return response()->json([
            'product' => $product,
        ], 200);
    }
}
