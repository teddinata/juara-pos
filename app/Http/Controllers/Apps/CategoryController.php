<?php

namespace App\Http\Controllers\Apps;

use App\Models\Category;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get category
        $categories = Category::when(request()->q, function($categories) {
            $categories = $categories->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(5);

        //return inertia
        return Inertia::render('Apps/Categories/Index', [
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return inertia view
        return Inertia::render('Apps/Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate request
        $this->validate($request, [
            'name'          => 'required|unique:categories',
            'image'         => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description'   => 'required'
        ]);

        // upload image
        $image = $request->file('image');
        $image->storeAs('public/categories', $image->hashName());

        // create category
        Category::create([
            'name'          => $request->name,
            'image'         => $image->hashName(),
            'description'   => $request->description
        ]);

        // return inertia view
        return redirect()->route('apps.categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        // return inertia view
        return Inertia::render('Apps/Categories/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        // validate request
        $this->validate($request, [
            'name'          => 'required',
            'image'         => 'required',
            'description'   => 'required'
        ]);

        // check image
        if($request->file('image')) {
            // remove old image
            Storage::disk('local')->delete('public/categories/'.basename($category->image));

            // upload new image
            $image = $request->file('image');
            $image->storeAs('public/categories', $image->hashName());

            // update category with new image
            $category->update([
                'name'          => $request->name,
                'image'         => $image->hashName(),
                'description'   => $request->description
            ]);
        }



        // update category without image
        $category->update([
            'name'          => $request->name,
            'description'   => $request->description
        ]);

        // return inertia view
        return redirect()->route('apps.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // find by id
        $categories = Category::findOrFail($id);

        // remove image
        Storage::disk('local')->delete('public/categories/'.basename($categories->image));

        // delete category
        $categories->delete();

        // return inertia view
        return redirect()->route('apps.categories.index');
    }
}
