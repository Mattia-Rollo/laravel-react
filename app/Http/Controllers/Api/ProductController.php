<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function index(Request $request)
    {
        $product = Product::first();
        return response()->json([
            'success' => true,
            'results' => $product
        ]);
    }
}