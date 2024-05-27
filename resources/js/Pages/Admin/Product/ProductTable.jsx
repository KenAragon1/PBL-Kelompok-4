import { useState } from "react";
import ProductRow from "./ProductRow";
import ProductEdit from "./ProductEdit";

const ProductTable = ({ products, deleteProduct, openProductEditForm }) => {
    return (
        <div className="relative min-h-screen sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 border rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="min-h-96">
                    {products.length > 0 ? (
                        products.map((product) => {
                            return (
                                <ProductRow
                                    {...product}
                                    openProductEditForm={openProductEditForm}
                                    deleteProduct={deleteProduct}
                                    key={product.id}
                                />
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={5}>
                                <div className="py-16 text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-32 mx-auto overflow-hidden align-middle fill-current svg-icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                    >
                                        <path d="M855.930143 390.219399 520.426927 220.999346 623.978351 94.302783c5.387707-6.592139 14.685467-8.455579 22.197558-4.447289L945.015088 249.306043c9.958816 5.313006 12.535501 18.426675 5.328355 27.113521L855.930143 390.219399 855.930143 390.219399zM415.439804 94.525863l99.281167 126.4786L182.193529 390.219399 82.559321 273.774317c-7.486508-8.750291-4.838192-22.196535 5.408173-27.453259L393.277038 89.671299C400.874063 85.773526 410.16773 87.808882 415.439804 94.525863zM509.37215 549.57478l-56.830333 160.529113c-1.352811 3.820002-5.750981 5.585205-9.368368 3.76065L131.658575 554.153052c-5.16565-2.605338-7.543813-8.68173-5.517667-14.101159l55.812143-149.306514L509.37215 549.57478 509.37215 549.57478zM506.779092 612.285031 506.779092 906.759809c0 3.888564-4.033873 6.465249-7.562233 4.830005L171.387415 757.291612c-6.221702-2.882654-10.183943-9.135054-10.136871-15.992229l0.967024-140.454916c0.029676-4.295839 4.563946-7.062859 8.398274-5.124717l279.498692 144.370085c5.1503 2.603291 11.423167 0.183172 13.489222-5.204535L506.779092 612.285031zM581.904093 711.284789 527.029298 549.57478l328.900845-158.829402 62.5895 147.423631c2.359744 5.557576-0.047072 11.989055-5.475711 14.633279L587.747171 713.722304C585.462129 714.834638 582.720691 713.690582 581.904093 711.284789zM873.742834 742.890624c0 5.89629-3.419889 11.257391-8.766664 13.743002L536.828478 911.576511c-3.52836 1.64036-7.567349-0.935302-7.567349-4.826935L529.261129 612.285031l40.581254 124.105552c1.482771 4.180206 6.28617 6.123464 10.258645 4.15053l282.95849-142.617162c4.91494-2.441609 10.683317 1.133823 10.683317 6.621814L873.742834 742.890624z" />
                                    </svg>
                                    <p className="text-xl">No Product Yet...</p>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
