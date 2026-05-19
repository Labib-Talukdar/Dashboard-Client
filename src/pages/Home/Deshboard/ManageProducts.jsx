import React from 'react';

const ManageProducts = () => {
    return (
     
            <div>
      <h1 className="text-2xl font-bold mb-4">Manage Product</h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" />

        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2 w-full" />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2 w-full" />

        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="border p-2 w-full" />
        <input name="size" value={formData.image} onChange={handleChange} placeholder="Image URL" className="border p-2 w-full" />

        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="border p-2 w-full" />

        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />

        <button type="submit" className="bg-black text-white px-4 py-2">
          Add Product
        </button>
        

      </form>
    </div>
    );
};

export default ManageProducts;