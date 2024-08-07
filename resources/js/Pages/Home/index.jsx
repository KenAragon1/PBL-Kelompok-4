import { Head, Link } from "@inertiajs/react";
import MainLayout from "@/layouts/MainLayout";
const HomePage = ({ products }) => {
    return (
        <MainLayout>
            <Head title="Home" />

            <div class="my-6">
                <div class="flex gap-4">
                    <a
                        class="relative flex-1 block group rounded-lg overflow-hidden border border-gray-300"
                        href="/product"
                    >
                        <img
                            alt=""
                            src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/homepage/geforce-ada-40-series-nv-sfg-295x166@2x.jpg"
                            class="object-cover w-full aspect-video group-hover:scale-105 transition-transform"
                        />
                        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-3xl font-bold text-white">
                                Nvidia RTX 4090
                            </h3>
                            <p class="max-w-lg py-3 text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloremque dolorum officia
                                autem libero!
                            </p>
                            <button class="btn btn-secondary text-lg capitalize">
                                Shop Now
                            </button>
                        </div>
                    </a>
                    <a
                        class="relative flex-1 block group rounded-lg overflow-hidden border border-gray-300"
                        href="/product"
                    >
                        <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT010INswnFc5ISqsyfyOY_SZP9RsM69pMULQ&s"
                            class="object-cover w-full aspect-video group-hover:scale-105 transition-transform"
                        />
                        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-3xl font-bold text-white">
                                AMD Ryzen
                            </h3>
                            <p class="max-w-lg py-3 text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloremque dolorum officia
                                autem libero!
                            </p>
                            <button class="btn btn-secondary text-lg capitalize">
                                Shop Now
                            </button>
                        </div>
                    </a>
                </div>
            </div>
            {/* Recomended Product */}
            <div>
                <p className="text-xl font-semibold text-secondary">
                    Recomended Products
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, illum!
                </p>
                <div className="overflow-x-auto">
                    <div className="inline-flex gap-4 py-2 overflow-x-auto">
                        {products.map(
                            ({ id, image, name, price, slug, stock }) => {
                                return (
                                    <div
                                        className="relative flex-grow-0 flex-shrink-0 w-56 overflow-hidden bg-white border border-gray-300 rounded-sm group"
                                        key={id}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            className="aspect-[1.5/1] group-hover:scale-105 transition-transform"
                                        />
                                        <div className="p-4 space-y-1">
                                            <p className="font-semibold leading-none tracking-tight line-clamp-2">
                                                {name}
                                            </p>
                                            <p className="text-sm text-gray-400 ">
                                                Rp{" "}
                                                {price.toLocaleString("id-ID")}
                                            </p>
                                            {stock.quantity > 0 ? (
                                                <p className="text-sm">
                                                    Only {stock.quantity} left
                                                    in stock
                                                </p>
                                            ) : (
                                                <p className="text-sm font-semibold text-red-500">
                                                    Sold Out
                                                </p>
                                            )}
                                        </div>
                                        <Link
                                            href={"product/" + slug}
                                            className="absolute top-0 left-0 w-full h-full"
                                        ></Link>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
