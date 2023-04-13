<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Product::all();
        return Inertia::render('Products/Index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->validate([
            'name' => 'required|regex:/^[\pL\s\-]+$/u|min:10|max:50',
            'description' => 'required|min:10|max:50',
        ], [

                'name.required' => 'il nome è richiesto',
                'name.regex' => 'il nome deve avere solo lettere',
                'description.required' => 'la descrizione è richiesta',
                'name.min' => 'il nome deve avere minimo 10 caratteri',
                'description.min' => 'il nome deve avere minimo 10 caratteri',

            ]);
        $newProduct = new Product();
        $newProduct->name = $data['name'];
        $newProduct->slug = Str::slug($data['name']);
        $newProduct->description = $data['description'];
        $newProduct->save();
        return to_route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
        return Inertia::render('Products/Show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
        $product->delete();
        return to_route('products.index')->with('message', "$product->name deleted");
    }
}