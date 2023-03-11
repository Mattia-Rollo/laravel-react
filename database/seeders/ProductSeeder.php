<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $newProduct = new Product();
        $newProduct->name = fake()->name;
        $newProduct->slug = Str::slug($newProduct->name);
        $newProduct->description = fake()->sentence();
        $newProduct->save();
    }
}