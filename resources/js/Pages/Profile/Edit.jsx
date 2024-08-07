import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import MainLayout from "@/layouts/MainLayout";
import Address from "./Partials/Address";

export default function Edit({ mustVerifyEmail, status, user, addresses }) {
    console.log(addresses);
    return (
        <MainLayout>
            <Head title="Profile" />

            <div className="">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white border border-gray-300 sm:p-8 sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                            user={user}
                        />
                    </div>

                    <div className="p-4 bg-white border border-gray-300 sm:p-8 sm:rounded-lg">
                        <Address addresses={addresses} />
                    </div>
                    <div className="p-4 bg-white border border-gray-300 sm:p-8 sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
