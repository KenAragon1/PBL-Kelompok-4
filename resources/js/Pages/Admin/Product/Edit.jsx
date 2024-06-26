import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import getCategory from "@/Services/category";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Edit({ product }) {
    const [productForm, setProductForm] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock.quantity,
        weight: product.weight,
        brand: product.brand,
        description: product.description,
        image: product.image,
    });

    console.log(productForm);
    const [previewImg, setPreviewImg] = useState(product.image);

    function onSubmit(e) {
        e.preventDefault();
        console.log(productForm);
        router.post("/product/" + product.id_product, {
            _method: "patch",
            ...productForm,
        });
    }

    const [categoryOptions, setCategoryOptions] = useState([]);

    function handleInputChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setProductForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleCategorySelect(e) {
        handleInputChange(e);
    }

    function handlePreviewImg(e) {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        getCategory().then(({ data }) => {
            setCategoryOptions(data);
        });
    }, []);

    return (
        <DashboardLayout>
            <div className="p-8 mx-8 mt-4 bg-white border border-gray-300 rounded-lg">
                <p className="mb-4 text-lg font-semibold text-secondary">
                    Edit Product Form
                </p>
                <div className="">
                    <form onSubmit={onSubmit} className="mb-4">
                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Category
                            </InputLabel>
                            <select
                                id="id_category"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={handleCategorySelect}
                                value={productForm.id_category}
                            >
                                <option value="">Pick Category</option>
                                {categoryOptions.map((option) => {
                                    if (
                                        option.id_category ===
                                        product.id_category
                                    ) {
                                        return (
                                            <option
                                                value={option.id_category}
                                                key={option.id_category}
                                                selected
                                            >
                                                {option.name}
                                            </option>
                                        );
                                    }
                                    <option
                                        value={option.id_category}
                                        key={option.id_category}
                                    >
                                        {option.name}
                                    </option>;
                                })}
                            </select>
                        </div>
                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Product Name
                            </InputLabel>
                            <TextInput
                                id="name"
                                value={productForm.name}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Price
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="price"
                                value={productForm.price}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Stock
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="stock"
                                value={productForm.stock}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Weigth (Gram)
                            </InputLabel>
                            <TextInput
                                id="weight"
                                type="number"
                                className="w-full"
                                value={productForm.weight}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Brand
                            </InputLabel>
                            <TextInput
                                id="brand"
                                className="w-full"
                                value={productForm.brand}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Description
                            </InputLabel>
                            <textarea
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                name=""
                                id="description"
                                cols="30"
                                rows="10"
                                value={productForm.description}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="mb-2 grid grid-cols-[120px,1fr] items-center">
                            <InputLabel className="font-semibold">
                                Image
                            </InputLabel>
                            <div>
                                <img
                                    src={previewImg}
                                    width="100"
                                    height="75"
                                    alt="preview image"
                                />
                                <TextInput
                                    type="file"
                                    onChange={(e) => {
                                        setProductForm((prev) => ({
                                            ...prev,
                                            image: e.target.files[0],
                                        }));
                                        handlePreviewImg(e);
                                    }}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
